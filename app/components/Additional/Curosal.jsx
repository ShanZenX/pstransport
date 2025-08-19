"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaCar, FaHotel, FaMapMarkedAlt } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import PopularTripCard from "./PopularPackCard";

const packages = [
  {
    id: 1,
    name: "Chennai to Pondicherry",
    image: "/assets/trip/Pondicherry.png",
    nights: "2N/3D",
    price: "₹8,500",
    includes: ["AC Cab", "Beach View", "Hotel Stay"],
  },
  {
    id: 2,
    name: "Thiruchendur Temple Tour",
    image: "/assets/trip/thiruchendur.png",
    nights: "1N/2D",
    price: "₹5,000",
    includes: ["AC Cab", "Temple Visits", "Guide"],
  },
  {
    id: 3,
    name: "chennai to Thiruvanamali",
    image: "/assets/trip/thiruvanamalai.png",
    nights: "2N/2D",
    price: "₹12,000",
    includes: ["AC Cab", "Hill Stay", "Sightseeing"],
  },
  {
    id: 4,
    name: "Tripathi Pilgrimage",
    image: "/assets/trip/tirupathi.png",
    nights: "2N/3D",
    price: "₹7,500",
    includes: ["Cab", "Temple Visit", "Bridge Walk"],
  },
  {
    id: 5,
    name: "vellor Temple Tour",
    image: "/assets/trip/vellor.png",
    nights: "1N/2D",
    price: "₹4,500",
    includes: ["AC Cab", "Temple Visit", "Beach Walk"],
  },
  {
    id: 6,
    name: "Yercadu City",
    image: "/assets/trip/Yercadu.png",
    nights: "2N/3D",
    price: "₹6,500",
    includes: ["Cab", "Adiyogi Statue", "Local Sightseeing"],
  },
  {
    id: 7,
    name: "Munnar & Hills",
    image: "/assets/trip/munnar2.png",
    nights: "4N/5D",
    price: "₹15,000",
    includes: ["Cab", "Houseboat", "Spice Plantation"],
  },
 
  {
    id: 8,
    name: "Yercaud Hills Nature Drive",
    image: "/assets/trip/munnar.png",
    nights: "2N/3D",
    price: "₹9,000",
    includes: ["AC Cab", "Lake Visit", "Viewpoints"],
  },
];

const TransportPackagesCarousel = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="py-12 bg-gray-50 sm:mt-4 lg:mt-8 font-roboto">
      <div className="text-center mb-8 px-4">
      <h2 className=" !text-xl sm:!text-4xl !font-bold text-gray-800  text-xl  sm:text-2xl md:text-3xl text-center mb-2 sm:mb-6 flex justify-center items-center gap-3  ">
  <span className="h-[5px] w-[20px] bg-gray-800 block"></span>
  Popular Transport Packages
  <span className="h-[5px] w-[20px] bg-gray-800 block"></span>
</h2>
        <p className="text-gray-600 text-[14px] !sm:text-sm mb-10 max-w-xl mx-auto">
          Journey through Tamil Nadu in comfort, where every mile tells a story.{" "}
        </p>
        <a className="mt-4 px-5 py-2 text-white rounded-full hover:bg-indigo-700 transition bg-indigo-950 text-decoration-none">
          View all packages
        </a>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Navigation Buttons */}
        <button
          ref={prevRef}
          className="absolute rounded-full -left-5 top-1/2 z-10 hidden md:flex items-center justify-center w-10 h-10 bg-white border  shadow hover:bg-slate-100 transition"
        >
          <IoIosArrowBack size={22} className="!rounded-full" />
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
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {packages.map((pkg) => (
              <SwiperSlide>

        <PopularTripCard pkg={pkg} />
            </SwiperSlide>

          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TransportPackagesCarousel;
