import React from "react";

const ThreeSection = () => {
  return (
    <section className="bg-white py-12 sm:py-20 px-4 sm:px-8">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-[32px] !font-extrabold mb-2 !sm:my-5 leading-snug">
          Direct connections <br />
          for <span className="text-indigo-900">clarity</span> and{" "}
          <span className="text-indigo-950">choice</span>
        </h2>
        <p className="mt-4 text-gray-700 text-sm sm:text-base md:text-lg">
          Our platform is dedicated to delivering essential transportation
          services that fulfill fundamental mobility needs while upholding core
          values and ethical business practices.
        </p>
      </div>

      {/* Subheading */}
      <div className="text-center mt-10">
        <h3 className="text-xl sm:text-2xl font-bold">
          The <span className="text-indigo-950">3E&apos;s</span> of Professionalism
        </h3>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mt-12 max-w-6xl mx-auto text-center">
        {/* Equitable Service */}
        <div>
          <div className="flex justify-center mb-4">
            {/* Icon using emoji/Unicode symbol */}
            <span className="text-5xl">🤲</span>
          </div>
          <h4 className="text-lg font-semibold text-indigo-950">
            Equitable Service
          </h4>
          <p className="mt-2 text-gray-700 text-sm sm:text-base">
            We make sure everyone gets trusted rides with fair prices and great
            service quality.
          </p>
        </div>

        {/* Essential Mobility */}
        <div>
          <div className="flex justify-center mb-4">
            <span className="text-5xl">🚖</span>
          </div>
          <h4 className="text-lg font-semibold text-indigo-950">
            Essential Mobility
          </h4>
          <p className="mt-2 text-gray-700 text-sm sm:text-base">
            We know rides are important, whether for work, medical needs, or
            more. We’re committed to providing you the best service.
          </p>
        </div>

        {/* Ethical Operations */}
        <div>
          <div className="flex justify-center mb-4">
            <span className="text-5xl">⚙️</span>
          </div>
          <h4 className="text-lg font-semibold text-indigo-950">
            Ethical Operations
          </h4>
          <p className="mt-2 text-gray-700 text-sm sm:text-base">
            Our service is built on fairness, honesty, and care in every ride
            for everyone.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ThreeSection;
