import Image from "next/image";
import Carporatecabs from "@/public/assets/CarporateCabs.jpeg";

import Innova from "@/public/assets/Innova.jpeg";
import Truck from "@/public/assets/Truck.jpeg";

const services = [
  {
    title: "Corporate Cabs",
    img: Carporatecabs,
  },
  {
    title: "Rental cars",
    img: Innova,
  },
  {
    title: "Logistics",
    img: Truck,
  },
];

export default function OurServices() {
  return (
    <section className="py-12">
      <div className="text-center">
        <p className="uppercase tracking-wide text-sm text-gray-700">
          Certified Transport Service Provider based in Tamil Nadu, Chennai
        </p>
        <h2 className="text-base sm:text-lg md:text-xl font-semibold mt-2 text-center">
  — Your trusted partner for cabs, cargo, and long-distance travel —
</h2>
        <div className="w-26 h-[3px] bg-black mx-auto mt-4"></div>
      </div>

    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
  {services.map((service, index) => (
    <div key={index} className="flex flex-col items-center">
      <div className="overflow-hidden rounded-lg shadow-md w-full h-[220px] sm:h-[300px] md:h-[400px] transition-transform duration-300 hover:scale-105 active:scale-95">
        <Image
          src={service.img}
          alt={service.title}
          className="object-cover object-bottom w-full h-full"
        />
      </div>

      <button className="mt-4 text-base sm:text-lg font-medium px-4 py-2 text-black border border-black rounded hover:bg-black hover:text-white transition-colors">
        {service.title}
      </button>
    </div>
  ))}
</div>

    </section>
  );
}
