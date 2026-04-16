"use client"
import React, { useEffect, useState } from "react";

// /*
//   Card positions are % of the container (top/left).
//   Map image is 1270×638 px, black background, hexagon world map.
//   Geographic mapping (approximate % on this specific image):
//     Afghanistan : left≈55%, top≈26%
//     Pakistan    : left≈58%, top≈33%
//     Sri Lanka   : left≈63%, top≈47%
//     Bangladesh  : left≈67%, top≈34%
//     Philippines : left≈81%, top≈32%
//     Cambodia    : left≈76%, top≈39%
// */

// const COUNTRIES = [
//   {
//     name: "Afghanistan",
//     style: { top: "20%", left: "52%" },
//     delay: 0,
//     flag: (
//       <svg viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
//         <rect width="14.6" height="44" fill="#000" />
//         <rect x="14.6" width="14.8" height="44" fill="#D32011" />
//         <rect x="29.4" width="14.6" height="44" fill="#007A3D" />
//         <circle cx="22" cy="22" r="7" fill="none" stroke="#FFD700" strokeWidth="1.2" />
//         <circle cx="22" cy="22" r="3" fill="#FFD700" />
//       </svg>
//     ),
//   },
//   {
//     name: "Pakistan",
//     style: { top: "30%", left: "56%" },
//     delay: 120,
//     flag: (
//       <svg viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
//         <rect width="44" height="44" fill="#01411C" />
//         <rect width="11" height="44" fill="#fff" />
//         <path d="M25 14 a8 8 0 1 1 0 16 a6 6 0 1 0 0-16" fill="#fff" />
//         <polygon points="31,18 33,22 31,26 29,22" fill="#fff" transform="rotate(-30,30,22)" />
//       </svg>
//     ),
//   },
//   {
//     name: "Bangladesh",
//     style: { top: "30%", left: "65%" },
//     delay: 200,
//     flag: (
//       <svg viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
//         <rect width="44" height="44" fill="#006A4E" />
//         <circle cx="20" cy="22" r="12" fill="#F42A41" />
//       </svg>
//     ),
//   },
//   {
//     name: "Sri Lanka",
//     style: { top: "44%", left: "62%" },
//     delay: 300,
//     flag: (
//       <svg viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
//         <rect width="44" height="44" fill="#8D153A" />
//         <rect x="4"  width="6"  height="44" fill="#FF7518" />
//         <rect x="10" width="6"  height="44" fill="#006A4E" />
//         <rect x="16" width="28" height="44" fill="#8D153A" />
//         <rect x="18" y="6" width="24" height="32" rx="2" fill="#FFD100" />
//         <rect x="20" y="9" width="20" height="26" rx="1" fill="#8D153A" />
//         <line x1="30" y1="10" x2="30" y2="34" stroke="#FFD100" strokeWidth="2" />
//         <circle cx="22" cy="22" r="4" fill="none" stroke="#FFD100" strokeWidth="1.5" />
//       </svg>
//     ),
//   },
//   {
//     name: "Cambodia",
//     style: { top: "36%", left: "75%" },
//     delay: 380,
//     flag: (
//       <svg viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
//         <rect width="44" height="44" fill="#032EA1" />
//         <rect y="13" width="44" height="18" fill="#E00025" />
//         <rect y="16" width="44" height="12" fill="#fff" />
//         <polygon
//           points="22,13 23.5,17 28,17 24.5,19.5 25.8,24 22,21.5 18.2,24 19.5,19.5 16,17 20.5,17"
//           fill="#032EA1"
//           transform="scale(0.75) translate(7.5,7)"
//         />
//       </svg>
//     ),
//   },
//   {
//     name: "Philippines",
//     style: { top: "26%", left: "80%" },
//     delay: 460,
//     flag: (
//       <svg viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
//         <rect width="44" height="22" fill="#0038A8" />
//         <rect y="22" width="44" height="22" fill="#CE1126" />
//         <polygon points="0,0 22,22 0,44" fill="#FCD116" />
//         <circle cx="8" cy="22" r="4" fill="#FCD116" />
//         <circle cx="8" cy="22" r="2" fill="#0038A8" />
//         <circle cx="15" cy="14" r="1.5" fill="#FCD116" />
//         <circle cx="15" cy="30" r="1.5" fill="#FCD116" />
//         <circle cx="5"  cy="22" r="1.5" fill="#FCD116" />
//       </svg>
//     ),
//   },
// ];

// function CountryCard({ country, visible }) {
//   const [hovered, setHovered] = useState(false);

  // return (
//     <div
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       style={{
//         position: "absolute",
//         ...country.style,
//         display: "flex",
//         alignItems: "center",
//         gap: 10,
//         background: "#fff",
//         borderRadius: 10,
//         padding: "8px 16px 8px 8px",
//         boxShadow: hovered
//           ? "0 10px 32px rgba(0,0,0,0.5)"
//           : "0 4px 20px rgba(0,0,0,0.35)",
//         whiteSpace: "nowrap",
//         cursor: "default",
//         opacity: visible ? 1 : 0,
//         transform: hovered ? "translateY(-4px) scale(1.04)" : "translateY(0) scale(1)",
//         animation: visible
//           ? `cardPop 0.5s cubic-bezier(.22,.68,0,1.2) ${country.delay}ms both`
//           : "none",
//         transition: "transform 0.28s cubic-bezier(.22,.68,0,1.15), box-shadow 0.22s",
//         zIndex: 2,
//       }}
//     >
//       {/* Flag circle */}
//       <div
//         style={{
//           width: 44,
//           height: 44,
//           borderRadius: "50%",
//           overflow: "hidden",
//           flexShrink: 0,
//           border: "2px solid #eee",
//         }}
//       >
//         {country.flag}
//       </div>

//       {/* Country name */}
//       <span
//         style={{
//           fontSize: 14,
//           fontWeight: 600,
//           color: "#1a1a2e",
//           letterSpacing: "0.01em",
//         }}
//       >
//         {country.name}
//       </span>
//     </div>
//   );
// }

import { useResponsive } from "./useResponsive";

export default function Map() {
  const screenSize = useResponsive();
  const [mounted, setMounted] = useState(false);
  const [iframeSrc, setIframeSrc] = useState("");

  useEffect(() => {
    // eslint-disable-next-line
    setMounted(true);
    setIframeSrc(`/map_animated.html?ts=${Date.now()}`);
  }, []);

  if (!mounted) return null;

  const containerWidth = screenSize.isMobile ? "100vw" : "100%";
  const maxWidth = screenSize.isMobile ? "100vw" : "100%";
  const aspectRatio = 1270 / 638; // Map aspect ratio

  return (
    <div style={{ 
      width: "100%", 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center", 
      padding: screenSize.isMobile ? "0" : "40px 0px",
      overflowX: screenSize.isMobile ? "hidden" : "visible",
      marginLeft: screenSize.isMobile ? "calc(-50vw + 50%)" : undefined,
      marginRight: screenSize.isMobile ? "calc(-50vw + 50%)" : undefined,
    }}>
      <div style={{
        width: containerWidth,
        maxWidth: maxWidth,
        aspectRatio: `${aspectRatio}`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "0 auto",
        boxSizing: "border-box",
        minHeight: screenSize.isMobile ? 340 : undefined,
      }}>
        <iframe
          src={iframeSrc}
          title="Map"
          scrolling="no"
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            borderRadius: "8px",
            display: "block",
          }}
        />
      </div>
    </div>
  );
} 