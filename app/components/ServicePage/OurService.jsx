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
    title: "Rental cars",
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
      className="py-12 animate-fadeInUp  
     "
      ref={visionRef}
    >
      <div
        className={`text-center ${
          visionVisible ? "animate-slideInLeft" : "opacity-0"
        }`}
      >
        <h2 className="text-2xl md:text-[32px] !font-extrabold mb-2 !sm:my-5 text-center flex justify-center items-center gap-2">
          <span className="h-[3px] w-[20px] bg-black block my-4 sm:my-10"></span>
          Trusted partner for cabs, cargo & travel.{" "}
          <span className="h-[3px] w-[20px] bg-black block "></span>
        </h2>
        <p className="tracking-wide text-[10px] sm:text-sm text-gray-700">
          Certified Transport Service Provider based in Tamil Nadu, Chennai
        </p>

        <div className="w-26 h-[3px] bg-black mx-auto mt-4"></div>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 animate-fadeInUp delay-300">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="overflow-hidden rounded-lg shadow-md w-full h-[220px] sm:h-[300px] md:h-[400px] transition-transform duration-300 hover:scale-105 active:scale-95">
              <Image
                src={service.img}
                alt={service.title}
                className="object-cover object-bottom w-full h-full"
              />
            </div>

            <button className="mt-4 text-base sm:text-lg font-medium px-4 py-2 text-black border border-black rounded hover:bg-black hover:text-white transition-colors">
              {service.title}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
