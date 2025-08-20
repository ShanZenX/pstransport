import React from "react";

const HeroPage = () => {
  return (
    <div
      className="w-full h-[700px] sm:h-[400px] md:h-[500px] bg-cover bg-center flex flex-col items-center justify-center text-center px-4 opacity-90"
      style={{ backgroundImage: "url('/About-Bg1.png')" }}
    >
      <h2 className="text-2xl md:text-[32px] !font-extrabold mb-2 !sm:my-5 text-white leading-tight animate-fadeInUp !text-xl sm:!text-4xl !font-extrabold text-gray-800 ">
  Book a City Taxi to your Destination
</h2>
<h5 className="hidden sm:block text-sm md:text-lg text-white mt-2 sm:mt-1 opacity-80 animate-fadeInUp delay-200">
  Choose from a range of categories and prices
</h5>
<div className=" w-26 h-[3px] bg-white/60 mt-2 animate-fadeInUp delay-300">

</div>

    </div>
  );
};

export default HeroPage;
