"use client";

import Image from "next/image";
import Carporatecabs from "@/public/assets/CarporateCabs.jpeg";
import useInView from "@/app/components/About/useInView";
import Innova from "@/public/assets/Innova.jpeg";
import Truck from "@/public/assets/Truck.jpeg";

const services = [
  {
    title: "Corporate Cabs",
    img: Carporatecabs,
  },
  {
    title: "Rental Cars",
    img: Innova,
  },
  {
    title: "Logistics",
    img: Truck,
  },
];

export default function OurServices() {
  const [visionRef, visionVisible] = useInView({ threshold: 0.2 });

  return (
    <section
      className="py-8" // smaller padding
      ref={visionRef}
    >
      <div
        className={`text-center transition-all duration-700 ${
          visionVisible ? "animate-slideInUp" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="!mt-15 text-2xl md:text-[32px] !font-extrabold mb-2 !sm:my-5 text-center flex justify-center items-center gap-2">
          {" "}
          <span className="h-[2px] w-[16px] bg-black block"></span>
          Trusted partner for cabs, cargo & travel
          <span className="h-[2px] w-[16px] bg-black block"></span>
        </h2>
        <p className="tracking-wide text-[10px] sm:text-sm text-gray-700">
          Certified Transport Service Provider based in Tamil Nadu, Chennai
        </p>
        <div className="w-20 h-[2px] bg-black mx-auto mt-3"></div>
      </div>

      {/* Services Grid */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col items-center transition-all duration-700 ${
              visionVisible
                ? "animate-slideInUp delay-200"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* Image */}
            <div className="overflow-hidden rounded-lg shadow-md w-full h-[180px] sm:h-[240px] md:h-[280px] transition-transform duration-300 hover:scale-105 active:scale-95">
              <Image
                src={service.img}
                alt={service.title}
                className="object-cover object-bottom w-full h-full"
              />
            </div>

            {/* Button */}
            <button className="mt-3 text-sm sm:text-base font-medium px-3 py-1.5 text-black border border-black rounded !hover:text-white  ">
              {service.title}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
