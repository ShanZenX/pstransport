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
    <section className="bg-white py-8 sm-5 lg:m-15">
      <div className="text-center mb-10">
        <h2 className=" text-2xl md:text-[32px] !font-extrabold mb-4 flex justify-center items-center gap-2 sm:mb-6">
          <span className="h-[4px] w-[20px] bg-gray-800 block"></span> What we{" "}
          <span className="text-red-700">Offer</span>
          <span className="h-[4px] w-[20px] bg-gray-800 block"></span>
        </h2>
        <h6 className=" text-[14px] sm:text-sm mb-10 max-w-xl text-center mx-auto">
          Choose your ride with the perfect variant
        </h6>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 max-w-6xl mx-auto px-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative group overflow-hidden cursor-pointer"
          >
            {/* Square for mobile, auto for desktop */}
            <div className="w-full aspect-square md:aspect-auto md:h-[85px] relative">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-300 flex items-end p-4">
              <h6 className="text-white font-semibold ">
                {service.title}
              </h6>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="text-center mt-10 mb-5">
        <button className="bg-red-700 text-white px-6 py-1 hover:bg-red-900 transition font-semibold shadow">
          See All Services
        </button>
      </div>
    </section>
  );
};

export default OurProcess;
