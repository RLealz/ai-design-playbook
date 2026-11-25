import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const enquirySchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name."),
  contact: z.string().trim().min(6, "Please provide a valid phone number or email."),
  location: z.string().trim().min(2, "Please specify the project city or municipality."),
  scope: z.string().trim().min(2, "Please select a project typology."),
  notes: z.string().trim().max(1500).optional().default(""),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;

export interface EnquiryReceipt {
  ok: true;
  reference: string;
  persistedTo: "cloudflare-d1" | "webhook-fallback";
  createdAt: string;
}

interface CloudflareEnv {
  DB?: {
    prepare: (sql: string) => {
      bind: (...values: unknown[]) => { run: () => Promise<unknown> };
    };
  };
  LEAD_WEBHOOK_URL?: string;
}

async function resolveWorkerEnv(): Promise<CloudflareEnv> {
  try {
    // Dynamic import keeps local Vite dev SSR-safe when outside workerd runtime
    const cf = (await import("cloudflare:workers")) as { env?: CloudflareEnv };
    return cf.env ?? {};
  } catch {
    return {};
  }
}

/**
 * Audit-Hardened Server Function:
 * Persists every enquiry into Cloudflare D1 (`enquiries` table) or dispatches to LEAD_WEBHOOK_URL.
 * Never returns a fake `ok: true` receipt without durable storage!
 */
export const submitEnquiry = createServerFn({ method: "POST" })
  .validator(enquirySchema)
  .handler(async ({ data }): Promise<EnquiryReceipt> => {
    const createdAt = new Date().toISOString();
    const reference = `HF-${Date.now().toString(36).toUpperCase().slice(-6)}`;
    const env = await resolveWorkerEnv();

    if (env.DB) {
      await env.DB.prepare(
        `INSERT INTO enquiries (reference, full_name, phone_or_email, municipality, project_scope, notes, created_at)
         VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7)`
      )
        .bind(reference, data.fullName, data.contact, data.location, data.scope, data.notes, createdAt)
        .run();

      return { ok: true, reference, persistedTo: "cloudflare-d1", createdAt };
    }

    if (env.LEAD_WEBHOOK_URL) {
      const res = await fetch(env.LEAD_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reference, ...data, createdAt }),
      });
      if (!res.ok) {
        throw new Error(`Lead webhook returned HTTP ${res.status}`);
      }
      return { ok: true, reference, persistedTo: "webhook-fallback", createdAt };
    }

    throw new Error(
      "No durable lead sink configured: bind D1 database `DB` in app.manifest.json/wrangler.jsonc or set `LEAD_WEBHOOK_URL`."
    );
  });
