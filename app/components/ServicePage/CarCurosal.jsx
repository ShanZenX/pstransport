"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import cars from "@/app/data/carData.json"; 

const CarsCarousel = () => {
  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-4 py-6">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-2 sm:mb-6">
  — Our Cars Portfolio —
</h2>
      <p className="text-center mb-2 text-sm">
        Choose the best cab for yur budegt.
      </p>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={10}
        slidesPerView={1.1}
        navigation
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        breakpoints={{
          480: { slidesPerView: 1.5 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {cars.map((car, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
              <img
                src={car.img}
                alt={car.name}
                className="h-40 sm:h-52 w-full object-cover"
              />
              <div className="p-2 sm:p-3">
                <h3 className="text-base sm:text-lg font-bold">{car.name}</h3>
                <p className="text-gray-600 text-xs sm:text-sm">{car.desc}</p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-indigo-950 font-semibold text-sm sm:text-base">
                    {car.price}
                  </span>
                  <button className="bg-indigo-950 text-white px-2 sm:px-3 py-1 text-xs sm:text-sm rounded hover:bg-blue-800">
                    Book
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom arrow colors */}
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: black !important;
          width: 30px;
          height: 30px;
        }
        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 18px;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default CarsCarousel;
