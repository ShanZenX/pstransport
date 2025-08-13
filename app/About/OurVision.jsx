import React from 'react';
import ourVision from "@/public/assets/about/About-1.png";
import Image from 'next/image';

const OurVision = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row  justify-between items-center gap-10 px-6">
        
        {/* Image Section */}
        <div className="flex-1 animate-slideInLeft">
          <Image
            src={ourVision}
            alt="Our vision illustration"
            className="w-[350] h-auto rounded-lg "
          />
        </div>

        {/* Content Section */}
        <div className="flex-1 text-center md:text-left animate-slideInRight">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Our Vision
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            At our core, we aim to redefine urban travel by offering fast, 
            safe, and affordable taxi services. We believe transportation 
            should be effortless, accessible, and enjoyable — connecting 
            people to their destinations with comfort and reliability.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Through innovative technology and a customer-first approach, 
            we strive to build a future where every ride is a smooth 
            experience, and every passenger feels valued.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurVision;
