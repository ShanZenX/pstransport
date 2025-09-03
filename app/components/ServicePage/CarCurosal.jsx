"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import cars from "@/app/data/carData.json";

const CarsCarousel = () => {
  return (
    <div className="max-w-7xl  mx-auto px-2 sm:px-8 py-6">
      <h2 className="text-2xl md:text-[32px] !font-extrabold mb-2 !sm:my-5 text-gray-800 text-center flex justify-center items-center gap-2  ">
        <span className="h-[4px] w-[20px] bg-gray-800 block"></span>
        Our Cars <span className="text-red-700 "> Portfolio</span>
        <span className="h-[4px] w-[20px] bg-gray-800 block"></span>
      </h2>
      <p className="text-center mb-5 text-sm">
        Choose the best cab for yur budegt.
      </p>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={10}
        slidesPerView={1.1}
        navigation
        autoplay={{ delay: 2500, disableOnInteraction: true }}
        breakpoints={{
          480: { slidesPerView: 1.5 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {cars.map((car, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white  m-2 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
              <img
                src={car.img}
                alt={car.name}
                className="h-40 sm:h-52 w-full object-cover"
              />
              <div className="p-2 sm:p-3">
                <h5 className="text-base sm:text-lg !font-bold">{car.name}</h5>
                <p className="text-gray-600 text-xs sm:text-sm">{car.desc}</p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-indigo-950 font-semibold text-sm sm:text-base">
                    {car.price}
                  </span>
                  <button className="bg-red-700  text-white px-3 sm:px-3 py-1 text-xs sm:text-sm  hover:bg-red-900">
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
