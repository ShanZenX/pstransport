import React from "react";
import taxi from "@/public/taxi.png";
import ServiceCard from "../miniComponent/ServiceCard";
import Image from "next/image";
import servicebg from "@/public/sb.jpg";

const services = [
  {
    title: "Taxi",
    description:
      "Enjoy quick, comfortable, and reliable taxi services for your daily commute, airport transfers, or city tours — always on time and hassle-free.",
    icon: taxi,
    alt: "Taxi Service",
  },
  {
    title: "Rental Cars",
    description:
      "Choose from a wide range of well-maintained rental cars to suit your travel needs — perfect for business trips, family vacations, weekend getaways, special occasions, or long road adventures.",
    icon: taxi,
    alt: "Rental Car Service",
  },
  {
    title: "Logistics",
    description:
      "Get efficient and affordable logistics solutions for moving goods safely and on schedule — designed for businesses and individuals alike.",
    icon: taxi,
    alt: "Logistics Service",
  },
];

const ServiceSection = () => (
  <section className="relative flex justify-center items-center flex-col w-full bg-[#e6b31900]">
    {/* Background Image */}
    <div className="relative h-[220px] sm:h-[300px] md:h-[350px] overflow-hidden w-full">
      <Image
        src={servicebg}
        alt="Service Background"
        fill
        style={{ objectFit: "cover" }}
        className="w-full h-full"
      />
      <div className="absolute inset-0 bg-black opacity-30"></div>
    </div>

    {/* Cards Section */}
    <div className="relative w-11/12 flex flex-wrap justify-center gap-6 mt-[-80px] sm:mt-[-120px] md:mt-[-170px] z-10 pb-10">
      {services.map((service) => (
        <ServiceCard
          key={service.title}
          title={service.title}
          imageSrc={service.icon}
          text={service.description}
          alt={service.alt}
          className="mb-4"
        />
      ))}
    </div>
    {/* Add padding-bottom to section to prevent content overlap */}
    <div className="h-[60px] sm:h-[80px] md:h-[100px]" />
    <h1 className="absolute top-[30px] sm:top-[40px] md:top-[50px] text-4xl sm:text-6xl md:!text-8xl font-extrabold !text-yellow-100">
      Services
    </h1>
  </section>
);

export default ServiceSection;
