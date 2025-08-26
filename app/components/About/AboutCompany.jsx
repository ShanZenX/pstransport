"use client";
import Image from "next/image";
import React from "react";
import s1 from "@/public/sb.jpg";
import s2 from "@/public/AddSer.jpg";
import { Call } from "@mui/icons-material";
import { Button } from "react-bootstrap";

const AboutCompany = () => {
  return (
    <div className="w-11/12 h-full sm:h-[400px] flex justify-center flex-wrap mx-auto my-10 sm:my-30">
      <div className="w-full sm:w-[48%] sm:relative">
        <Image src={s1} alt="Vision" className="w-full sm:w-1/2 h-auto sm:absolute sm:rounded-4xl" />
        <Image src={s2} alt="Vision" className="hidden sm:flex w-1/2 h-auto absolute left-[200px] top-[130px] rounded-4xl" />
      </div>
      <div className="w-full flex flex-col sm:flex    sm:w-[48%] ">
         <h2 className="!font-extrabold  text-2xl pt-[40px]">  {/* font-poppins */}
          Reliable And Convenient Taxi Services At Your Doorstep
        </h2>
        <div className="shadow-inner  bg-white p-4 mt-4">
          <p className="font-raleway text-l font-light">
            Interactively uphold comprehensive best practices and
            user-completed, in-depth analysis of installed internal commerce
          </p>
          <span className="text-indigo-00 font-extrabold">XXXXXXXX</span><span> - </span><span>Head of team</span>
      
        </div>
            <span className="!bg-indigo-900 text-white p-2 rounded-2xl flex items-center w-fit mt-4">
                      <Call />

          <Button className="!bg-indigo-900 !text-white !border-none">
            Get More Info
          </Button>
          </span>
      </div>
    </div>
  );
};

export default AboutCompany;
