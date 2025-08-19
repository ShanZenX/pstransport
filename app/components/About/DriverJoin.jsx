"use client";
import React from "react";

const DriverJoinSection = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6 md:flex items-center justify-between">
        {/* Left Content */}
        <div className="md:w-2/3 mb-6 md:mb-0">
          <h2 className="!text-xl sm:!text-4xl !font-bold text-gray-800  text-sm tracking-widest text-gray-500 font-semibold uppercase">
            Join PS Transport
          </h2>
          <h5 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Ready to Drive with PS Transport?
          </h5>
          <p className="text-lg text-gray-600 mt-4">
            Become a part of the PS Transport driver community and enjoy steady
            work, timely payments, and a supportive network that values your
            dedication. Your journey starts here.
          </p>
        </div>

        {/* Right Side Buttons */}
        <div className="md:w-1/3 flex flex-col gap-4">
          <a
            href="#apply"
            className="bg-indigo-900 text-white text-lg font-medium py-3 px-6 rounded-lg text-center shadow hover:bg-indigo-700 transition-all"
          >
            Apply for Your Choice
          </a>
          <a
            href="#why-join"
            className="border border-green-600 text-green-600 text-lg font-medium py-3 px-6 rounded-lg hover:bg-green-50 transition-all"
          >
            See Why You Should Join PS Transport
          </a>
        </div>
      </div>
    </section>
  );
};

export default DriverJoinSection;
