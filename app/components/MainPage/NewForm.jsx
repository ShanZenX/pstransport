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
      <div className="border-2 border-black rounded-2xl p-4 flex flex-col text-start lg:flex-row items-stretch lg:items-end gap-4 bg-white shadow-lg max-w-full lg:max-w-fit">
        
        {/* Ride Type Selector */}
        <div className="flex gap-4 mb-3 overflow-x-auto ride-type-group">
          {["oneway", "localtrip", "twoway", "airport"].map((type) => {
            const isActive = rideType === type;
            return (
              <button
                key={type}
                type="button"
                onClick={() => setRideType(type)}
                className={`
                  px-2 sm:px-3 py-1 text-sm font-medium transition
                  border-b-2
                  ${isActive ? "border-black text-black" : "border-transparent text-gray-600 hover:text-black"}
                `}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            );
          })}
        </div>

        {/* From Location */}
        <div className="flex flex-col w-full lg:w-48">
          <label className="text-sm font-semibold text-black mb-1">📍From</label>
          <GeoapifyGeocoderAutocomplete
            placeholder="Select a location"
            options={{ type: "city" }}
            lang="en"
            limit={5}
            placeSelect={(val) => setFrom(val)}
            className="!h-12"
          />
        </div>

        {/* Arrow Icon */}
        <div className="flex justify-center items-start">
          <div className="text-black text-lg font-bold w-6 h-6 flex items-center justify-center rounded-full mb-1">
            ➤
          </div>
        </div>

        {/* Drop Location */}
        <div className="flex flex-col w-full lg:w-48">
          <label className="text-sm font-semibold text-black mb-1">📍Drop</label>
          <GeoapifyGeocoderAutocomplete
            placeholder="Select a location"
            options={{ type: "city" }}
            lang="en"
            limit={5}
            placeSelect={(val) => setTo(val)}
            className="!h-12"
          />
        </div>

        {/* Date */}
        <div className="flex flex-col w-full lg:w-auto">
          <label className="text-sm font-semibold text-black mb-1">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border-2 border-gray-400 rounded-lg px-3 h-12 w-full lg:w-44 bg-white"
          />

          {/* Return Date (Mobile only) */}
          {rideType === "twoway" && (
            <div className="mt-2 w-full lg:hidden">
              <label className="text-sm font-semibold text-black mb-1">
                Return Date
              </label>
              <input
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                className="border-2 border-gray-400 rounded-lg px-3 h-12 w-full bg-white"
              />
            </div>
          )}
        </div>

        {/* Passenger */}
        <div className="flex flex-col w-full lg:w-auto">
          <label className="text-sm font-semibold text-black mb-1">Passenger</label>
          <select
            value={passenger}
            onChange={(e) => setPassenger(e.target.value)}
            className="border-2 border-gray-400 rounded-lg px-3 h-12 w-full lg:w-24 bg-white text-center"
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
          <label className="text-sm font-semibold text-black mb-1">Luggage</label>
          <select
            value={luggage}
            onChange={(e) => setLuggage(e.target.value)}
            className="border-2 border-gray-400 rounded-lg px-3 h-12 w-full lg:w-24 bg-white text-center"
          >
            {[...Array(6).keys()].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>

        {/* Get Taxi Button */}
        <div className="mt-2 lg:mt-0 w-full lg:w-auto">
          <button
            onClick={handleSubmit}
            className="w-full lg:w-auto bg-black text-white font-bold py-2 px-6 rounded-lg transition text-sm"
          >
            Get Taxi
          </button>
        </div>
      </div>

      {/* Return Date (Desktop only, below form) */}
      <div
        className={`hidden lg:flex justify-center w-full mt-2 transition-all ${
          rideType === "twoway" ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="w-full lg:w-44">
          <input
            type="date"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            className="border-2 border-gray-400 rounded-lg px-3 h-12 w-full bg-white"
          />
        </div>
      </div>
    </GeoapifyContext>
  );
}
