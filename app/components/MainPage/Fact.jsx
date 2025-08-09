import React from "react";
import Background from "@/public/Bg-1.png";
import Image from "next/image";
import { IoMdPeople, IoIosSpeedometer } from "react-icons/io";
import { FaCarSide, FaRegCalendarAlt } from "react-icons/fa";

const Facts = [
  {
    id: 1,
    icon: <FaCarSide size={28} className="text-white" />,
    value: "540+",
    label: "Cars",
  },
  {
    id: 2,
    icon: <IoMdPeople size={28} className="text-white" />,
    value: "20k+",
    label: "Customers",
  },
  {
    id: 3,
    icon: <FaRegCalendarAlt size={28} className="text-white" />,
    value: "25+",
    label: "Years",
  },
  {
    id: 4,
    icon: <IoIosSpeedometer size={28} className="text-white" />,
    value: "20m+",
    label: "Miles",
  },
];

const Fact = () => {
  return (
    <section className="relative w-full bg-yellow-400 overflow-hidden">
      <Image
        src={Background}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover z-0"
        priority
      />
      <div className="relative z-10 text-center py-14 px-4">
        <p
          className="text-4xl font-bold text-gray-900 text-center mb-12"
          style={{ fontFamily: '"system-ui", monospace' }}
        >
          Facts In Numbers
        </p>
        <p className="text-gray-700 max-w-xl mx-auto mb-8 font-medium">
          Discover our journey through numbers — showcasing the clients we've
          served, cars delivered, happy customers, and years of excellence.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl my-10 mx-auto">
          {Facts.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded-xl shadow-md flex flex-col"
            >
              <div className="flex flex-row items-center justify-start gap-3">
                <div className="bg-orange-400 p-3 rounded-lg">{item.icon}</div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 m-0 leading-tight ">
                    {item.value}
                  </h4>
                  <p className="text-sm text-gray-500 m-0 text-start">
                    {item.label}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fact;
