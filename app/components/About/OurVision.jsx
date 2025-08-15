"use client";

import React from "react";
import ourVision from "@/public/assets/about/About-1.png";
import Vision from "@/public/assets/about/Vision.png";
import Image from "next/image";
import useInView from "./useInView";

const OurVision = () => {
  const [visionRef, visionVisible] = useInView({ threshold: 0.2 });
  const [missionRef, missionVisible] = useInView({ threshold: 0.2 });

  return (
    <section className="py-16 bg-white">
      {/* Vision Section */}
      <div
        ref={visionRef}
        className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row justify-between items-center gap-10 px-4 sm:px-6"
      >
        <div
          className={`flex-1 w-full ${
            visionVisible ? "animate-slideInLeft" : "opacity-0"
          }`}
        >
          <Image
            src={ourVision}
            alt="Our Vision illustration"
            className="rounded-lg w-full h-auto max-w-full"
          />
        </div>

        <div
          className={`flex-1 text-center md:text-left ${
            visionVisible ? "animate-slideInRight" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 text-start">
            Our Vision
          </h2>
          <div className="h-[3px] w-20 bg-black mb-4 rounded"></div>
          <p className="text-gray-800 leading-relaxed text-start">
            To be among the top 5 leading transport service providers in India,
            delivering cost-effective and reliable travel solutions with a
            win-win approach by continuously upgrading our fleet and technology
            to satisfy both our customers and dedicated team members.{" "}
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div
        ref={missionRef}
        className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 px-4 sm:px-6 mt-20"
      >
        <div
          className={`flex-1 text-center md:text-left ${
            missionVisible ? "animate-slideInRight" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 text-start">
            Our Mission
          </h2>
          <div className="h-[3px] w-20 bg-black mb-4 rounded"></div>
          <p className="text-gray-800 leading-relaxed text-start">
            Our mission is to provide efficient, reliable, timely and safe
            transportation services to our customers at all times.
            Professionalism, exceptional service, responsibility, and high
            levels of comfort are the pillars of our company.
          </p>
        </div>

        <div
          className={`flex-1 w-full ${
            missionVisible ? "animate-slideInLeft" : "opacity-0"
          }`}
        >
          <Image
            src={Vision}
            alt="Our Mission illustration"
            className="rounded-lg w-full h-auto max-w-full"
          />
        </div>
      
      </div>
    </section>
  );
};

export default OurVision;
