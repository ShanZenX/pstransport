import React from "react";
import Image from "next/image";
import s1 from "@/public/sb.jpg";
import s2 from "@/public/AddSer.jpg";

const services = [
  { title: "One-way", image: s1 },
  { title: "Native Trips", image: s2 },
  { title: "Corporate ways", image: s1 },
  { title: "Logistics Moves", image: s2 },
];

const OurProcess = () => {
  return (
    <section className="bg-white py-10 sm-5 lg:m-15 ">
      <div className="text-center mb-10">
        <h2 className=" text-2xl md:text-[32px] !font-semibold mb-4 flex justify-center items-center gap-2 sm:mb-6  ">
          <span className="h-[4px] w-[20px] bg-gray-800 block"></span> What we
          Offer <span className="h-[4px] w-[20px] bg-gray-800 block"></span>{" "}
        </h2>
        <p className="text-gray-600 text-[14px] !sm:text-sm mb-10 max-w-xl mx-auto font-oswald">
          select your own and ride
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-6xl mx-auto px-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative group overflow-hidden cursor-pointer"
          >
            <Image
              src={service.image}
              alt={service.title}
              className="w-full h-[74px] lg:h-[85px] object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-300 flex items-end p-4">
              <h4 className="text-white font-semibold text-lg">
                {service.title}
              </h4>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="text-center mt-10">
        <button className="bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-700 transition font-semibold shadow">
          See All Services
        </button>
      </div>
    </section>
  );
};

export default OurProcess;
