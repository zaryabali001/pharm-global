'use client';

import React, { useState } from 'react'
import { IoIosArrowUp } from 'react-icons/io'
import { useResponsive } from './useResponsive'

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
  const screenSize = useResponsive()
  const [activeAccordion, setActiveAccordion] = useState(0)

  return (
    <div>
      <section
        style={{
          position: 'absolute',
          background: 'rgba(171, 13, 13, 0.95)',
          marginTop:"60px",
        //   top: screenSize.isMobile ? 5200 : screenSize.isTablet ? 3400 : 3730,
          left: '50%',
          transform: 'translateX(-50%)',
          width: screenSize.isMobile ? '95%' : '90%',
          maxWidth: 1080,
          zIndex: 10,
          margin: '12px 0 320px 0',
        }}
      >
        {ACCORDION.map((a, i) => (
          <div
            key={a.num}
            onClick={() => setActiveAccordion(i)}
            style={{
              background:
                activeAccordion === i
                  ? 'rgba(207, 26, 26, 0.95)'
                  : 'rgba(187, 14, 14, 0.85)',
              borderBottom: '1px solid #e03b44',
              cursor: 'pointer',
              transition: 'all 0.3s',
              padding: screenSize.isMobile ? '10px 16px' : '16px 24px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 12,
                flexWrap: screenSize.isMobile ? 'wrap' : 'nowrap',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <span
                  style={{ fontSize: screenSize.isMobile ? 20 : 28, fontWeight: 700, color: '#ffc9c9' }}
                >
                  {a.num}
                </span>
                <span style={{ fontSize: screenSize.isMobile ? 14 : 20, fontWeight: 700, color: '#fff' }}>
                  {a.title}
                </span>
              </div>
              <span
                style={{
                  color: '#fff',
                  fontSize: screenSize.isMobile ? 18 : 22,
                  transform: activeAccordion === i ? 'rotate(180deg)' : 'none',
                  transition: 'transform 0.2s',
                }}
              >
                <IoIosArrowUp />
              </span>
            </div>
            {activeAccordion === i && (
              <div
                style={{
                  marginTop: 10,
                  color: '#f8f8f8',
                  fontSize: screenSize.isMobile ? 12 : 16,
                  lineHeight: 1.6,
                  paddingLeft: screenSize.isMobile ? 30 : 52,
                }}
              >
                {a.desc}
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
  )
}

export default QFA