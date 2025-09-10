"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";
import useInView from "@/app/components/About/useInView";
import "swiper/css";
import "swiper/css/navigation";
import PopularTripCard from "./PopularPackCard";

const packages = [
  { id: 1, name: "Meenakshi Amman Kovil", image: "/assets/trip/meenkshikovil.png", nights: "3D", price: "₹13,700", includes: ["AC Cab", "Hotel Stay "] },
  { id: 2, name: "Palani Temple", image: "/assets/trip/palani.png", nights: "3D", price: "₹13,300", includes: ["AC Cab", "Temple Visits", "Guide"] },
  { id: 3, name: "Guruvayur Temple", image: "/assets/trip/guruvayur.png", nights: "3D", price: "₹22,500", includes: ["AC Cab", "Hill Stay", "Sightseeing"] },
  { id: 4, name: "Thiruchendur Temple", image: "/assets/trip/thiruchendur.png", nights: "3D", price: "₹16,500", includes: ["Cab", "Temple Visit", "Bridge Walk"] },
  { id: 5, name: "Vellor Temple", image: "/assets/trip/vellor.png", nights: "3D", price: "₹3,900", includes: ["AC Cab", "Temple Visit"] },
  { id: 6, name: "Srirangam Temple", image: "/assets/trip/srirangam.png", nights: "3D", price: "₹9,900", includes: ["Cab", "Adiyogi Statue", "Local Sightseeing"] },
  { id: 7, name: "Sabarimalai Temple", image: "/assets/trip/sabarimalai.png", nights: "4N/5D", price: "₹18,500", includes: ["Cab", "Houseboat", "Spice Plantation"] },
  { id: 8, name: "Kumbakonam Temple", image: "/assets/trip/kumbakonam.png", nights:"3D", price: "₹8,000", includes: ["AC Cab", "Lake Visit", "Viewpoints"] },
  { id: 9, name: "Rameshwaram Temple", image: "/assets/trip/rameshwaram.png", nights: "3D", price: "₹16,000", includes: ["AC Cab", "Lake Visit", "Viewpoints"] },
  { id: 10, name: "Tripati Temple", image: "/assets/trip/tripathi.png", nights: "3D", price: "₹6,200", includes: ["AC Cab", "Lake Visit", "Viewpoints"] },
  { id: 11, name: "Velankanni", image: "/assets/trip/velankanni.png", nights: "3D", price: "₹10,900", includes: ["AC Cab", "Lake Visit", "Viewpoints"] },
  { id: 12, name: "Thiruvanamali", image: "/assets/trip/thiruvanamalai.png", nights: "3D", price: "₹5,500", includes: ["AC Cab", "Lake Visit", "Viewpoints"] },

];

const TransportPackagesCarousel = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="py-6 sm:mt-10 lg:mt-8 font-roboto">
      {/* Heading */}
      <div className="text-center mb-8 px-4">
        <h2 className="!font-semibold mb-3 flex justify-center items-center gap-2 sm:mb-6">
          <span className="h-[4px] w-[20px] bg-gray-800 block" />
          Popular <span className="text-red-700">2 way</span>Packages
          <span className="h-[4px] w-[20px] bg-gray-800 block" />
        </h2>
        <p className="text-[14px] sm:text-sm mb-3 max-w-xl mx-auto">
          Journey through Tamil Nadu in comfort, where every mile tells a story.
        </p>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Navigation */}
        <button
          ref={prevRef}
          className="absolute -left-5 top-1/2 z-10 hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white border shadow hover:bg-slate-100 transition"
        >
          <IoIosArrowBack size={22} />
        </button>
        <button
          ref={nextRef}
          className="absolute -right-5 top-1/2 z-10 hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white border shadow hover:bg-slate-100 transition"
        >
          <IoIosArrowForward size={22} />
        </button>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={16}
          slidesPerView={1.1}
          loop
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {packages.map((pkg, index) => {
            const [ref, isInView] = useInView({ amount: 0.3, once: true });
            return (
              <SwiperSlide key={pkg.id}>
                <motion.div
                  ref={ref}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                >
                  <PopularTripCard pkg={pkg} />
                </motion.div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default TransportPackagesCarousel;
