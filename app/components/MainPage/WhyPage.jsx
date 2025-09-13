"use client";

import React from "react";
import {
  MdLocationOn,
  MdCalendarToday,
  MdPerson,
  MdWork,
  MdLocalOffer,
  MdEmojiTransportation,
  MdStar,
  MdCreditCard,
  MdReceipt,
  MdCheckCircle,
} from "react-icons/md";

const steps = [
  {
    title: "Where to?",
    icons: [MdLocationOn],
    description: "Enter pickup location and destination",
  },
  {
    title: "When and who travels?",
    icons: [MdCalendarToday, MdPerson, MdWork],
    description: "Enter date and time, passenger and luggage count",
  },
  {
    title: "At what price?",
    icons: [MdLocalOffer, MdEmojiTransportation, MdStar],
    description: "Compare the prices from multiple taxi operators",
  },
  {
    title: "Book and relax",
    icons: [MdCreditCard, MdReceipt, MdCheckCircle],
    description: "Pay securely. Email and SMS confirmation will follow.",
  },
];

const HowItWorks = () => {
  return (
    <section className="!py-20 px-3 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl !font-bold text-black !mb-12 !sm:mb-18">
          How does it <span className="text-red-700">work?</span>
        </h2>

        <div className="flex justify-between items-start gap-6 max-w-6xl mx-auto px-4 flex-wrap sm:flex-nowrap">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center flex-1 min-w-[180px]"
            >
              {/* Title */}
              <h6 className="text-md !font-semibold text-red-700 mb-3">
                {step.title}
              </h6>

              {/* Icons inside circle */}
              <div className="rounded-full border border-gray-300 p-4 flex items-center justify-center gap-2 mb-4">
                {step.icons.map((Icon, idx) => (
                  <Icon key={idx} size={20} className="text-red-700" />
                ))}
              </div>

              {/* Description */}
              <p className="text-sm text-gray-800 leading-snug max-w-[180px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
