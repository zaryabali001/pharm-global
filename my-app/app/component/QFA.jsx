'use client';

import React, { useState } from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import { useResponsive } from './useResponsive';

const ACCORDION = [
  {
    num: "01",
    title: "Committed to Advancing Healthcare",
    desc: "Global Pharmaceuticals is dedicated to the development and manufacturing of high-quality pharmaceutical products that meet both local and international standards.",
  },
  {
    num: "02",
    title: "Driven by Expertise and Dedication",
    desc: "Our team of experienced professionals drives innovation and excellence in every product we manufacture.",
  },
  {
    num: "03",
    title: "Quality at the Core of Everything We Do",
    desc: "Rigorous quality control processes ensure every product meets the highest standards of safety and efficacy.",
  },
  {
    num: "04",
    title: "Modern Facilities, Reliable Manufacturing",
    desc: "State-of-the-art GMP-compliant manufacturing facilities ensure consistent, reliable production at scale.",
  },
];

const QFA = () => {
  const screenSize = useResponsive();
  const [activeAccordion, setActiveAccordion] = useState(0);

  return (
    <div className="flex justify-center px-4 -mt-24 py-12">
      <section
        className="w-full max-w-[1080px] bg-[#9d0b0f] rounded-xl overflow-hidden shadow-xl"
        style={{
          margin: screenSize.isMobile ? '60px 0 100px' : '80px 0 120px',
        }}
      >
        {ACCORDION.map((item, index) => (
          <div
            key={item.num}
            onClick={() => setActiveAccordion(index)}
            className={`
              border-b border-[#e03b44] last:border-none cursor-pointer 
              transition-all duration-300 hover:bg-[#a51419]
            `}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 sm:px-8 py-5 sm:py-6 gap-4">
              <div className="flex items-center gap-4 sm:gap-6 flex-1 min-w-0">
                {/* Number */}
                <span 
                  className={`font-bold text-[#ffc9c9] transition-all duration-300
                    ${screenSize.isMobile ? 'text-2xl' : 'text-3xl sm:text-4xl'}`}
                >
                  {item.num}
                </span>

                {/* Title */}
                <h3 
                  className={`font-semibold text-white leading-tight transition-all duration-300
                    ${screenSize.isMobile 
                      ? 'text-base' 
                      : 'text-xl sm:text-2xl'}`}
                >
                  {item.title}
                </h3>
              </div>

              {/* Arrow */}
              <div 
                className={`
                  text-white text-2xl sm:text-3xl transition-transform duration-300 flex-shrink-0
                  ${activeAccordion === index ? 'rotate-180' : 'rotate-0'}
                `}
              >
                <IoIosArrowUp />
              </div>
            </div>

            {/* Content */}
            <div 
              className={`
                overflow-hidden transition-all duration-300 px-5 sm:px-8
                ${activeAccordion === index 
                  ? 'max-h-96 opacity-100 pb-6 sm:pb-8' 
                  : 'max-h-0 opacity-0'
                }
              `}
            >
              <div 
                className={`
                  text-[#f8f8f8] leading-relaxed
                  ${screenSize.isMobile ? 'text-sm pl-9' : 'text-base pl-14 sm:pl-16'}
                `}
              >
                {item.desc}
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default QFA;