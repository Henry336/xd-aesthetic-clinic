const benefits = [
  "Instant relief, with no downtime",
  "Long-term benefits for skin health",
  "Cool comfort to distressed skin",
];

export default function Spotlight() {
  return (
    <section style={{ background: "#16524b", color: "#eaf3f0" }}>
      <div
        className="inner section-px section-py"
        style={{ display: "flex", flexWrap: "wrap", gap: "clamp(36px,5vw,72px)", alignItems: "center" }}
      >
        {/* Image */}
        <div style={{ flex: "1 1 360px", minWidth: 280, order: 2 }}>
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: 18,
              boxShadow: "0 30px 60px -30px rgba(0,0,0,0.5)",
              border: "1px solid rgba(255,255,255,0.07)",
              background: "#1a3d38",
              aspectRatio: "6/5",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(180deg,rgba(19,33,30,0) 50%,rgba(19,33,30,0.5) 100%)",
                pointerEvents: "none",
              }}
            />
          </div>
        </div>

        {/* Text */}
        <div style={{ flex: "1 1 420px", minWidth: 300, order: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 22 }}>
            <span style={{ width: 34, height: 1, background: "#7bb3aa", display: "block" }} />
            <span style={{ fontSize: 12, letterSpacing: "3px", textTransform: "uppercase", color: "#9fcabf" }}>
              Popular treatment
            </span>
          </div>

          <h2
            className="font-serif"
            style={{
              fontWeight: 500,
              fontSize: "clamp(32px,4vw,50px)",
              lineHeight: 1.1,
              margin: "0 0 22px",
              color: "#fff",
            }}
          >
            Laser Skin Treatment
          </h2>

          <p
            style={{
              fontSize: "clamp(15px,1.4vw,17px)",
              lineHeight: 1.78,
              color: "#c6ddd7",
              fontWeight: 300,
              margin: "0 0 30px",
              maxWidth: 480,
            }}
          >
            Cool comfort that offers more than just relief to distressed skin. PICO Toning by
            DiscoveryPICO helps address pigmented lesions and acne scars — leaving skin brighter,
            clearer and smoother.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 38 }}>
            {benefits.map((b) => (
              <div key={b} style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <span
                  style={{
                    flexShrink: 0,
                    width: 26,
                    height: 26,
                    borderRadius: "50%",
                    background: "#2f867c",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 14,
                  }}
                >
                  ✓
                </span>
                <span style={{ fontSize: 15.5, color: "#eaf3f0", fontWeight: 300 }}>{b}</span>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="btn-white"
            style={{
              height: 52,
              padding: "0 28px",
              borderRadius: 40,
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: "1.2px",
              textTransform: "uppercase",
              gap: 10,
            }}
          >
            Book this treatment <span style={{ fontSize: 16 }}>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
