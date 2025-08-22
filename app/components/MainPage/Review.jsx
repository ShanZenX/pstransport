"use client";
import React from "react";
import { motion } from "framer-motion";

// ⭐ Reusable Star Rating
const StarRating = ({ rating, max = 5 }) => (
  <div className="flex items-center">
    {[...Array(max)].map((_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "text-yellow-400" : "text-gray-300"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 
        1.371 1.24.588 1.81l-3.388 2.455a1 1 0 00-.364 1.118l1.287 3.974c.3.921-.755 
        1.688-1.538 1.118l-3.388-2.455a1 1 0 00-1.175 
        0l-3.388 2.455c-.783.57-1.838-.197-1.538-1.118l1.287-3.974a1 
        1 0 00-.364-1.118L2.045 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 
        1 0 00.95-.69l1.286-3.974z"
        />
      </svg>
    ))}
  </div>
);

// ⭐ Review Card
const ReviewCard = ({ review }) => (
  <motion.article
    className="min-w-[280px] max-w-[320px] bg-white border border-gray-200 shadow-md rounded-lg p-4 mx-2"
    whileHover={{ scale: 1.05 }}
  >
    <h3 className="text-base font-semibold text-gray-900">{review.name}</h3>
    <p className="text-xs text-gray-500 mb-1">{review.position}</p>
    <StarRating rating={review.rating} />
    <p className="mt-2 text-sm text-gray-700 leading-snug">{review.feedback}</p>
  </motion.article>
);

// ⭐ Reviews Data
const reviewsData = [
  {
    name: "Karan K",
    position: "Logistics Manager at FreightWay",
    rating: 5,
    feedback:
      "PS Transport has revolutionized our freight operations with their reliable and timely services. Their fleet is well-maintained, and the drivers are highly professional.",
  },
  {
    name: "Madhu S",
    position: "Supply Chain Director, GreenFields",
    rating: 4,
    feedback:
      "We have been using PS Transport for over a year now. Their dedicated customer service and robust tracking system ensure peace of mind.",
  },
  {
    name: "Srivarsha A",
    position: "Operations Head, Metro Retailers",
    rating: 5,
    feedback:
      "Exceptional service! The team adapts quickly to last-minute changes. Their app integration made scheduling and monitoring effortless.",
  },
  {
    name: "Ravi K",
    position: "Warehouse Manager, FreshMart",
    rating: 4,
    feedback:
      "Very reliable. Their drivers are punctual and communication is excellent. Highly recommend for consistent logistics support.",
  },
  {
    name: "Anjali P",
    position: "CEO, QuickShip Pvt Ltd",
    rating: 5,
    feedback:
      "Absolutely amazing! Smooth coordination and tracking system. Our business has become more efficient thanks to PS Transport.",
  },
];

// ⭐ Reviews Section with Infinite Carousel
const ReviewsSection = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10 my-8">
      <h2 className="text-2xl md:text-[32px] !font-extrabold mb-6 text-center flex justify-center items-center gap-3">
        <span className="h-[3px] w-[20px] bg-black block"></span>
        User Testimonials{" "}
        <span className="h-[3px] w-[20px] bg-black block"></span>
      </h2>

      <p className="text-sm text-gray-600 text-center">
        Real Stories. Real Smiles. Trusted by Hundreds of Families &
        Transporters.
      </p>
      <div className="flex justify-center my-4">

      <a
        href="https://maps.app.goo.gl/1mAp2JRjA6zg3g4BA"
        target="_blank"
        rel="noopener noreferrer"
        className="border bg-black text-white rounded-md px-3 py-2 text-sm hover:bg-gray-800 text-center "
      >
        Write Review
      </a>
      </div>

      <div className="relative overflow-hidden">
        <motion.div
          className="flex"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
        >
          {reviewsData.concat(reviewsData).map((review, idx) => (
            <ReviewCard key={idx} review={review} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewsSection;
