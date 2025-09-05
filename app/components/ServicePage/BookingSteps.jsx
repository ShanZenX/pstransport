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
    {
      icon: <FaMapMarkedAlt className="text-red-700" />,
      title: "Choose Destination",
    },
    {
      icon: <FaClipboardList className="text-red-700" />,
      title: "Fill Details",
    },
    {
      icon: <FaMoneyBillWave className="text-red-700" />,
      title: "Make Payment",
    },
    {
      icon: <FaCheckCircle className="text-red-700" />,
      title: "Booking Confirmed",
    },
  ];

  return (
    <section className="py-14 sm:py-20 px-4 bg-gray-50">
      <h3 className="!font-bold text-gray-800 text-center flex justify-center items-center gap-2 ">
        <span className="h-[3px] w-[20px] bg-black block "></span>
        How To Book PS Transport
        <span className="h-[3px] w-[20px] bg-black block "></span>
      </h3>
      <p className="text-sm text-center text-gray-600 mt-2 mx-auto max-w-md">
        Your journey is just a few steps away — book quickly
      </p>

      <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-4 w-full max-w-5xl mx-auto mt-10">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center text-center flex-1">
              <div className="text-3xl sm:text-3xl md:text-4xl">
                {step.icon}
              </div>
              <h6 className="text-sm sm:text-xs md:text-sm xl:text-xl !font-semibold text-gray-800 my-4">
                {step.title}
              </h6>
            </div>
            {index < steps.length - 1 && (
              <FaArrowRightLong className="hidden sm:block text-gray-500 text-sm sm:text-lg md:text-xl flex-shrink-0" />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default BookingSteps;
