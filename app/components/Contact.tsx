"use client";

import { useState } from "react";

const treatmentOptions = [
  "I'm not sure yet — please advise",
  "Botulinum Toxin",
  "HIFU Lifting",
  "Hyaluronic Acid Fillers",
  "Anti-Aging",
  "Laser Skin Treatment",
  "Skinbooster",
  "Dermal Fillers",
  "Fat Freezing",
];

const inputStyle: React.CSSProperties = {
  height: 50,
  padding: "0 16px",
  border: "1px solid #ddd4c5",
  borderRadius: 12,
  background: "#fff",
  fontSize: 15,
  color: "#2b332f",
  outline: "none",
  fontFamily: "var(--font-jost), Jost, sans-serif",
  width: "100%",
  transition: "border-color 0.2s",
};

const labelStyle: React.CSSProperties = {
  fontSize: 11,
  letterSpacing: "1.5px",
  textTransform: "uppercase",
  color: "#7a857d",
  display: "block",
  marginBottom: 8,
};

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section
      id="contact"
      className="inner section-px section-py"
      style={{ scrollMarginTop: 80 }}
    >
      {/* Section header */}
      <div style={{ textAlign: "center", marginBottom: "clamp(36px,4vw,52px)" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 18,
          }}
        >
          <span style={{ width: 24, height: 1, background: "#2f867c", display: "block" }} />
          <span
            style={{
              fontSize: 12,
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "#2f867c",
            }}
          >
            Get in touch
          </span>
          <span style={{ width: 24, height: 1, background: "#2f867c", display: "block" }} />
        </div>
        <h2
          className="font-serif"
          style={{
            fontWeight: 500,
            fontSize: "clamp(34px,4.6vw,58px)",
            lineHeight: 1.06,
            margin: "0 0 14px",
            color: "#1f2a26",
          }}
        >
          Book your consultation
        </h2>
        <p
          style={{
            fontSize: 16,
            lineHeight: 1.7,
            color: "#6a746c",
            fontWeight: 300,
            maxWidth: 480,
            margin: "0 auto",
          }}
        >
          Tell us a little about what you&apos;re looking for. We&apos;ll be in touch to arrange a
          time that suits you.
        </p>
      </div>

      {/* Quick contact tiles */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 14,
          marginBottom: "clamp(28px,3vw,40px)",
        }}
      >
        {[
          { href: "tel:+6563203616", label: "Call us", value: "6320 3616" },
          { href: "https://wa.me/6563203616", label: "Message us", value: "WhatsApp", external: true },
          {
            href: "https://maps.google.com/?q=9+Scotts+Road+Pacific+Plaza+Singapore+228210",
            label: "Visit us",
            value: "Pacific Plaza, Orchard",
            external: true,
            small: true,
          },
        ].map((tile) => (
          <a
            key={tile.href}
            href={tile.href}
            target={tile.external ? "_blank" : undefined}
            rel={tile.external ? "noopener noreferrer" : undefined}
            className="tile-contact"
          >
            <span
              style={{
                fontSize: 11,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                color: "#2f867c",
              }}
            >
              {tile.label}
            </span>
            <span
              className="font-serif"
              style={{
                fontSize: tile.small ? 22 : 26,
                color: "#16524b",
                lineHeight: tile.small ? 1.25 : undefined,
              }}
            >
              {tile.value}
            </span>
          </a>
        ))}
      </div>

      {/* Form + info panel */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "clamp(24px,3vw,44px)",
          background: "#fbf8f3",
          border: "1px solid #ece4d7",
          borderRadius: 24,
          padding: "clamp(26px,3.4vw,48px)",
        }}
      >
        {/* Form */}
        <div style={{ flex: "1 1 380px", minWidth: 300 }}>
          {!sent ? (
            <form
              onSubmit={handleSubmit}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 16,
              }}
            >
              <label style={{ gridColumn: "span 2" }}>
                <span style={labelStyle}>Full name</span>
                <input type="text" required placeholder="Your name" style={inputStyle} />
              </label>

              <label>
                <span style={labelStyle}>Phone</span>
                <input type="tel" required placeholder="+65" style={inputStyle} />
              </label>

              <label>
                <span style={labelStyle}>Email</span>
                <input type="email" placeholder="you@email.com" style={inputStyle} />
              </label>

              <label style={{ gridColumn: "span 2" }}>
                <span style={labelStyle}>Treatment of interest</span>
                <select
                  style={{
                    ...inputStyle,
                    cursor: "pointer",
                    appearance: "auto",
                  }}
                >
                  {treatmentOptions.map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                </select>
              </label>

              <label style={{ gridColumn: "span 2" }}>
                <span style={labelStyle}>
                  Message{" "}
                  <span style={{ textTransform: "none", letterSpacing: 0, color: "#aab2ab" }}>
                    (optional)
                  </span>
                </span>
                <textarea
                  rows={3}
                  placeholder="Anything you'd like us to know"
                  style={{
                    padding: "14px 16px",
                    border: "1px solid #ddd4c5",
                    borderRadius: 12,
                    background: "#fff",
                    fontSize: 15,
                    color: "#2b332f",
                    outline: "none",
                    resize: "vertical",
                    fontFamily: "var(--font-jost), Jost, sans-serif",
                    width: "100%",
                    transition: "border-color 0.2s",
                  }}
                />
              </label>

              <button
                type="submit"
                style={{
                  gridColumn: "span 2",
                  height: 56,
                  border: "none",
                  borderRadius: 40,
                  background: "#16524b",
                  color: "#fff",
                  fontSize: 13.5,
                  fontWeight: 500,
                  letterSpacing: "1.4px",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                  fontFamily: "var(--font-jost), Jost, sans-serif",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#0f3f39")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#16524b")}
              >
                Request my appointment <span style={{ fontSize: 16 }}>→</span>
              </button>
            </form>
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                gap: 14,
                minHeight: 320,
              }}
            >
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  background: "#2f867c",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 30,
                }}
              >
                ✓
              </div>
              <h3
                className="font-serif"
                style={{
                  fontWeight: 500,
                  fontSize: 30,
                  margin: 0,
                  color: "#1f2a26",
                }}
              >
                Thank you
              </h3>
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.7,
                  color: "#6a746c",
                  fontWeight: 300,
                  maxWidth: 340,
                  margin: 0,
                }}
              >
                Your request has been received. Our team will reach out shortly to confirm your
                consultation.
              </p>
            </div>
          )}
        </div>

        {/* Map + info */}
        <div
          style={{
            flex: "1 1 300px",
            minWidth: 260,
            display: "flex",
            flexDirection: "column",
            gap: 22,
          }}
        >
          <div
            style={{
              overflow: "hidden",
              borderRadius: 18,
              border: "1px solid #e3dbcd",
              aspectRatio: "5/4",
            }}
          >
            <img
              src="/xd_clinic_exterior.png"
              alt="XD Aesthetic Clinic exterior"
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </div>
          <div>
            <span
              style={{
                fontSize: 11,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                color: "#2f867c",
              }}
            >
              Clinic
            </span>
            <p
              className="font-serif"
              style={{
                fontSize: 21,
                lineHeight: 1.4,
                color: "#1f2a26",
                margin: "8px 0 0",
              }}
            >
              9 Scotts Road, Pacific Plaza
              <br />
              #06-07 Scotts Medical Centre
              <br />
              Singapore 228210
            </p>
          </div>
          <div style={{ display: "flex", gap: 28, flexWrap: "wrap" }}>
            <div>
              <span
                style={{
                  fontSize: 11,
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  color: "#7a857d",
                }}
              >
                Phone
              </span>
              <p style={{ fontSize: 16, color: "#16524b", margin: "6px 0 0" }}>6320 3616</p>
            </div>
            <div>
              <span
                style={{
                  fontSize: 11,
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  color: "#7a857d",
                }}
              >
                Hours
              </span>
              <p style={{ fontSize: 16, color: "#16524b", margin: "6px 0 0" }}>By appointment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
