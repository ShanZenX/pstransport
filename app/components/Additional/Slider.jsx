"use client";
import Image from "next/image";
import jio from "@/public/assets/brands/jio.png";
import qq from "@/public/assets/brands/qq.png";
import PRD from "@/public/assets/brands/PRD.png";
import LT from "@/public/assets/brands/LT.png";
import Calbeer from "@/public/assets/brands/Calbeer.png";
import avalon from "@/public/assets/brands/avalon.png";
import saavari from "@/public/assets/brands/saavari.png";
import techmahindra from "@/public/assets/brands/techmahindra.png";

export default function TechStackMarquee() {
  const logos = [
    { src: jio, alt: "Jio" },
    { src: qq, alt: "Q&Q" },
    { src: avalon, alt: "Avalon" },
    { src: saavari, alt: "Saavari" },
    { src: techmahindra, alt: "Tech Mahindra" },
    { src: LT, alt: "L&T" },
    { src: PRD, alt: "PRD" },
    { src: Calbeer, alt: "Calbeer" },
     { src: jio, alt: "Jio" },
    { src: qq, alt: "Q&Q" },
    { src: avalon, alt: "Avalon" },
    { src: saavari, alt: "Saavari" },
    { src: techmahindra, alt: "Tech Mahindra" },
    { src: LT, alt: "L&T" },
    { src: PRD, alt: "PRD" },
    { src: Calbeer, alt: "Calbeer" },
     { src: jio, alt: "Jio" },
    { src: qq, alt: "Q&Q" },
    { src: avalon, alt: "Avalon" },
    { src: saavari, alt: "Saavari" },
    { src: techmahindra, alt: "Tech Mahindra" },
    { src: LT, alt: "L&T" },
    { src: PRD, alt: "PRD" },
    { src: Calbeer, alt: "Calbeer" },
  ];

  return (
    <div className="relative bg-white p-8 m-5 overflow-hidden">
      {/* Fade on left & right */}
      <div className="pointer-events-none absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
      <div className="pointer-events-none absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-white to-transparent z-10"></div>

      {/* Marquee */}
      <div className="flex w-max animate-scroll">
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 logo-item flex items-center justify-center h-20"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={60}
              height={60}
              className="w-18"
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          display: flex;
          animation: scroll 40s linear infinite;
          will-change: transform;
        }

        .logo-item {
          margin-left: 2rem;
          margin-right: 2rem;
          transition: transform 0.3s ease-in-out;
        }

        .logo-item:hover {
          transform: scale(1.1);
        }

        @media (max-width: 768px) {
          .animate-scroll {
            animation: scroll 50s linear infinite;
          }
          .logo-item {
            margin-left: 1rem;
            margin-right: 1rem;
          }
        }
      `}</style>
    </div>
  );
}
