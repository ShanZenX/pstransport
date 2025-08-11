"use client";
import Image from "next/image";

export default function TechStackMarquee() {
  const logos = [
    { src: "/opencv.png", alt: "OpenCV" },
    { src: "/scikit.png", alt: "Scikit-learn" },
    { src: "/angular.png", alt: "Angular" },
    { src: "/vercel.png", alt: "Vercel" },
    { src: "/firebase.png", alt: "Firebase" },
    { src: "/opencv.png", alt: "OpenCV" },
    { src: "/scikit.png", alt: "Scikit-learn" },
    { src: "/angular.png", alt: "Angular" },
  ];

  return (
    <div className="bg-white py-6">
      {/* <h2 className="text-center text-xl font-bold mb-4">
       — Our Technology Stack —
      </h2> */}
      <div className="overflow-hidden">
        <div className="flex whitespace-nowrap animate-scroll">
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="flex-shrink-0 logo-item">
              <Image src={logo.src} alt={logo.alt} width={80} height={80} />
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
