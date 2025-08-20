import React from "react";

const StarRating = ({ rating, max = 5 }) => (
  <div
    className="flex items-center"
    aria-label={`Rating: ${rating} out of ${max} stars`}
  >
    {[...Array(max)].map((_, i) => (
      <svg
        key={i}
        className={`w-3 h-3 ${
          i < rating ? "text-yellow-400" : "text-gray-300"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
        aria-hidden="true"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.455a1 1 0 00-.364 1.118l1.287 3.974c.3.921-.755 1.688-1.538 1.118l-3.388-2.455a1 1 0 00-1.175 0l-3.388 2.455c-.783.57-1.838-.197-1.538-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.045 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.974z" />
      </svg>
    ))}
  </div>
);

const ReviewCard = ({ review }) => (
  <article
    className="shadow-sm border border-gray-200 rounded-md p-2 hover:shadow-md transition-shadow duration-300 text-xs"
    role="region"
    aria-label={`Review by ${review.name}`}
  >
    <h3 className="text-sm font-semibold text-gray-900">{review.name}</h3>
    <p className="text-[10px] text-gray-500 mb-1">{review.position}</p>
    <StarRating rating={review.rating} />
    <p className="mt-2 text-gray-700 leading-snug">{review.feedback}</p>
  </article>
);

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
    name: " Srivarsha A",
    position: "Operations Head, Metro Retailers",
    rating: 5,
    feedback:
      "Exceptional service! The team adapts quickly to last-minute changes. Their app integration made scheduling and monitoring effortless.",
  },
];

const ReviewsSection = () => (
  <section
    className="max-w-5xl mx-auto px-2 py-6 my-8 sm:my-25"
    aria-labelledby="reviews-heading"
  >
    <h2 className=" text-2xl md:text-[32px] !font-extrabold mb-2 sm:mb-3 ">
      {" "}
      User Testimonials{" "}
    </h2>{" "}
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4">
      <p className="text-xs text-gray-600">
        Real Stories. Real Smiles. Trusted by Hundreds of Families &
        Transporters.
      </p>
      <a
        href="https://maps.app.goo.gl/1mAp2JRjA6zg3g4BA"
        target="_blank"
        rel="noopener noreferrer"
        className="border bg-black text-white rounded-md px-2 py-1 text-[10px] hover:underline"
      >
        Write review
      </a>
    </div>
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {reviewsData.map((review, idx) => (
        <ReviewCard key={idx} review={review} />
      ))}
    </div>
  </section>
);

export default ReviewsSection;
