import React from "react";

const PopularTripCard = ({ trip, index }) => {
  return (
    <div
      key={index}
      className="flex items-center group max-h-[120px] bg-white rounded-md overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-[1.02] p-1 sm:p-2"
    >
      <img
        src={trip.img}
        alt={trip.title}
        className="w-[42px] h-[42px] sm:w-[64px] sm:h-[64px] object-cover object-center rounded-md flex-shrink-0"
      />
      <div className="flex flex-col justify-between pl-2 flex-1">
        <div>
          <p className="m-0 p-1 sm:m-0 font-semibold text-[13px] sm:text-sm leading-snug line-clamp-2">
            {trip.title}
          </p>
          <p className="m-0 p-1 sm:m-0 text-[10px] sm:text-xs text-gray-500">
            {trip.price}
          </p>
        </div>
        <p className="m-0 p-1 sm:ml-3 text-orange-600 text-start font-medium text-[9px] sm:text-[11px] cursor-pointer hover:underline">
          Book now
        </p>
      </div>
    </div>
  );
};

export default PopularTripCard;
