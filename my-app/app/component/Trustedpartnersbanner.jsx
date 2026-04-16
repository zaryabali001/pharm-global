/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable @next/next/no-img-element */
import { useResponsive } from "./useResponsive";
import { useState, useEffect, useRef } from "react";

export default function TrustedPartnersBanner() {
  const screenSize = useResponsive();
  const [mounted, setMounted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const timerRef = useRef(null);

  const partners = [
    {
      name: "Global Pharmaceuticals Pakistan",
      logo: "/partner-1.png",
    },
    {
      name: "Vision Pharmaceuticals (Pvt) Ltd.",
      logo: "/partner-2.png",
    },
  ];

  const isMobile = screenSize?.isMobile || false;
  const perPage = isMobile ? 1 : 2;                    // ← Only change here

  // Triple loop for seamless infinite scroll
  const loopedPartners = [...partners, ...partners, ...partners];
  const totalSlides = loopedPartners.length;

  const startTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }, 1500); // Faster continuous sliding
  };

  useEffect(() => {
    setMounted(true);
    setCurrentIndex(partners.length); // Start in the middle for seamless loop
    startTimer();

    return () => clearInterval(timerRef.current);
  }, [isMobile]);

  // Seamless loop reset
  useEffect(() => {
    if (currentIndex >= partners.length * 2) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(partners.length);
      }, 900);
    }
    if (currentIndex <= 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(partners.length);
      }, 900);
    }
  }, [currentIndex]);

  // Re-enable transition after snap
  useEffect(() => {
    if (!isTransitioning) {
      const t = setTimeout(() => setIsTransitioning(true), 50);
      return () => clearTimeout(t);
    }
  }, [isTransitioning]);

  const go = (idx) => {
    setIsTransitioning(true);
    setCurrentIndex(partners.length + idx);
    startTimer();
  };

  if (!mounted || !screenSize) return null;

  const itemWidthPercent = 100 / totalSlides;

  return (
    <div
      style={{
        width: "100%",
        height: isMobile ? 60 : screenSize.isTablet ? 150 : 220,
        position: "relative",
        overflow: "hidden",
        fontFamily: "'Montserrat', sans-serif",
      }}
    >
      {/* Slider Track */}
      <div
        style={{
          display: "flex",
          height: "100%",
          width: `${(totalSlides / perPage) * 100}%`,
          transition: isTransitioning
            ? "transform 0.9s cubic-bezier(0.32, 0.72, 0, 1)"
            : "none",
          transform: `translateX(-${currentIndex * (100 / totalSlides)}%)`,
        }}
        onMouseEnter={() => {}} // Removed hover pause for continuous sliding
        onMouseLeave={() => {}} // Removed hover resume for continuous sliding
      >
        {loopedPartners.map((partner, index) => (
          <div
            key={index}
            style={{
              width: `${itemWidthPercent}%`,
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: isMobile ? "0 20px" : "0px 140px",
              flexShrink: 0,
              position: "relative",
              cursor: "pointer",
            }}
            onClick={() =>
              window.open(
                `https://www.google.com/search?q=${encodeURIComponent(partner.name)}`,
                "_blank"
              )
            }
          >
            {/* Divider - Only on Desktop between items */}
            {index % 2 === 1 && !isMobile && (
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: "15%",
                  height: "70%",
                  width: "1px",
                  background: "rgba(255,255,255,0.15)",
                }}
              />
            )}

            {/* Logo + Name */}
            <div
              style={{
                position: "relative",
                zIndex: 2,
                display: "flex",
                alignItems: "center",
                gap: isMobile ? "16px" : "18px",
                width: "100%",
                justifyContent: isMobile ? "center" : "flex-start",
              }}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                style={{
                  width: isMobile ? "300px" : "500px",
                  maxWidth: isMobile ? "292px" : "none",   // Good size for mobile
                  height: "auto",
                  objectFit: "contain",
                  transition: "transform 0.4s ease",
                  paddingLeft: isMobile ? 100 : 0, 
                }}
              />

              <p
                style={{
                  margin: 0,
                  color: "#ffffff",
                  fontSize: isMobile ? "16px" : screenSize.isTablet ? "18px" : "24px",
                  fontWeight: 700,
                  letterSpacing: "0.015em",
                  lineHeight: 1.35,
                  whiteSpace: isMobile ? "normal" : "nowrap",
                  textAlign: isMobile ? "center" : "left",
                }}
              >
                {partner.name}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots - Mobile Only */}
      {isMobile && (
        <div
          style={{
            position: "absolute",
            bottom: 14,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: 8,
            zIndex: 10,
          }}
        >
          {partners.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                border: "none",
                background:
                  currentIndex % partners.length === i
                    ? "#ffffff"
                    : "rgba(255,255,255,0.45)",
                transform:
                  currentIndex % partners.length === i ? "scale(1.4)" : "scale(1)",
                transition: "all 0.25s ease",
                cursor: "pointer",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}