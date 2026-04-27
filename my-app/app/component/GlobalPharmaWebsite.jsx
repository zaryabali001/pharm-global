/* eslint-disable react/jsx-no-undef */
/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";
import ProductCarousel from "./Product";
import ImageSlider from "./ImageSlider";
import Header from "./Header";
import Footer from "./Footer";
import Map from "./Map";
import Arrow from "./Arrow";
import Trustedpartnersbanner from "./Trustedpartnersbanner";
import StatsSection from "./StatsSection";
import { useResponsive } from "./useResponsive";
import QFA from "./QFA";
import HeroSlider from "./HeroSlider";
// import { IoIosArrowUp } from "react-icons/io";
import {
  AnimatedSection,
  AnimatedText,
  // SlideInFromLeft,
  // SlideInFromRight,
  ScaleInOnScroll,
} from "./AnimatedSection";

const PARTNERS = [
  "Martin Dow Limited",
  "Hoechst Pakistan",
  "CCL",
  "Pharmevo",
  "Barrett Hodgson",
  "Aspin Pharma",
  "Scilife",
  "Macter International",
  "Swiss Pharma",
  "Pharmalord",
  "Carer",
  "Nimral",
  "Laderly Biotech",
  "Helix Pharma",
  "Solmed",
  "Pharmedic",
  "Winthrox",
  "Nagarson",
  "Faas Pharma",
  "Harmann Pharmaceuticals",
  "Usawa",
];

// const ACCORDION = [
//   {
//     num: "01",
//     title: "Committed to Advancing Healthcare",
//     desc: "Global Pharmaceuticals is dedicated to the development and manufacturing of high-quality pharmaceutical products that meet both local and international standards.",
//   },
//   {
//     num: "02",
//     title: "Driven by Expertise and Dedication",
//     desc: "Our team of experienced professionals drives innovation and excellence in every product we manufacture.",
//   },
//   {
//     num: "03",
//     title: "Quality at the Core of Everything We Do",
//     desc: "Rigorous quality control processes ensure every product meets the highest standards of safety and efficacy.",
//   },
//   {
//     num: "04",
//     title: "Modern Facilities, Reliable Manufacturing",
//     desc: "State-of-the-art GMP-compliant manufacturing facilities ensure consistent, reliable production at scale.",
//   },
// ];

export default function GlobalPharmaWebsite() {
  const screenSize = useResponsive();
  const [mounted, setMounted] = useState(false);

  // eslint-disable react-hooks/exhaustive-deps
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      style={{
        fontFamily: "'Outfit', sans-serif",
        background: "#fff",
        overflowX: "hidden",
        position: "relative",
      }}
    >
      {/* Top Bar */}
      <Header></Header>
      <section
        style={{
          position: "relative",
          width: "100%",
          height: screenSize.isMobile ? 250 : screenSize.isTablet ? 350 : 500,
          overflow: "hidden",
          zIndex: 0,
        }}
      >
        <video
          src="/video000.mp4"
          poster="/video-screenshot.png"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        >
          Your browser does not support HTML5 video.
        </video>
      </section>

      {/*       
      <section
        style={{
          background: "#f5f7f9",
          padding: screenSize.isMobile
            ? "40px 20px"
            : screenSize.isTablet
              ? "60px 40px"
              : "0 0px 0px 60px",
          display: "flex",
          flexDirection: screenSize.isMobile ? "column" : "row",
          gap: screenSize.isMobile ? 30 : screenSize.isTablet ? 40 : 60,
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <SlideInFromLeft>
          <div
            style={{ flex: 1, maxWidth: screenSize.isMobile ? "100%" : 560 }}
          >
            <h1 className="text-4xl font-bold leading-tight text-[#9d0b0f]">
              Trusted Pharmaceutical
              <br />
              Manufacturing{" "}
              <span className="font-normal text-black">Since 1995</span>
            </h1>
            <AnimatedText delay={0.2}>
              <p
                style={{
                  color: "#1f2937",
                  fontSize: screenSize.isMobile ? 14 : 16,
                  marginTop: 24,
                  lineHeight: 1.7,
                }}
              >
                Delivering safe, effective, and affordable medicines through
                GMP-compliant facilities, strong quality systems, and decades of
                industry expertise.
              </p>
            </AnimatedText>
            <div
              style={{
                display: "flex",
                gap: 12,
                marginTop: 32,
                flexWrap: "wrap",
              }}
            >
              <img
                src="./Partners.png"
                alt=""
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          </div>
        </SlideInFromLeft>
        <SlideInFromRight>
          <div
            style={{
              flex: 1,
              position: "relative",
              width: screenSize.isMobile ? "100%" : "100%",
            }}
          >
            <div
              style={{
                // background: "linear-gradient(135deg, #dde8f0 0%, #c5d8e8 100%)",
                borderRadius: 0,
                height: screenSize.isMobile
                  ? 300
                  : screenSize.isTablet
                    ? 400
                    : 560,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                position: "relative",
              }}
            >
             

              <img
                src="./home-page.jpg"
                style={{
                  width: "100%",
                  background: "transparent",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "left center",
                  marginLeft: screenSize.isMobile ? "0px" : "40px",
                }}
                alt=""
              />
             
            </div>
          </div>
        </SlideInFromRight>
      </section> */}

      {/* Partners Bar */}
      {/* <div
        style={{
          backgroundImage: `
          linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)),
          url('/warehouse-pharmacy.png')
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          padding: "28px 80px",
          display: "flex",
          gap: 48,
          opacity: 0.5,
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <span
          style={{
            color: "#c2c2c2",
            fontSize: 24,
            textAlign: "center",
            flex: "1 0 100%",
            letterSpacing: -0.4,
          }}
        >
          Our Trusted Group Companies and Strategic Partners
        </span>
        <div
          style={{
            display: "flex",
            gap: 48,
            alignItems: "center",
            flexWrap: "wrap",
            justifyContent: "center",
            width: "100%",
          }}
        >
          {[
            "Global Pharmaceuticals Pakistan",
            "Vision Pharmaceuticals (Pvt) Ltd.",
          ].map((p) => (
            <span
              key={p}
              style={{
                color: "#fff",
                fontSize: 22,
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 700,
              }}
            >
              {p}
            </span>
          ))}
        </div>
        {/* <img src="./p.png" alt="" style={{ width: 100, height: 100 }} /> */}
      <Trustedpartnersbanner></Trustedpartnersbanner>
      {/* Hero */}
      <HeroSlider></HeroSlider>
      {/* Our Journey */}
      <section
        style={{
          background: "#e6e6e6",
          padding: screenSize.isMobile
            ? "40px 20px 60px"
            : screenSize.isTablet
              ? "60px 40px 80px"
              : "80px 80px 100px",
        }}
      >
        <AnimatedSection>
          <div
            style={{
              textAlign: "center",
              marginBottom: 40,
              background: "transparent",
            }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-[#9d0b0f]">
              Our Journey
            </h2>
            <p
              style={{
                fontSize: screenSize.isMobile
                  ? 14
                  : screenSize.isTablet
                    ? 28
                    : 22,
                color: "#6b7280",
                fontWeight: 300,
              }}
            >
              of Growth, Innovation and Trust
            </p>
            <div
              style={{
                width: 130,
                height: 4,
                background: "#9d0b0f",
                borderRadius: 60,
                margin: "18px auto 0",
              }}
            />
          </div>
        </AnimatedSection>

        <Arrow></Arrow>
      </section>

      {/* Trusted Business Partners */}
      <section
        style={{
          background: "#FFFBFB ",
          padding: screenSize.isMobile
            ? "40px 20px 60px"
            : screenSize.isTablet
              ? "60px 40px 80px"
              : "80px 80px 100px",
        }}
      >
        <AnimatedSection>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 className="md:text-5xl text-3xl font-bold text-[#9d0b0f] text-center">
              Trusted Business Partners
            </h2>
            <div
              style={{
                width: 130,
                height: 4,
                background: "#9d0b0f",
                borderRadius: 60,
                margin: "18px auto 0",
              }}
            />
          </div>
        </AnimatedSection>

        <AnimatedText delay={0.3}>
          <p
            style={{
              textAlign: "center",
              fontSize: screenSize.isMobile
                ? 14
                : screenSize.isTablet
                  ? 16
                  : 18,
              color: "#1f2937",
              lineHeight: 1.7,
              maxWidth: 1100,
              margin: "0 auto 48px",
            }}
          >
            At Global Pharmaceuticals, we take pride in being a trusted contract
            manufacturing partner for leading national and multinational
            pharmaceutical companies. With state-of-the-art facilities,
            cutting-edge technology, and a team of highly skilled professionals,
            we ensure that every product manufactured under our roof meets the
            highest standards of quality, safety, and compliance. Our strong
            commitment to excellence, regulatory adherence, and timely delivery
            makes us the preferred choice for companies seeking reliable and
            efficient contract manufacturing solutions. We value long-term
            partnerships built on trust, transparency, and a shared vision to
            deliver quality healthcare to patients nationwide.
          </p>
        </AnimatedText>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: 20,
            maxWidth: 1200,
            margin: "0 auto",
          }}
        >
          {PARTNERS.map((p, idx) => (
            <ScaleInOnScroll key={p} delay={idx * 0.05}>
              <div
                style={{
                  background: "#fff",
                  borderRadius: 4,
                  padding: "20px 16px",
                  textAlign: "center",
                  fontSize: 16,
                  fontWeight: 500,
                  color: "#1f2937",
                  // boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#9d0b0f";
                  e.currentTarget.style.color = "#fff";
                  // e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.12)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#ffff";
                  e.currentTarget.style.color = "#000000";
                  // e.currentTarget.style.boxShadow = "0 1px 4px rgba(0,0,0,0.06)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {p}
              </div>
            </ScaleInOnScroll>
          ))}
        </div>
      </section>
      {/*/ <Map></Map> */}
      <StatsSection></StatsSection>
      {/* <section
        style={{
          background: "#fff",
          padding: "60px 80px",
          display: "flex",
          justifyContent: "center",
          gap: 0,
        }}
      >
        {[
          { num: "2000+", label: "Number of staff" },
          { num: "500+", label: "Number of Products" },
          { num: "200+", label: "Number of Distributors" },
        ].map((s, i) => (
          <div
            key={s.num}
            style={{
              flex: 1,
              maxWidth: 380,
              textAlign: "center",
              padding: "20px 40px",
              borderLeft: i > 0 ? "1px solid #000" : "none",
              borderRight: i < 2 ? "1px solid #000" : "none",
            }}
          >
            <div
              style={{
                fontSize: 72,
                fontWeight: 700,
                color: "#9d0b0f",
                letterSpacing: -1.5,
                lineHeight: 1,
              }}
            >
              {s.num}
            </div>
            <div style={{ fontSize: 20, color: "#030308", marginTop: 8 }}>
              {s.label}
            </div>
          </div>
        ))}
      </section> */}

      {/* Video / About Section */}

      {/* Accordion over video, outside video section */}

      <QFA></QFA>
      {/* Our Products */}

      {/* Our Products */}
      <section id="products" style={{ background: "#f5f7f9" }}>
        <ProductCarousel></ProductCarousel>
        {/* <ProductDetail></ProductDetail> */}
      </section>

      {/* CSR */}
      <section
        style={{
          backgroundImage: "url(./crs.png)", // ← Fixed: no space before url
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          padding: screenSize.isMobile
            ? "40px 20px 60px"
            : screenSize.isTablet
              ? "60px 40px 80px"
              : "80px 80px 100px",
          position: "relative", // Important for overlay
          minHeight: "400px",
          width: "100%", // Optional: give it some height
        }}
      >
        {/* Dark overlay so text is readable on the background image */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, 0.7)", // Darker overlay for better contrast
            zIndex: 1,
          }}
        />

        {/* Content - put on top of overlay */}
        <div style={{ position: "relative", zIndex: 2 }}>
          <AnimatedSection>
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <h2
                className="md:text-5xl text-3xl font-bold text-[#ffffff] text-center"
                style={{
                  // fontSize: "2rem",
                  color: "#ffffff", // Changed to white for better visibility
                  fontWeight: 700,
                  margin: 0,
                  textShadow: "0 2px 8px rgba(0,0,0,0.8)",
                }}
              >
                CSR
              </h2>
              <p
                className="md:text-2xl text-[16px]"
                style={{
                  fontSize: screenSize.isMobile
                    ? 20
                    : screenSize.isTablet
                      ? 28
                      : 36,
                  color: "#f0f0f0", // Light color
                  fontWeight: 300,
                  margin: 0,
                }}
              >
                Jamila Sultana Foundation
              </p>
              <div
                style={{
                  width: 130,
                  height: 4,
                  background: "#ffffff", // Changed to white
                  borderRadius: 60,
                  margin: "18px auto 0",
                }}
              />
            </div>
          </AnimatedSection>

          <AnimatedText delay={0.3}>
            <p
              style={{
                textAlign: "center",
                fontSize: screenSize.isMobile
                  ? 14
                  : screenSize.isTablet
                    ? 16
                    : 20,
                color: "#f8f8f8", // Light color
                lineHeight: 1.7,
                maxWidth: 900,
                margin: "0 auto",
                // textAlign: "justify"
              }}
            >
              Global Pharmaceuticals Pvt. Ltd. proudly supports the Jamila
              Sultana Foundation (JSF), a leading organization dedicated to the
              treatment and prevention of thalassemia in Pakistan. JSF currently
              provides quality care to over 1,326 patients from across the
              country, including remote regions. As one of Pakistan’s
              fastest-growing humanitarian health projects, it operates without
              reliance on government or private funding. With a clear vision to
              combat thalassemia as a national cause, JSF works with
              stakeholders to protect the health of future generations.
            </p>
            <div className="flex justify-center">
              <button
                onClick={() => router.push("/CRS")}
                className="mt-8 px-6 py-3 bg-[#9d0b0f] text-white rounded-md text-sm font-medium hover:bg-[#7a080a] transition-colors duration-300"
              >
                Learn More
              </button>
            </div>
          </AnimatedText>
        </div>
      </section>

      {/* Growing Presence */}
      <section
        style={{
          background: "#f5f7f9",
          padding: screenSize.isMobile
            ? "40px 20px 60px"
            : screenSize.isTablet
              ? "60px 40px 80px"
              : "80px 80px 100px",
        }}
      >
        <AnimatedSection>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <h2 className="md:text-5xl text-3xl font-bold text-[#9d0b0f]">
              Growing Presence
            </h2>
            <p
              style={{
                fontSize: screenSize.isMobile
                  ? 20
                  : screenSize.isTablet
                    ? 28
                    : 22,
                color: "#1f2937",
                fontWeight: 300,
                marginTop: 14,
              }}
            >
              in Global Markets
            </p>
            <div
              style={{
                width: 130,
                height: 4,
                background: "#9d0b0f",
                borderRadius: 60,
                margin: "18px auto 0",
              }}
            />
          </div>
        </AnimatedSection>
        <ScaleInOnScroll delay={0.3}>
          <div className="flex justify-center  mt-9">
            {/* <Image src="/map.png" alt="map" width={900} height={500} /> */}
            <Map></Map>
          </div>
        </ScaleInOnScroll>
      </section>

      {/* Gallery */}
      {/* <section style={{ background: "#fff", padding: "40px 0", overflowX: "hidden" }}>
  <div style={{ display: "flex", gap: 20, padding: "0 80px" }}>
    {[
      { bg: 'url("/two.png") center/cover no-repeat', label: "Warehouse & Pharmacy" },
      { bg: 'url("/one.png") center/cover no-repeat', label: "Pharmaceutical Factory" },
      { bg: 'url("/three.png") center/cover no-repeat', label: "Manufacturing Facility" },
    ].map((g, i) => (
      <div
        key={i}
        style={{
          flex: 1,
          height: 280,
          borderRadius: 16,
          background: g.bg,
          display: "flex",
          alignItems: "flex-end",
          padding: 20,
          opacity: i === 0 ? 1 : 0.55,
          transition: "opacity 0.3s",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = i === 0 ? "1" : "0.55")}
      >
        <span style={{ color: "#fff", fontSize: 14, fontWeight: 600 }}>
          {g.label}
        </span>
      </div>
    ))}
  </div>
</section> */}
      <ImageSlider></ImageSlider>

      {/* Footer */}
      <Footer></Footer>
    </div>
  );
}
