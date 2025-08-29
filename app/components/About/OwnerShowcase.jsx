"use client";
import React from "react";
import { Mail, Briefcase, User } from "lucide-react";

const OwnerShowcase = () => {
  const owner = {
    name: "Prakash S",
    role: "Founder & Managing Director",
    email: "prakash@pstransport.com",
    experience: "15+ Years in Transport & Logistics",
    message:
      "With a vision to simplify logistics, I have dedicated my career to providing safe, reliable, and efficient transport solutions for businesses and families.",
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-2xl md:text-[32px] !font-extrabold mb-6 text-center flex justify-center items-center gap-3 text-gray-800">
        <span className="h-[3px] w-[20px] bg-black block"></span>
        Meet Our Founder
        <span className="h-[3px] w-[20px] bg-black block"></span>
      </h2>

      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-200 text-center">
        {/* Owner Icon */}
        <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-gray-800 to-gray-600 flex items-center justify-center text-white text-3xl font-bold">
          {owner.name.charAt(0)}
        </div>

        {/* Owner Name & Role */}
        <h3 className="text-xl font-semibold text-gray-900">{owner.name}</h3>
        <p className="text-sm text-gray-500 mb-3">{owner.role}</p>

        {/* Details */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-4 text-gray-700 text-sm">
          <div className="flex items-center gap-2">
            <User size={18} className="text-gray-600" />
            <span>{owner.experience}</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={18} className="text-gray-600" />
            <a
              href={`mailto:${owner.email}`}
              className="hover:text-blue-600 transition-colors"
            >
              {owner.email}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Briefcase size={18} className="text-gray-600" />
            <span>Transport & Logistics Expert</span>
          </div>
        </div>

        {/* Message */}
        <p className="mt-6 text-gray-600 leading-relaxed max-w-2xl mx-auto">
          {owner.message}
        </p>
      </div>
    </section>
  );
};

export default OwnerShowcase;
