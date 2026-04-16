// app/component/Stats.jsx



"use client"
import React, { useEffect, useRef, useState } from "react";
import { useResponsive } from "./useResponsive";

interface StatItemProps {
  target: number;
  suffix: string;
  label: string;
  index: number;
  totalItems: number;
  isMobile: boolean;
  isTablet: boolean;
}

const StatItem = ({ target, suffix, label, index, totalItems, isMobile, isTablet }: StatItemProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          let start = 0;
          const duration = 1800;
          const increment = Math.ceil(target / (duration / 16));

          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(start);
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [target]);

  return (
    <div
      ref={ref}
      style={{
        flex: isMobile ? "1 1 100%" : 1,
        maxWidth: isMobile ? "100%" : 380,
        textAlign: "center",
        padding: isMobile ? "20px 16px" : isTablet ? "20px 24px" : "20px 40px",
        borderLeft: isMobile ? "none" : index > 0 ? "1px solid #ddd" : "none",
        borderRight: isMobile ? "none" : index < totalItems - 1 ? "1px solid #ddd" : "none",
        borderBottom: isMobile ? (index < totalItems - 1 ? "1px solid #ddd" : "none") : "none",
      }}
    >
      <div
        style={{
          fontSize: isMobile ? 40 : isTablet ? 56 : 72,
          fontWeight: 700,
          color: "#9d0b0f",
          letterSpacing: -1.5,
          lineHeight: 1,
        }}
      >
        {count}
        {suffix}
      </div>
      <div style={{ fontSize: isMobile ? 14 : isTablet ? 16 : 20, color: "#030308", marginTop: 8 }}>
        {label}
      </div>
    </div>
  );
};

const StatsSection = () => {
  const screenSize = useResponsive();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const stats = [
    { target: 2000, suffix: "+", label: "Number of staff" },
    { target: 500, suffix: "+", label: "Number of Products" },
    { target: 200, suffix: "+", label: "Number of Distributors" },
  ];

  const padding = screenSize.isMobile ? "40px 16px" : screenSize.isTablet ? "60px 40px" : "60px 80px";

  return (
    <section
      style={{
        background: "#fff",
        padding: padding,
        display: "flex",
        justifyContent: "center",
        gap: 0,
        flexWrap: screenSize.isMobile ? "wrap" : "nowrap",
      }}
    >
      {stats.map((s, i) => (
        <StatItem
          key={i}
          target={s.target}
          suffix={s.suffix}
          label={s.label}
          index={i}
          totalItems={stats.length}
          isMobile={screenSize.isMobile}
          isTablet={screenSize.isTablet}
        />
      ))}
    </section>
  );
};

export default StatsSection;