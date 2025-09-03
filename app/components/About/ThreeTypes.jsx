import Image from "next/image";
import icon1 from "@/public/assets/about/icon1.png";
import icon2 from "@/public/assets/about/icon2.png";
import icon3 from "@/public/assets/about/icon3.png";

const ThreeSection = () => {
  return (
    <section className="bg-white py-8 sm:py-15 px-4 sm:px-8">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-[32px] !font-extrabold  mb-2 !sm:my-5 leading-snug">
          Reliable travel <br />
          with <span className="text-red-700">comfort</span> and{" "}
          <span className="text-red-700">trust</span>
        </h2>
        <h6 className="mt-4 text-gray-700 text-sm sm:text-base md:text-lg">
          PS Transport is committed to making every journey safe, convenient,
          and affordable.
        </h6>
      </div>

      {/* Subheading */}
      <div className="text-center mt-10">
        <h5 className="text-xl sm:text-2xl !font-semibold ">
          The <span className="text-red-700">3E&apos;s</span> of PS Transport
        </h5>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mt-12 max-w-6xl mx-auto text-center">
        {/* Equitable Service */}
        <div className="bg-white p-6 h-56 flex flex-col justify-center rounded-xl transition-all duration-300 hover:shadow-2xl">
          <div className="flex justify-center mb-2">
            <Image src={icon1} alt="Equitable Service" className="w-12 h-12" />
          </div>
          <h5 className="text-lg !font-semibold  !text-red-700">
            Equitable Service
          </h5>
          <p className="mt-1 text-gray-700 text-sm">
            Every customer matters — we ensure fair pricing and quality rides
            for all your travel needs.
          </p>
        </div>

        {/* Essential Mobility */}
        <div className="bg-white p-6 h-56 flex flex-col justify-center rounded-xl transition-all duration-300 hover:shadow-2xl">
          <div className="flex justify-center mb-2">
            <Image src={icon2} alt="Essential Mobility" className="w-12 h-12" />
          </div>
          <h5 className="text-lg !font-semibold  !text-red-700">
            Essential Mobility
          </h5>
          <p className="mt-1 text-gray-700 text-sm">
            From office trips to family outings, PS Transport is here to make
            every journey smooth and reliable.
          </p>
        </div>

        {/* Ethical Operations */}
        <div className="bg-white p-6 h-56 flex flex-col justify-center rounded-xl transition-all duration-300 hover:shadow-2xl">
          <div className="flex justify-center mb-2">
            <Image src={icon3} alt="Ethical Operations" className="w-12 h-12" />
          </div>
          <h5 className="text-lg !font-semibold  !text-red-700">
            Ethical Operations
          </h5>
          <p className="mt-1 text-gray-700 text-sm">
            Built on honesty and responsibility, PS Transport ensures safe,
            dependable rides every time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ThreeSection;
