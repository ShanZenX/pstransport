import Image from "next/image";
import React from "react";
import { FaCar, FaHotel, FaMapMarkedAlt } from "react-icons/fa";

const PopularTripCard = ({ pkg }) => (
  <div className="flex flex-col bg-white w-full rounded-xl shadow-md m-2 border border-gray-200 overflow-hidden transition hover:shadow-lg">
    <img
      src={pkg.image}
      alt={pkg.name}
      className="w-full h-[215px] sm:h-[290px] object-cover object-center"
    />

    <div className="flex flex-col flex-1 p-2 sm:p-3 gap-1.5">
      {/* Title */}
      <h5 className="text-sm sm:text-base !font-semibold text-gray-800">
        {pkg.name}
      </h5>

      {/* Nights
      <p className="text-[11px] sm:text-xs text-gray-500 font-poppins">
        {pkg.nights}
      </p> */}

      {/* Includes */}
      <div className="flex flex-wrap gap-1.5 text-[11px] sm:text-[12px] text-gray-600">
        {pkg.includes.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-1 bg-gray-100 px-1.5 py-0.5 rounded-md"
          >
            {item.includes("Cab") && <FaCar className="text-red-600 text-[12px]" />}
            {item.includes("Stay") && <FaHotel className="text-blue-600 text-[12px]" />}
            {item.includes("View") && <FaMapMarkedAlt className="text-green-600 text-[12px]" />}
            {item}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-auto pt-1 ">
       <a className="bg-red-700 text-white text-xs sm:text-sm px-3 py-1.5 rounded-md font-base hover:bg-red-900 transition cursor-pointer !no-underline">
  Call Now
</a>
        <span className="text-sm sm:text-base font-semibold font-poppins text-indigo-950">
          {pkg.price}
        </span>
      </div>
    </div>
  </div>
);

export default PopularTripCard;
