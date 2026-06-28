const pillars = [
  "Doctor-led care",
  "Advanced technology",
  "Natural-looking results",
  "In the heart of Orchard",
];

export default function TrustStrip() {
  return (
    <div style={{ borderTop: "1px solid #e7dfd2", borderBottom: "1px solid #e7dfd2", background: "#fbf8f3" }}>
      <div
        className="inner section-px"
        style={{
          paddingTop: 22,
          paddingBottom: 22,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "18px 40px",
          alignItems: "center",
        }}
      >
        {pillars.map((pillar, i) => (
          <span key={`trust-${i}`} style={{ display: "contents" }}>
            <span
              className="font-serif"
              style={{ fontStyle: "italic", fontSize: "clamp(17px,1.7vw,21px)", color: "#16524b" }}
            >
              {pillar}
            </span>
            {i < pillars.length - 1 && (
              <span
                style={{ width: 5, height: 5, borderRadius: "50%", background: "#cdd8d3", display: "block" }}
              />
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
