/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { FaPhoneAlt } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { IoMdMail } from 'react-icons/io'
import { useResponsive } from './useResponsive'

const Footer = () => {
  const screenSize = useResponsive();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const footerPadding = screenSize.isMobile ? "40px 16px 0" : screenSize.isTablet ? "60px 40px 0" : "80px 80px 0";
  const contactFontSize = screenSize.isMobile ? 14 : 18;
  const headingFontSize = screenSize.isMobile ? 18 : screenSize.isTablet ? 22 : 28;
  const gap = screenSize.isMobile ? 24 : 48;
  const flexBasis = screenSize.isMobile ? "100%" : "360px";
  const logoHeight = screenSize.isMobile ? "25px" : "35px";
  const iconSize = screenSize.isMobile ? 16 : 20;

  return (
    <div>
      {/* Footer */}
      <footer style={{ background: "#86070a", padding: footerPadding, marginTop: screenSize.isMobile ? 20 : 0 }}>
        <div style={{ 
          display: "flex", 
          gap: gap, 
          flexWrap: "wrap", 
          paddingBottom: screenSize.isMobile ? 40 : 60, 
          borderBottom: "1px solid rgba(255,255,255,0.15)",
          textAlign: screenSize.isMobile ? 'center' : 'left'
        }}>
          {/* Brand */}
          <div style={{ flex: screenSize.isMobile ? "0 0 100%" : "0 0 360px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: screenSize.isMobile ? "center" : "flex-start", gap: 12, marginBottom: 20 }}>
              <Link href="/" style={{ cursor: "pointer" }}>
                <img src="/footerLogo-updated.png" style={{height: logoHeight}} alt="Global Pharma Logo" />
              </Link>
            </div>
            <p style={{ color: "#f6fafb", fontSize: contactFontSize, lineHeight: 1.8, margin: 0 }}>
              We are committed to manufacturing and delivering high-quality pharmaceutical products that meet stringent regulatory standards.
            </p>
          </div>

          {/* Quick Links */}
          <div style={{ flex: 1, minWidth: screenSize.isMobile ? "100%" : "auto" }}>
            <h3 style={{ color: "#fff", fontSize: headingFontSize, fontWeight: 700, marginBottom: screenSize.isMobile ? 16 : 32, marginTop: 0 }}>Quick Links</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: screenSize.isMobile ? 10 : 14 }}>
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Our Products", href: "/products" },
                { label: "Career", href: "/career" },
                { label: "Contact us", href: "/contact" }
              ].map(link => (
                <Link key={link.href} href={link.href} style={{ color: "#f6fafb", fontSize: contactFontSize, textDecoration: "none", transition: "color 0.3s ease" }} onMouseEnter={(e) => e.target.style.color = "#d4d4d4"} onMouseLeave={(e) => e.target.style.color = "#f6fafb"}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* More Links */}
          <div style={{ flex: 1, minWidth: screenSize.isMobile ? "100%" : "auto" }}>
            <h3 style={{ color: "#fff", fontSize: headingFontSize, fontWeight: 700, marginBottom: screenSize.isMobile ? 16 : 32, marginTop: 0 }}>Quick Links</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: screenSize.isMobile ? 10 : 14 }}>
              {[
                { label: "Policy Statement", href: "#" },
                { label: "Apply for other departments", href: "/Form" },
                { label: "Apply for sales", href: "/Form" }
              ].map(link => (
                <Link key={link.label} href={link.href} style={{ color: "#f6fafb", fontSize: contactFontSize, textDecoration: "none", transition: "color 0.3s ease" }} onMouseEnter={(e) => e.target.style.color = "#d4d4d4"} onMouseLeave={(e) => e.target.style.color = "#f6fafb"}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Location */}
          <div style={{ flex: 1, minWidth: screenSize.isMobile ? "100%" : "auto" }}>
            <h3 style={{ color: "#fff", fontSize: headingFontSize, fontWeight: 700, marginBottom: screenSize.isMobile ? 16 : 32, marginTop: 0 }}>Our Location</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: screenSize.isMobile ? 14 : 20 }}>
              <div style={{ display: "flex", gap: 14, alignItems: "flex-start", justifyContent: screenSize.isMobile ? "center" : "flex-start" }}>
                <span style={{ color: "#fff", fontSize: iconSize, marginTop: 2 }}>
                  <FaLocationDot />
                </span>
                <span style={{ color: "#f6fafb", fontSize: contactFontSize, lineHeight: 1.6 }}> Plot # 22-23, Industrial Triangle, <br />Kahuta Road , Islamabad</span>
              </div>
              <div style={{ display: "flex", gap: 14, alignItems: "center", justifyContent: screenSize.isMobile ? "center" : "flex-start" }}>
                <span style={{ color: "#fff", fontSize: iconSize }}>
                  <FaPhoneAlt />
                </span>
                <a href="tel:+92-51-449-302" style={{ color: "#f6fafb", fontSize: contactFontSize, textDecoration: "none", transition: "color 0.3s ease" }} onMouseEnter={(e) => e.target.style.color = "#d4d4d4"} onMouseLeave={(e) => e.target.style.color = "#f6fafb"}>+92-51-449-302</a>
              </div>
              <div style={{ display: "flex", gap: 14, alignItems: "center", justifyContent: screenSize.isMobile ? "center" : "flex-start" }}>
                <span style={{ color: "#fff", fontSize: iconSize }}>
                  <IoMdMail />
                </span>
                <a href="mailto:info@globalpharmaceuticalspk.com" style={{ color: "#f6fafb", fontSize: contactFontSize, textDecoration: "none", transition: "color 0.3s ease" }} onMouseEnter={(e) => e.target.style.color = "#d4d4d4"} onMouseLeave={(e) => e.target.style.color = "#f6fafb"}>info@globalpharmaceuticalspk.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div style={{ padding: screenSize.isMobile ? "20px 0" : "28px 0", color: "#f6fafb", fontSize: contactFontSize, textAlign: screenSize.isMobile ? 'center' : 'left' }}>
          © 2025 Global Pharmaceuticals. All Rights Reserved.
        </div>
      </footer>   
    </div>
  )
}

export default Footer