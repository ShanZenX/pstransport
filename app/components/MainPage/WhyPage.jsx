"use client";

import React from "react";
import {
  MdEventAvailable,
  MdEmojiTransportation,
  MdAccountBalanceWallet,
} from "react-icons/md";
import useInView from "@/app/components/About/useInView";

const Feature = ({ icon, title, text }) => (
  <div className="flex flex-col items-center text-center ">
    {/* Icon */}
    <div className="flex items-center justify-center text-red-700 mb-4 ">
  {icon}
</div>
    {/* Title */}
    <h5 className="text-lg !font-bold text-gray-900 mb-2">{title}</h5>
    {/* Text */}
    <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
  </div>
);

const WhyPage = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`py-12 sm:py-20 my-3 sm:my-10 transition-all duration-1000 ease-out transform ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Title */}
      <h2 className="text-2xl md:text-[32px] !font-semibold mb-2 text-center">
        Why choosing <span className="text-red-700">us..?</span>
      </h2>
      <p className="text-center text-[16px] text-gray-700 mb-5">
        Your trusted travel partner for every journey
      </p>

      {/* Features inline */}
      <div className="flex flex-wrap justify-center gap-13 sm:gap-16">
        <Feature
          icon={<MdEventAvailable size={48} />}
          title="Availability"
          text="Available anytime, anywhere for your ride."
        />
        <Feature
          icon={<MdEmojiTransportation size={48} />}
          title="Comfort"
          text="Experience ultimate comfort in every ride."
        />
        <Feature
          icon={<MdAccountBalanceWallet size={48} />}
          title="Savings"
          text="Keep more in your pocket with every trip."
        />
      </div>
    </div>
  );
};

export default WhyPage;
