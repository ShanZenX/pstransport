import React from "react";
import trips from "@/app/data/tripsData.json";
import PopularTripCard from "./PopularTripCard";

const PopularTrips = () => {
  return (
    <section className="bg-gray-50 py-6 sm:py-15 px-3">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className=" text-2xl md:text-[32px] !font-extrabold mb-2  sm:mb-3  ">
              Popular <span className="text-[#582eff]"> Trips</span>
            </h2>
            <p className="text-sm text-gray-800">
              These routes are booked the most popular for good reason..!!
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 animate-fadeInUp delay-600">
          {trips.map((trip, index) => (
            <PopularTripCard key={index} trip={trip} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularTrips;
