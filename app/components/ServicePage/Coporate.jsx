"use client";

import Image from "next/image";
import CorporateCars from "@/public/Coporate.png";
import SupplyFreight from "@/public/LogisticsLorry.png";
import ContainerFreight from "@/public/LogisticsContainer.png";
import useInView from "@/app/components/About/useInView";

const CorporateCollaboration = () => {
  const sections = [
    {
      image: CorporateCars,
      title: "Corporate Collaborations",
      subtitle: "A ride you can count on for every business need",
      description:
        "Ps taxi provides a smooth riding option for business travel with 24/7 customer service. Experience the most comfortable rides for your professional use.",
      buttonText: "Explore",
    },
    {
      image: SupplyFreight,
      title: "Supply Freight",
      subtitle: "Reliable logistics for your goods",
      description:
        "We ensure safe and efficient delivery of your supplies with our trusted freight services.",
      buttonText: "Discover",
    },
    {
      image: ContainerFreight,
      title: "Container Freight",
      subtitle: "Secure transport for bulk cargo",
      description:
        "Our container freight solutions are designed for businesses that require large-scale, dependable shipping.",
      buttonText: "Learn More",
    },
  ];

  return (
    <section className="bg-white py-20 px-4 sm:px-8">
      {/* ✅ Heading placed once here */}
   <h2 className="text-3xl !font-extrabold text-gray-900 mb-3 !font-extrabold mb-2 !sm:my-5 flex justify-center items-center gap-2 text-center text-gray-800">
  <span className="h-[3px] w-[20px] bg-black block"></span>
  Our Logistics Services
  <span className="h-[3px] w-[20px] bg-black block"></span>
</h2>
<p className="text-center">
  Trusted by businesses and families across India for safe deliveries.
</p>


      {sections.map((sec, index) => {
        const [refLeft, inViewLeft] = useInView({ threshold: 0.2 });
        const [refRight, inViewRight] = useInView({ threshold: 0.2 });

        const reverse = index % 2 === 1; // alternate layout

        return (
          <div
            key={index}
            className={`max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center my-16 ${
              reverse ? "md:flex-row-reverse md:[&>*:first-child]:order-2" : ""
            }`}
          >
            {/* Image */}
            <div
              ref={refLeft}
              className={`transition-all duration-1000 ease-out transform flex justify-center ${
                inViewLeft
                  ? "opacity-100 translate-x-0"
                  : reverse
                  ? "opacity-0 translate-x-10"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <Image
                src={sec.image}
                alt={sec.title}
                width={600}
                height={300}
                className="rounded-2xl shadow-md object-cover w-[90%] md:w-[80%] lg:w-[80%] h-[220px] md:h-[260px] lg:h-[300px]"
              />
            </div>

            {/* Content */}
            <div
              ref={refRight}
              className={`transition-all duration-1000 ease-out transform delay-200 ${
                inViewRight
                  ? "opacity-100 translate-x-0"
                  : reverse
                  ? "opacity-0 -translate-x-10"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <h2 className="text-3xl !font-extrabold text-gray-900 mb-3">
                {sec.title}
              </h2>
              <h5 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">
                {sec.subtitle}
              </h5>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                {sec.description}
              </p>
              <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-full shadow-md transition">
                {sec.buttonText}
              </button>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default CorporateCollaboration;
