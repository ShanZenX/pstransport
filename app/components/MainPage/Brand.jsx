"use client";
import React from "react";
import Image from "next/image";
import brands from "@/app/data/brandData";
import useInView from "@/app/components/About/useInView";
import { motion } from "framer-motion";

const BrandsSection = () => {
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <section className="bg-white my-10 sm:my-20">
      <div
        ref={ref}
        className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center my-30"
      >
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl !font-extrabold mb-4">
            Our Business <br /><span className="text-red-700"> Partners </span>
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-md">
            We collaborate with trusted business partners to deliver reliable
            and efficient transport solutions. Together, we ensure safe, timely,
            and seamless movement of goods across every destination.
          </p>
        </motion.div>

        {/* Right Logos with grid lines */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative w-full"
        >
          {/* grid lines (only show on md and above) */}
          <div className="hidden md:block">
            {/* center horizontal line */}
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gray-400"></div>
            {/* vertical dividers */}
            <div className="absolute left-1/4 top-0 h-full w-[2px] bg-gray-400"></div>
            <div className="absolute left-2/4 top-0 h-full w-[2px] bg-gray-400"></div>
            <div className="absolute left-3/4 top-0 h-full w-[2px] bg-gray-400"></div>
          </div>

          {/* Responsive Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-4 md:grid-rows-2">
            {brands.map((brand, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center justify-center p-6"
              >
                <div className="w-24 h-12 sm:w-28 sm:h-14 relative">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandsSection;
