"use client";

import React from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Mail, Briefcase, User } from "lucide-react";
import ownerImg from "@/public/sb.jpg";
import companyImg from "@/public/AddSer.jpg";
import { useRef } from "react";

// Animation Variants
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeSlideLeft = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 60, damping: 12 },
  },
};

const fadeSlideRight = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 60, damping: 12 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const OwnerShowcase = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className="w-11/12 h-full sm:h-[400px] flex justify-center flex-wrap mx-auto my-16"
    >
      {/* Left - Owner Images */}
      <motion.div
        variants={fadeSlideLeft}
        className="w-full sm:w-[48%] sm:relative flex justify-center"
      >
        <Image
          src={ownerImg}
          alt="Owner"
          className="w-full sm:w-1/2 h-auto sm:absolute sm:rounded-3xl shadow-xl"
        />
        <Image
          src={companyImg}
          alt="PS Transport"
          className="hidden sm:flex w-1/2 h-auto absolute left-[200px] top-[120px] rounded-3xl shadow-md"
        />
      </motion.div>

      {/* Right - Owner Info */}
      <motion.div
        variants={fadeSlideRight}
        className="w-full flex flex-col sm:w-[48%] sm:pl-8 mt-6 sm:mt-0"
      >
        <h2 className="!font-extrabold text-2xl text-gray-800">
          Registration <span className="text-red-700">Details</span>
        </h2>

        {/* Owner Info */}
        <motion.div variants={fadeUp} className="mt-4 space-y-2 text-gray-700 text-sm">
          <p className="text-lg font-semibold">Prakash S</p>
          <h6 className="text-gray-500">
            No.55/3A1, Middle Street, Memalur, Tirukovilur – 605751
          </h6>
          <h6 className="text-gray-500">
            Branch Office - No.11, Ranga Nagar, Old Perungallathur, Chennai - 600063
          </h6>

          <div className="flex items-center gap-2">
            <User size={16} className="text-red-700" />
            <span>15+ Years in Transport & Logistics</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} className="text-red-700" />
            <a
              href="mailto:prakash@pstransport.com"
              className="hover:text-red-600 transition-colors"
            >
              prakash@pstransport.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Briefcase size={16} className="text-red-700" />
            <span>Transport & Logistics Expert</span>
          </div>
        </motion.div>

        {/* Small Intro */}
        <motion.p
          variants={fadeUp}
          className="mt-4 text-gray-600 text-sm leading-relaxed"
        >
          Dedicated to delivering safe, reliable and efficient transport
          solutions that move businesses and families forward.
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default OwnerShowcase;
