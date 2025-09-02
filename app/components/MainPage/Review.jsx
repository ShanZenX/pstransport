"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import { motion, useInView } from "framer-motion";

import "swiper/css";

// ⭐ Reusable Star Rating
const StarRating = ({ rating, max = 5 }) => (
  <div className="flex items-center">
    {[...Array(max)].map((_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 
          3.974a1 1 0 00.95.69h4.18c.969 0 
          1.371 1.24.588 1.81l-3.388 2.455a1 
          1 0 00-.364 1.118l1.287 3.974c.3.921-.755 
          1.688-1.538 1.118l-3.388-2.455a1 1 
          0 00-1.175 0l-3.388 2.455c-.783.57-1.838-.197-1.538-1.118l1.287-3.974a1 
          1 0 00-.364-1.118L2.045 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 
          1 0 00.95-.69l1.286-3.974z" />
      </svg>
    ))}
  </div>
);

// ⭐ Review Card
const ReviewCard = ({ review }) => (
  <article className="min-w-[280px] max-w-[320px] bg-white border border-gray-200 shadow-md rounded-lg p-4 mx-2">
    <h3 className="text-base font-semibold text-gray-900">{review.name}</h3>
    <StarRating rating={review.rating} />
    <p className="mt-2 text-sm text-gray-700 leading-snug">{review.feedback}</p>
  </article>
);

// ⭐ Reviews Data
const reviewsData = [
  {
    name: "Karan K",
    rating: 5,
    feedback:
      "PS Transport has revolutionized our freight operations with their reliable and timely services. Their fleet is well-maintained.",
  },
  {
    name: "Madhu S",
    rating: 4,
    feedback:
      "We have been using PS Transport for over a year now. Their dedicated customer service and robust tracking system ensure peace of mind.",
  },
  {
    name: "Srivarsha A",
    rating: 5,
    feedback:
      "Exceptional service! The team adapts quickly to last-minute changes. Their app integration made scheduling and monitoring effortless.",
  },
  {
    name: "Ravi K",
    rating: 4,
    feedback:
      "Very reliable. Their drivers are punctual and communication is excellent. Highly recommend for consistent logistics support.",
  },
  {
    name: "Anjali P",
    rating: 5,
    feedback:
      "Absolutely amazing! Smooth coordination and tracking system. Our business has become more efficient thanks to PS Transport.",
  },
];

// ⭐ Reviews Section with Smooth Animation + Infinite Carousel
const ReviewsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const fadeUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay },
    },
  });

  return (
    <section ref={ref} className="max-w-6xl mx-auto px-4 py-10 my-8">
      {/* Title */}
      <motion.h2
        variants={fadeUp(0)}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="text-2xl md:text-[32px] !font-extrabold mb-6 text-center flex justify-center items-center gap-3"
      >
        <span className="h-[3px] w-[20px] bg-black block "></span>
        User <span className="text-[#582eff]"> Testimonials </span>
        <span className="h-[3px] w-[20px] bg-black block"></span>
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        variants={fadeUp(0.2)}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="text-sm text-gray-900 text-center"
      >
        Real Stories. Real Smiles. Trusted by Hundreds of Families & Transporters.
      </motion.p>

      {/* Button */}
      <motion.div
        variants={fadeUp(0.4)}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="flex justify-center my-4"
      >
        <a
          href="https://maps.app.goo.gl/1mAp2JRjA6zg3g4BA"
          target="_blank"
          rel="noopener noreferrer"
          className="border bg-[#582eff] text-white rounded-md px-3 py-2 text-sm hover:bg-indigo-900 text-center"
        >
          Write Review
        </a>
      </motion.div>

      {/* Swiper Carousel (keeps running) */}
      <motion.div
        variants={fadeUp(0.6)}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
        <Swiper
          modules={[Autoplay, FreeMode]}
          spaceBetween={20}
          slidesPerView="auto"
          loop={true}
          speed={10000} // 🚂 smooth slow speed
          autoplay={{
            delay: 0, // continuous movement
            disableOnInteraction: false,
          }}
          freeMode={{
            enabled: true,
            momentum: false,
          }}
          className="py-6"
        >
          {reviewsData.concat(reviewsData).map((review, idx) => (
            <SwiperSlide key={idx} className="!w-auto">
              <ReviewCard review={review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default ReviewsSection;
