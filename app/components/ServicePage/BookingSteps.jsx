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
    { icon: <FaMapMarkedAlt className="text-indigo-900" />, title: "Choose Destination" },
    { icon: <FaClipboardList className="text-indigo-900" />, title: "Fill Details" },
    { icon: <FaMoneyBillWave className="text-indigo-900" />, title: "Make Payment" },
    { icon: <FaCheckCircle className="text-indigo-900" />, title: "Booking Confirmed" },
  ];

  return (
    <section className="py-12 px-4 bg-gray-50 ">
        <h3 className="font-bold text-center text-gray-800">
          — How To Book With PS Transport —
        </h3>
        <p className=" test-sm text-center text-gray-600 mt-2  mx-auto">
        Your journey is just a few steps away — book quickly 
        </p>

      <div className="flex justify-between items-center gap-2 sm:gap-4 w-full max-w-5xl mx-auto my-15">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center text-center flex-1">
              <div className="text-xl sm:text-3xl md:text-4xl">{step.icon}</div>
              <p className=" text-lg font-medium sm:text-xs md:text-sm xl:text-xl text-semibold text-center text-gray-800 my-2">{step.title}</p>
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
