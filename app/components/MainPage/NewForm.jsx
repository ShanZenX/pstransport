"use client";

import React, { useState } from "react";
import {
  GeoapifyGeocoderAutocomplete,
  GeoapifyContext,
} from "@geoapify/react-geocoder-autocomplete";
import "@geoapify/geocoder-autocomplete/styles/minimal.css";
import "./newForm.css";

export default function TaxiBookingForm() {
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);
  const [date, setDate] = useState("");
  const [returnDate, setReturnDate] = useState(""); // For two-way
  const [passenger, setPassenger] = useState(0);
  const [luggage, setLuggage] = useState(0);
  const [rideType, setRideType] = useState("oneway");

  const handleSubmit = () => {
    if (!from || !to || !date) {
      alert("Please select pickup, drop locations and date.");
      return;
    }

    let message = `Taxi booked from ${from.properties.formatted} to ${to.properties.formatted} on ${date}`;

    if (rideType === "twoway") {
      if (!returnDate) {
        alert("Please select return date for Two-way ride.");
        return;
      }
      message += ` returning on ${returnDate}`;
    }

    message += ` for ${passenger} passenger(s) with ${luggage} luggage. Ride type: ${rideType}`;

    alert(message);
  };

  return (
    <GeoapifyContext apiKey="59905bf1b7e14b7d83a7825ad63ae722">
      {/* Main Form Container */}
      <div className="border-2 border-black rounded-2xl p-6 flex flex-col text-start lg:flex-row items-stretch lg:items-end gap-6 bg-white shadow-lg max-w-full lg:max-w-fit">
        {/* From Location with Ride Type on top */}
        <div className="flex flex-col w-full lg:w-48">
          {/* Ride Type Selector */}

          <div className="flex gap-1 sm:gap-2 mb-4 font">
            {["oneway", "localtrip", "twoway", "airport"].map((type) => {
              const isActive = rideType === type;
              return (
                <button
                  key={type}
                  type="button"
                  onClick={() => setRideType(type)}
                  className={`
          px-4 py-2 rounded-full text-sm  font-medium transition
          ${
            isActive
              ? "bg-black-400 text-black"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }
        `}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              );
            })}
          </div>

          {/* From Location */}
          <label className="text-sm font-semibold text-black mb-2">
            📍From
          </label>
          <GeoapifyGeocoderAutocomplete
            placeholder="Select a location"
            options={{ type: "city" }}
            lang="en"
            limit={5}
            placeSelect={(val) => setFrom(val)}
            className="!h-12 !border-2 !border-gray-400 !rounded-lg"
          />
        </div>

        {/* Arrow Icon */}
        <div className="flex justify-center items-start !text-start ">
          <div className="bg-black-400 text-black text-lg font-bold w-8 h-8 flex items-center justify-center rounded-full lg:mb-1 mb-1 ">
            ➤
          </div>
        </div>

        {/* Drop Location */}
        <div className="flex flex-col w-full lg:w-48">
          <label className="text-sm font-semibold text-black mb-2">
            📍Drop
          </label>
          <GeoapifyGeocoderAutocomplete
            placeholder="Select a location"
            options={{ type: "city" }}
            lang="en"
            limit={5}
            placeSelect={(val) => setTo(val)}
            className="!h-12 !border-2 !border-gray-400 !rounded-lg"
          />
        </div>

        {/* Divider */}
        <div className="hidden lg:block h-12 w-px bg-black/20 mx-2" />

        {/* Date */}
        <div className="flex flex-col w-full lg:w-auto">
          <label className="text-sm font-semibold text-black mb-2">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border-2 border-gray-400 rounded-lg px-4 h-12 w-full lg:w-44 focus:outline-none font-medium"
          />
        </div>

        {/* Divider */}
        <div className="hidden lg:block h-12 w-px bg-black/20 mx-2" />

        {/* Passenger */}
        <div className="flex flex-col w-full lg:w-auto">
          <label className="text-sm font-semibold text-black mb-2">
            Passenger
          </label>
          <select
            value={passenger}
            onChange={(e) => setPassenger(e.target.value)}
            className="border-2 border-gray-400 rounded-lg px-3 h-12 w-full lg:w-24 bg-white focus:outline-none font-medium text-center"
          >
            {[...Array(6).keys()].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>

        {/* Luggage */}
        <div className="flex flex-col w-full lg:w-auto">
          <label className="text-sm font-semibold text-black mb-2">
            Luggage
          </label>
          <select
            value={luggage}
            onChange={(e) => setLuggage(e.target.value)}
            className="border-2 border-gray-400 rounded-lg px-3 h-12 w-full lg:w-24 bg-white focus:outline-none font-medium text-center"
          >
            {[...Array(6).keys()].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>

        {/* Divider */}
        <div className="hidden lg:block h-12 w-px bg-black/20 mx-2" />

        {/* Get Taxi Button */}
        <div className="mt-2 lg:mt-0 w-full lg:w-auto">
          <button
            onClick={handleSubmit}
            className="w-full lg:w-auto bg-black hover:bg-black text-white font-bold py-3 px-8 rounded-lg transition text-lg"
          >
            Get Taxi
          </button>
        </div>
      </div>

      <div
        className={`flex justify-center w-full ml-0 lg:ml-8  overflow-hidden transition-all duration-500 ease-in-out ${
          rideType === "twoway"
            ? "max-h-40 opacity-100 mt-2"
            : "max-h-0 opacity-0 mt-0"
        }`}
      >
        <div className="w-full lg:w-44">
          <input
            type="date"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            className="border-2 border-gray-400 rounded-lg px-4 h-12 w-full lg:w-44 focus:outline-none font-medium bg-white transition-opacity duration-500"
          />
        </div>
      </div>
    </GeoapifyContext>
  );
}
