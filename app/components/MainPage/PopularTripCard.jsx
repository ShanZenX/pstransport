import React from "react";

const PopularTripCard = ({ trip, index }) => {
  return (
    <div
      key={index}
      className="flex items-center group bg-white rounded-md overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-[1.02] p-1 sm:p-2"
    >
      <img
        src={trip.img}
        alt={trip.title}
        className="w-[48px] h-[48px] sm:w-[70px] sm:h-[70px] object-cover object-center rounded-md flex-shrink-0"
      />
      <div className="flex flex-col justify-between pl-2 flex-1">
        <div>
          <p className="font-semibold text-xs sm:text-sm leading-snug line-clamp-2">
            {trip.title}
          </p>
          <p className="text-[10px] sm:text-xs text-gray-500">{trip.price}</p>
        </div>
        <button className="mt-0.5 text-orange-600 text-start font-medium text-[10px] sm:text-xs hover:underline">
          Book now
        </button>
      </div>
    </div>
  );
};

export default PopularTripCard;
