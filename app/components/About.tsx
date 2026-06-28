export default function About() {
  return (
    <section
      id="about"
      className="inner section-px section-py"
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "clamp(36px,5vw,72px)",
        alignItems: "center",
        scrollMarginTop: 80,
      }}
    >
      {/* Image column */}
      <div style={{ flex: "1 1 360px", minWidth: 280, position: "relative" }}>
        <div
          style={{
            overflow: "hidden",
            borderRadius: 18,
            boxShadow: "0 26px 60px -34px rgba(31,42,38,0.36)",
            background: "#ddd5c5",
            aspectRatio: "5/4",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: -12,
            top: -12,
            width: 88,
            height: 88,
            border: "1px solid #c4d2cd",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#f7f3ec",
            fontStyle: "italic",
            fontSize: 15,
            color: "#16524b",
            textAlign: "center",
            lineHeight: 1.3,
            fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
          }}
        >
          XD<br />clinic
        </div>
      </div>

      {/* Text column */}
      <div style={{ flex: "1 1 420px", minWidth: 300 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 22 }}>
          <span style={{ width: 34, height: 1, background: "#2f867c", display: "block" }} />
          <span style={{ fontSize: 12, letterSpacing: "3px", textTransform: "uppercase", color: "#2f867c" }}>
            About the clinic
          </span>
        </div>

        <h2
          className="font-serif"
          style={{
            fontWeight: 500,
            fontSize: "clamp(30px,3.6vw,46px)",
            lineHeight: 1.12,
            margin: "0 0 22px",
            color: "#1f2a26",
          }}
        >
          A place to look — and feel — like yourself.
        </h2>

        <p style={{ fontSize: "clamp(15px,1.4vw,17px)", lineHeight: 1.78, color: "#566058", fontWeight: 300, margin: "0 0 18px" }}>
          At XD Aesthetic Medical Clinic, our aim is to use better, more advanced technology and
          equipment to provide high-quality services — enhancing the beauty and confidence of every
          person who walks through our doors.
        </p>

        <p style={{ fontSize: "clamp(15px,1.4vw,17px)", lineHeight: 1.78, color: "#566058", fontWeight: 300, margin: "0 0 30px" }}>
          Every treatment begins with a conversation. We take the time to understand your goals,
          then tailor a plan that feels right for you.
        </p>

        <a href="#contact" className="link-green">
          Meet our doctor <span>→</span>
        </a>
      </div>
    </section>
  );
}
