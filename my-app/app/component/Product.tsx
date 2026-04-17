/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const PRODUCT_DATA = {
  "Pelton-C": {
    color: "#1a7f7a",
    bgGradient: "linear-gradient(135deg, #e0f2f1 0%, #b2dfdb 100%)",
    description:
      "Pelton-C is a premium pharmaceutical product designed to deliver superior quality and efficacy. Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry",
    prescribingInfo: "Detailed prescribing information available",
    img: "/Product-images/Pelton-C%20Tablets.png",
  },
  Vonoglob: {
    color: "#3b5bdb",
    bgGradient: "linear-gradient(135deg, #e8f0fe 0%, #c5cae9 100%)",
    description:
      "Vonoglob is a trusted pharmaceutical solution providing reliable healthcare benefits. Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry",
    prescribingInfo: "Detailed prescribing information available",
    img: "/Product-images/vonoglob%2010.png",
  },
  Glomov: {
    color: "#111111",
    bgGradient: "linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)",
    description:
      "Glomov delivers exceptional therapeutic results with proven efficacy. Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry",
    prescribingInfo: "Detailed prescribing information available",
    img: "/Product-images/Glomov%20500.png",
  },
  "Artinil-K": {
    color: "#1a7f7a",
    bgGradient: "linear-gradient(135deg, #e0f7fa 0%, #b2ebf2 100%)",
    description:
      "Artinil-K is formulated for optimal therapeutic benefit and safety. Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry",
    prescribingInfo: "Detailed prescribing information available",
    img: "/Product-images/Artinil-K%2075%20mg%20Tablets%2030_s.png",
  },
  Nalbin: {
    color: "#c0392b",
    bgGradient: "linear-gradient(135deg, #fbe9e7 0%, #ffccbc 100%)",
    description:
      "Nalbin provides reliable pharmaceutical support with high quality standards. Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry",
    prescribingInfo: "Detailed prescribing information available",
    img: "/Product-images/Nalbin%2020.png",
  },
  Anzonil: {
    color: "#555555",
    bgGradient: "linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%)",
    description:
      "Anzonil is a specialized pharmaceutical formulation for advanced therapy. Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry",
    prescribingInfo: "Detailed prescribing information available",
    img: "/Product-images/Anzonil.png",
  },
  Citolin: {
    color: "#4f8566",
    bgGradient: "linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)",
    description:
      "Citolin combines efficacy with safety for optimal patient outcomes. Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry",
    prescribingInfo: "Detailed prescribing information available",
    img: "/Product-images/Citolin%20250%20inj.png",
  },
  Piractim: {
    color: "#406da5",
    bgGradient: "linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)",
    description:
      "Piractim is scientifically formulated for superior healthcare solutions. Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry",
    prescribingInfo: "Detailed prescribing information available",
    img: "/Product-images/Piractim%20Inj.png",
  },
  "Tamsol-D": {
    color: "#147ea2",
    bgGradient: "linear-gradient(135deg, #e0f7fa 0%, #b2ebf2 100%)",
    description:
      "Tamsol-D provides effective therapeutic benefit with proven safety profile. Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry",
    prescribingInfo: "Detailed prescribing information available",
    img: "/Product-images/Tamsol-D.png",
  },
  Norbac: {
    color: "#d41a21",
    bgGradient: "linear-gradient(135deg, #ffebee 0%, #ffcdd2 100%)",
    description:
      "Norbac is designed for comprehensive pharmaceutical care and support. Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry",
    prescribingInfo: "Detailed prescribing information available",
    img: "/Product-images/Norbac%201%20gm%20IM.png",
  },
};

interface Product {
  id: number;
  name: string;
  image: string;
  color: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Tamsol-D",
    image: "/product-1.png",
    color: "text-[#147ea2]",
  },
  {
    id: 2,
    name: "Piractim",
    image: "/product-2.png",
    color: "text-[#406da5]",
  },
  {
    id: 3,
    name: "Citolin",
    image: "/product-3.png",
    color: "text-[#4f8566]",
  },
  {
    id: 4,
    name: "Vonoglob",
    image: "/product-4.png",
    color: "text-[#3b5bdb]",
  },
  {
    id: 5,
    name: "Glomov",
    image: "/product-5.png",
    color: "text-[#111111]",
  },
  {
    id: 6,
    name: "Artinil-K",
    image: "/product-6.png",
    color: "text-[#1a7f7a]",
  },
  {
    id: 7,
    name: "Nalbin",
    image: "/product-7.png",
    color: "text-[#c0392b]",
  },
  {
    id: 8,
    name: "Anzonil",
    image: "/product-8.png",
    color: "text-[#555555]",
  },
  {
    id: 9,
    name: "Pelton-C",
    image: "/product-9.png",
    color: "text-[#1a7f7a]",
  },
  {
    id: 10,
    name: "Norbac",
    image: "/product-10.png",
    color: "text-[#d41a21]",
  },
];

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsToShow(1);
      else if (window.innerWidth < 768) setItemsToShow(2);
      else if (window.innerWidth < 1024) setItemsToShow(3);
      else setItemsToShow(4);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const extendedProducts = [...products, ...products.slice(0, itemsToShow)];

  const next = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const prev = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  // Adjust current index if itemsToShow changes and makes it out of bounds
  useEffect(() => {
    setCurrentIndex(0);
  }, [itemsToShow]);

  return (
    <div className="min-h-screen bg-white py-10 px-4 sm:px-16 lg:px-12 font-sans overflow-hidden -mt-28">
      <div className="max-w-350 mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 relative">
          <h2 className="md:text-5xl text-3xl font-bold text-[#9d0b0f] mb-1 tracking-tight">
            Our Products
          </h2>
          <p className="text-[16px] md:text-2xl text-[#334155] font-normal tracking-tight">
            Diverse Pharmaceutical Solutions
          </p>
          <div className="w-24 h-0.75 bg-[#8B1D1D] mx-auto mt-6" />

          <div className="absolute right-0 bottom-0 hidden sm:block">
            <a
              href="/products"
              className="text-[#8B1D1D] font-semibold text-sm hover:underline flex items-center gap-1 transition-all"
            >
              View All <ChevronRight size={14} strokeWidth={3} />
            </a>
          </div>
        </div>

        {/* Carousel Section */}
        <div className="relative px-4 md:px-8">
          <div className="overflow-hidden px-1 py-4">
            <motion.div
              className="flex gap-4"
              animate={{
                x: `calc(-${((currentIndex % products.length) + products.length) % products.length * (100 / itemsToShow)}% - ${((currentIndex % products.length) + products.length) % products.length * 16}px)`,
              }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
            >
              {extendedProducts.map((product, index) => (
                <div
                  key={`${product.id}-${index}`}
                  className="shrink-0"
                  style={{
                    width: `calc(${100 / itemsToShow}% - ${(16 * (itemsToShow - 1)) / itemsToShow}px)`,
                    height: "320px",
                  } as React.CSSProperties}
                >
                  <Link
                    href={`/detailedproduct/${encodeURIComponent(product.name)}`}
                    className="block h-full"
                  >
                    <div className="bg-white rounded-md p-3 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-50 flex flex-col h-full group cursor-pointer hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300">
                      <h3
                        className={`text-3xl font-bold mb-2 pl-2 ${product.color} tracking-tight`}
                      >
                        {product.name}
                      </h3>
                      <div className="grow flex items-center justify-center mb-2 overflow-hidden max-h-56">
                        <motion.img
                          whileHover={{ scale: 1.05 }}
                          src={product.image}
                          alt={product.name}
                          className="max-w-full max-h-full object-contain drop-shadow-sm"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="mt-auto pl-2">
                        <span className="text-[14px] uppercase tracking-[0.18em] text-gray-500 font-semibold group-hover:text-[#8B1D1D] transition-colors">
                          Learn More
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 w-10 h-10 md:w-14 md:h-14 bg-black text-white rounded-full flex items-center justify-center shadow-xl hover:bg-gray-800 transition-all z-20 focus:outline-none"
            aria-label="Previous product"
          >
            <ChevronLeft size={20} className="md:w-7 md:h-7" strokeWidth={2.5} />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 w-10 h-10 md:w-14 md:h-14 bg-black text-white rounded-full flex items-center justify-center shadow-xl hover:bg-gray-800 transition-all z-20 focus:outline-none"
            aria-label="Next product"
          >
            <ChevronRight size={20} className="md:w-7 md:h-7" strokeWidth={2.5} />
          </button>
        </div>

        {/* Mobile View All */}
        <div className="mt-12 text-center sm:hidden">
          <a
            href="#"
            className="text-[#8B1D1D] font-semibold text-sm hover:underline inline-flex items-center gap-1 transition-all"
          >
            View All <ChevronRight size={14} strokeWidth={3} />
          </a>
        </div>
      </div>
    </div>
  );
}
