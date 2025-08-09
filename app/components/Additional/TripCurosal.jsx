"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const trips = [
  {
    id: 1,
    title: "Trichy Express Tour",
    duration: "7N/8D",
    features: ["Stay", "AC Cab", "Ferry Transfer", "Light Show"],
    route: ["Trichy", "Srirangam", "Rock Fort"],
    price: 45000,
    image:
      "https://images.unsplash.com/photo-1581503994169-f2e5a4be2451?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Coimbatore Scenic Journey",
    duration: "8N/9D",
    features: ["Stay", "AC Cab", "Ferry Transfer", "Light Show"],
    route: ["Coimbatore", "Ooty", "Coonoor"],
    price: 40000,
    image:
      "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Thiruchathur Heritage Tour",
    duration: "9N/10D",
    features: ["Stay", "AC Cab", "Ferry Transfer", "Light Show"],
    route: ["Thiruchathur", "Temple Visit", "Local Market"],
    price: 42000,
    image:
      "https://images.unsplash.com/photo-1523381217956-120d69d2b3da?auto=format&fit=crop&w=800&q=80",
  },
];

const TripCarousel = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="relative max-w-7xl mx-auto px-[6%] py-16">
      <h2 className="text-center font-semibold text-2xl mb-2">
        – Popular PS Transport Trips –
      </h2>
      <p className="text-center text-sm text-gray-600 mb-8 max-w-xl mx-auto">
        Choose from our most loved packages designed for comfort, convenience, and unforgettable memories.
      </p>

      {/* Navigation Buttons */}
      <button
        ref={prevRef}
        aria-label="Previous trip"
        className="absolute -left-5 top-1/2 -translate-y-1/2 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white border border-gray-300 shadow hover:bg-gray-100 transition"
      >
        <IoIosArrowBack size={22} />
      </button>

      <button
        ref={nextRef}
        aria-label="Next trip"
        className="absolute -right-5 top-1/2 -translate-y-1/2 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white border border-gray-300 shadow hover:bg-gray-100 transition"
      >
        <IoIosArrowForward size={22} />
      </button>

      {/* Swiper */}
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 1.2, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 24 },
          1024: { slidesPerView: 3, spaceBetween: 28 },
        }}
      >
        {trips.map((trip) => (
          <SwiperSlide key={trip.id}>
            <div className="rounded-lg bg-white shadow-lg overflow-hidden">
              <div className="relative">
                <img
                  src={trip.image}
                  alt={trip.title}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded">
                  {trip.duration}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-base mb-2">{trip.title}</h3>

                {/* Features icons text */}
                <div className="flex space-x-4 text-gray-500 text-xs mb-3">
                  {trip.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-1">
                      {/* You can replace these with icons */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Route */}
                <div className="text-xs text-gray-600 mb-4">
                  {trip.route.map((place, idx) => (
                    <span key={place}>
                      {place}
                      {idx < trip.route.length - 1 ? " → " : ""}
                    </span>
                  ))}
                </div>

                <button className="text-xs px-3 py-1 bg-blue-900 text-white rounded-full hover:bg-blue-800 mb-2">
                  Call Now
                </button>

                <div className="text-xs text-gray-700 font-semibold">
                  ₹{trip.price.toLocaleString()} / price per person
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TripCarousel;
