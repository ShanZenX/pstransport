"use client";
import Image from "next/image";
import jio from "@/public/assets/brands/jio.png";
import qq from "@/public/assets/brands/q&q.png";
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
    { src: jio, alt: "Jio" },
    { src: qq, alt: "Q&Q" },
    { src: avalon, alt: "Avalon" },
    { src: saavari, alt: "Saavari" },
    { src: techmahindra, alt: "Tech Mahindra" },
  ];

  return (
    <div className="bg-white pt-10">
      {/* <h2 className="text-center text-xl font-bold mb-4">
       — Our Technology Stack —
  </h2> */}
      <div className="overflow-hidden">
        <div className="flex whitespace-nowrap animate-scroll">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 logo-item flex items-center justify-center h-20"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={80}
                height={80}
                className="w-20"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Animation & Responsive Styles */}
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
          animation: scroll 15s linear infinite;
        }
        .logo-item {
          margin-left: 2rem;
          margin-right: 2rem;
        }
        /* Mobile adjustments */
        @media (max-width: 768px) {
          .animate-scroll {
            animation: scroll 25s linear infinite;
          }
          .logo-item {
            margin-left: 0.75rem;
            margin-right: 0.75rem;
          }
        }
      `}</style>
    </div>
  );
}
