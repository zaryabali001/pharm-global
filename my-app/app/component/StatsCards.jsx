import { useState, useEffect, useRef } from "react";

const cards = [
  {
    number: "1995",
    label: "YEAR ESTABLISHED",
    style: { left: "8.7%", top: "14.9%" },
  },
  {
    number: "100%",
    label: "CGMC PROGRAM",
    style: { right: "1.6%", top: "30%" },
  },
  {
    number: "5+",
    label: "PRODUCT CATALOG",
    style: { left: "10.8%", bottom: "16%" },
  },
];

function StatCard({ number, label, hasPlus, style, index, isVisible }) {
  return (
    <div
      className={`stat-card stat-card-${index}`}
      style={{
        position: "absolute",
        background: "#fff",
        borderRadius: "8px",
        boxShadow: "0 4px 16px rgba(0,0,0,0.10), 0 2px 4px rgba(0,0,0,0.08)",
        // always has transition so it animates when isVisible flips
        transition: `opacity 0.5s ease ${index * 0.15}s, transform 0.6s cubic-bezier(0.34,1.56,0.64,1) ${index * 0.15}s`,
        // hidden state: pushed down + invisible
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0) scale(1)" : "translateY(50px) scale(0.75)",
        ...style,
      }}
    >
      <div className="card-number">
        {number}
        {hasPlus && <span className="plus-circle">+</span>}
      </div>
      <div className="card-label">{label}</div>
    </div>
  );
}

export default function StatsCards() {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // fire once only
        }
      },
      {
        threshold: 0.15, // trigger when 15% of section is in view
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .stats-wrapper {
          position: relative;
          width: 100%;
          max-width: 580px;
          margin: 0 auto;
          aspect-ratio: 581 / 552;
        }

        .stats-wrapper > img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
        }

        .stat-card {
          width: clamp(80px, 30%, 152px);
          padding: clamp(8px, 2%, 16px) clamp(10px, 2.5%, 16px);
        }

        .card-number {
          font-family: Arial, sans-serif;
          font-size: clamp(16px, 4.5vw, 28px);
          font-weight: 700;
          color: #9D0B0F;
          line-height: 1.1;
          margin-bottom: clamp(3px, 1%, 6px);
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .card-label {
          font-family: Arial, sans-serif;
          font-size: clamp(6px, 1.6vw, 9.5px);
          font-weight: 400;
          color: #222;
          letter-spacing: 0.02em;
          line-height: 1.35;
        }

        .plus-circle {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: clamp(16px, 3vw, 22px);
          height: clamp(16px, 3vw, 22px);
          border: 2px solid #9D0B0F;
          border-radius: 50%;
          color: #9D0B0F;
          font-size: clamp(10px, 2vw, 15px);
          font-weight: 700;
          line-height: 1;
        }

        @media (max-width: 480px) {
          .stat-card {
            width: clamp(72px, 26vw, 100px) !important;
          }
          .stat-card-0 { left: 4% !important; top: 10% !important; bottom: auto !important; right: auto !important; }
          .stat-card-1 { right: 2% !important; top: 28% !important; left: auto !important; bottom: auto !important; }
          .stat-card-2 { left: 4% !important; bottom: 8% !important; top: auto !important; right: auto !important; }
          .card-number { font-size: clamp(16px, 5.5vw, 20px) !important; }
          .card-label  { font-size: clamp(5.5px, 2vw, 8px) !important; }
        }
      `}</style>

      <div ref={containerRef} className="stats-wrapper">
        <img src="/red-logo.svg" alt="" />
        {cards.map((card, i) => (
          <StatCard key={i} {...card} index={i} isVisible={isVisible} />
        ))}
      </div>
    </>
  );
}