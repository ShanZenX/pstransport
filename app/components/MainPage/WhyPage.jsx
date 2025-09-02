"use client";

import React from "react";
import {
  MdEventAvailable,
  MdEmojiTransportation,
  MdAccountBalanceWallet,
} from "react-icons/md";
import useInView from "@/app/components/About/useInView";

// ⭐ FeatureBox with better design
const FeatureBox = ({ icons, title, text }) => (
  <div className="group relative p-6 w-10/12 sm:w-[280px] bg-gradient-to-tr from-white to-gray-50 border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-500">
    {/* Icon */}
    <div className="flex items-center justify-center w-18 h-14 rounded-xl bg-red-100 text-red-700 mb-4 group-hover:scale-110 transition-transform duration-300">
      {icons}
    </div>
    {/* Title */}
    <h5 className="text-lg !font-semibold text-gray-900 mb-2 group-hover:text-red-700 transition-colors">
      {title}
    </h5>
    {/* Text */}
    <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
    {/* Hover Glow */}
    <div className="absolute inset-0 rounded-2xl bg-red-50 opacity-0 group-hover:opacity-40 blur-xl transition-opacity"></div>
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
      {/* Title */}
      <h2 className="text-2xl md:text-[32px] !font-extrabold mb-2 text-center flex justify-center items-center gap-2 sm:mb-6">
        <span className="h-[4px] w-[20px] bg-gray-800 block"></span>
        Why choose <span className="text-red-700">Ps Transport</span>
        <span className="h-[4px] w-[20px] bg-gray-800 block"></span>
      </h2>
      <p className="text-center text-[16px] mb-6 text-gray-700">
        Your trusted travel partner for every journey
      </p>

      {/* Cards */}
      <div className="flex justify-center mt-10 gap-8 flex-wrap">
        <FeatureBox
          icons={<MdEventAvailable size={28} />}
          title="Availability"
          text="Available anytime, anywhere for your ride."
        />
        <FeatureBox
          icons={<MdEmojiTransportation size={28} />}
          title="Comfort"
          text="Experience ultimate comfort in every ride."
        />
        <FeatureBox
          icons={<MdAccountBalanceWallet size={28} />}
          title="Savings"
          text="Keep more in your pocket with every trip."
        />
      </div>
    </div>
  );
};

export default WhyPage;
