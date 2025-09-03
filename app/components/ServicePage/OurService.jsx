"use client";

import Image from "next/image";

import Seb2 from "@/public/assets/CarporateCabs.jpeg";
import Seb1 from "@/public/assets/servicepage/chennai.png";
import Seb3 from "@/public/assets/Truck.jpeg";
import Seb4 from "@/public/assets/servicepage/logistics.png";
import useInView from "@/app/components/About/useInView";

const features = [
  {
    id: "01",
    title: "Cab Services",
    desc: "Reliable and convenient cab services for your daily commute or city travel, ensuring comfort and safety.",
  },
  {
    id: "02",
    title: "Corporate Cab",
    desc: "Tailored corporate transportation solutions to ensure punctuality and professionalism for your employees and clients.",
  },
  {
    id: "03",
    title: "Rental Cab",
    desc: "Flexible rental cab options for short-term or long-term travel, giving you freedom and ease of travel.",
  },
  {
    id: "04",
    title: "Logistics Services",
    desc: "Efficient logistics and transportation solutions for goods, ensuring timely delivery and secure handling.",
  },
];


export default function WhyChooseUs() {
  const [ref, visible] = useInView({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-16 bg-gradient-to-r">
      <div
        className={`max-w-6xl mx-auto px-6 transition-all duration-700 mt-20 sm:mt-3 ${
          visible ? "animate-slideInUp" : "opacity-0 translate-y-10"
        }`}
      >
       <h2 className="text-3xl md:text-4xl !font-extrabold mb-3 text-gray-900 text-center ">
  Our  <span className="text-red-700 "> Services</span>
</h2>
<p className="text-gray-600 mb-8 max-w-xl mx-auto text-center my-4 font-base">
  We provide trusted travel and logistics services, ensuring comfort,
  safety, and reliability at every step of your journey.
</p>
       

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-15 ">
          {/* LEFT IMAGE GRID */}
          <div className="grid grid-cols-2 gap-2">
            {/* Top Left */}
            <div className="flex justify-center items-center">
              <Image
                src={Seb1}
                alt="Seb Man 1"
                className="rounded-xl object-cover w-full h-40 md:h-48 shadow-md"
              />
            </div>

            {/* Top Right */}
            <div className="flex justify-center items-center">
              <Image
                src={Seb2}
                alt="Seb Man 2"
                className="rounded-xl object-cover w-full h-40 md:h-48 shadow-md"
              />
            </div>

            {/* Bottom Left */}
            <div className="flex justify-center items-center">
              <Image
                src={Seb3}
                alt="Seb Man 3"
                className="rounded-xl object-cover w-full h-40 md:h-48 shadow-md"
              />
            </div>

            {/* Bottom Right */}
            <div className="flex justify-center items-center">
              <Image
                src={Seb4}
                alt="Seb Man 4"
                className="rounded-xl object-cover w-full h-40 md:h-48 shadow-md"
              />
            </div>
          </div>

          {/* RIGHT FEATURE GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col gap-2">
                <div className="bg-white shadow-md rounded-lg px-4 py-2 w-fit">
                  <span className="text-red-700  font-bold text-lg">{feature.id}</span>
                </div>
                <h4 className="text-lg !font-semibold text-gray-900 sm:mt-1 mt-2">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
