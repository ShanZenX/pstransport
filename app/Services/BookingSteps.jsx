import React from "react";
import {
  FaMapMarkedAlt,
  FaClipboardList,
  FaMoneyBillWave,
  FaCheckCircle,
} from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const BookingSteps = () => {
  const steps = [
    { icon: <FaMapMarkedAlt className="text-blue-500" />, title: "Choose Destination" },
    { icon: <FaClipboardList className="text-green-500" />, title: "Fill Details" },
    { icon: <FaMoneyBillWave className="text-yellow-500" />, title: "Make Payment" },
    { icon: <FaCheckCircle className="text-purple-500" />, title: "Booking Confirmed" },
  ];

  return (
    <section className="py-12 px-4">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          — How To Book With PS Transport —
        </h2>
        <p className=" text-center text-gray-600 mt-2  mx-auto">
        Your journey is just a few steps away — book quickly 
        </p>

      <div className="flex justify-between items-center gap-2 sm:gap-4 w-full max-w-5xl mx-auto my-10">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center text-center flex-1">
              <div className="text-xl sm:text-3xl md:text-4xl">{step.icon}</div>
              <p className="text-[10px] sm:text-xs md:text-sm xl:text-2xl font-semibold text-center text-gray-800 my-2">{step.title}</p>
            </div>
            {index < steps.length - 1 && (
              <FaArrowRightLong className="text-gray-500 text-sm sm:text-lg md:text-xl flex-shrink-0" />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default BookingSteps;
