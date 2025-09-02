"use client";


import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FaShippingFast, FaBusAlt, FaMoneyBillWave } from "react-icons/fa";

const EASE = [0.16, 1, 0.3, 1];
const BASE_DURATION = 0.8;
const STAGGER = 0.08;

export const WhyData = [
  {
    id: 1,
    icon: <FaShippingFast size={44} className="text-blue-600" />, // slightly smaller
    title: "Trusted & Timely Logistics",
    description:
      "With real-time tracking and guaranteed delivery schedules, PS Transport ensures your goods or passengers arrive on time, every time.",
  },
  {
    id: 2,
    icon: <FaBusAlt size={44} className="text-blue-600" />,
    title: "Reliable & Strong Network",
    description:
      "Our fleet is professionally maintained and equipped for safety, comfort, and performance — whether for cargo or cab services.",
  },
  {
    id: 3,
    icon: <FaMoneyBillWave size={44} className="text-blue-600" />,
    title: "Affordable & Pricing",
    description:
      "Competitive rates with zero hidden charges. Get premium logistics and transport solutions that fit your budget.",
  },
];

const Why = () => {
  const prefersReducedMotion = useReducedMotion();

  const heading = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "tween", ease: EASE, duration: 0.6 },
    },
  };

  const sub = {
    hidden: { opacity: 0, y: 8 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "tween", ease: EASE, duration: 0.6, delay: 0.05 },
    },
  };

  const card = {
    hidden: prefersReducedMotion
      ? { opacity: 0 }
      : { opacity: 0, y: 40, filter: "blur(6px)" },
    show: (i = 0) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "tween",
        ease: EASE,
        duration: BASE_DURATION,
        delay: i * STAGGER,
      },
    }),
  };

  return (
    <section className="py-[55px] px-[5%] bg-gray-50">
      <motion.h2
        className="text-[17px] sm:text-[23px] md:text-[30px] !text-xl sm:!text-4xl !font-bold text-gray-800"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={heading}
      >
        Why Choose PS Transport Logistics?
      </motion.h2>

      <motion.p
        className="w-full my-3 md:w-[38%] text-[12px] sm:text-[14px] md:text-[17px] text-gray-600"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.6 }}
        variants={sub}
      >
        Delivering excellence across Tamil Nadu through reliable logistics,
        modern fleets, and cost-effective pricing.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {WhyData.map((item, idx) => (
          <motion.div
            key={item.id}
            className="flex flex-col gap-3 border border-black/10 bg-white rounded-[18px] p-[26px] shadow-sm transition-shadow will-change-transform"
            custom={idx}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            variants={card}
            whileHover={{
              y: -4,
              scale: 1.01,
              boxShadow: "0 16px 32px -20px rgba(0,0,0,0.2)",
              transition: { type: "tween", duration: 0.25, ease: "easeOut" },
            }}
            whileTap={{ scale: 0.995 }}
          >
            <div>{item.icon}</div>
           <h5 className="text-[15px] md:text-[17px] !font-semibold text-gray-900">
  {item.title}
</h5>
<p className="leading-5 text-[12px] text-gray-500 font-normal">
  {item.description}
</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Why;
