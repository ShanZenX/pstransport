"use client";

import React, { useState } from "react";
import {
  GeoapifyGeocoderAutocomplete,
  GeoapifyContext,
} from "@geoapify/react-geocoder-autocomplete";
import "@geoapify/geocoder-autocomplete/styles/minimal.css";

export default function TaxiBookingForm() {
  const [from, setFrom] = useState(null); // will hold place object
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
      `Taxi booked from ${
        from.properties.formatted
      } to ${to.properties.formatted} on ${date} for ${passenger} passenger(s) with ${luggage} luggage.`
    );
  };

  return (
    <GeoapifyContext apiKey="59905bf1b7e14b7d83a7825ad63ae722">
      <div className="border border-blue-300 rounded-xl p-4 flex items-end gap-4 bg-white shadow-md max-w-fit border-2 border-black">
        {/* From Location */}
        <div className="flex flex-col w-40">
          <label className="text-sm font-medium text-black mb-1">From</label>
          <GeoapifyGeocoderAutocomplete
            placeholder="Select a location"
            options={{ type: "city" }}
            lang="en"
            limit={5}
            placeSelect={(val) => setFrom(val)}
          />
        </div>

        {/* Arrow Icon */}
        <div className="flex items-end h-full mb-2">
          <div className="bg-yellow-400 text-white text-lg font-bold w-6 h-6 flex items-center justify-center rounded-full">
            ➤
          </div>
        </div>

        {/* Drop Location */}
        <div className="flex flex-col w-40">
          <label className="text-sm font-medium text-black mb-1">Drop</label>
          <GeoapifyGeocoderAutocomplete
            placeholder="Select a location"
            options={{ type: "city" }}
            lang="en"
            limit={5}
            placeSelect={(val) => setTo(val)}
          />
        </div>

        {/* Divider */}
        <div className="h-12 w-px bg-black/20 mx-2" />

        {/* Date Picker */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-black mb-1">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border border-blue-300 rounded-md px-3 py-2 w-40 focus:outline-none"
          />
        </div>

        {/* Divider */}
        <div className="h-12 w-px bg-black/20 mx-2" />

        {/* Passenger Count */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-black mb-1">Passenger</label>
          <select
            value={passenger}
            onChange={(e) => setPassenger(e.target.value)}
            className="border border-blue-300 rounded-md px-3 py-2 w-20 bg-white appearance-none focus:outline-none text-center"
          >
            {[...Array(6).keys()].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>

        {/* Luggage Count */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-black mb-1">Luggage</label>
          <select
            value={luggage}
            onChange={(e) => setLuggage(e.target.value)}
            className="border border-blue-300 rounded-md px-3 py-2 w-20 bg-white appearance-none focus:outline-none text-center"
          >
            {[...Array(6).keys()].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>

        {/* Divider */}
        <div className="h-12 w-px bg-black/20 mx-2" />

        {/* Get Taxi Button */}
        <div className="mb-1">
          <button
            onClick={handleSubmit}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-6 rounded-lg transition"
          >
            Get Taxi
          </button>
        </div>
      </div>
    </GeoapifyContext>
  );
}
