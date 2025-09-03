import React from "react";
import Form_1 from "./Form_1";

const FormHolder = () => {
  return (
    <div
      className="min-h-[100vh] mt-[40%] sm:mt-0 gap-1  sm:gap-10 bg-black  sm:pt-[13%] flex flex-col items-center sm:justify-start text-center"
      style={{
        backgroundImage: "url('/main-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <p className=" text-mq text-4xl pt-0  sm:pt-40 sm:text-5xl text-black font-poppins font-extrabold   ">
        Book your best Trip with{" "}
        <span className="text-red-700">Ps transport</span>
      </p>
      <Form_1 />
    </div>
  );
};

export default FormHolder;
