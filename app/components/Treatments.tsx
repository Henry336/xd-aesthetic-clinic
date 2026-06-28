const treatments = [
  {
    id: "xd-t1",
    name: "Botulinum Toxin",
    desc: "Anti-wrinkle injections that soften expression lines for a smooth, rested look.",
    img: "/botulinum_toxin.png",
  },
  {
    id: "xd-t2",
    name: "HIFU Lifting",
    desc: "High-intensity focused ultrasound for non-surgical lifting and firming, layer by layer.",
    img: "/hifu.png",
  },
  {
    id: "xd-t3",
    name: "Hyaluronic Acid Fillers",
    desc: "Restore volume and contour with soft, natural-looking definition.",
    img: "/hyaluronic_acid.png",
  },
  {
    id: "xd-t4",
    name: "Anti-Aging",
    desc: "Considered programmes that renew and protect the skin over time.",
    img: "/anti-aging.png",
  },
  {
    id: "xd-t5",
    name: "Laser Skin",
    desc: "Brighten tone and refine texture with precision laser technology.",
    img: "/laser_skin.png",
  },
  {
    id: "xd-t6",
    name: "Skinbooster",
    desc: "Deep hydration and rejuvenation for a luminous, dewy complexion.",
    img: "/s_skinbooster.png",
  },
  {
    id: "xd-t7",
    name: "Dermal Fillers",
    desc: "Sculpt and rebalance facial features with subtlety and precision.",
    img: "/dermal_img3.jpg",
  },
  {
    id: "xd-t8",
    name: "Fat Freezing",
    desc: "Targeted, non-invasive contouring for stubborn pockets of fat.",
    img: "/fat_img3.jpg",
  },
];

export default function Treatments() {
  return (
    <section
      id="treatments"
      style={{
        background: "#fbf8f3",
        borderTop: "1px solid #e7dfd2",
        borderBottom: "1px solid #e7dfd2",
        scrollMarginTop: 80,
      }}
    >
      <div className="inner section-px section-py">
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
              <span
                style={{
                  fontSize: 12,
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  color: "#2f867c",
                }}
              >
                Treatments
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
              Our signature treatments
            </h2>
          </div>
          <p
            style={{
              maxWidth: 330,
              fontSize: 15,
              lineHeight: 1.7,
              color: "#6a746c",
              fontWeight: 300,
              margin: 0,
            }}
          >
            A curated menu of doctor-led aesthetic procedures, each refined for subtle, natural
            results.
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(248px, 1fr))",
            gap: "clamp(18px,2vw,30px)",
          }}
        >
          {treatments.map((t) => (
            <div key={t.id} style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  overflow: "hidden",
                  borderRadius: 12,
                  marginBottom: 18,
                  aspectRatio: "4/5",
                }}
              >
                <img
                  src={t.img}
                  alt={t.name}
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
              </div>
              <h3
                className="font-serif"
                style={{ fontWeight: 500, fontSize: 24, margin: "0 0 7px", color: "#1f2a26" }}
              >
                {t.name}
              </h3>
              <p
                style={{
                  fontSize: 13.5,
                  lineHeight: 1.6,
                  color: "#6a746c",
                  fontWeight: 300,
                  margin: 0,
                }}
              >
                {t.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
