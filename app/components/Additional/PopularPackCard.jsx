import Image from "next/image";
import React from "react";
import { FaCar, FaHotel, FaMapMarkedAlt } from "react-icons/fa";
import { SwiperSlide } from "swiper/react";

const PopularTripCard = ({ pkg }) => (
  <div className="bg-white w-full rounded-lg shadow-md m-2 border-black transition overflow-hidden">
    {/* ✅ Mobile: shorter image height */}
    <img
      src={pkg.image}
      alt={pkg.name}
      className="w-full h-[180px] sm:h-[250px] object-top object-cover"
    />

    {/* ✅ Mobile: tighter padding + height */}
    <div className="p-2 sm:p-3 flex flex-col sm:gap-2 max-h-[130px] sm:max-h-[160px]">
      <h5 className="text-base sm:text-lg !font-semibold sm:pt-1 text-gray-800 m-0">
        {pkg.name}
      </h5>

      <p className="text-xs sm:text-sm text-gray-500 sm:pt-1 font-poppins m-0">
        {pkg.nights}
      </p>

      <div className="flex flex-wrap gap-1 sm:gap-2 sm:pt-1 text-[11px] sm:text-xs text-gray-600">
        {pkg.includes.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded"
          >
            {item.includes("Cab") && <FaCar />}
            {item.includes("Stay") && <FaHotel />}
            {item.includes("View") && <FaMapMarkedAlt />} {item}
          </span>
        ))}
      </div>

      <div className="flex mb-1 sm:mb-2 items-center justify-between">
        <a className="bg-indigo-950 text-white text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-2 hover:bg-indigo-700 transition text-decoration-none">
          Call Now
        </a>
        <span className="text-base sm:text-lg font-bold !font-poppins text-indigo-950">
          {pkg.price}
        </span>
      </div>
    </div>
  </div>
);

export default PopularTripCard;
