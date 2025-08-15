import React from "react";
import Form_1 from "./Form_1";

const FormHolder = () => {
  return (
    <div
      className="h-[100vh] bg-black pt-20 flex flex-col items-center justify-center text-center"
      style={{
        backgroundImage: "url('/main-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <p className="text-5xl text-black font-poppins font-extrabold   ">
        Book your best Trip with{" "}
        <span className="text-orange-300">Ps transport</span>
      </p>
      <Form_1 />
    </div>
  );
};

export default FormHolder;
