"use client";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import  useInView  from "@/app/components/About/useInView";
import { useEffect } from "react";

import icon1 from "@/public/assets/about/icon1.png";
import icon2 from "@/public/assets/about/icon2.png";
import icon3 from "@/public/assets/about/icon3.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const ThreeSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  return (
    <section
      ref={ref}
      className="bg-white py-15  px-4 sm:px-8"
    >
      {/* Heading */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto"
      >
        <h2 className="text-2xl md:text-[32px] !font-extrabold mb-2 !sm:my-5 leading-snug">
          Reliable travel <br />
          with <span className="text-red-700">comfort</span> and{" "}
          <span className="text-red-700">trust</span>
        </h2>
        <h6 className="mt-4 text-gray-700 text-sm sm:text-base md:text-lg">
          PS Transport is committed to making every journey safe, convenient,
          and affordable.
        </h6>
      </motion.div>

      {/* Subheading */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center mt-10"
      >
        <h5 className="text-xl sm:text-2xl !font-semibold">
          The <span className="text-red-700">3E&apos;s</span> of PS Transport
        </h5>
      </motion.div>

      {/* Features */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mt-12 max-w-6xl mx-auto text-center">
        {[ 
          {
            src: icon1,
            title: "Equitable Service",
            desc: "Every customer matters — we ensure fair pricing and quality rides for all your travel needs.",
          },
          {
            src: icon2,
            title: "Essential Mobility",
            desc: "From office trips to family outings, PS Transport is here to make every journey smooth and reliable.",
          },
          {
            src: icon3,
            title: "Ethical Operations",
            desc: "Built on honesty and responsibility, PS Transport ensures safe, dependable rides every time.",
          },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            variants={fadeUp}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.6, delay: 0.3 + idx * 0.15 }}
            className="bg-white p-6 h-56 flex flex-col justify-center rounded-xl transition-all duration-300 hover:shadow-2xl"
          >
            <div className="flex justify-center mb-2">
              <Image src={item.src} alt={item.title} className="w-12 h-12" />
            </div>
            <h5 className="text-lg !font-semibold !text-red-700">{item.title}</h5>
            <p className="mt-1 text-gray-700 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ThreeSection;
