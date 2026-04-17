/* eslint-disable @next/next/no-img-element */
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

const TimelineText = ({
  year,
  title,
  description,
  align = "left",
  className = "",
  delay = 0,
}) => (
  <div
    className={`flex flex-col ${align === "right" ? "items-start" : "items-end"} text-left ${className} pointer-events-none`}
  >
    <motion.span
      initial={{ opacity: 0, scale: 0, y: -50 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.3,
        ease: "easeOut",
        delay: delay,
        type: "spring",
        stiffness: 220,
        damping: 12,
        bounce: 0.3
      }}
      className="md:text-7xl text-4xl font-bold text-[#9d0b0f] leading-none -mb-3 select-none"
    >
      {year}
    </motion.span>
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.25,
        ease: "easeOut",
        delay: delay,
        type: "spring",
        stiffness: 180,
        damping: 14
      }}
      className="space-y-0.5 relative z-10"
    >
      <h4 className="md:text-[16px] text-[12px] font-bold text-black uppercase tracking-tight">
        {title}
      </h4>
      <p className="md:text-[12px] text-[10px] text-black leading-relaxed max-w-65 text-left">
        {description}
      </p>
    </motion.div>
  </div>
);

const Chevron = ({ x, delay }) => (
  <motion.path
    d={`M ${x + 45} 5 L ${x + 5} 50 L ${x + 45} 95`}
    fill="none"
    stroke="currentColor"
    strokeWidth="10"
    strokeLinecap="round"
    strokeLinejoin="round"
    initial={{ opacity: 0.02 }}
    animate={{
      opacity: [0.02, 0.15, 0.02],
      x: [4, -8, 4],
    }}
    transition={{
      duration: 0.7,
      repeat: Infinity,
      delay: delay,
      ease: "easeInOut",
    }}
  />
);

export default function Arrow() {
  return (
    <div className="min-h-screen  bg-[#E6E6E6] -mt-10 flex items-center justify-center p-2 md:p-4 font-sans overflow-hidden">
      {/* Desktop Timeline - Hidden on Mobile */}
      <div className="hidden bg-[#E6E6E6]  md:block relative w-full md:max-w-7xl h-auto md:h-200">
        {/* Central Graphic */}
        <div className="absolute top-1/2 left-1/2 bg-[#E6E6E6] -translate-x-1/2 -translate-y-1/2 w-40 h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 border-8 md:border-16 border-red-800 flex items-center justify-center  shadow-sm">
          <div className="relative w-full h-full flex bg-[#E6E6E6]  items-center justify-center text-gray-400">
            <img src="/arrow-logo.svg" alt="" width={250} background={["#FEF2F2"]} />
          </div>
        </div>

        {/* SVG Layer for Lines and Dots */}
        <svg
          className="absolute inset-0 w-full  h-full pointer-events-none overflow-visible"
          viewBox="0 0 1000 700"
        >
          {/* 1995 Line - Top Center */}
          <motion.path
            d="M 500 300 L 500 120 L 540 120"
            fill="none"
            stroke="black"
            strokeWidth="1.5"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.circle
            cx="500"
            cy="310"
            r="6"
            fill="white"
            stroke="white"
            strokeWidth="2.5"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
          />

          {/* 2002 Line - Top Left */}
          <motion.path
            d="M 425 335 L 425 280 L 240 280"
            fill="none"
            stroke="black"
            strokeWidth="1.5"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.circle
            cx="425"
            cy="335"
            r="6"
            fill="white"
            stroke="white"
            strokeWidth="2.5"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
          />

          {/* 2008 Line - Middle Left */}
          <motion.path
            d="M 410 410 L 240 410"
            fill="none"
            stroke="black"
            strokeWidth="1.5"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.circle
            cx="410"
            cy="410"
            r="6"
            fill="white"
            stroke="white"
            strokeWidth="2.5"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
          />

          {/* 2012 Line - Middle Right */}
          <motion.path
            d="M 590 380 L 780 380 "
            fill="none"
            stroke="black"
            strokeWidth="1.5"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.circle
            cx="590"
            cy="380"
            r="6"
            fill="white"
            stroke="white"
            strokeWidth="2.5"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
          />

          {/* 2009 Line - Bottom Center */}
          <motion.path
            d="M 500 490 L 500 580 L 580 580"
            fill="none"
            stroke="black"
            strokeWidth="1.5"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.circle
            cx="500"
            cy="490"
            r="6"
            fill="white"
            stroke="white"
            strokeWidth="2.5"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
          />
        </svg>

        {/* Text Blocks */}

        {/* 1995 - Top Right */}
        <TimelineText
          year="1995"
          title="Company Established"
          description="Global Pharmaceutical was founded in August 1995 to provide high-quality, affordable medicines in Pakistan."
          align="right"
          delay={0.5}
          className="hidden md:block absolute top-[8%] left-[60%]"
        />

        {/* 2002 - Top Left */}
        <TimelineText
          year="2002"
          title="Market Development Phase"
          description="Started by importing pharmaceutical products from Korea and Malaysia, building nationwide trust."
          align="left"
          delay={0.8}
          className="hidden md:block absolute top-[26%] left-[8%]"
        />

        {/* 2008 - Middle Left */}
        <TimelineText
          year="2008"
          title="ISO Certification Achieved"
          description="Achieved ISO 9001:2008 certification, strengthening our commitment to global quality standards."
          align="left"
          delay={1.0}
          className="hidden md:block absolute top-[52%] left-[10%]"
        />

        {/* 2009 - Bottom Center */}
        <TimelineText
          year="2009"
          title="ISO Certification Achieved"
          description="Established modern manufacturing facilities in compliance with cGMP guidelines, strengthening in-house production."
          align="right"
          delay={1.2}
          className="hidden md:block absolute bottom-[8%] left-[58%]"
        />

        {/* 2012 - Middle Right */}
        <TimelineText
          year="2012"
          title="Portfolio & Infrastructure Growth"
          description="Expanded portfolio across CNS, Anti-Infectives, Gastroenterology, and other key segments while strengthening Quality Control and R&D."
          align="right"
          delay={1.8}
          className="hidden md:block absolute top-[40%] right-[0%]"
        />
      </div>

      {/* Mobile Timeline - Visible on Mobile Only */}
      <div className="md:hidden w-full max-w-2xl px-4">
        <div className="space-y-8">
          {/* Timeline Item 1995 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="flex gap-4"
          >
            <div className="flex flex-col items-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{
                  duration: 0.25,
                  delay: 0.1,
                  type: "spring",
                  stiffness: 220,
                  damping: 12,
                  bounce: 0.3
                }}
                className="w-4 h-4 rounded-full bg-[#911526] border-4 border-white shadow-md"
              />
              <div className="w-1 h-12 bg-[#9d0b0f] mt-4" />
            </div>
            <div className="pt-1 pb-8">
              <motion.h3
                initial={{ opacity: 0, scale: 0, y: -30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 0.25,
                  delay: 0.1,
                  type: "spring",
                  stiffness: 200,
                  damping: 12,
                  bounce: 0.3
                }}
                className="text-3xl font-bold text-[#9d0b0f] mb-2"
              >
                1995
              </motion.h3>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.2,
                  delay: 0.1,
                  type: "spring",
                  stiffness: 150,
                  damping: 14
                }}
              >
                <h4 className="text-sm font-bold text-black uppercase tracking-tight mb-2">Company Established</h4>
                <p className="text-xs text-black leading-relaxed">Global Pharmaceutical was founded in August 1995 to provide high-quality, affordable medicines in Pakistan.</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Timeline Item 2002 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.2 }}
            className="flex gap-4"
          >
            <div className="flex flex-col items-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{
                  duration: 0.25,
                  delay: 0.2,
                  type: "spring",
                  stiffness: 220,
                  damping: 12,
                  bounce: 0.3
                }}
                className="w-4 h-4 rounded-full bg-[#911526] border-4 border-white shadow-md"
              />
              <div className="w-1 h-12 bg-[#9d0b0f] mt-4" />
            </div>
            <div className="pt-1 pb-8">
              <motion.h3
                initial={{ opacity: 0, scale: 0, y: -30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 0.25,
                  delay: 0.2,
                  type: "spring",
                  stiffness: 200,
                  damping: 12,
                  bounce: 0.3
                }}
                className="text-3xl font-bold text-[#9d0b0f] mb-2"
              >
                2002
              </motion.h3>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.2,
                  delay: 0.2,
                  type: "spring",
                  stiffness: 150,
                  damping: 14
                }}
              >
                <h4 className="text-sm font-bold text-black uppercase tracking-tight mb-2">Market Development Phase</h4>
                <p className="text-xs text-black leading-relaxed">Started by importing pharmaceutical products from Korea and Malaysia, building nationwide trust.</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Timeline Item 2008 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.3 }}
            className="flex gap-4"
          >
            <div className="flex flex-col items-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{
                  duration: 0.25,
                  delay: 0.3,
                  type: "spring",
                  stiffness: 220,
                  damping: 12,
                  bounce: 0.3
                }}
                className="w-4 h-4 rounded-full bg-[#911526] border-4 border-white shadow-md"
              />
              <div className="w-1 h-12 bg-[#9d0b0f] mt-4" />
            </div>
            <div className="pt-1 pb-8">
              <motion.h3
                initial={{ opacity: 0, scale: 0, y: -30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 0.25,
                  delay: 0.3,
                  type: "spring",
                  stiffness: 200,
                  damping: 12,
                  bounce: 0.3
                }}
                className="text-3xl font-bold text-[#9d0b0f] mb-2"
              >
                2008
              </motion.h3>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.2,
                  delay: 0.3,
                  type: "spring",
                  stiffness: 150,
                  damping: 14
                }}
              >
                <h4 className="text-sm font-bold text-black uppercase tracking-tight mb-2">ISO Certification Achieved</h4>
                <p className="text-xs text-black leading-relaxed">Achieved ISO 9001:2008 certification, strengthening our commitment to global quality standards.</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Timeline Item 2009 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.4 }}
            className="flex gap-4"
          >
            <div className="flex flex-col items-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{
                  duration: 0.25,
                  delay: 0.4,
                  type: "spring",
                  stiffness: 220,
                  damping: 12,
                  bounce: 0.3
                }}
                className="w-4 h-4 rounded-full bg-[#911526] border-4 border-white shadow-md"
              />
              <div className="w-1 h-12 bg-[#9d0b0f] mt-4" />
            </div>
            <div className="pt-1 pb-8">
              <motion.h3
                initial={{ opacity: 0, scale: 0, y: -30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 0.25,
                  delay: 0.4,
                  type: "spring",
                  stiffness: 200,
                  damping: 12,
                  bounce: 0.3
                }}
                className="text-3xl font-bold text-[#9d0b0f] mb-2"
              >
                2009
              </motion.h3>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.2,
                  delay: 0.4,
                  type: "spring",
                  stiffness: 150,
                  damping: 14
                }}
              >
                <h4 className="text-sm font-bold text-[#911526] uppercase tracking-tight mb-2">Modern Facilities</h4>
                <p className="text-xs text-gray-500 leading-relaxed">Established modern manufacturing facilities in compliance with cGMP guidelines, strengthening in-house production.</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Timeline Item 2012 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.5 }}
            className="flex gap-4"
          >
            <div className="flex flex-col items-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{
                  duration: 0.25,
                  delay: 0.5,
                  type: "spring",
                  stiffness: 220,
                  damping: 12,
                  bounce: 0.3
                }}
                className="w-4 h-4 rounded-full  bg-[#911526] border-4 border-white shadow-md"
              />
              <div className="w-1 h-12 bg-[#9d0b0f] tmt-4" />
            </div>
            <div className="pt-1">
              <motion.h3
                initial={{ opacity: 0, scale: 0, y: -30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 0.25,
                  delay: 0.5,
                  type: "spring",
                  stiffness: 200,
                  damping: 12,
                  bounce: 0.3
                }}
                className="text-3xl font-bold text-[#9d0b0f] mb-2"
              >
                2012
              </motion.h3>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.2,
                  delay: 0.5,
                  type: "spring",
                  stiffness: 150,
                  damping: 14
                }}
              >
                <h4 className="text-sm font-bold text-[#911526] uppercase tracking-tight mb-2">Portfolio & Infrastructure Growth</h4>
                <p className="text-xs text-gray-500 leading-relaxed">Expanded portfolio across CNS, Anti-Infectives, Gastroenterology, and other key segments while strengthening Quality Control and R&D.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}