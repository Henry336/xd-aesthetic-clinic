const products = [
  { id: "xd-p1", category: "Mask", name: "Bio Cellulose Stem Cell Mask" },
  { id: "xd-p2", category: "Calecim", name: "Multi-Action Cream" },
  { id: "xd-p3", category: "Calecim", name: "Professional Serum" },
  { id: "xd-p4", category: "Calecim", name: "Recovery Night Complex" },
  { id: "xd-p5", category: "Calecim", name: "Restorative Hydration Cream" },
  { id: "xd-p6", category: "Supplement", name: "Crystal Tomatoes" },
  { id: "xd-p7", category: "Cyspera", name: "Intensive Pigment Corrector" },
  { id: "xd-p8", category: "Serum", name: "F.A.C.E. Serum" },
];

export default function Products() {
  return (
    <section id="products" className="inner section-px section-py" style={{ scrollMarginTop: 80 }}>
      {/* Section header */}
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
              The shelf
            </span>
          </div>
          <h2
            className="font-serif"
            style={{
              fontWeight: 500,
              fontSize: "clamp(32px,4.2vw,54px)",
              lineHeight: 1.08,
              margin: 0,
              color: "#1f2a26",
            }}
          >
            Curated skincare
          </h2>
        </div>
        <p style={{ maxWidth: 330, fontSize: 15, lineHeight: 1.7, color: "#6a746c", fontWeight: 300, margin: 0 }}>
          Professional-grade products we trust — to extend your results at home.
        </p>
      </div>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(206px, 1fr))",
          gap: "clamp(16px,1.8vw,26px)",
        }}
      >
        {products.map((p) => (
          <div key={p.id} className="card-product">
            <div
              style={{
                overflow: "hidden",
                borderRadius: 10,
                marginBottom: 16,
                background: "#f0ebe0",
                aspectRatio: "1/1",
              }}
            />
            <span style={{ fontSize: 10.5, letterSpacing: "1.5px", textTransform: "uppercase", color: "#2f867c", marginBottom: 6 }}>
              {p.category}
            </span>
            <h3 className="font-serif" style={{ fontWeight: 500, fontSize: 20, lineHeight: 1.2, margin: 0, color: "#1f2a26" }}>
              {p.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
