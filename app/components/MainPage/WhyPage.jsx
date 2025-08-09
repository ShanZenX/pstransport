import React from "react";
import {
  MdEventAvailable,
  MdEmojiTransportation,
  MdAccountBalanceWallet,
} from "react-icons/md";

const FeatureBox = ({ icons, title, text }) => (
  <div className="p-4 rounded shadow bg-yellow-50">
    <span className="my-5">{icons}</span>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p>{text}</p>
  </div>
);

const WhyPage = () => {
  return (
    <div className="my-10 ">
      <p
        className="text-3xl md:text-4xl font-bold text-center"
        style={{ fontFamily: '"system-ui", monospace' }}
      >
        why Ps Transport
      </p>
      <p className="mb-3 text-center">
        Your trusted travel partner for every journey{" "}
      </p>

      <div className="flex justify-center gap-8 flex-wrap">
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
