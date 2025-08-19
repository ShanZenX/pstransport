import React from "react";
import trips from "@/app/data/tripsData.json";
import PopularTripCard from "./PopularTripCard";

const PopularTrips = () => {
  return (
    <section className="bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            {" "}
            <h2 className=" text-2xl md:text-[32px] !font-bold mb-4  text-start mb-2 sm:mb-6  ">
              Popular Trips
            </h2>
            <p>These routes are booked the most popular for good reason..!!</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 animate-fadeInUp delay-600">
          {trips.map((trip, index) => (
            <PopularTripCard key={index} trip={trip} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularTrips;
