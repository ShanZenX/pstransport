import React from "react";
import Form_1 from "./Form_1";
import TaxiBookingForm from "./NewForm";

const FormHolder = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-center px-4"
      style={{
        backgroundImage: "url('/main-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Heading */}
      <p className="text-4xl sm:text-5xl text-black font-poppins font-extrabold mb-8">
        Book your best Trip with{" "}
        <span className="text-red-700">Ps transport</span>
      </p>

      {/* Form below heading */}
      {/* <Form_1 /> */}
      <TaxiBookingForm />
    </div>
  );
};

export default FormHolder;
