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
          className={`flex-1 w-full flex justify-center ${
            visionVisible ? "animate-slideInLeft" : "opacity-0"
          }`}
        >
          <Image
            src={ourVision}
            alt="Our Vision illustration"
            className="rounded-lg w-[280px] sm:w-[320px] md:w-[380px] h-auto"
          />
        </div>

        <div
          className={`flex-1 text-center md:text-left ${
            visionVisible ? "animate-slideInRight" : "opacity-0"
          }`}
        >
          <h2 className="!text-xl sm:!text-4xl !font-bold text-red-700  text-3xl md:text-4xl mb-2 text-start">
            Our <span className="text-red-700">Vision</span>
          </h2>
          <div className="h-[3px] w-20 bg-red-700 mb-4 rounded"></div>
          <p className="text-gray-800 leading-relaxed text-start">
            To be recognized among the most trusted transport service providers
            in India by offering affordable, reliable, and customer-focused
            travel solutions. At PS Transport, we strive to upgrade our fleet
            and technology to ensure comfort, safety, and satisfaction for both
            our customers and team members.
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
          <h2 className="!text-xl sm:!text-4xl !font-bold text-red-700   md:text-4xl mb-2 text-start">
            Our <span className="text-red-700"> Mission</span>
          </h2>
          <div className="h-[3px] w-20 bg-red-700 mb-4 rounded"></div>
          <p className="text-gray-800 leading-relaxed text-start">
            Our mission at PS Transport is to deliver safe, reliable, and timely
            travel services with professionalism and care. We are dedicated to
            offering comfort, responsibility, and excellent customer experiences
            on every ride.
          </p>
        </div>

        <div
          className={`flex-1 w-full flex justify-center ${
            missionVisible ? "animate-slideInLeft" : "opacity-0"
          }`}
        >
          <Image
            src={Vision}
            alt="Our Mission illustration"
            className="rounded-lg w-[280px] sm:w-[320px] md:w-[380px] h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default OurVision;
