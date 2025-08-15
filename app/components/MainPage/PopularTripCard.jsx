import React from "react";

const PopularTripCard = ({ trip, index }) => {
  return (
    <div
      key={index}
      className="flex items-center group border !border-[#2d3865] rounded-lg  overflow-hidden shadow-md hover:text-white  hover:bg-gradient-to-r hover:to-[#47589cc3] hover:from-[#162455]  hover:shadow-lg transition-all duration-500 transform hover:scale-102 p-2"
    >
      <img
        src={trip.img}
        alt={trip.title}
        className="w-[80px] h-[80px] sm:w-[100px] sm:h-[140px] object-cover object-center rounded-md flex-shrink-0"
      />
      <div className="flex flex-col justify-between pl-3 flex-1">
        <div>
          <h6 className="font-semibold text-sm sm:text-base leading-snug line-clamp-2">
            {trip.title}
          </h6>
          <p className="text-xs sm:text-sm text-gray-500 group-hover:text-white">{trip.price}</p>
        </div>
        <button className="mt-1 bg-[#2d386500] w-fit p-1 rounded text-yellow-500 font-medium text-xs sm:text-sm text-start hover:underline">
          Book now
        </button>
      </div>
    </div>
  );
};

export default PopularTripCard;
