import Image from "next/image";
import icon1 from "@/public/assets/about/icon1.png";
import icon2 from "@/public/assets/about/icon2.png";
import icon3 from "@/public/assets/about/icon3.png";

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
          The <span className="text-indigo-950">3E&apos;s</span> of
          Professionalism
        </h3>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mt-12 max-w-6xl mx-auto text-center">
        {/* Equitable Service */}
        <div className="bg-white p-6 h-56 flex flex-col justify-center rounded-xl transition-all duration-300 hover:shadow-2xl">
          <div className="flex justify-center mb-2">
            <Image src={icon1} alt="Equitable Service" className="w-12 h-12" />
          </div>
          <h4 className="text-lg !font-bold !text-indigo-900">
            Equitable Service
          </h4>
          <p className="mt-1 text-gray-700 text-sm">
            We make sure everyone gets trusted rides with fair prices and great
            service quality.
          </p>
        </div>

        {/* Essential Mobility */}
        <div className="bg-white p-6 h-56 flex flex-col justify-center rounded-xl transition-all duration-300 hover:shadow-2xl">
          <div className="flex justify-center mb-2">
            <Image src={icon2} alt="Essential Mobility" className="w-12 h-12" />
          </div>
          <h4 className="text-lg !font-bold !text-indigo-900">
            Essential Mobility
          </h4>
          <p className="mt-1 text-gray-700 text-sm">
            We know rides are important, whether for work, medical needs, or
            more. We’re committed to providing you the best service.
          </p>
        </div>

        {/* Ethical Operations */}
        <div className="bg-white p-6 h-56 flex flex-col justify-center rounded-xl transition-all duration-300 hover:shadow-2xl">
          <div className="flex justify-center mb-2">
            <Image src={icon3} alt="Ethical Operations" className="w-12 h-12" />
          </div>
          <h4 className="text-lg !font-bold !text-indigo-900">
            Ethical Operations
          </h4>
          <p className="mt-1 text-gray-700 text-sm">
            Our service is built on fairness, honesty, and care in every ride
            for everyone.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ThreeSection;
