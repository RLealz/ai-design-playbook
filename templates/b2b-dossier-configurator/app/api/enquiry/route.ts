import { NextResponse } from "next/server";
import { z } from "zod";

const payloadSchema = z.object({
  name: z.string().trim().min(2, "Please provide your name."),
  contact: z.string().trim().min(5, "Please provide a valid email or phone."),
  scopeSummary: z.string().min(3),
  estimatedWeeks: z.number().int().positive(),
});

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = payloadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: parsed.error.issues[0]?.message ?? "Invalid brief payload." },
      { status: 400 }
    );
  }

  const reference = `SOV-${Date.now().toString(36).toUpperCase().slice(-6)}`;
  const webhook = process.env.CRM_WEBHOOK_URL;

  if (webhook) {
    const upstream = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ reference, ...parsed.data, createdAt: new Date().toISOString() }),
    });
    if (!upstream.ok) {
      return NextResponse.json({ ok: false, error: "Upstream CRM dispatch failed." }, { status: 502 });
    }
  }

  return NextResponse.json({ ok: true, reference });
}
