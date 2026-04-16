/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect, useCallback, useRef } from 'react';
import { useResponsive } from './useResponsive';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence, useAnimation } from 'motion/react';

const ImageSlider = () => {
  const screenSize = useResponsive();
  const [mounted, setMounted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const slides = [
    { 
      bg: '/slider-1.webp', 
      label: "Pharmaceutical Factory" 
    },
    { 
      bg: '/slider-2.webp', 
      label: "Warehouse & Pharmacy" 
    },
    { 
      bg: '/slider-3.webp', 
      label: "Manufacturing Facility" 
    },
    { 
      bg: '/slider-4.webp', 
      label: "Pharmaceutical Factory" 
    },
    { 
      bg: '/slider-5.webp', 
      label: "Warehouse & Pharmacy" 
    },
    { 
      bg: '/slider-6.webp', 
      label: "Manufacturing Facility" 
    },
    { 
      bg: '/slider-7.webp', 
      label: "Pharmaceutical Factory" 
    },
    { 
      bg: '/slider-8.webp', 
      label: "Warehouse & Pharmacy" 
    },
    { 
      bg: '/slider-9.webp', 
      label: "Manufacturing Facility" 
    },
    { 
      bg: '/slider-10.webp', 
      label: "Pharmaceutical Factory" 
    },
    { 
      bg: '/slider-11.webp', 
      label: "Warehouse & Pharmacy" 
    },
    { 
      bg: '/slider-12.webp', 
      label: "Manufacturing Facility" 
    },
    { 
      bg: '/slider-13.webp', 
      label: "Pharmaceutical Factory" 
    },
    { 
      bg: '/slider-14.webp', 
      label: "Warehouse & Pharmacy" 
    },
    { 
      bg: '/slider-15.webp', 
      label: "Manufacturing Facility" 
    },
    { 
      bg: '/slider-16.webp', 
      label: "Pharmaceutical Factory" 
    },
    { 
      bg: '/slider-17.webp', 
      label: "Warehouse & Pharmacy" 
    },
    { 
      bg: '/slider-18.webp', 
      label: "Manufacturing Facility" 
    },
    { 
      bg: '/slider-19.webp', 
      label: "Pharmaceutical Factory" 
    },
    { 
      bg: '/slider-20.webp', 
      label: "Warehouse & Pharmacy" 
    },
    { 
      bg: '/slider-21.webp', 
      label: "Manufacturing Facility" 
    },
    { 
      bg: '/slider-22.webp', 
      label: "Pharmaceutical Factory" 
    },
    { 
      bg: '/slider-23.webp', 
      label: "Warehouse & Pharmacy" 
    },
    { 
      bg: '/slider-24.webp', 
      label: "Manufacturing Facility" 
    },
    // { 
    //   bg: '/slider-25.webp', 
    //   label: "Warehouse & Pharmacy" 
    // },
   
  ];

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  if (!mounted) return null;

  // For a 3-up display, we want to show the currentIndex in the middle.
  // We'll calculate which indices are Left, Center, and Right.
  const getIndex = (offset) => {
    return (currentIndex + offset + slides.length) % slides.length;
  };

  const visibleIndices = screenSize.isMobile 
    ? [currentIndex] 
    : [getIndex(-1), currentIndex, getIndex(1)];

  return (
    <section 
      className="bg-[#f8f9fa] py-12 md:py-24 overflow-hidden relative select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-12 mb-12">
       <h2 className="md:text-5xl text-3xl font-bold text-[#9d0b0f] align-center  text-center">Our Gallery</h2>
            <p
              style={{
                fontSize: screenSize.isMobile
                  ? 20
                  : screenSize.isTablet
                    ? 28
                    : 22,
                color: "#1f2937",
                fontWeight: 300,
                textAlign:"center"
              }}
            >
              Explore more about us 
            </p>
      </div>
      <div className="max-w-[100%] mx-auto px-4 md:px-12 relative h-[220px] md:h-[320px]">
        {/* Static Navigation Arrows (Desktop) */}
        {!screenSize.isMobile && (
          <>
            <div className="absolute left-4 top-0 bottom-0 flex items-center justify-center z-30 pointer-events-none">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevSlide}
                className="w-14 h-14 bg-black rounded-full flex items-center justify-center text-white cursor-pointer shadow-2xl pointer-events-auto"
              >
                <ArrowLeft size={24} strokeWidth={2.5} />
              </motion.button>
            </div>
            <div className="absolute right-4 top-0 bottom-0 flex items-center justify-center z-30 pointer-events-none">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextSlide}
                className="w-14 h-14 bg-black rounded-full flex items-center justify-center text-white cursor-pointer shadow-2xl pointer-events-auto"
              >
                <ArrowRight size={24} strokeWidth={2.5} />
              </motion.button>
            </div>
          </>
        )}

        <div className="flex items-center justify-center h-full gap-4 md:gap-8 relative">
          <AnimatePresence initial={false} mode="popLayout">
            {visibleIndices.map((slideIdx, position) => {
              const isCenter = screenSize.isMobile ? position === 0 : position === 1;

              return (
                <motion.div
                  key={`${slideIdx}-${position}`}
                  initial={{ 
                    opacity: 0, 
                    x: direction > 0 ? 120 : -120,
                    scale: 0.95 
                  }}
                  animate={{ 
                    opacity: 1, 
                    x: 0,
                    scale: isCenter ? 1 : 0.95,
                    zIndex: isCenter ? 10 : 5
                  }}
                  exit={{ 
                    opacity: 0, 
                    x: direction > 0 ? -120 : 120,
                    scale: 0.95 
                  }}
                  transition={{ 
                    duration: 0.55,
                    ease: "easeOut"
                  }}
                  className="relative flex-shrink-0 h-full rounded-xl overflow-hidden shadow-lg bg-white"
                  style={{
                    width: screenSize.isMobile ? "100%" : "calc(33.33% - 20px)",
                  }}
                >
                  {/* Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${slides[slideIdx].bg})` }}
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Mobile Navigation Dots */}
        {screenSize.isMobile && (
          <div className="flex justify-center gap-2 mt-8">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? "bg-black w-6" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ImageSlider;
