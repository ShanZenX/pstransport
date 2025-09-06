"use client";
import React from "react";
import LocationAutocomplete from "../components/MainPage/LocationAutocomplete";
const Sample = () => {
  return (
    <div className="mt-[200px] h-[600px] w-1/2 border-2 border-black">
      <LocationAutocomplete onSelect={(loc) => console.log(loc)} />
    </div>
  );
};

export default Sample;
