const articles = [
  {
    id: "xd-n1",
    day: "01",
    month: "Feb",
    title: "Welcome to XD Aesthetic Medical Clinic",
    excerpt: "An introduction to our philosophy of care, our team and the experience that awaits you.",
  },
  {
    id: "xd-n2",
    day: "31",
    month: "Jan",
    title: "A place to love yourself",
    excerpt: "Why confidence begins with care — and how a considered treatment plan can help you feel it.",
  },
];

export default function Journal() {
  return (
    <section id="articles" style={{ background: "#eef5f2", borderTop: "1px solid #dceae5", scrollMarginTop: 80 }}>
      <div className="inner section-px section-py">
        {/* Header */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: 20,
            marginBottom: "clamp(36px,4vw,56px)",
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
              <span style={{ width: 34, height: 1, background: "#2f867c", display: "block" }} />
              <span style={{ fontSize: 12, letterSpacing: "3px", textTransform: "uppercase", color: "#2f867c" }}>
                Journal
              </span>
            </div>
            <h2
              className="font-serif"
              style={{ fontWeight: 500, fontSize: "clamp(32px,4.2vw,54px)", lineHeight: 1.08, margin: 0, color: "#1f2a26" }}
            >
              News &amp; articles
            </h2>
          </div>
          <a href="#" className="link-view">
            View all <span>→</span>
          </a>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "clamp(20px,2.4vw,32px)",
          }}
        >
          {articles.map((a) => (
            <article
              key={a.id}
              style={{
                background: "#fff",
                borderRadius: 18,
                overflow: "hidden",
                boxShadow: "0 20px 50px -36px rgba(31,42,38,0.3)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ position: "relative" }}>
                <div style={{ background: "#ddd5c5", aspectRatio: "16/10", width: "100%" }} />
                <div
                  style={{
                    position: "absolute",
                    top: 16,
                    left: 16,
                    background: "#fff",
                    borderRadius: 12,
                    padding: "9px 14px",
                    textAlign: "center",
                    boxShadow: "0 8px 20px -10px rgba(0,0,0,0.25)",
                  }}
                >
                  <div className="font-serif" style={{ fontSize: 26, fontWeight: 600, lineHeight: 1, color: "#16524b" }}>
                    {a.day}
                  </div>
                  <div style={{ fontSize: 10, letterSpacing: "1.5px", textTransform: "uppercase", color: "#6a746c", marginTop: 2 }}>
                    {a.month}
                  </div>
                </div>
              </div>
              <div style={{ padding: "26px 28px 30px" }}>
                <h3 className="font-serif" style={{ fontWeight: 500, fontSize: 25, lineHeight: 1.2, margin: "0 0 10px", color: "#1f2a26" }}>
                  {a.title}
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: "#6a746c", fontWeight: 300, margin: "0 0 18px" }}>
                  {a.excerpt}
                </p>
                <a href="#" className="link-read">Read more →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
