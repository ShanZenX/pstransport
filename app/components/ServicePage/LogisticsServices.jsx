"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    title: "Container Freight",
    description: "We keep your items damage free solution",
    features: [
      "Flexibility & Versatility",
      "Controlled Environment",
      "Speed and Efficiency",
    ],
    image: "/LogisticsContainer.png",
  },
  {
    title: "Supply Freight",
    description: "We keep your items damage free solution",
    features: [
      "Flexibility & Versatility",
      "Controlled Environment",
      "Speed and Efficiency",
    ],
    image: "/LogisticsLorry.png",
  },
];

// Animation Variants
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function Services() {
  return (
    <section className="py-12 mt-10">
      <div className="m-3 sm:m-0">
        <h2 className="text-2xl md:text-[32px] !font-extrabold mb-2 !sm:my-5 flex justify-center items-center gap-2 text-center text-gray-800">
          <span className="h-[3px] w-[20px] bg-black block"></span>
          Our Logistics Services
          <span className="h-[3px] w-[20px] bg-black block"></span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="flex flex-col md:flex-row bg-white rounded-xl shadow-md overflow-hidden"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              custom={index}
            >
              <div className="w-full md:w-1/2">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={500}
                  height={500}
                  className="w-[300] h-[300] md:w-full object-cover"
                />
              </div>

              <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
                <h3 className="text-xl !font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4 !text-[15px] ">{service.description}</p>
                <ul className="space-y-2 !text-[14px] text-gray-700 mb-4">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-900 mr-2">✔</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#"
                  className="!text-indigo-900 font-semibold text-decoration-none"
                >
                  Read Details →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
