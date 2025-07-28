import React from "react";

// Place this CSS in your global stylesheet for animation:
const scrollStyles = `
@keyframes scroll-marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.scroll-marquee {
  display: flex;
  white-space: nowrap;
  animation: scroll-marquee 40s linear infinite;
  gap: 3rem;
}
.black-bg {
  background: #111;
}
`;

export default function MarqueeSection() {
  // Inject animation styles once
  React.useEffect(() => {
    if (document.getElementById("marquee-scroll-css")) return;
    const style = document.createElement("style");
    style.id = "marquee-scroll-css";
    style.textContent = scrollStyles;
    document.head.appendChild(style);
  }, []);
  
  const items = [
    '🚀 Blentops raises Series A funding to expand product portfolio',
    '🚀 ZeroGateway processes over 1M transactions in first quarter',
    '🚀 Consider11 launches new fantasy cricket features',
    '🚀 CricBlaze becomes official partner for major cricket league',
    // repeat for smooth loop
    '🚀 Blentops raises Series A funding to expand product portfolio',
    '🚀 ZeroGateway processes over 1M transactions in first quarter',
    '🚀 Consider11 launches new fantasy cricket features',
    '🚀 CricBlaze becomes official partner for major cricket league',
  ];

  return (
    <section style={{
      background: "#111",
      color: "#fff",
      padding: "1.5rem 0",
      overflow: "hidden"
    }}>
      <div className="scroll-marquee">
        {items.map((text, idx) => (
          <span key={idx} style={{ marginRight: "3rem" }} className="animate-scroll">{text}</span>
        ))}
      </div>
    </section>
  );
}
