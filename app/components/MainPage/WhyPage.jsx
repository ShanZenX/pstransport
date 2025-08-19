"use client";

import React from "react";
import {
  MdEventAvailable,
  MdEmojiTransportation,
  MdAccountBalanceWallet,
} from "react-icons/md";
import useInView from "@/app/components/About/useInView";

const FeatureBox = ({ icons, title, text }) => (
  <div className="p-2 w-10/12 sm:w-auto text-white rounded border hover:shadow-md transition-all transform border-black bg-[#162455e7]">
    <span className="my-2">{icons}</span>
    <h3 className="text-lg sm:text-xl font-semibold mb-2">{title}</h3>
    <p className="text-[10px] sm:text-sm">{text}</p>
  </div>
);

const WhyPage = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`my-10 transition-all duration-1000 ease-out transform ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <h2 className=" !text-xl sm:!text-4xl !font-bold text-gray-800  text-xl  sm:text-2xl md:text-3xl text-center mb-2 sm:mb-6 flex justify-center items-center gap-3  ">
        <span className="h-[5px] w-[20px] bg-gray-800 block "></span>
        Why choose Ps Transport{" "}
        <span className="h-[5px] w-[20px] bg-gray-800 block "></span>
      </h2>
      <p className=" text-center text-[16px]  text-gray-600 mb-10">
        Your trusted travel partner for every journey{" "}
      </p>

      <div className="flex justify-center mt-15 gap-8 flex-wrap">
        <FeatureBox
          icons={<MdEventAvailable size={40} />}
          title="Availability"
          text="Available anytime, anywhere for your ride."
        />
        <FeatureBox
          icons={<MdEmojiTransportation size={40} />}
          title="Comfort"
          text="Experience ultimate comfort in every ride."
        />
        <FeatureBox
          icons={<MdAccountBalanceWallet size={40} />}
          title="Savings"
          text="Keep more in your pocket with every trip"
        />
      </div>
    </div>
  );
};

export default WhyPage;
