export default function Hero() {
  return (
    <section
      id="home"
      className="inner section-px section-py-sm"
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: "clamp(36px,5vw,72px)",
        scrollMarginTop: 90,
      }}
    >
      {/* Text column */}
      <div style={{ flex: "1 1 440px", minWidth: 300 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 26 }}>
          <span style={{ width: 34, height: 1, background: "#2f867c", display: "block" }} />
          <span style={{ fontSize: 12, letterSpacing: "3px", textTransform: "uppercase", color: "#2f867c" }}>
            Medical Aesthetics · Singapore
          </span>
        </div>

        <h1
          className="font-serif"
          style={{
            fontWeight: 500,
            fontSize: "clamp(44px,6.4vw,80px)",
            lineHeight: 1.04,
            letterSpacing: "-0.5px",
            margin: "0 0 24px",
            color: "#1f2a26",
          }}
        >
          Beauty, refined<br />by science.
        </h1>

        <p
          style={{
            fontSize: "clamp(15px,1.4vw,18px)",
            lineHeight: 1.75,
            color: "#566058",
            maxWidth: 480,
            margin: "0 0 36px",
            fontWeight: 300,
          }}
        >
          We pair advanced technology with a considered, doctor-led approach — enhancing your
          natural features and the quiet confidence that comes with them.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 14, alignItems: "center" }}>
          <a
            href="#contact"
            className="btn-green"
            style={{
              height: 54,
              padding: "0 30px",
              borderRadius: 40,
              fontSize: 13.5,
              fontWeight: 500,
              letterSpacing: "1.2px",
              textTransform: "uppercase",
              gap: 10,
            }}
          >
            Book a consultation <span style={{ fontSize: 17 }}>→</span>
          </a>
          <a
            href="https://wa.me/6563203616"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-hero"
            style={{
              height: 54,
              padding: "0 26px",
              borderRadius: 40,
              fontSize: 13.5,
              fontWeight: 500,
              letterSpacing: "1px",
              gap: 9,
            }}
          >
            Enquire on WhatsApp
          </a>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 14, marginTop: 34, color: "#7a857d", fontSize: 13, letterSpacing: "0.5px" }}>
          <span className="font-serif" style={{ fontSize: 19, color: "#16524b" }}>
            9 Scotts Road
          </span>
          <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#c4ccc6", display: "block" }} />
          <span>Pacific Plaza · Orchard</span>
        </div>
      </div>

      {/* Image column */}
      <div style={{ flex: "1 1 380px", minWidth: 280, position: "relative" }}>
        <div
          style={{
            overflow: "hidden",
            borderRadius: "260px 260px 18px 18px",
            boxShadow: "0 30px 70px -34px rgba(22,82,75,0.4)",
            aspectRatio: "4/5",
          }}
        >
          <img
            src="/hero-arch.jpg"
            alt="XD Aesthetic Clinic hero"
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </div>
        <div
          className="float-badge"
          style={{
            position: "absolute",
            left: -14,
            bottom: 34,
            background: "#fff",
            borderRadius: 16,
            padding: "16px 20px",
            boxShadow: "0 18px 40px -20px rgba(31,42,38,0.34)",
            display: "flex",
            alignItems: "center",
            gap: 14,
          }}
        >
          <span className="font-serif" style={{ fontSize: 38, fontWeight: 600, color: "#16524b", lineHeight: 1 }}>
            8
          </span>
          <span style={{ fontSize: 11.5, letterSpacing: "0.6px", lineHeight: 1.5, color: "#566058" }}>
            Signature<br />treatments
          </span>
        </div>
      </div>
    </section>
  );
}
