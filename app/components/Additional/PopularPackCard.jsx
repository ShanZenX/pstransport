import Image from "next/image";
import React from "react";
import { FaCar, FaHotel, FaMapMarkedAlt } from "react-icons/fa";
import { SwiperSlide } from "swiper/react";

const PopularTripCard = ({ pkg }) => (
  <div className="bg-white w-full rounded-lg shadow-md m-2 border-black transition overflow-hidden">
    {" "}
    <img
      src={pkg.image}
      alt={pkg.name}
      className="w-full h-45 object-cover"
    />{" "}
    <div className="p-3">
      {" "}
      <h3 className="text-lg font-semibold text-gray-800"> {pkg.name} </h3>{" "}
      <p className="text-sm text-gray-500 mb-3">{pkg.nights}</p>{" "}
      <div className="flex flex-wrap gap-2 text-xs text-gray-600 mb-4">
        {" "}
        {pkg.includes.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded"
          >
            {" "}
            {item.includes("Cab") && <FaCar />}{" "}
            {item.includes("Stay") && <FaHotel />}{" "}
            {item.includes("View") && <FaMapMarkedAlt />} {item}{" "}
          </span>
        ))}{" "}
      </div>{" "}
      <div className="flex items-center justify-between">
        {" "}
        <a className="bg-indigo-950 text-white text-sm px-4 py-2 rounded-full hover:bg-indigo-700 transition text-decoration-none">
          {" "}
          Call Now{" "}
        </a>{" "}
        <span className="text-lg font-bold text-indigo-950">
          {" "}
          {pkg.price}{" "}
        </span>{" "}
      </div>{" "}
    </div>{" "}
  </div>
);

export default PopularTripCard;
