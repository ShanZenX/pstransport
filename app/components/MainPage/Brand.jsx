import React from "react";
import Image from "next/image";
import brands from "@/app/data/brandData.json";

const BrandsSection = () => {
  return (
    <section className="bg-white py-5 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className=" text-2xl md:text-[32px] !font-bold mb-4 flex justify-center items-center gap-2 text-centermb-2 sm:mb-6 flex justify-center items-center gap-3  ">
        <span className="h-[4px] w-[20px] bg-gray-800 block "></span>
          Our Trusted Brands{" "}
        <span className="h-[4px] w-[20px] bg-gray-800 block "></span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 items-center">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-3 sm:p-4"
            >
              <div className="w-38 h-30 sm:w-40 sm:h-34 relative mb-1 sm:mb-2">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
