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
  const [passenger, setPassenger] = useState(0);
  const [luggage, setLuggage] = useState(0);

  const handleSubmit = () => {
    if (!from || !to || !date) {
      alert("Please select pickup, drop locations and date.");
      return;
    }

    alert(
      `Taxi booked from ${from.properties.formatted} to ${
        to.properties.formatted
      } on ${date} for ${passenger} passenger(s) with ${luggage} luggage.`
    );
  };

  return (
    <GeoapifyContext apiKey="59905bf1b7e14b7d83a7825ad63ae722">
      <div className="border-2 border-black rounded-2xl p-6 flex flex-col !text-start lg:flex-row items-stretch lg:items-end gap-6 bg-white shadow-lg max-w-full lg:max-w-fit">
        
        {/* From Location */}
        <div className="flex flex-col w-full lg:w-48">
          <label className="text-sm font-semibold text-black mb-2">📍From</label>
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
        <div className="flex justify-center lg:items-end h-full">
          <div className="bg-yellow-400 text-white text-lg font-bold w-8 h-8 flex items-center justify-center rounded-full">
            ➤
          </div>
        </div>

        {/* Drop Location */}
        <div className="flex flex-col w-full lg:w-48">
          <label className="text-sm font-semibold text-black mb-2">📍Drop</label>
          <GeoapifyGeocoderAutocomplete
            placeholder="Select a location"
            options={{ type: "city" }}
            lang="en"
            limit={5}
            placeSelect={(val) => setTo(val)}
            className="!h-12 !border-2 !border-gray-400 !rounded-lg"
          />
        </div>

        {/* Divider (hidden on mobile) */}
        <div className="hidden lg:block h-12 w-px bg-black/20 mx-2" />

        {/* Date Picker */}
        <div className="flex flex-col w-full lg:w-auto">
          <label className="text-sm font-semibold text-black mb-2">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border-2 border-gray-400 rounded-lg px-4 h-12 w-full lg:w-44 focus:outline-none font-medium"
          />
        </div>

        {/* Divider (hidden on mobile) */}
        <div className="hidden lg:block h-12 w-px bg-black/20 mx-2" />

        {/* Passenger Count */}
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

        {/* Luggage Count */}
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

        {/* Divider (hidden on mobile) */}
        <div className="hidden lg:block h-12 w-px bg-black/20 mx-2" />

        {/* Get Taxi Button */}
        <div className="mt-2 lg:mt-0 w-full lg:w-auto">
          <button
            onClick={handleSubmit}
            className="w-full lg:w-auto bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-8 rounded-lg transition text-lg"
          >
            Get Taxi
          </button>
        </div>
      </div>
    </GeoapifyContext>
  );
}
