"use client";

import React, { useMemo, useState } from "react";

interface Discipline {
  id: string;
  label: string;
  weeks: number;
  unitBaseEur: number;
}

const DISCIPLINES: Discipline[] = [
  { id: "struct", label: "Structural & MEP Engineering", weeks: 3, unitBaseEur: 420 },
  { id: "materials", label: "Material & Surface Sourcing", weeks: 2, unitBaseEur: 260 },
  { id: "joinery", label: "Bespoke Joinery & Millwork", weeks: 3, unitBaseEur: 380 },
  { id: "qa", label: "On-Site Supervision & QA Handover", weeks: 1, unitBaseEur: 150 },
];

const DOSSIERS = [
  {
    code: "DOSSIER-01",
    title: "Nordic Timber Civic Gallery",
    metrics: "340 m² · 11 Weeks · 0 Variations",
    provenance: "Verified Photograph" as const,
    summary: "Full acoustic partitioning, natural cedar millwork, and calibrated gallery lighting.",
  },
  {
    code: "DOSSIER-02",
    title: "Precision Acoustics Lab",
    metrics: "620 m² · 14 Weeks · ISO-14001",
    provenance: "Architectural Concept Study" as const,
    summary: "Modular inspection tables and daylight-balanced optical evaluation bays.",
  },
];

// Honest Empty-State Contract: Never fabricate upcoming events or inventory before confirmation
const CONFIRMED_PROGRAMME: Array<{ date: string; title: string; rsvpUrl: string }> = [];

export default function B2BDossierPage() {
  const [doorsClosed, setDoorsClosed] = useState(false);
  const [selectedIds, setSelectedIds] = useState<string[]>(["struct", "joinery"]);
  const [areaSqm, setAreaSqm] = useState<number>(120);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [receiptRef, setReceiptRef] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const toggleDiscipline = (id: string) => {
    setSelectedIds((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  };

  // Zero-Selection Safe Calculation: 0 selected disciplines -> 0 weeks & €0
  const diagnostic = useMemo(() => {
    const active = DISCIPLINES.filter((d) => selectedIds.includes(d.id));
    if (active.length === 0) {
      return { weeks: 0, estimateEur: 0, feasibilityScore: 0, summaryText: "No disciplines selected" };
    }
    const weeks = active.reduce((acc, d) => acc + d.weeks, 0) + (areaSqm > 200 ? 2 : 0);
    const rate = active.reduce((acc, d) => acc + d.unitBaseEur, 0);
    const estimateEur = Math.round(rate * (areaSqm / 10) * 100);
    const feasibilityScore = Math.min(98, Math.max(55, 92 - active.length * 3));
    return {
      weeks,
      estimateEur,
      feasibilityScore,
      summaryText: `${active.map((a) => a.label).join(" + ")} (${areaSqm} m²)`,
    };
  }, [selectedIds, areaSqm]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrorMsg(null);
    if (selectedIds.length === 0) {
      setErrorMsg("Select at least one discipline in the Scope Configurator before submitting.");
      return;
    }
    const res = await fetch("/api/enquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        contact,
        scopeSummary: diagnostic.summaryText,
        estimatedWeeks: diagnostic.weeks,
      }),
    });
    const json = await res.json();
    if (!res.ok) {
      setErrorMsg(json.error || "Check your contact details and try again.");
      return;
    }
    setReceiptRef(json.reference);
  }

  return (
    <div className="shell">
      {/* Section 1: Threshold Split-Curtain Hero */}
      <section className="threshold-hero rule-b">
        <div className="threshold-grid">
          <div>
            <p className="mono">01 · TURNKEY EXECUTION & SOURCING</p>
            <h1 className="hero-h1">Architectural rigour from raw shell to handover.</h1>
            <p style={{ marginTop: 16, color: "var(--muted)", maxWidth: "52ch" }}>
              Configure your exact technical scope, inspect audited case dossiers, and dispatch a verified brief directly to our engineering desk.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 24 }}>
              <a href="#configurator" className="btn-primary">Configure Scope</a>
              <button type="button" className="btn-ghost" onClick={() => setDoorsClosed((v) => !v)}>
                {doorsClosed ? "Open Threshold Panels" : "Preview Threshold Reveal"}
              </button>
            </div>
          </div>

          <div className="threshold-stage" data-closed={doorsClosed}>
            <div style={{ textAlign: "center" }}>
              <div style={{ width: 44, height: 44, borderRadius: "50%", background: "var(--accent)", margin: "0 auto 12px" }} />
              <p className="mono">SINGLE-INTERLOCUTOR GUARANTEE</p>
              <p className="tabular" style={{ fontWeight: 700, fontSize: "1.35rem", marginTop: 6 }}>
                Zurich · Milan · Copenhagen
              </p>
            </div>
            <div className="threshold-panel-left" aria-hidden="true" />
            <div className="threshold-panel-right" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* Section 2: Interactive Scope & Feasibility Configurator -> Direct Brief Dispatch */}
      <section id="configurator" className="section-pad rule-b">
        <p className="mono">02 · SCOPE & FEASIBILITY DIAGNOSTIC</p>
        <div className="grid-2">
          <div className="card">
            <h2 style={{ fontSize: "1.4rem" }}>1. Select Disciplines & Area</h2>
            <div className="chip-grid" role="group" aria-label="Technical disciplines">
              {DISCIPLINES.map((d) => (
                <button
                  key={d.id}
                  type="button"
                  className="chip"
                  aria-pressed={selectedIds.includes(d.id)}
                  onClick={() => toggleDiscipline(d.id)}
                >
                  {d.label}
                </button>
              ))}
            </div>

            <label style={{ display: "block", marginTop: 20 }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.9rem" }}>
                <span>Intervention Area</span>
                <strong className="tabular">{areaSqm} m²</strong>
              </div>
              <input
                type="range"
                min={30}
                max={600}
                step={10}
                value={areaSqm}
                onChange={(e) => setAreaSqm(Number(e.target.value))}
                style={{ width: "100%", marginTop: 8, accentColor: "var(--accent)", minHeight: 44 }}
              />
            </label>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginTop: 20, paddingTop: 16, borderTop: "1px solid var(--rule)" }}>
              <div>
                <span className="mono">DURATION</span>
                <div className="tabular" style={{ fontSize: "1.35rem", fontWeight: 700 }}>{diagnostic.weeks} wks</div>
              </div>
              <div>
                <span className="mono">FEASIBILITY</span>
                <div className="tabular" style={{ fontSize: "1.35rem", fontWeight: 700 }}>{diagnostic.feasibilityScore}/100</div>
              </div>
              <div>
                <span className="mono">INDICATIVE</span>
                <div className="tabular" style={{ fontSize: "1.35rem", fontWeight: 700 }}>
                  €{diagnostic.estimateEur.toLocaleString("en-US")}
                </div>
              </div>
            </div>
          </div>

          <form className="card" onSubmit={handleSubmit} noValidate>
            <h2 style={{ fontSize: "1.4rem" }}>2. Dispatch Technical Brief</h2>
            <p style={{ fontSize: "0.88rem", color: "var(--muted)", marginTop: 4 }}>{diagnostic.summaryText}</p>
            <div style={{ display: "grid", gap: 12, marginTop: 16 }}>
              <input
                className="field"
                placeholder="Full name & organisation"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                className="field"
                placeholder="Direct email or phone"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                required
              />
              {errorMsg && (
                <p role="alert" style={{ color: "var(--accent)", fontSize: "0.86rem", fontWeight: 600 }}>
                  {errorMsg}
                </p>
              )}
              {receiptRef ? (
                <div role="status" style={{ padding: 14, borderRadius: 8, background: "var(--soft)", fontSize: "0.9rem" }}>
                  Brief registered under reference <strong className="tabular">{receiptRef}</strong>.
                </div>
              ) : (
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                  <button type="submit" className="btn-primary">Register Technical Brief</button>
                  <a
                    className="btn-ghost"
                    href={`mailto:desk@example.com?subject=${encodeURIComponent(`Technical Brief: ${diagnostic.summaryText}`)}`}
                  >
                    Send via Email Client
                  </a>
                </div>
              )}
            </div>
          </form>
        </div>
      </section>

      {/* Section 3: Case Dossiers with Mandatory Provenance Badges */}
      <section className="section-pad rule-b">
        <p className="mono">03 · AUDITED CASE DOSSIERS</p>
        <div className="grid-2">
          {DOSSIERS.map((d) => (
            <article key={d.code} className="card">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
                <span className="mono">{d.code}</span>
                <span className="prov-badge">{d.provenance}</span>
              </div>
              <h3 style={{ fontSize: "1.3rem", marginTop: 10 }}>{d.title}</h3>
              <p className="tabular" style={{ fontWeight: 600, fontSize: "0.9rem", marginTop: 4, color: "var(--accent)" }}>
                {d.metrics}
              </p>
              <p style={{ color: "var(--muted)", marginTop: 10, fontSize: "0.94rem" }}>{d.summary}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Section 4: Honest Programme / Open Visits Empty State */}
      <section className="section-pad">
        <p className="mono">04 · UPCOMING OPEN STUDIO & PROGRAMME</p>
        {CONFIRMED_PROGRAMME.length === 0 ? (
          <div className="card" style={{ marginTop: 16 }}>
            <h3 style={{ fontSize: "1.2rem" }}>Next season dates to be announced</h3>
            <p style={{ color: "var(--muted)", marginTop: 6 }}>
              Private studio reviews are scheduled by direct technical brief above; public programme dates are published only once speakers and venues are confirmed.
            </p>
          </div>
        ) : null}
      </section>
    </div>
  );
}
