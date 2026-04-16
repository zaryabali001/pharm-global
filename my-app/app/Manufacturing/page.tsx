/* eslint-disable @next/next/no-img-element */
"use client";

import { CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import StatsCards from "../component/StatsCards";

const CheckItem = ({ text }: { text: string }) => (
  <div className="flex items-center gap-2">
    <CheckCircle2 className="w-5 h-5 text-[#9D0B0F]" />
    <span className="text-xs font-bold text-[#1F2937]  uppercase tracking-wider">
      {text}
    </span>
  </div>
);

const SectionHeader = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) => (
  <div className="text-left md:text-center space-y-2 mb-8 md:mb-12">
    <h2 className="text-2xl md:text-3xl font-bold text-[#9D0B0F] leading-tight">{title}</h2>
    {subtitle && (
      <p className="text-sm md:text-lg text-gray-500 font-medium">{subtitle}</p>
    )}
    <div className="w-12 md:w-16 h-1 bg-[#9D0B0F] ml-0 md:mx-auto mt-2 md:mt-4 rounded-full" />
  </div>
);

const ProductionCard = ({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white rounded-sm overflow-hidden shadow-sm border border-gray-100 flex flex-col"
  >
    <div className="h-32 md:h-40 lg:h-48 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
    </div>
    <div className="p-4 md:p-6 flex flex-col grow text-left">
      <h3 className="text-sm md:text-base lg:text-lg font-bold text-gray-900 mb-2 md:mb-3">{title}</h3>
      <p className="text-xs md:text-sm text-[#1F2937] leading-relaxed mb-4 md:mb-6 grow">
        {description}
      </p>
      {/* <button className="w-full py-2 md:py-2.5 bg-gray-200 text-black text-xs font-bold uppercase tracking-widest rounded-md hover:bg-gray-100 transition-colors">
        Learn more
      </button> */}
    </div>
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#1F2937] ">
      <Header></Header>
      {/* Hero Section */}
      <section className="relative grid grid-cols-1 lg:grid-cols-2 items-stretch min-h-[500px]">
        <div className="p-6 md:p-12 lg:p-24 flex flex-col justify-center space-y-6 md:space-y-8 bg-gray-100">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4 md:space-y-6"
          >
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-5xl lg:text-5xl font-bold text-[#9D0B0F] "
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-5xl"
              >
                Manufacturing
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-5xl"
              >
                Facilities
              </motion.span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-lg text-[#1F2937] leading-relaxed max-w-md"
            >
              From a small marketing venture to one of Pakistan&apos;s
              fast-growing pharmaceutical manufacturers producing a wide range
              of medicines and healthcare products for patients across the
              country.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 lg:gap-6 pt-4 pr-4 md:pr-9">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <CheckItem text="CGMP CERTIFIED" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                <CheckItem text="STERILE MANUFACTURING" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4, duration: 0.5 }}
              >
                <CheckItem text="NATIONWIDE DISTRIBUTION" />
              </motion.div>
            </div>
          </motion.div>
        </div>
        <div className="relative h-64 sm:h-80 md:h-96 lg:h-auto overflow-hidden">
          <img
            src="/Manufacturing-updated.webp"
            alt="Manufacturing Facility"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* Foundation Section */}
      <section className="py-12 md:py-16 md:text-center text-left lg:py-24 px-4 md:px-6 lg:px-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}

          
        >
          <SectionHeader
            title="Built On A Foundation"
            subtitle="Of Trust & Quality"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 w-full items-center gap-8 lg:gap-16">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-4 md:space-y-6 text-sm md:text-base lg:text-lg text-[#1F2937] leading-relaxed max-w-lg mx-auto lg:mx-0"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
              className="hover:text-gray-800 text-[18px] transition-colors duration-300 text-start"
            >
              Global Pharmaceuticals (Pvt.) Ltd. was established in August 1995
              and is headquartered in Islamabad. The company began as a
              marketing organization importing finished pharmaceutical products
              from Korea and Malaysia for the local market.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
              className="hover:text-gray-800 text-[18px] transition-colors duration-300 text-start"
            >
              With growing demand for quality medicines in Pakistan, the company
              expanded its operations and began manufacturing its own
              pharmaceutical products improving availability and affordability
              for patients across the country.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.6, ease: "easeOut" }}
              className="hover:text-gray-800 text-[18px] transition-colors duration-300 text-start"
            >
              Today, Global Pharmaceuticals employs many qualified professionals
              and maintains a strong distribution network supplying medicines to
              hospitals, pharmacies, and healthcare institutions throughout
              Pakistan.
            </motion.p>
          </motion.div>

          {/* Image / Infographic Side */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative w-full max-w-sm md:max-w-md lg:max-w-lg"
            >
              {/* Image Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
                className="p-4 md:p-6 lg:p-8 rounded-sm overflow-hidden flex items-center justify-center bg-gradient-to-br from-white to-gray-50 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <StatsCards></StatsCards>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Production Sections */}
      <section className="py-12 md:py-16 lg:py-24 bg-gray-50 px-4 md:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Production Sections"
            subtitle="CGMP Compliant Manufacturing"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <ProductionCard
              image="/m-section1.png"
              title="Non-Sterile Section"
              description="Produces tablets, capsules and syrups under controlled processes for quality and accuracy."
            />
            <ProductionCard
              image="/m-section2.png"
              title="Liquid Injectable Section"
              description="Produces sterile injectable medicines in controlled environments to ensure safety."
            />
            <ProductionCard
              image="/m-section3.png"
              title="Carbapenem Injectable Section"
              description="Produces high-potency antibiotics under strict contamination control."
            />
            <ProductionCard
              image="/m-section4.png"
              title="Penicillin Injectable Section"
              description="Produces penicillin antibiotics in isolated facilities to prevent cross-contamination."
            />
            <ProductionCard
              image="/m-section5.png"
              title="Cephalosporin Injectable Section"
              description="Produces cephalosporins in dedicated sterile facility to prevent cross-contamination."
            />
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section className="py-12 md:py-16 lg:py-24 px-4 md:px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4 md:space-y-6"
          >
            <div className="space-y-2">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-2xl md:text-3xl font-bold text-[#9D0B0F]"
              >
                Quality At Every Stage
              </motion.h2>
              <div className="w-12 md:w-16 h-1 bg-[#9D0B0F] rounded-full" />
            </div>
            <div className="space-y-3 md:space-y-4 text-[18px] text-[#1F2937] leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-[18px]"
              >
                All products at Global Pharmaceuticals are manufactured under
                strict quality control systems and current Good Manufacturing
                Practices (cGMP) to ensure safety, effectiveness, and
                reliability.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-[18px]" 
              >
                The company continues to contribute significantly to improving
                healthcare and patient well-being across Pakistan driven by
                modern manufacturing facilities, a skilled workforce, and an
                unwavering commitment to quality.
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-sm overflow-hidden shadow-xl"
          >
            <img
              src="/quality.webp"
              alt="Quality Control Lab"
              className="w-full h-48 md:h-64 lg:h-80 object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Footer Placeholder */}
      <Footer></Footer>
    </div>
  );
}
