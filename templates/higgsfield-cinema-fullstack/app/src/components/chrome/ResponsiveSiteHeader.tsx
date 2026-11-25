import React, { useState } from "react";

export interface NavItem {
  label: string;
  href: string;
}

export interface ResponsiveHeaderProps {
  brandName: string;
  /** Official client logo path — never replace with an unapproved AI polygon! */
  logoSrc: string;
  items: NavItem[];
  ctaLabel: string;
  ctaHref: string;
}

/**
 * Audit-Hardened Header:
 * - Zero horizontal overflow down to 320px width.
 * - Accessible <900px mobile drawer replacement (never hides navigation without a mobile toggle).
 * - >= 44px touch targets on every link and button.
 */
export const ResponsiveSiteHeader: React.FC<ResponsiveHeaderProps> = ({
  brandName,
  logoSrc,
  items,
  ctaLabel,
  ctaHref,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 40,
        background: "rgba(14, 17, 21, 0.90)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid #28303B",
      }}
    >
      <style>{`
        .hf-header-bar { max-width: 1280px; margin: 0 auto; padding: 10px max(16px, 4vw); display: flex; align-items: center; justify-content: space-between; gap: 12px; }
        .hf-desktop-nav { display: flex; align-items: center; gap: 24px; }
        .hf-mobile-btn { display: none; min-width: 44px; min-height: 44px; background: #161B22; color: #F2F0EC; border: 1px solid #28303B; border-radius: 8px; font-size: 14px; padding: 0 12px; cursor: pointer; }
        @media (max-width: 899px) {
          .hf-desktop-nav { display: none; }
          .hf-mobile-btn { display: inline-flex; align-items: center; justify-content: center; }
        }
      `}</style>

      <div className="hf-header-bar">
        <a
          href="#top"
          style={{ display: "inline-flex", alignItems: "center", gap: 10, minHeight: 44, color: "#F2F0EC", textDecoration: "none", fontWeight: 700 }}
        >
          <img src={logoSrc} alt={brandName} width={32} height={32} style={{ objectFit: "contain" }} />
          <span style={{ fontSize: 16, letterSpacing: "-0.02em" }}>{brandName}</span>
        </a>

        <nav className="hf-desktop-nav" aria-label="Primary">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              style={{ minHeight: 44, display: "inline-flex", alignItems: "center", color: "#9AA3AE", textDecoration: "none", fontSize: 14 }}
            >
              {item.label}
            </a>
          ))}
          <a
            href={ctaHref}
            style={{
              minHeight: 44,
              padding: "0 18px",
              display: "inline-flex",
              alignItems: "center",
              borderRadius: 6,
              background: "#64B6A7",
              color: "#0A1110",
              fontWeight: 600,
              fontSize: 14,
              textDecoration: "none",
            }}
          >
            {ctaLabel}
          </a>
        </nav>

        <button
          type="button"
          className="hf-mobile-btn"
          aria-expanded={menuOpen}
          aria-controls="hf-mobile-drawer"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {menuOpen && (
        <nav
          id="hf-mobile-drawer"
          aria-label="Mobile"
          style={{
            padding: "12px 16px 20px",
            borderTop: "1px solid #28303B",
            background: "#0E1115",
            display: "grid",
            gap: 8,
          }}
        >
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              style={{ minHeight: 44, display: "flex", alignItems: "center", color: "#F2F0EC", textDecoration: "none", padding: "0 8px" }}
            >
              {item.label}
            </a>
          ))}
          <a
            href={ctaHref}
            onClick={() => setMenuOpen(false)}
            style={{
              minHeight: 48,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 8,
              background: "#64B6A7",
              color: "#0A1110",
              fontWeight: 700,
              textDecoration: "none",
              marginTop: 4,
            }}
          >
            {ctaLabel}
          </a>
        </nav>
      )}
    </header>
  );
};
