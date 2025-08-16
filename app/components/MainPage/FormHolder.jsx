import React from "react";
import Form_1 from "./Form_1";

const FormHolder = () => {
  return (
    <div
      className="h-[100vh]  gap-3 bg-black sm:pt-20 flex flex-col items-center justify-center sm:justify-start text-center"
      style={{
        backgroundImage: "url('/main-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <p className="text-4xl pt-0 sm:pt-40 sm:text-5xl text-black font-poppins font-extrabold   ">
        Book your best Trip with{" "}
        <span className="text-orange-300">Ps transport</span>
      </p>
      <Form_1 />
    </div>
  );
};

export default FormHolder;
