import Image from "next/image";

const treatments = [
  "Botulinum Toxin",
  "HIFU Lifting",
  "Hyaluronic Acid Fillers",
  "Laser Skin Treatment",
  "Skinbooster",
];

const products = [
  "Calecim range",
  "Bio Cellulose Mask",
  "Crystal Tomatoes",
  "Cyspera Corrector",
  "F.A.C.E. Serum",
];

const clinicLinks = [
  { label: "About us", href: "#about" },
  { label: "Our doctor", href: "#about" },
  { label: "Journal", href: "#articles" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#13211e", color: "#bcccc6" }}>
      <div
        className="inner section-px"
        style={{
          paddingTop: "clamp(48px,6vw,80px)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
          gap: "clamp(32px,4vw,56px)",
        }}
      >
        {/* Brand */}
        <div style={{ minWidth: 200 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#f3efe7",
              borderRadius: 14,
              padding: "15px 18px",
              marginBottom: 22,
            }}
          >
            <Image
              src="/xd-logo-footer.png"
              alt="XD Aesthetic Medical Clinic"
              width={120}
              height={74}
              style={{ height: 74, width: "auto" }}
            />
          </div>
          <p style={{ fontSize: 14, lineHeight: 1.7, color: "#8ea49d", fontWeight: 300, maxWidth: 240, margin: "0 0 22px" }}>
            Doctor-led aesthetic medicine in the heart of Orchard, Singapore.
          </p>
          <div style={{ display: "flex", gap: 10 }}>
            <a href="#" aria-label="Facebook" className="social-btn font-serif" style={{ fontSize: 18 }}>f</a>
            <a href="#" aria-label="Instagram" className="social-btn" style={{ fontSize: 11, letterSpacing: "0.5px" }}>IG</a>
          </div>
        </div>

        {/* Treatments */}
        <div>
          <h4 style={{ fontSize: 11, letterSpacing: "2px", textTransform: "uppercase", color: "#7bb3aa", margin: "0 0 18px", fontWeight: 500 }}>
            Treatments
          </h4>
          <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
            {treatments.map((t) => (
              <a key={t} href="#treatments" className="footer-link">{t}</a>
            ))}
          </div>
        </div>

        {/* Products */}
        <div>
          <h4 style={{ fontSize: 11, letterSpacing: "2px", textTransform: "uppercase", color: "#7bb3aa", margin: "0 0 18px", fontWeight: 500 }}>
            Products
          </h4>
          <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
            {products.map((p) => (
              <a key={p} href="#products" className="footer-link">{p}</a>
            ))}
          </div>
        </div>

        {/* Clinic */}
        <div>
          <h4 style={{ fontSize: 11, letterSpacing: "2px", textTransform: "uppercase", color: "#7bb3aa", margin: "0 0 18px", fontWeight: 500 }}>
            Clinic
          </h4>
          <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
            {clinicLinks.map((c) => (
              <a key={c.label} href={c.href} className="footer-link">{c.label}</a>
            ))}
          </div>
          <p style={{ fontSize: 13.5, lineHeight: 1.7, color: "#8ea49d", fontWeight: 300, margin: "20px 0 0" }}>
            9 Scotts Road, #06-07<br />
            Singapore 228210<br />
            6320 3616
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div
        className="inner section-px"
        style={{
          marginTop: "clamp(36px,4vw,56px)",
          paddingTop: "clamp(28px,4vw,44px)",
          paddingBottom: "clamp(28px,4vw,44px)",
          borderTop: "1px solid #24332e",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: 12,
        }}
      >
        <span style={{ fontSize: 12.5, color: "#7a8f88", fontWeight: 300 }}>
          © 2024 XD Aesthetic Medical Clinic · All rights reserved
        </span>
        <span style={{ fontSize: 12.5, color: "#7a8f88", fontWeight: 300 }}>Privacy · Terms</span>
      </div>
    </footer>
  );
}
