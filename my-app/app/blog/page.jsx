/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "motion/react";
import Header from "../component/Header";
import Footer from "../component/Footer";

export default function Blog() {
  return (
    <>
      <Header />

      <div className="min-h-screen bg-white font-sans overflow-x-hidden">
        {/* Hero Section - Kept as requested */}
        <section className="relative flex flex-col md:flex-row items-center bg-gray-100 overflow-hidden">
          <div className="w-full md:w-1/2 p-8 md:p-16 lg:p-24 bg-gray-100 z-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-outfit text-5xl  font-bold text-[#9D0B0F] mb-6"
            >
              Latest News
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-sans text-[18px]  text-[#1F2937] max-w-xl"
            >
              From a small marketing venture to one of Pakistan&apos;s fast-growing
              pharmaceutical manufacturers producing a wide range of medicines
              and healthcare products for patients across the country.
            </motion.p>
          </div>

          <div className="w-full md:w-1/2 h-[300px] md:h-[500px] relative">
            <img
              src="/news.png"
              alt="Pharmaceutical Production"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </section>
      <Footer />
      </div>

    </>
  );
}