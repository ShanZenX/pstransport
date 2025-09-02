"use client";

import React from "react";
import {
  MdEventAvailable,
  MdEmojiTransportation,
  MdAccountBalanceWallet,
} from "react-icons/md";
import useInView from "@/app/components/About/useInView";

const FeatureBox = ({ icons, title, text }) => (
  <div className="p-4 w-10/12 sm:w-auto bg-white text-gray-900 rounded border hover:shadow-md transition-all transform">
    <span className="my-2 text-blue-600">{icons}</span>
    <h5 className="text-sm sm:text-base !font-semibold mb-2">{title}</h5>
    <p className="text-[14px] sm:text-l">{text}</p>
  </div>
);

const WhyPage = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`my-15 transition-all duration-1000 ease-out transform ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <h2 className="text-2xl md:text-[32px] !font-semibold mb-4 text-center flex justify-center items-center gap-2 sm:mb-6">
        <span className="h-[4px] w-[20px] bg-gray-800 block"></span>
        Why choose <span className="text-[#582eff]">Ps Transport </span>
        <span className="h-[4px] w-[20px] bg-gray-800 block"></span>
      </h2>
      <p className="text-center text-[16px] text-black mb-10">
        Your trusted travel partner for every journey
      </p>

      <div className="flex justify-center mt-15 gap-8 flex-wrap">
        <FeatureBox
          icons={<MdEventAvailable size={40} className="text-[#582eff]" />}
          title="Availability"
          text="Available anytime, anywhere for your ride."
        />
        <FeatureBox
          icons={<MdEmojiTransportation size={40} className="text-[#582eff]" />}
          title="Comfort"
          text="Experience ultimate comfort in every ride."
        />
        <FeatureBox
          icons={<MdAccountBalanceWallet size={40} className="text-[#582eff]" />}
          title="Savings"
          text="Keep more in your pocket with every trip."
        />
      </div>
    </div>
  );
};

export default WhyPage;
