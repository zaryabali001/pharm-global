/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "motion/react";
import { Check } from "lucide-react";
import Header from "../component/Header";
import Footer from "../component/Footer";

const SectionTitle = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) => (
  <div className="mb-6">
    <h2 className="text-3xl font-bold text-[#9D0B0F] tracking-tight ">
      {title}
    </h2>
    {subtitle && (
      <p className="text-[#1F2937] font-medium text-lg mt-1">{subtitle}</p>
    )}
    <div className="w-12 h-1 bg-[#9D0B0F] mt-3 rounded-full" />
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      <Header></Header>
      {/* Top Red Bar */}

      <section className="relative flex flex-col md:flex-row items-center bg-gray-100 overflow-hidden">
        <div className="w-full md:w-1/2 p-8 md:p-16 lg:p-24 bg-gray-100 z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-outfit text-5xl font-bold text-[#9D0B0F] mb-6"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-outfit text-[18px] md:text-[18px] text-[#1F2937] max-w-xl"
          >
            From a small marketing venture to one of Pakistan&#39;s fast-growing
            pharmaceutical manufacturers producing a wide range of medicines and
            healthcare products for patients across the country.
          </motion.p>
        </div>
        <div className="w-full md:w-1/2 h-100 md:h-155 relative">
          <img
            src="/about.png"
            alt="Pharmaceutical Production"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 via-transparent to-transparent md:block hidden" />
        </div>
      </section>

      {/* Introduction Section */}
      <section className="md:m-10 m-10">
        <div className="max-w-7xl mx-auto  grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-16 md:mt-34"
          >
            <SectionTitle
              title="Introduction"
              subtitle="Global Pharmaceuticals"
            />
            <div className=" text-gray-600 mt-2  leading-relaxed text-[18px]">
              <p>
                Global pharmaceuticals is one of the largest growing nationwide
                company in Pharma industry. It has been working in Pakistan for
                the last three decades and has a dedicated team of experienced
                professionals working not only to meet the expectations of the
                customers but consistently deliver beyond expectations.
              </p>
              <p>
                Being ISO 9001: 2015, ISO 14001:2015 and ISO 45001: 2018
                certified company, our products range consists of tablets,
                capsules, suspensions, syrups, creams and ointments and
                injectables (LVPs/ SVPs/ Dry Powder).
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden h-auto lg:h-screen w-full lg:w-335 flex items-center justify-center"
          >
            <img
            className="w-full h-54 md:h-64 lg:h-80 object-contain md:mr-150"
              src="/intro-about-us.png"
              alt="Global Pharmaceuticals Building"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Facility Location Section */}
      <section className="relative py-20 px-4 bg-white -mt-32 -md:m-221 m-6  overflow-hidden">
       <img
  src="/about-3d.webp"
  alt="3D background"
  className="pointer-events-none absolute inset-0 h-full w-full object-cover 
             opacity-100 
             md:scale-100 
             scale-110 
             sm:scale-105"
/>
        <div className="absolute inset-0 bg-white/80" />
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <SectionTitle title="Facility Location" subtitle="And Size" />
            <p className="text-gray-600 leading-relaxed text-[18px] max-w-4xl ">
              Global Pharmaceuticals (Pvt.) Ltd. is situated in Industrial
              Triangle Kahuta Road Islamabad, an environment favorable for
              manufacturing process and minimum risk of causing any
              contamination of material or product, the location of the Plant
              complies with the GMP requirements. The size of plot 204 and 205
              is 2 (100x300) ft² = 60000 square feet, whereas the GMP
              requirement is that the Plot area should not be less than 2000
              square yards.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
            {[
              "Dedicated Non-sterile section where Tablets, capsules, suspensions, syrups and creams/ ointments are manufactured.",
              "Dedicated Liquid injectables section for sterile liquid injections are manufactured.",
              "Dedicated section for cephalosporins",
              "Dedicated section for Penicillin",
              "Dedicated section for Carbapenem",
              "A state-of-the-art Quality Control department having separate sections for chemical and microbiological analyses.",
              "Separate R&D and Validation Departments",
              "Separate Warehouses for Raw materials, Packing Materials and Finished Goods.",
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-3 group"
              >
                <div className="mt-1 bg-[#9D0B0F] rounded-sm p-0.5 text-white shrink-0 shadow-sm">
                  <Check size={12} strokeWidth={4} />
                </div>
                <p className="text-gray-600 text-[18px] leading-snug group-hover:text-gray-900 transition-colors">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
          {/* Vision */}
          <div className="bg-[#f8f9fa] p-12 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-[#9D0B0F] mb-6 uppercase">
                Our Vision
              </h2>
              <p className="text-gray-600 leading-relaxed text-[18px]">
                Be the leader in the Pharmaceutical market of Pakistan by
                exploring and developing the products to bridge the gap of the
                increasing demand of Pharma products and the needs of the
                existing and potential customers.
              </p>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="aspect-video lg:aspect-auto"
          >
            <img
              src="/vision.webp"
              alt="Vision Target"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="aspect-video lg:aspect-auto order-last lg:order-0"
          >
            <img
              src="/mission.jpg"
              alt="Mission Hands"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="bg-white p-12 flex flex-col justify-center border-y lg:border-y-0 lg:border-l border-gray-100">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-[#9D0B0F] mb-6 uppercase">
                Our Mission
              </h2>
              <p className="text-gray-600 leading-relaxed text-[18px]">
                Inspired by our improving commitment &ldquo;Caring people to Live
                Healthier Lives&#34; the health and quality of life in Pakistan and
                around the globe. We are dedicated to provide quality care
                products with economy.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* History Section */}
 
      {/* Footer Branding */}

      <Footer></Footer>
    </div>
  );
}
