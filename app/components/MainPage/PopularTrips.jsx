import React from "react";
import trips from "@/app/data/tripsData.json";

const PopularTrips = () => {
  return (
    <section className="bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold"> Popular Trips</h2>
          <button className="border border-gray-400 px-4 py-1 rounded hover:bg-gray-100 transition">
            View All
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {trips.map((trip, index) => (
            <div
              key={index}
              className="flex items-center rounded-lg shadow-md overflow-hidden bg-white hover:shadow-lg transition p-2"
            >
              <img
                src={trip.img}
                alt={trip.title}
                className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] object-cover object-center rounded-md flex-shrink-0"
              />
              <div className="flex flex-col justify-between pl-3 flex-1">
                <div>
                  <h6 className="font-semibold text-sm sm:text-base leading-snug line-clamp-2">
                    {trip.title}
                  </h6>
                  <p className="text-xs sm:text-sm text-gray-500">{trip.price}</p>
                </div>
                <button className="mt-1 text-yellow-500 font-medium text-xs sm:text-sm text-start hover:underline">
                  Book now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularTrips;
