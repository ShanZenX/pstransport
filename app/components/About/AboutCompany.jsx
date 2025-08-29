"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import ownerImg from "@/public/sb.jpg";
import companyImg from "@/public/AddSer.jpg";
import { Mail, Briefcase, User } from "lucide-react";

const OwnerShowcase = () => {
  return (
    <div className="w-11/12 h-full sm:h-[400px] flex justify-center flex-wrap mx-auto my-16">
      {/* Left - Owner Images */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full sm:w-[48%] sm:relative flex justify-center"
      >
        <Image
          src={ownerImg}
          alt="Owner"
          className="w-full sm:w-1/2 h-auto sm:absolute sm:rounded-3xl shadow-lg"
        />
        <Image
          src={companyImg}
          alt="PS Transport"
          className="hidden sm:flex w-1/2 h-auto absolute left-[200px] top-[120px] rounded-3xl shadow-md"
        />
      </motion.div>

      {/* Right - Owner Info */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="w-full flex flex-col sm:w-[48%] sm:pl-8 mt-6 sm:mt-0"
      >
        <h2 className="!font-extrabold text-2xl text-gray-800">
          Meet Our Founder
        </h2>

        {/* Owner Info */}
        <div className="mt-4 space-y-2 text-gray-700 text-sm">
          <p className="text-lg font-semibold text-indigo-900">Prakash S</p>
          <p className="text-gray-500">Founder & Managing Director</p>

          <div className="flex items-center gap-2">
            <User size={16} className="text-indigo-700" />
            <span>15+ Years in Transport & Logistics</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} className="text-indigo-700" />
            <a
              href="mailto:prakash@pstransport.com"
              className="hover:text-indigo-600 transition-colors"
            >
              prakash@pstransport.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Briefcase size={16} className="text-indigo-700" />
            <span>Transport & Logistics Expert</span>
          </div>
        </div>

        {/* Small Intro */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-4 text-gray-600 text-sm leading-relaxed"
        >
          Dedicated to delivering safe, reliable and efficient transport
          solutions that move businesses and families forward.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default OwnerShowcase;
