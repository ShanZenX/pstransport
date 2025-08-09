"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaCar, FaHotel, FaMapMarkedAlt } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";

const packages = [
  {
    id: 1,
    name: "Chennai to Pondicherry",
    image:
      "data:image/jpeg;base64,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",
    nights: "2N/3D",
    price: "₹8,500",
    includes: ["AC Cab", "Beach View", "Hotel Stay"],
  },
  {
    id: 2,
    name: "Madurai Temple City Tour",
    image: "https://source.unsplash.com/featured/?madurai,temple",
    nights: "1N/2D",
    price: "₹5,000",
    includes: ["AC Cab", "Temple Visits", "Guide"],
  },
  {
    id: 3,
    name: "Hill Drive to Ooty",
    image: "https://source.unsplash.com/featured/?ooty,hills",
    nights: "3N/4D",
    price: "₹12,000",
    includes: ["AC Cab", "Hill Stay", "Sightseeing"],
  },
  {
    id: 4,
    name: "Rameswaram Pilgrimage",
    image: "https://source.unsplash.com/featured/?rameswaram,temple",
    nights: "2N/3D",
    price: "₹7,500",
    includes: ["Cab", "Temple Visit", "Bridge Walk"],
  },
  {
    id: 5,
    name: "Tiruchendur Temple Tour",
    image: "https://source.unsplash.com/featured/?tiruchendur,temple",
    nights: "1N/2D",
    price: "₹4,500",
    includes: ["AC Cab", "Temple Visit", "Beach Walk"],
  },
  {
    id: 6,
    name: "Coimbatore City",
    image: "https://source.unsplash.com/featured/?coimbatore,isha",
    nights: "2N/3D",
    price: "₹6,500",
    includes: ["Cab", "Adiyogi Statue", "Local Sightseeing"],
  },
  {
    id: 7,
    name: "Kerala Backwater & Hills",
    image: "https://source.unsplash.com/featured/?kerala,backwaters",
    nights: "4N/5D",
    price: "₹15,000",
    includes: ["Cab", "Houseboat", "Spice Plantation"],
  },
  {
    id: 8,
    name: "Kanyakumari Sunrise Tour",
    image: "https://source.unsplash.com/featured/?kanyakumari,sea",
    nights: "2N/3D",
    price: "₹8,000",
    includes: ["Cab", "Vivekananda Rock", "Sunrise View"],
  },
  {
    id: 9,
    name: "Trichy Andal Tour",
    image: "https://source.unsplash.com/featured/?trichy,temple",
    nights: "1N/2D",
    price: "₹5,500",
    includes: ["Cab", "Rockfort Visit", "Srirangam Temple"],
  },
  {
    id: 10,
    name: "Yercaud Hills Nature Drive",
    image: "https://source.unsplash.com/featured/?yercaud,forest",
    nights: "2N/3D",
    price: "₹9,000",
    includes: ["AC Cab", "Lake Visit", "Viewpoints"],
  },
];

const TransportPackagesCarousel = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="py-12 bg-gray-50">
      <div className="text-center mb-8 px-4">
        <h2 className="text-2xl font-bold text-gray-800">
          — Popular Transport Packages —
        </h2>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto">
          Explore Tamil Nadu with our premium cab-based packages — from
          coastlines to hill stations.
        </p>
        <a className="mt-4 px-5 py-2 text-white rounded-full hover:bg-blue-700 transition bg-indigo-950 text-decoration-none">
          View all packages
        </a>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Navigation Buttons */}
        <button
          ref={prevRef}
          className="absolute -left-5 top-1/2 z-10 hidden md:flex items-center justify-center w-10 h-10 bg-white border rounded-full shadow hover:bg-slate-100 transition"
        >
          <IoIosArrowBack size={22} />
        </button>
        <button
          ref={nextRef}
          className="absolute -right-5 top-1/2 z-10 hidden md:flex items-center justify-center w-10 h-10 bg-white border rounded-full shadow hover:bg-slate-100 transition"
        >
          <IoIosArrowForward size={22} />
        </button>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1.1}
          loop
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          breakpoints={{
            640: { slidesPerView: 1.3 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {packages.map((pkg) => (
            <SwiperSlide key={pkg.id}>
              <div className="bg-white rounded-lg shadow hover:shadow-md transition overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-45 object-cover"
                />
                <div className="p-3">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {pkg.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">{pkg.nights}</p>

                  <div className="flex flex-wrap gap-2 text-xs text-gray-600 mb-4">
                    {pkg.includes.map((item, i) => (
                      <span
                        key={i}
                        className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded"
                      >
                        {item.includes("Cab") && <FaCar />}
                        {item.includes("Stay") && <FaHotel />}
                        {item.includes("View") && <FaMapMarkedAlt />}
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <a className="bg-indigo-950 text-white text-sm px-4 py-2 rounded-full hover:bg-indigo-500 transition text-decoration-none">
                      Call Now
                    </a>

                    <span className="text-lg font-bold text-indigo-950">
                      {pkg.price}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TransportPackagesCarousel;
