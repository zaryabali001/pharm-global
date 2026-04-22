/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useResponsive } from "../component/useResponsive";
import {
  AnimatedSection,
  AnimatedText,
  SlideInFromLeft,
  SlideInFromRight,
} from "../component/AnimatedSection";
import Image from "next/image";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { ALL_PRODUCTS } from "../component/Products";

const NAV_LINKS = [
  "About us",
  "Manufacturing Facilities",
  "Products",
  "PharmaCovigilance",
  "News & Blog",
  "Careers",
  "Contact us",
];

const PRODUCT_STYLING = {
  "Pelton-C": {
    color: "#1a7f7a",
    bgGradient: "linear-gradient(135deg, #e0f2f1 0%, #b2dfdb 100%)",
  },
  "Vonoglob 10mg": {
    color: "#3b5bdb",
    bgGradient: "linear-gradient(135deg, #e8f0fe 0%, #c5cae9 100%)",
  },
  "Glomov 500mg/20mg": {
    color: "#111111",
    bgGradient: "linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)",
  },
  "Artinil-K 75mg": {
    color: "#1a7f7a",
    bgGradient: "linear-gradient(135deg, #e0f7fa 0%, #b2ebf2 100%)",
  },
  "Nalbin 20mg Injection": {
    color: "#c0392b",
    bgGradient: "linear-gradient(135deg, #fbe9e7 0%, #ffccbc 100%)",
  },
  "Anzonil 3mg": {
    color: "#555555",
    bgGradient: "linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%)",
  },
  "Citolin 250mg Injection": {
    color: "#4f8566",
    bgGradient: "linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)",
  },
  "Piractim 1gm Injection": {
    color: "#406da5",
    bgGradient: "linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)",
  },
  "Tamsol-D": {
    color: "#147ea2",
    bgGradient: "linear-gradient(135deg, #e0f7fa 0%, #b2ebf2 100%)",
  },
  "Norbac 1gm IM": {
    color: "#d41a21",
    bgGradient: "linear-gradient(135deg, #ffebee 0%, #ffcdd2 100%)",
  },
};

const DEFAULT_STYLING = {
  color: "#ff6b6b",
  bgGradient: "linear-gradient(135deg, #ffeaa7 0%, #fab1a0 100%)",
};

const IMAGE_OVERRIDES = {
  "Alergocit 5mg": "Alergocit Tablets 10's.png",
  "Aloram 0.25mg": "Aloram-0.25.png",
  "Aloram 0.5mg": "Aloram-0.5.png",
  "Aloram 1mg": "Aloram-1mg.png",
  "Anzonil 3mg": "Anzonil.png",
  "Aptizole 40mg": "Aptizole.png",
  "Artinil-K 75mg": "Artinil-K75mg.png",
  "Artinil-K 50mg": "Artinil-K-50mg.png",
  "Artinil-K Gel": "Artinil-K-Gel.png",
  "Articure 2ml Injection": "Articure.png",
  "Begent Cream": "Begent.png",

  "Citolin 500mg" : "Citolin-500mg.png",
  "Citolin 250mg inj":"Citolin-250mg.png", //not woking
  "Cialox 500mg": "Cialox.png",
  "Cidekel 4mg": "Cidekel.png",
  "Citolin 250mg Injection": "Citolin-250mg Injection.png",
  "Cure-B 0.5mg": "Cure-B 0.5mg.png",
  "Cure-C Forte": "Cure-C.png",
  "Cox-2 100mg": "Cox-2.png",
  "Calciferol Injection": "Calciferol-inj.png",

  "Deroxat CR 12.5mg" :"Deroxat-12.5.png",
  "Deroxat CR 25mg" :"Deroxat 25.png",
  "Dudex 30mg": "Dudex 30.png", 
  "Dudex 60mg": "Dudex 60.png",
  "Duron 20mg": "Duron 20.png",
  "Duron 30mg": "Duron 30.png",
  "Duoglob": "Duoglob.png", //not working

  "Esolex 5mg" : "Esolex-5mg.png",
  "Esolex 10mg" : "Esolex-10mg.png",
  "Ecogab 50mg": "Ecogab50.png",
  "Ecogab 75mg": "Ecogab 75.png",
  "Eppra 250mg": "Eppra 250 mg.png",
  "Eppra 500mg": "Eppra 500 mg.png",
  "Eppra 500mg/5ml Injection": "Eppra Injection.png",
  "Esocue 40mg Injection":"Esocue Injection.png",

  "Fadiphine 0mg": "Fadiphine 10.png",
  "Fadiphine 20mg": "Fadiphine 20.png",
  "Fadiphine 40mg": "Fadiphine 40.png",
  "Falcitrin Injection": "Falcitrin Injection.png",
  "Fevonor Injection": "Fevonor Injection.png",
  "Fungicure 150mg":"Fungicure-150mg.png",

  "Globiphlor 80/80mg":'Globiphlor Tablets.png',
  "Globiphlor 40/0.04mg Injection":'Globiphlor Injection.png',
  "Glodium 2mg" : "Glodium.png",
  "Glopez 1gm Injection": "Glopez 1 gm.png",
  "Glopez 2gm Injection": "Glopez 2 gm.png",
  "Gloral":"Gloral Tablets.png",
  "Gloral Forte ":"Gloral-Forte.png", //not working
  "Glomov 375mg/20mg": "Glomov 375.png",
  "Glomov 500mg/20mg": "Glomov 500.png",
  "G-fer Injection":"G-fer.png",

  "Incrit-M 50/1000mg": "Incrit-M 50+1000mg.png",
  "Incrit-M 50/500mg": "Incrit-M 50+500mg.png",

  "Jazin-M 12.5mg/1000mg": "Jazin-M 1000mg.png",
  "Jazin-M 12.5mg/500mg": "Jazin-M 500mg.png",

  "Levaq 250mg": "Levaq 250 mg.png",
  "Levaq 500mg": "Levaq 500 mg.png",
  "Levozine 5mg": "Levozine.png",
  "Linzy 600mg": "Linzy Tablets.png",
  "Lodine 10mg": "Lodine.png",
  "Lincolide 600mg Injection": "Lincolide Injection 25's.png",

  "Merem 1gm Injection": "Merem 1 gm.png",
  "Merem 500mg Injection": "Merem 500.png",
  "Mibeglo 25mg": "Mibeglo 25.png",
  "Mibeglo 50mg": "Mibeglo 50.png",
  "Mobicam 20mg Capsule": "Mobicam Capsules.png",
  "Mobicam 20mg Injection": "Mobicam Injection.png",
  "Mobicam Gel": "Mobicam Gel.png",
  "Mobix 15mg": "Mobix 15mg.png",
  "Mobix 7.5mg": "Mobix 7.5.png",
  "Monokast 10mg": "Monokast 10 mg.png",

  "Nafcin 250mg": "Nafcin 250.png",
  "Nafcin 500mg": "Nafcin 500 mg.png",
  // "Norbac 0.5gm IM": "Norbac 1 gm IM.png",
  "Norbac 1gm IM": "Norbac 1 gm IM.png",
  "Norbac 1gm IV": "Norbac 1gm IV.png",
  "Norbac 250mg IM": "Norbac 250mg IM.png",
  "Norbac 250mg IV": "Norbac 250mg IV.png",
  "Norbac 2gm IV": "Norbac 2 gm IV.png",
  "Norbac 500mg IM": "Norbac 500mg IM.png",
  "Norbac 500mg IV": "Norbac 500mg IV.png",
  "Nalbin 20mg Injection": "Nalbin 20.png",

  "Opinor Injection": "Opinor.png",

  "P-Cyclo 20mg": "P-Cyclo.png",
  "Pelton Suspension": "Pelton Suspension.png",
  "Pelton-C": "Pelton-C Tablets.png",
  "Pelton-C Suspension": "Pelton-C Syrup.png",
  "Pelton-V": "Pelton-V Tablets.png",
  "Pelton-V Suspension": "Pelton-V Tablets.png",
  "Peridal 1mg": "Peridal 1.png",
  "Peridal 2mg": "Peridal 2.png",
  "Peridal 3mg": "Peridal 3.png",
  "Peridal 4mg": "Peridal 4.png",
  "Phusilan Cream": "Phusilan Cream.png",
  "Promig 550mg": "Promig.png",

  "Rama-D 100mg Injection": "Rama-D Injection 10's.png",
  "Rama-D 50mg Capsule": "Rama-D Capsules.png",
  "Rama-D Injection 5's": "Rama-D Injection 5's.png",
  "Rovast 10mg": "Rovast 10.png",
  "Rovast 20mg": "Rovast 20.png",
  "Rovast 5mg": "Rovast 5mg.png",
  "Rapid 20mg": "Rapid 20 mg Caps.png",
  "Rapid 40mg": "Rapid 40 mg Capsules.png",

  "Sebesta 10mg": "Sebesta.png",
  "Sulprex 25mg": "Sulprex-25mg.png",
  "Sulprex 50mg": "Sulprex-50mg.png",
  "Sildin 4mg":"Sildin 4 mg.png",
  "Sildin 8mg":"Sildin 8 mg.png",
  "Solicept 5mg":"Solicept 5 mg.png",
  "Solicept 10mg":"Solicept 10 mg.png",

  "Tamsol-D": "Tamsol-D.png",
  "Tineacort Cream": "Tineacort.png",
  "Tizadin 2mg": "Tizadin 2 mg.png",
  "Toralac 30mg Injection": "Toralac Injection.png",
  "Transolide 500mg Capsule": "Transolide 500 mg Capsules.png",
  "Transolide 500mg Injection": "Transolide 500 mg Injection.png",

  "Vonoglob 10mg": "vonoglob 10.png",
  "Vonoglob 20mg": "vonoglob 20.png",
  "Viro-B 300mg": "Viro-B Tablets.png",

  "Xefra 500mg": "Xefra 500mg.png",
  "Xefra 250mg": "Xefra 250 mg.png",
  "Xymox 400mg": "Xymox.png",

  "Zoycin 2.25gm Injection": "Zoycin 2.25 g.png",
  "Zoycin 4.5gm Injection": "Zoycin 4.5g.png",
  // Additional entries can be added as needed
};

const getGlobalPharmaImage = (name) => {
  const override = IMAGE_OVERRIDES[name];
  if (override) return `/Global-Pharma/${override}`;

  const normalized = name
    .replace(/\s*\/\s*/g, " + ")
    .replace(/1gm\b/gi, "1 gm")
    .replace(/(\d+)mg\b/gi, "$1")
    .replace(/\bInjection\b/gi, "Inj")
    .replace(/\bCapsules\b/gi, "Capsules")
    .replace(/\bCapsule\b/gi, "Capsule")
    .replace(/\bTablets\b/gi, "Tablets")
    .replace(/\bTablet\b/gi, "Tablet")
    .replace(/\bSyrup\b/gi, "Syrup")
    .replace(/\s+/g, " ")
    .trim();

  return `/Global-Pharma/${normalized}.png`;
};

export default function ProductDetail({ productName = "Pelton-C", onBack }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Find product from ALL_PRODUCTS array
  const productData = ALL_PRODUCTS.find((p) => p.name === productName);
  const styling = PRODUCT_STYLING[productName] || DEFAULT_STYLING;

  const product = productData
    ? {
        name: productData.name,
        category: productData.category,
        generic: productData.generic,
        form: productData.form,
        reg: productData.reg,
        essential: productData.essential,
        packSize: productData.packSize,
        description:
          productData.description ||
          `${productData.name} is a premium pharmaceutical product designed to deliver superior quality and efficacy. It contains ${productData.generic} in ${productData.form} form and is registered under number ${productData.reg}.`,
        img: productData.image
          ? productData.image
          : getGlobalPharmaImage(productData.name),
        prescribingInfo: "Detailed prescribing information available",
        ...styling,
      }
    : {
        name: productName,
        category: "Pharmaceutical",
        generic: "Not available",
        form: "Not specified",
        reg: "N/A",
        essential: false,
        packSize: "N/A",
        description: "Product details not available. Please check back later.",
        img: "/Product-images/placeholder.png",
        prescribingInfo: "Detailed prescribing information available",
        ...DEFAULT_STYLING,
      };

  const screenSize = useResponsive();
  const router = useRouter();

  if (!screenSize) return null;

  console.log("Current Product:", productName);
  console.log("Product Data:", product);

  const handleBack = () => {
    if (typeof onBack === "function") {
      onBack();
    } else {
      // Navigate to home page and scroll to products section
      router.push("/products");
      setTimeout(() => {
        const productSection = document.getElementById("products");
        if (productSection) {
          productSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  const styles = {
    page: {
      background: "#eef0f3",
      minHeight: "auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'Outfit', sans-serif",
      padding: screenSize.isMobile
        ? "20px"
        : screenSize.isTablet
          ? "40px 20px"
          : "80px 20px",
    },
    container: {
      display: "flex",
      flexDirection: screenSize.isMobile ? "column" : "row",
      alignItems: screenSize.isMobile ? "center" : "flex-start",
      gap: screenSize.isMobile ? "24px" : screenSize.isTablet ? "40px" : "60px",
      maxWidth: "1000px",
      width: "100%",
    },
    imageBox: {
      background: "#fff",
      borderRadius: "12px",
      // padding: screenSize.isMobile ? '16px' : screenSize.isTablet ? '20px' : '24px',
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minWidth: screenSize.isMobile
        ? "100%"
        : screenSize.isTablet
          ? "280px"
          : "320px",
      width: screenSize.isMobile ? "100%" : "auto",
      // minHeight: screenSize.isMobile ? '200px' : screenSize.isTablet ? '240px' : '10px',
      flexShrink: 0,
      boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      position: "relative",
      overflow: screenSize.isMobile ? "hidden" : "visible",
    },
    infoBox: {
      display: "flex",
      flexDirection: "column",
      gap: screenSize.isMobile ? "12px" : "16px",
      flex: 1,
    },
    backBtn: {
      border: "none",
      background: "transparent",
      color: "#9d0b0f",
      fontWeight: 700,
      cursor: "pointer",
      fontSize: screenSize.isMobile ? "12px" : "16px",
      marginBottom: 0,
      position: "absolute",
      top: "-50px",
      left: "12px",
      zIndex: 10,
    },
    mobileBackBtn: {
      display: screenSize.isMobile ? "block" : "none",
      border: "none",
      background: "transparent",
      color: "#9d0b0f",
      fontWeight: 700,
      cursor: "pointer",
      fontSize: "16px",
      marginBottom: "16px",
      alignSelf: "flex-start",
    },
    productName: {
      fontFamily: "'Times New Roman', serif",
      fontSize: screenSize.isMobile
        ? "28px"
        : screenSize.isTablet
          ? "32px"
          : "40px",
      fontWeight: 700,
      color: "#9d0b0f",
      margin: 0,
    },
    description: {
      fontSize: screenSize.isMobile
        ? "16px"
        : screenSize.isTablet
          ? "15px"
          : "17px",
      color: "#333",
      lineHeight: 1.7,
      margin: 0,
    },
    prescribingLink: {
      fontSize: screenSize.isMobile ? "12px" : "16px",
      color: "#111",
      fontWeight: 600,
      textDecoration: "underline",
      cursor: "pointer",
    },
    orderBtn: {
      background: "#9d0b0f",
      color: "#fff",
      border: "none",
      borderRadius: "6px",
      padding: screenSize.isMobile ? "12px 0" : "16px 0",
      width: screenSize.isMobile ? "100%" : "220px",
      fontSize: screenSize.isMobile ? "12px" : "16px",
      fontWeight: 600,
      cursor: "pointer",
    },
    footerText: {
      fontSize: screenSize.isMobile
        ? "12px"
        : screenSize.isTablet
          ? "13px"
          : "16px",
      color: "#555",
      lineHeight: 1.7,
    },
  };

  return (
    <div
      style={{
        fontFamily: "'Outfit', sans-serif",
        background: "#fff",
        overflowX: "hidden",
      }}
    >
      <Header></Header>
      {/* <nav style={{ 
        background: "#9d0b0f", 
        padding: screenSize.isMobile ? "0 16px" : screenSize.isTablet ? "0 30px" : "0 80px", 
        display: screenSize.isMobile && !mobileMenuOpen ? "none" : "flex",
        flexDirection: screenSize.isMobile ? 'column' : 'row',
        justifyContent: screenSize.isMobile ? "flex-start" : "center", 
        gap: screenSize.isMobile ? 0 : screenSize.isTablet ? 20 : 32, 
        alignItems: screenSize.isMobile ? 'stretch' : "center", 
        height: screenSize.isMobile ? 'auto' : screenSize.isTablet ? 48 : 56,
        paddingTop: screenSize.isMobile ? '12px' : 0,
        paddingBottom: screenSize.isMobile ? '12px' : 0,
        overflowX: screenSize.isMobile ? 'visible' : 'visible'
      }}>
        {NAV_LINKS.map((l) => <span key={l} style={{ color: '#fff', fontSize: screenSize.isMobile ? 13 : screenSize.isTablet ? 12 : 14, fontWeight: 700, cursor: 'pointer', padding: screenSize.isMobile ? '10px 0' : '0', borderBottom: screenSize.isMobile ? '1px solid rgba(255,255,255,0.1)' : 'none' }}>{l}</span>)}
      </nav> */}

      <div style={styles.page}>
        <div style={styles.container}>
          <button style={styles.mobileBackBtn} onClick={handleBack}>
            ← Back to products
          </button>
          <SlideInFromLeft>
            <div style={styles.imageBox}>
              <button style={styles.backBtn} onClick={handleBack}>
                ← Back to products
              </button>
              {product.img ? (
                <img
                  src={product.img}
                  alt={productName}
                  style={{
                    width: "200%",
                    height: "40%",
                    maxWidth: "580px",
                    maxHeight: "280px",
                    objectFit: "contain",
                  }}
                />
              ) : (
                <div
                  style={{
                    background: product.bgGradient,
                    borderRadius: "8px",
                    padding: "20px",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <h1
                    style={{ fontSize: 72, color: product.color, opacity: 0.3 }}
                  >
                    {productName.slice(0, 1)}
                  </h1>
                </div>
              )}
            </div>
          </SlideInFromLeft>
          <SlideInFromRight>
            <div style={styles.infoBox}>
              <AnimatedText>
                <h1 style={styles.productName}>{productName}</h1>
              </AnimatedText>
              <AnimatedText>
                <p style={{ color: "black", fontWeight: "bold" }}>
                  Each tablet contains:
                </p>
              </AnimatedText>

              <AnimatedText delay={0.1}>
                <p style={styles.description}>{product.description}</p>
              </AnimatedText>
              {product.packSize && (
                <AnimatedText delay={0.05}>
                  <p
                    style={{
                      fontSize: screenSize.isMobile
                        ? "16px"
                        : screenSize.isTablet
                          ? "18px"
                          : "20px",
                      color: "#9D0B0F",
                      fontWeight: 600,
                      margin: "4px 0 8px 0",
                    }}
                  >
                    <span
                      style={{
                        textDecoration: "underline",
                      }}
                    >
                      Pack Size:{" "}
                    </span>
                    <span
                      style={{
                        color: "#000000",
                        fontWeight: 700,
                        textDecoration: "none",
                      }}
                    >
                      {product.packSize}
                    </span>
                  </p>
                </AnimatedText>
              )}
              {/*               
              <AnimatedText delay={0.2}>
                <a href='#' style={styles.prescribingLink}>{product.prescribingInfo}</a>
              </AnimatedText> */}
              <AnimatedText delay={0.3}>
                {/* <button style={styles.orderBtn} onClick={() => alert('Order functionality not implemented')} >Order</button> */}
              </AnimatedText>
              {/* <AnimatedText delay={0.4}>
                <p style={styles.footerText}>For product related details, contact our sales team or medical representative.</p>
              </AnimatedText> */}
            </div>
          </SlideInFromRight>
        </div>
      </div>

      {/* <footer style={{ background: '#86070a', padding: screenSize.isMobile ? '40px 16px 0' : screenSize.isTablet ? '60px 30px 0' : '80px 80px 0' }}>
        <div style={{ display: 'flex', gap: screenSize.isMobile ? 24 : screenSize.isTablet ? 30 : 48, flexWrap: 'wrap', paddingBottom: screenSize.isMobile ? 30 : 60, borderBottom: '1px solid rgba(255,255,255,0.15)' }}>
          <AnimatedSection delay={0}>
            <div style={{ flex: screenSize.isMobile ? '0 0 100%' : '0 0 360px' }}>
                <img src="/Global_White.svg" style={{height: screenSize.isMobile ? "35px" : "50px"}} alt="" />
              <p style={{ color: '#f6fafb', fontSize: screenSize.isMobile ? 14 : screenSize.isTablet ? 15 : 16, lineHeight: 1.8, margin: screenSize.isMobile ? '10px 0 0' : '16px 0 0' }}>We are committed to manufacturing and delivering high-quality pharmaceutical products that meet stringent regulatory standards.</p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div style={{ flex: 1, minWidth: screenSize.isMobile ? '100%' : '200px' }}><h3 style={{ color: '#fff', fontSize: screenSize.isMobile ? 20 : screenSize.isTablet ? 24 : 28, fontWeight: 700, marginBottom: screenSize.isMobile ? 16 : 32, marginTop: 0 }}>Quick Links</h3><div style={{ display: 'flex', flexDirection: 'column', gap: screenSize.isMobile ? 10 : 14 }}>{['Home','About Us','Our Products','Career','Contact us'].map(l => <span key={l} style={{ color: '#f6fafb', fontSize: screenSize.isMobile ? 14 : screenSize.isTablet ? 15 : 16, cursor: 'pointer' }}>{l}</span>)}</div></div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div style={{ flex: 1, minWidth: screenSize.isMobile ? '100%' : '200px' }}><h3 style={{ color: '#fff', fontSize: screenSize.isMobile ? 20 : screenSize.isTablet ? 24 : 28, fontWeight: 700, marginBottom: screenSize.isMobile ? 16 : 32, marginTop: 0 }}>Policies</h3><div style={{ display: 'flex', flexDirection: 'column', gap: screenSize.isMobile ? 10 : 14 }}>{['Policy Statement','Apply for other departments','Apply for sales'].map(l => <span key={l} style={{ color: '#f6fafb', fontSize: screenSize.isMobile ? 14 : screenSize.isTablet ? 15 : 16, cursor: 'pointer' }}>{l}</span>)}</div></div>
          </AnimatedSection>
          {!screenSize.isMobile && <AnimatedSection delay={0.3}>
            <div style={{ flex: 1 }}><h3 style={{ color: '#fff', fontSize: screenSize.isTablet ? 24 : 28, fontWeight: 700, marginBottom: 32, marginTop: 0 }}>Our Location</h3><div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}><div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}><span style={{ color: '#fff', fontSize: 20, marginTop: 2 }}>📍</span><span style={{ color: '#f6fafb', fontSize: screenSize.isTablet ? 15 : 16, lineHeight: 1.6 }}>Industrial Area,<br/>Islamabad, Pakistan</span></div><div style={{ display: 'flex', gap: 14, alignItems: 'center' }}><span style={{ color: '#fff', fontSize: 18 }}>📞</span><span style={{ color: '#f6fafb', fontSize: screenSize.isTablet ? 15 : 16 }}>+92-51-449-302</span></div><div style={{ display: 'flex', gap: 14, alignItems: 'center' }}><span style={{ color: '#fff', fontSize: 18 }}>✉</span><span style={{ color: '#f6fafb', fontSize: screenSize.isTablet ? 14 : 15 }}>info@globalpharmaceuticalspk.com</span></div></div></div>
          </AnimatedSection>}
        </div>
        <div style={{ padding: screenSize.isMobile ? '16px 0' : '28px 0', color: '#f6fafb', fontSize: screenSize.isMobile ? 14 : 16 }}>© 2025 Global Pharmaceuticals. All Rights Reserved.</div>
      </footer> */}
      <Footer></Footer>
    </div>
  );
}
