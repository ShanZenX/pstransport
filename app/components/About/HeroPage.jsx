import React from "react";

const HeroPage = () => {
  return (
    <div
      className="w-full h-[300px] sm:h-[400px] md:h-[500px] bg-cover bg-center flex flex-col items-center justify-center text-center px-4 opacity-90"
      style={{ backgroundImage: "url('/About-Bg1.png')" }}
    >
      <p className="text-base sm:text-xl md:text-4xl font-semibold text-white leading-tight animate-fadeInUp">
  Book a City Taxi to your Destination
</p>
<h5 className="text-xs sm:text-sm md:text-lg  text-white mt-2 sm:mt-1 sm:text-white opacity-8 animate-fadeInUp delay-200">
  Choose from a range of categories and prices
</h5>
<div className=" w-26 h-[3px] bg-white/60 mt-2 animate-fadeInUp delay-300">

</div>

    </div>
  );
};

export default HeroPage;
