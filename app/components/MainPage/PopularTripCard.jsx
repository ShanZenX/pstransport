"use client";

import React from "react";
import useInView from "@/app/components/About/useInView";

const PopularTripCard = ({ trip, index }) => {
  // 👀 observe each card
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      key={index}
      className={`flex items-center group bg-white overflow-hidden shadow-sm hover:shadow-md
        transition-all duration-700 ease-out transform
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
      hover:scale-[1.02] p-2 sm:p-3`}
      style={{ transitionDelay: `${index * 0.08}s` }} // slight stagger effect
    >
      {/* Image */}
      <div className="w-[64px] h-[64px] sm:w-[80px] sm:h-[80px] flex-shrink-0 bg-gray-100">
        <img
          src={trip.img}
          alt={trip.title}
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between pl-3 flex-1">
        <div>
          <p className="m-0 font-semibold text-[13px] sm:text-sm leading-snug line-clamp-2">
            {trip.title}
          </p>
          <p className="m-0 text-[11px] sm:text-xs text-gray-500 mt-1">
            {trip.price}
          </p>
        </div>
        <p className="m-0 mt-2 text-red-700 font-semibold text-[14px] sm:text-[14px] cursor-pointer hover:underline">
 <a
          href="tel:9360303916"
          className="mt-1 !text-red-700 text-[13px] sm:text-[14px] font-medium hover:underline cursor-pointer"
        >
Book Now
        </a>        </p>
       
      </div>
    </div>
  );
};

export default PopularTripCard;
