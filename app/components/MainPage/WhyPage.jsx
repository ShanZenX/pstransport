'use client';

import React from "react";
import {
  MdEventAvailable,
  MdEmojiTransportation,
  MdAccountBalanceWallet,
} from "react-icons/md";
import useInView from "@/app/components/About/useInView"; 


const FeatureBox = ({ icons, title, text }) => (
  <div className="p-4 w-11/12 sm:w-auto text-white rounded border hover:shadow-md transition-all transform  border-black bg-[#162455e7]">
    <span className="my-5">{icons}</span>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p>{text}</p>
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
      <p className="  font-bold text-gray-800 text-xl  sm:text-2xl md:text-3xl text-center mb-2 sm:mb-6">
        — Why choose Ps Transport —
      </p>
      <p className=" text-center text-[14px] sm:text-2xl md:text-3xl text-gray-600 mb-10">
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
