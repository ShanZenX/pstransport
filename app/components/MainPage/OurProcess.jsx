import React from "react";
import Image from "next/image";
import s1 from "@/public/taxi.png";
import s2 from "@/public/AddSer.jpg";
import s3 from "@/public/About-Bg.png";
import s4 from "@/public/serviceHero.png";

const services = [
  { title: "One-way", image: s1 },
  { title: "Native Trips", image: s2 },
  { title: "Corporate ways", image: s3 },
  { title: "Logistics Moves", image: s4 },
];

const OurProcess = () => {
  return (
    <section className="bg-white py-8 sm:py-10 lg:py-12 ">
      <div className="text-center mb-5 sm:mb-7  mt-3">
        <h2 className="text-xl sm:text-2xl md:text-[32px] !font-extrabold mb-3 sm:mb-4 flex justify-center items-center gap-2">
          <span className="h-[3px] w-[16px] sm:h-[4px] sm:w-[20px] bg-gray-800 block"></span>
          What we <span className="text-red-700">Offer</span>
          <span className="h-[3px] w-[16px] sm:h-[4px] sm:w-[20px] bg-gray-800 block"></span>
        </h2>
        <h6 className="text-[12px] sm:text-sm mb-6 sm:mb-10 max-w-md sm:max-w-xl text-center mx-auto">
          Choose your ride with the perfect variant
        </h6>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-6xl mx-auto px-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative group overflow-hidden cursor-pointer"
          >
            <Image
              src={service.image}
              alt={service.title}
              className="w-full h-[60px] sm:h-[74px] lg:h-[85px] object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-300 flex items-end p-2 sm:p-4">
              <h4 className="text-white font-medium text-sm sm:font-semibold sm:text-lg">
                {service.title}
              </h4>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="text-center mt-8 sm:mt-10 mb-5 sm:mb-8">
        <button className="bg-red-700 text-white text-xs sm:text-sm px-4 sm:px-6 py-1 sm:py-2 hover:bg-red-900 transition font-semibold shadow rounded">
          See All Services
        </button>
      </div>
    </section>
  );
};

export default OurProcess;
