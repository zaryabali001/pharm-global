/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { FiMail, FiPhone, FiMenu, FiX } from "react-icons/fi";
import { useResponsive, getResponsiveValue } from "./useResponsive";

const NAV_LINKS = [
  { label: "About us", href: "/about" },
  { label: "Manufacturing Facilities", href: "/Manufacturing" },
  { label: "Products", href: "/products" },
  { label: "Pharmacovigilance", href: "/Form" },
  { label: "News & Blog", href: "", disabled: true },
  { label: "CRS", href: "/CRS" },
  { label: "Careers", href: "/career" },
  { label: "Contact us", href: "/contact" },
];

const LANGUAGES = [
  { label: "English (US)", value: "en-US" },
  { label: "Urdu", value: "ur" },
  { label: "Arabic", value: "ar" },
  { label: "French", value: "fr" },
];

const Header = () => {
  const screenSize = useResponsive();
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(LANGUAGES[0].value);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !screenSize) return null;

  const isMobile = screenSize.isMobile;
  const isTablet = screenSize.isTablet;

  // Responsive values
  const headerPadding = getResponsiveValue("12px 16px", "16px 40px", "16px 80px", screenSize);
  const logoWidth = getResponsiveValue(180, 160, 350, screenSize);
  const navPadding = getResponsiveValue("0", "0 40px", "0 80px", screenSize);
  const navGap = getResponsiveValue(0, 40, 80, screenSize);
  const topBarPadding = getResponsiveValue("0", "8px 40px", "8px 80px", screenSize);
  const navFontSize = getResponsiveValue(16, 16, 18, screenSize);
  const mobileMenuTop = getResponsiveValue("64px", "70px", "70px", screenSize);

  return (
    <div>
      {/* Top Contact Bar - Hidden on Mobile */}
      {!isMobile && (
        <div
          style={{
            background: "#f5f7f9",
            padding: topBarPadding,
            display: "flex",
            justifyContent: "flex-end",
            gap: 32,
            fontSize: 14,
            color: "#333",
            alignItems: "center",
          }}
        >
          <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <FiPhone size={18} color="#9d0b0f" />
            +92 51 449 302
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <FiMail size={18} color="#9d0b0f" />
            info@globalpharmaceuticalspk.com
          </span>
        </div>
      )}

      {/* Main Header */}
      <header
        style={{
          background: "#fff",
          padding: headerPadding,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
          position: "relative",
          zIndex: 1001,
        }}
      >
        <Link href="/" style={{ display: "flex", alignItems: "center" }}>
          <img
                      src="/Logo-updated.png"
            style={{ width: logoWidth, cursor: "pointer" }}
            alt="Global Pharmaceuticals - Home"
          />
        </Link>

        {!isMobile && (
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              style={{
                background: "#f6f8fa",
                borderRadius: 8,
                padding: "7px 16px",
                display: "flex",
                alignItems: "center",
                gap: 6,
                fontSize: 13,
                color: "#525866",
              }}
            >
              <CiSearch size={18} />
              <input
                type="search"
                placeholder="search"
                style={{
                  border: "none",
                  background: "transparent",
                  outline: "none",
                  width: "180px",
                }}
              />
            </div>

            <div
              style={{
                background: "#fff",
                border: "1px solid #e2e4e9",
                borderRadius: 10,
                padding: "6px 12px",
                fontSize: 12,
                color: "#000000",
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              <span className="text-lg">
                <img src="/United-States.png" alt="" />
              </span>
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                style={{
                  border: "none",
                  background: "transparent",
                  outline: "none",
                  fontSize: 12,
                  color: "#000",
                  cursor: "pointer",
                }}
              >
                {LANGUAGES.map((language) => (
                  <option key={language.value} value={language.value}>
                    {language.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}

        {isMobile && (
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              background: "none",
              border: "none",
              fontSize: 28,
              color: "#9d0b0f",
              cursor: "pointer",
              padding: 4,
            }}
          >
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        )}
      </header>

      {/* Mobile Menu - Lowered on screens 820px and below */}
      {isMobile && isMobileMenuOpen && (
        <div
          style={{
            background: "#9d0b0f",
            padding: "20px 16px",
            position: "fixed",
            // Lower the menu on smaller screens (≤ 820px)
            top: mobileMenuTop,
            left: 0,
            width: "100%",
            zIndex: 1000,
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            maxHeight: "calc(100vh - 70px)",
            overflowY: "auto",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => !link.disabled && setIsMobileMenuOpen(false)}
                style={{
                  color: link.disabled ? "#9ca3af" : "#fff",
                  fontSize: 16,
                  fontWeight: 600,
                  textDecoration: "none",
                  padding: "10px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.1)",
                  pointerEvents: link.disabled ? "none" : "auto",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div style={{ marginTop: 24 }}>
            <div
              style={{
                background: "#fff",
                borderRadius: 8,
                padding: "12px 16px",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <CiSearch size={20} color="#666" />
              <input
                type="search"
                placeholder="Search products..."
                style={{
                  border: "none",
                  background: "transparent",
                  outline: "none",
                  width: "100%",
                  fontSize: 15,
                }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Desktop Navigation */}
      {!isMobile && (
        <nav
          style={{
            background: "#9d0b0f",
            padding: navPadding,
            display: "flex",
            justifyContent: "center",
            gap: navGap,
            alignItems: "center",
            height: 56,
          }}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              style={{
                color: link.disabled ? "#770010" : "#fff",
                fontSize: navFontSize,
                fontWeight: 700,
                textDecoration: "none",
                whiteSpace: "nowrap",
                pointerEvents: link.disabled ? "none" : "auto",
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </div>
  );
};

export default Header;
