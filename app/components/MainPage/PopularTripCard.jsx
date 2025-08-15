import React from "react";

const PopularTripCard = ({ trip, index }) => {
  return (
    <div
      key={index}
      className="flex items-center group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 p-2 sm:p-3"
    >
      <img
        src={trip.img}
        alt={trip.title}
        className="w-[60px] h-[60px] sm:w-[90px] sm:h-[90px] object-cover object-center rounded-md flex-shrink-0"
      />
      <div className="flex flex-col justify-between pl-3 flex-1">
        <div>
          <h6 className="font-semibold text-sm sm:text-base leading-snug line-clamp-2">
            {trip.title}
          </h6>
          <p className="text-xs sm:text-sm text-gray-500">{trip.price}</p>
        </div>
        <button className="mt-1 text-orange-600 text-start font-medium text-xs sm:text-sm hover:underline">
          Book now
        </button>
      </div>
    </div>
  );
};

export default PopularTripCard;

