import { useState, useEffect } from "react";

export const useResponsive = () => {
  const [screenSize, setScreenSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setScreenSize({
        width,
        isMobile: width < 768,
        isTablet: width >= 768 && width < 1024,
        isDesktop: width >= 1024,
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenSize;
};

export const getResponsiveValue = (mobile, tablet, desktop, screenSize) => {
  if (screenSize.isMobile) return mobile;
  if (screenSize.isTablet) return tablet;
  return desktop;
};
