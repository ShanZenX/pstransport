"use client";

import React from 'react';
import { motion, useReducedMotion} from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1];

// Sample testimonials data
const testimonials = [
  {
    id: 1,
    author: "Anjali Verma",
    text: "PS Transport has revolutionized our freight operations with their reliable and timely services. Highly recommended!",
  },
  {
    id: 2,
    author: "Rahul Singh",
    text: "Their dedicated customer service and robust tracking system ensure peace of mind. Great transparency and professionalism.",
  },
  {
    id: 3,
    author: "Sanjay Kapoor",
    text: "Exceptional service! The team adapts quickly to last-minute changes and makes scheduling effortless.",
  },
];

// Placeholder quote icon (you can replace with your own image URL)
const quoteIcon = "https://cdn-icons-png.flaticon.com/512/25/25694.png";

const Testimonial = () => {
  const prefersReducedMotion = useReducedMotion();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: prefersReducedMotion
        ? {}
        : { staggerChildren: 0.14, delayChildren: 0.05 },
    },
  };

  const card = {
    hidden: (i = 0) =>
      prefersReducedMotion
        ? { opacity: 0 }
        : {
            opacity: 0,
            y: 36,
            x: i % 2 === 0 ? -24 : 24,
            scale: 0.97,
            filter: 'blur(6px)',
            rotate: i % 2 === 0 ? -1.2 : 1.2,
          },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      filter: 'blur(0px)',
      rotate: 0,
      transition: {
        type: 'tween',
        ease: EASE,
        duration: 0.8,
      },
    },
  };

  return (
    <section className="py-16 px-6 md:px-[6%]">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-3xl md:text-4xl font-semibold"
        >
          – Hear From Happy Travellers –
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, delay: 0.05, ease: EASE }}
          className="mt-2 text-gray-600 max-w-3xl mx-auto text-sm md:text-base"
        >
          Real Stories. Real Smiles. Trusted by Hundreds of Families, Couples & Adventurers.
        </motion.p>
      </div>

      <motion.div
        className="max-w-7xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25, margin: '-10% 0px -10% 0px' }}
      >
        {testimonials.map((t, i) => (
          <motion.div
            key={t.id}
            custom={i}
            variants={card}
            whileHover={{
              y: -4,
              scale: 1.01,
              boxShadow: '0 18px 36px -24px rgba(0,0,0,0.25)',
              transition: { duration: 0.25 },
            }}
            className="relative rounded-xl border border-black/10 bg-white p-8 md:p-10 shadow-sm will-change-transform"
          >
            {/* Floating quote image */}
            <motion.img
              src={quoteIcon}
              alt="quote"
              className="w-8 h-8 md:w-10 md:h-10 object-contain mb-5 select-none"
              draggable="false"
              animate={
                prefersReducedMotion
                  ? {}
                  : { y: [0, -4, 0] }
              }
              transition={
                prefersReducedMotion
                  ? {}
                  : { duration: 3, repeat: Infinity, ease: 'easeInOut' }
              }
            />

            <p className="text-[15px] md:text-[16px] leading-7 text-slate-700">
              {t.text}
            </p>

            <p className="mt-8 text-sm md:text-base font-medium text-slate-600 text-right">
              – {t.author}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Testimonial;
