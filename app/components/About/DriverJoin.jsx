"use client";
import React from "react";

const DriverJoinSection = () => {
  return (
    <section className="relative py-14 sm:py-20 my-3 sm:my-20">
      <div className="max-w-6xl mx-auto px-4 md:flex items-center justify-between ">
        <div className="md:w-2/3 mb-6 md:mb-0">
          <h2 className="text-2xl md:text-[32px] !font-extrabold mb-2 !sm:my-5  uppercase tracking-widest text-gray-500">
            Join PS Transport
          </h2>
          <h5 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">
            Ready to Drive with PS Transport?
          </h5>
          <p className="text-base text-gray-600 mt-3">
            Become a part of the PS Transport driver community and enjoy steady
            work, timely payments, and a supportive network that values your
            dedication. Your journey starts here.
          </p>
        </div>

        <div className="md:w-1/6 flex flex-col gap-3">
          <a
            href="#apply"
            className="bg-indigo-900 text-white text-base font-medium py-2.5 px-2 rounded-lg !no-underline text-center shadow hover:bg-indigo-600 transition-all"
          >
            Become a Member
          </a>
        </div>
      </div>
    </section>
  );
};

export default DriverJoinSection;
