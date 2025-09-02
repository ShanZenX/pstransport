import React from "react";

const PopularTripCard = ({ trip, index }) => {
  return (
    <div
      key={index}
      className="flex items-center group bg-white overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] p-2 sm:p-3"
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
        <p className="m-0 mt-2 text-red-700 font-semibold text-[10px] sm:text-[12px] cursor-pointer hover:underline">
          Book now
        </p>
      </div>
    </div>
  );
};

export default PopularTripCard;
