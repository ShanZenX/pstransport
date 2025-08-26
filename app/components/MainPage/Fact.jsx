import React from "react";
import Background from "@/public/Bg-1.png";
import Image from "next/image";
import { IoMdPeople, IoIosSpeedometer } from "react-icons/io";
import { FaCarSide, FaRegCalendarAlt } from "react-icons/fa";
import StatisticCard from "../miniComponent/StatisticCard";

const Facts = [
  {
    id: 1,
    icon: <FaCarSide size={18} className="text-white" />, // smaller
    value: "150+",
    label: "Cars",
  },
  {
    id: 2,
    icon: <IoMdPeople size={18} className="text-white" />,
    value: "5k+",
    label: "Clients",
  },
  {
    id: 3,
    icon: <FaRegCalendarAlt size={18} className="text-white" />,
    value: "4+",
    label: "Years",
  },
  {
    id: 4,
    icon: <IoIosSpeedometer size={18} className="text-white" />,
    value: "10m+",
    label: "Miles",
  },
];

const Fact = () => {
  return (
    <section className="relative w-full bg-yellow-400 overflow-hidden ">
      <Image
        src={Background}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover z-0"
        priority
      />
      <div className="relative z-10 text-center py-8 sm:py-10 px-2"> 
            <h2 className=" text-2xl md:text-[32px] !font-extrabold mb-4  text-center mb-2 sm:mb-6  ">
          Facts In Numbers
        </h2>

        <p className="text-gray-700 text-xs max-w-md mx-auto mb-4 leading-snug">
          Discover our journey through numbers — showcasing the clients we've
          served, cars delivered, happy customers, and years of excellence.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl mx-auto mt-4">
          {Facts.map((item) => (
            <StatisticCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fact;
