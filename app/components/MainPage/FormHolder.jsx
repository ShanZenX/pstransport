import React from "react";
import TaxiBookingForm from "./NewForm";

const FormHolder = () => {
  return (
    <div
      className="relative min-h-screen flex flex-col px-4 items-center justify-end"
      style={{
        backgroundImage: "url('/main-bg8.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Black overlay for faded look */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center w-full mb-5 space-y-3">
        {/* Headings */}
        <div className="flex flex-col items-center text-center">
          <p className="text-3xl sm:text-6xl text-white font-oswald font-extrabold">
            PS TRANSPORT
          </p>
          <p className="text-2xl sm:text-3xl text-white font-poppins mt-2">
            Book your best Trip & Logistics
          </p>
        </div>

        {/* Taxi Form */}
        <div className="w-full lg:w-auto">
          <TaxiBookingForm />
        </div>
      </div>
    </div>
  );
};

export default FormHolder;


import Form_1 from "./Form_1";
      {/* <Form_1 /> */}

