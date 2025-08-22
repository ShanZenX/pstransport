import React from "react";

const PopularTripCard = ({ trip, index }) => {
  return (
    <div
      key={index}
      className="flex items-center group max-h-[140px] bg-white rounded-md overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-[1.02] p-1 sm:p-2"
    >
      <img
        src={trip.img}
        alt={trip.title}
        className="w-[52px] h-[52px] sm:w-[80px] sm:h-full object-cover object-center rounded-md flex-shrink-0"
      />
      <div className="flex flex-col justify-between pl-2 flex-1">
        <div>
          <p className="m-0 p-1 sm:m-0 font-semibold text-sm sm:text-sm leading-snug line-clamp-2">
  {trip.title}
</p>
<p className="m-0 p-1 sm:m-0 text-[11px] sm:text-sm text-gray-500">
  {trip.price}
</p>
        </div>
        <p className=" m-0 p-1 sm:ml-3 text-orange-600 text-start font-medium text-[10px] cursor-pointer sm:text-xs hover:underline">
          Book now
        </p>
      </div>
    </div>
  );
};

export default PopularTripCard;
