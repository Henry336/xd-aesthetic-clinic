"use client";

import { useState } from "react";
import Image from "next/image";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#treatments", label: "Treatments" },
  { href: "#products", label: "Products" },
  { href: "#articles", label: "Journal" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 60,
        background: "rgba(247,243,236,0.88)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderBottom: "1px solid #e7dfd2",
      }}
    >
      <div
        className="inner section-px"
        style={{
          paddingTop: 15,
          paddingBottom: 15,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
        }}
      >
        
        <a href="#home" style={{ display: "flex", alignItems: "center" }}>
          <img
            src="/xd-logo-header.png"
            alt="XD Aesthetic Clinic"
            style={{ height: 34, width: "auto", objectFit: "contain" }}
          />
        </a>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex"
          style={{ alignItems: "center", gap: "clamp(16px,2.2vw,32px)" }}
        >
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex" style={{ alignItems: "center", gap: 11 }}>
          <a
            href="tel:+6563203616"
            className="btn-outline"
            style={{ height: 42, padding: "0 17px", borderRadius: 40, fontSize: 12.5, fontWeight: 500, letterSpacing: "0.8px", gap: 7 }}
          >
            6320 3616
          </a>
          <a
            href="https://wa.me/6563203616"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            style={{ height: 42, padding: "0 17px", borderRadius: 40, fontSize: 12.5, fontWeight: 500, letterSpacing: "0.8px", gap: 7 }}
          >
            WhatsApp
          </a>
          <a
            href="#contact"
            className="btn-green"
            style={{ height: 42, padding: "0 22px", borderRadius: 40, fontSize: 12.5, fontWeight: 500, letterSpacing: "1px", textTransform: "uppercase" }}
          >
            Book Now
          </a>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
          className="md:hidden"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 46,
            height: 46,
            border: "1px solid #d8cfc0",
            borderRadius: 12,
            background: "#fff",
            cursor: "pointer",
            flexDirection: "column",
            gap: 5,
          }}
        >
          <span style={{ width: 18, height: 1.5, background: "#2b332f", display: "block" }} />
          <span style={{ width: 18, height: 1.5, background: "#2b332f", display: "block" }} />
          <span style={{ width: 18, height: 1.5, background: "#2b332f", display: "block" }} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="section-px md:hidden"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            paddingTop: 8,
            paddingBottom: 22,
            borderTop: "1px solid #e7dfd2",
            background: "#f7f3ec",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                textDecoration: "none",
                color: "#2b332f",
                fontSize: 16,
                letterSpacing: "1px",
                padding: "11px 0",
                borderBottom: "1px solid #ece4d7",
              }}
            >
              {link.label}
            </a>
          ))}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 14 }}>
            <a
              href="tel:+6563203616"
              onClick={() => setMenuOpen(false)}
              style={{
                flex: 1,
                minWidth: 130,
                textAlign: "center",
                textDecoration: "none",
                padding: 13,
                border: "1px solid #c9d6d1",
                borderRadius: 40,
                color: "#16524b",
                fontSize: 13,
                fontWeight: 500,
              }}
            >
              Call 6320 3616
            </a>
            <a
              href="https://wa.me/6563203616"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              style={{
                flex: 1,
                minWidth: 130,
                textAlign: "center",
                textDecoration: "none",
                padding: 13,
                border: "1px solid #c9d6d1",
                borderRadius: 40,
                color: "#16524b",
                fontSize: 13,
                fontWeight: 500,
              }}
            >
              WhatsApp
            </a>
          </div>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            style={{
              textAlign: "center",
              textDecoration: "none",
              padding: 14,
              marginTop: 2,
              borderRadius: 40,
              background: "#16524b",
              color: "#fff",
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: "1px",
              textTransform: "uppercase",
            }}
          >
            Book an appointment
          </a>
        </div>
      )}
    </header>
  );
}
