import React from "react";
import Background from "@/public/Bg-1.png";
import Image from "next/image";
import { IoMdPeople, IoIosSpeedometer } from "react-icons/io";
import { FaCarSide, FaRegCalendarAlt } from "react-icons/fa";

const Fact = () => {
  return (
    <section className="relative w-full bg-yellow-400 overflow-hidden">
      <Image
        src={Background}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover z-0"
        priority
      />
      <div className="relative z-10 text-center py-20 px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Facts In Numbers
        </h2>
        <p className="text-gray-700 max-w-xl mx-auto mb-10 font-semibold">
          Discover our journey through numbers — showcasing the clients we've served, cars delivered, happy customers, and years of excellence.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-14 max-w-4xl mx-auto">          

            <div className="bg-white p-3 rounded-xl shadow-md flex flex-col items-center flex flex-row justify-start  gap-3">
            <div className="bg-orange-400 p-1 text-white rounded-lg ">
              <svg
                className="w-13 h-13"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 50 50  "
              >
                <FaCarSide size={50}  />
              </svg>
            </div>
            <div className="mt-1">
              <h4 className="my-1 font-bold">540+</h4>
              <p className="text-sm text-gray-500 text-start">Cars</p>
            </div>
          </div>

            <div className="bg-white p-3 rounded-xl shadow-md flex flex-col items-center flex flex-row justify-start  gap-3">
            <div className="bg-orange-400 p-1 text-white rounded-lg ">
              <svg
                className="w-13 h-13"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 50 50  "
              >
                <IoMdPeople size={50}  />
              </svg>
            </div>
            <div className="mt-1">
              <h4 className="my-1 font-bold">20k+</h4>
              <p className="text-sm text-gray-500 text-start">Customers</p>
            </div>
          </div>

            <div className="bg-white p-3 rounded-xl shadow-md flex flex-col items-center flex flex-row justify-start  gap-3">
            <div className="bg-orange-400 p-1 text-white rounded-lg ">
              <svg
                className="w-13 h-13"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 50 50  "
              >
                <FaRegCalendarAlt  size={50}  />
              </svg>
            </div>
            <div className="mt-1">
              <h4 className="my-1 font-bold">25+</h4>
              <p className="text-sm text-gray-500 text-start">Years</p>
            </div>
          </div>

          <div className="bg-white p-3 rounded-xl shadow-md flex flex-col items-center flex flex-row justify-start  gap-3">
            <div className="bg-orange-400 p-1 text-white rounded-lg ">
              <svg
                className="w-12 h-12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 50 50  "
              >
                <IoIosSpeedometer size={50}  />
              </svg>
            </div>
            <div className="mt-1">
              <h4 className="my-1 font-bold">20m+</h4>
              <p className="text-sm text-gray-500 text-start">Miles</p>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Fact;
