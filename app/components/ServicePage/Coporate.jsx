"use client";

import Image from "next/image";
import CorporateCars from "@/public/Coporate.png";
import useInView from "@/app/components/About/useInView";

const CorporateCollaboration = () => {
  const [refLeft, inViewLeft] = useInView({ threshold: 0.2 });
  const [refRight, inViewRight] = useInView({ threshold: 0.2 });

  return (
    <section className="bg-white py-20 px-4 sm:px-8 ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center  my-10 sm:my-2 ">
        <div
          ref={refLeft}
          className={`transition-all duration-1000 ease-out transform flex justify-center ${
            inViewLeft
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-10"
          }`}
        >
          <Image
            src={CorporateCars}
            alt="Corporate Collaboration"
            className="rounded-2xl shadow-md object-cover w-[90%] md:w-[90%] lg:w-[90%] h-auto"
          />
        </div>

        {/* Right Content */}
        <div
          ref={refRight}
          className={`transition-all duration-1000 ease-out transform delay-200 !xl:mt-20 ${
            inViewRight
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-10"
          }`}
        >
          <h2 className="text-3xl !font-extrabold text-gray-900 mb-3">
            Corporate Collaborations
          </h2>
          <h5 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">
            A ride you can count on for every business need
          </h5>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
            Ps taxi provides a smooth riding option for business travel with
            24/7 customer service. Experience the most comfortable rides for
            your professional use.
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-full shadow-md transition">
            Explore
          </button>
        </div>
      </div>
    </section>
  );
};

export default CorporateCollaboration;
