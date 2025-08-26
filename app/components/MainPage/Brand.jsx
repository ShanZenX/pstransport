import React from "react";
import Image from "next/image";
import brands from "@/app/data/brandData.json";

const BrandsSection = () => {
  return (
    <section className="bg-white my-5 !sm:my-20">
      <div className="max-w-6xl mx-auto px-3">
        {/* ↑ heading slightly bigger */}
      <h2 className=" text-2xl md:text-[32px] !font-semibold mb-4  sm:mb-6 flex justify-center items-center gap-3  ">
          <span className="h-[4px] w-[20px] bg-gray-800 block"></span>
          Our Trusted Brands
          <span className="h-[4px] w-[20px] bg-gray-800 block"></span>
        </h2>

        {/* ↑ grid slightly wider */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 items-center">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-2"
            >
              <div className="w-32 h-14 sm:w-38 sm:h-26 relative">
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
