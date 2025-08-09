import React from "react";
import { Button } from "react-bootstrap";
import banner from "@/public/AddSer.jpg";
import Image from "next/image";

const AddBanner = () => {
  return (
    <div className="w-full h-[400px] bg-black flex flex-wrap justify-center items-center">
      <div className="w-full md:w-1/3  flex flex-col items-center justify-center text-white p-4">
        <h1>High comfort</h1>
        <h1>For Your Family</h1>
        <p>Call : +91 9345679843</p>
        <Button type="button" className="btn !bg-amber-200 text-black  !border-none w-fit">
          Book Now
        </Button>
      </div>
      <div className="w-full md:w-2/3 flex flex-col">
        <Image
          src={banner}
          alt="Comfortable Living"
          className=" object-cover h-[400px]"
        />
      </div>
    </div>
  );
};

export default AddBanner;
