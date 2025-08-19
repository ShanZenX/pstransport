"use client";

import Image from "next/image";
import { FaCheckCircle, FaPhoneAlt } from "react-icons/fa";
import Trucks from "@/public/assets/cars/Trucks.png";
import brands from "@/app/data/brandData.json";
import useInView from "@/app/components/About/useInView";

const LogisticsSection = () => {
  const [sectionRef, sectionInView] = useInView({ threshold: 0.2 });
  const [logosRef, logosInView] = useInView({ threshold: 0.2 });

  return (
    <section ref={sectionRef} className="bg-white py-6 px-3">
      <div
        className={`max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-center transition-all duration-1000 ease-out
        ${sectionInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        {/* Left Image */}
        <div className="relative">
          <Image
            src={Trucks}
            alt="Cargo Ship"
            className="rounded-md shadow-md w-full"
          />
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold my-2 sm:mb-4 !text-xl sm:!text-4xl !font-bold text-gray-800">
            — Who we are —
          </h2>

          <h6 className="text-lg md:text-2xl font-bold leading-snug my-3">
            Leading global logistic and transport agency
          </h6>

          <p className="text-gray-600 text-sm mb-4 leading-snug">
            We provide efficient and reliable logistics solutions, ensuring safe
            and timely transportation of goods across local and global
            destinations, backed by expert handling and modern fleet support.
          </p>

          {/* ↓ Features List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
            {[
              "Intermodal Shipping",
              "Highly Professional Staff",
              "Quality Control System",
              "Supply Chain Solutions",
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-sm">
                <FaCheckCircle className="text-indigo-900 text-sm" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>

          {/* ↓ Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <button className="bg-indigo-900 hover:bg-indigo-600 text-white px-2 py-2 rounded-md shadow-sm font-medium text-sm transition">
              Request a Quote
            </button>
            <div className="flex items-center gap-2 text-indigo-900">
              <FaPhoneAlt size={18} />
              <div>
                <p className="text-gray-700 text-xs">Call for free</p>
                <p className="font-bold text-sm">+00 (9999) 6868</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ↓ Brand logos smaller */}
      <div
        ref={logosRef}
        className={`flex overflow-x-auto md:overflow-hidden items-center justify-start md:justify-center gap-4 my-10 transition-all duration-1000 ease-out
        ${logosInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        {brands.slice(0, 5).map((brand, idx) => (
          <img
            key={idx}
            src={brand.logo}
            alt={brand.name || `Brand Logo ${idx + 1}`}
            className="h-5 md:h-6 object-contain flex-shrink-0"
          />
        ))}
      </div>
    </section>
  );
};

export default LogisticsSection;
