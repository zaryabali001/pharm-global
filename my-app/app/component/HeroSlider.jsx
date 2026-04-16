/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable @next/next/no-img-element */
import { useState, useEffect, useRef } from "react";
import { useResponsive } from "./useResponsive";

const slides = [
  {
     eyebrow: "",
    title: (
      <>
       
        <span className="text-[36px] text-black">Our</span>{" "}
         CEO
        <br />
        
      </>
    ),
   
    desc: "Our state-of-the-art R&D labs drive continuous innovation, developing breakthrough formulations that address critical unmet medical needs globally.",
    // partnerImg: "./Partners.png",
    image: "./Homepage-01.webp",
  },
  {
    eyebrow: "",
    title: (
      <>
        Trusted Pharmaceutical
        <br />
        Manufacturing <span className="text-[36px] text-black">Since 1995</span>
      </>
    ),
    desc: "Delivering safe, effective, and affordable medicines through GMP-compliant facilities, strong quality systems, and decades of industry expertise.",
    partnerImg: "./Partners.png",
    image: "./Homepage-02.webp",
  },
];

export default function HeroSlider() {
  const screenSize = useResponsive();
  const [mounted, setMounted] = useState(false);
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const goTo = (idx) => {
    setCurrent((idx + slides.length) % slides.length);
    resetAuto();
  };

  const resetAuto = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(
      () => setCurrent((c) => (c + 1) % slides.length),
      5000
    );
  };

  useEffect(() => {
    setMounted(true);
    resetAuto();
    return () => clearInterval(timerRef.current);
  }, []);

  if (!mounted || !screenSize) return null;

  const slide = slides[current];

  return (
    <section
      style={{
        background: "#f5f7f9",
        display: "flex",
        flexDirection: screenSize.isMobile ? "column" : "row",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        padding: screenSize.isMobile
          ? "40px 20px"
          : screenSize.isTablet
          ? "60px 40px"
          : "0 0 0 60px",
        minHeight: screenSize.isMobile ? "auto" : 480,
      }}
    >
      {/* Content */}
      <div
        key={current}
        style={{
          flex: 1,
          maxWidth: screenSize.isMobile ? "100%" : 560,
          paddingBottom: screenSize.isMobile ? 80 : 64,
          transition: "opacity 0.4s ease",
        }}
      >
        <p
          style={{
            fontSize: 11,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#9d0b0f",
            marginBottom: 16,
            fontWeight: 600,
          }}
        >
          {slide.eyebrow}
        </p>

        <h1 className="text-4xl font-bold leading-tight text-[#9d0b0f]">
          {slide.title}
        </h1>

        <p
          style={{
            color: "#4b5563",
            fontSize: screenSize.isMobile ? 15 : 18,
            marginTop: 20,
            lineHeight: 1.75,
          }}
        >
          {slide.desc}
        </p>

        {/* Partner image */}
        {slide.partnerImg && (
          <div style={{ marginTop: 24 }}>
            <img
              src={slide.partnerImg}
              alt="partners"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        )}
      </div>

      {/* Hero Image */}
      <div
        style={{
          flex: 1,
          height: screenSize.isMobile
            ? 260
            : screenSize.isTablet
            ? 400
            : 560,
          overflow: "hidden",
          position: "relative",
        }}
      >
        <img
          key={current}
          src={slide.image}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "left center",
            marginLeft: screenSize.isMobile ? 0 : 40,
            transition: "opacity 0.5s ease",
          }}
        />
      </div>

      {/* Nav — centered bottom */}
      <div
        style={{
          position: "absolute",
          bottom: 24,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          alignItems: "center",
          gap: 14,
          zIndex: 10,
        }}
      >
        {/* <button
          onClick={() => goTo(current - 1)}
          style={{
            width: 38,
            height: 38,
            borderRadius: "50%",
            border: "1.5px solid #9d0b0f",
            background: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "black",
            cursor: "pointer",
            fontSize: 20,
            lineHeight: 1,
          }}
        >
          ‹
        </button> */}

        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: i === current ? "#9d0b0f" : "#d1d5db",
              border: "none",
              padding: 0,
              cursor: "pointer",
              transform: i === current ? "scale(1.4)" : "scale(1)",
              transition: "all 0.3s",
            }}
          />
        ))}

        {/* <button
          onClick={() => goTo(current + 1)}
          style={{
            width: 38,
            height: 38,
            borderRadius: "50%",
            border: "1.5px solid #9d0b0f",
            background: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "black",
            cursor: "pointer",
            fontSize: 20,
            lineHeight: 1,
          }}
        >
          ›
        </button> */}
      </div>
    </section>
  );
}