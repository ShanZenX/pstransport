import React from "react";
// import "./animation.css"

const StarRating = ({ rating, max = 5 }) => (
  <div
    className="flex items-center"
    aria-label={`Rating: ${rating} out of ${max} stars`}
  >
    {[...Array(max)].map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${
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
    className="bg-shadow-lg border border-gray-200  rounded-lg p-3 hover:shadow-xl transition-shadow duration-300 animate-slideUp"
    role="region"
    aria-label={`Review by ${review.name}`}
  >
    <h3 className="text-xl font-semibold text-gray-900">{review.name}</h3>
    <p className="text-sm text-gray-500 mb-2">{review.position}</p>
    <StarRating rating={review.rating} />
    <p className="mt-4 text-gray-700 leading-relaxed">{review.feedback}</p>
  </article>
);

const reviewsData = [
  {
    name: "Anjali Verma",
    position: "Logistics Manager at FreightWay",
    rating: 5,
    feedback:
      "PS Transport has revolutionized our freight operations with their reliable and timely services. Their fleet is well-maintained, and the drivers are highly professional. I highly recommend their transport solutions for any business seeking efficiency.",
  },
  {
    name: "Rahul Singh",
    position: "Supply Chain Director, GreenFields",
    rating: 4,
    feedback:
      "We have been using PS Transport for over a year now. Their dedicated customer service and robust tracking system ensure peace of mind. Minor delays were promptly communicated, which shows their commitment to transparency.",
  },
  {
    name: "Sanjay Kapoor",
    position: "Operations Head, Metro Retailers",
    rating: 5,
    feedback:
      "Exceptional service! The team at PS Transport understands the nuances of the logistics industry and adapts quickly to last-minute changes. Their app integration made scheduling and monitoring effortless for our team.",
  },
];

const ReviewsSection = () => (
  <section
    className="max-w-7xl mx-auto px-4 py-16  "
    aria-labelledby="reviews-heading"
  >
   <h2 className="text-2xl font-bold text-gray-800">
          User Testimonials
        </h2>
    <div className="flex flex-row justify-between m-2">
      <p>
        Real Stories. Real Smiles. Trusted by Hundreds of Families &
        Transporters.
      </p>{" "}
     <a
  href="https://maps.app.goo.gl/1mAp2JRjA6zg3g4BA"
  target="_blank"
  rel="noopener noreferrer"
  className="border bg-black text-white p-2 rounded-lg mx-2 no-underline hover:underline text-sm sm:text-base md:text-lg px-3 py-2 sm:px-4 sm:py-3 text-decoration-none "
>
  Write review
</a>
    </div>

    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
      {reviewsData.map((review, idx) => (
        <ReviewCard key={idx} review={review} />
      ))}
    </div>
  </section>
);

export default ReviewsSection;
