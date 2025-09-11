"use client";

import React, { useState } from "react";
import {
  GeoapifyGeocoderAutocomplete,
  GeoapifyContext,
} from "@geoapify/react-geocoder-autocomplete";
import "@geoapify/geocoder-autocomplete/styles/minimal.css";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import "./newForm.css";

// Vehicle price per km
const vehicles = {
  Sedan: 12,
  Ertiga: 18,
  Innova: 10,
};

export default function TaxiBookingForm() {
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);
  const [dateTime, setDateTime] = useState("");
  const [returnDateTime, setReturnDateTime] = useState("");
  const [passenger, setPassenger] = useState(1);
  const [vehicle, setVehicle] = useState("Sedan");
  const [rideType, setRideType] = useState("localtrip");

  const [errors, setErrors] = useState({});
  const [distance, setDistance] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  const calculateDistance = async () => {
    if (!from || !to) return;
    const start = [from.properties.lon, from.properties.lat].join(",");
    const end = [to.properties.lon, to.properties.lat].join(",");

    try {
      const res = await fetch(
        `https://api.geoapify.com/v1/routing?waypoints=${start}|${end}&mode=drive&apiKey=59905bf1b7e14b7d83a7825ad63ae722`
      );
      const data = await res.json();
      if (data?.features?.length) {
        const { distance, time } = data.features[0].properties;
        setDistance({
          distanceKm: (distance / 1000).toFixed(2),
          timeMin: Math.round(time / 60),
        });
      }
    } catch (err) {
      console.error("Error fetching route:", err);
    }
  };

  const totalCost =
    distance && vehicle
      ? Math.round(distance.distanceKm * vehicles[vehicle])
      : 0;

  const handleSubmit = () => {
    let newErrors = {};
    if (!from) newErrors.from = "Pickup location required";
    if (!to) newErrors.to = "Drop location required";
    if (!dateTime) newErrors.dateTime = "Departure date & time required";
    if (rideType === "twoway" && !returnDateTime) {
      newErrors.returnDateTime = "Return date & time required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      calculateDistance();
      setOpenDialog(true);
    }
  };

  return (
    <GeoapifyContext apiKey="59905bf1b7e14b7d83a7825ad63ae722">
      {/* Ride Type Selector (Mobile - Scrollable Tabs) */}
      <div className="flex gap-4 mb-3 overflow-x-auto lg:hidden">
        {["localtrip", "oneway", "twoway", "airport"].map((type) => {
          const isActive = rideType === type;
          return (
            <button
              key={type}
              type="button"
              onClick={() => setRideType(type)}
              className={`
                px-3 py-1 text-sm font-medium transition
                border-b-2 whitespace-nowrap
                ${
                  isActive
                    ? "border-black text-black"
                    : "border-transparent text-gray-600 hover:text-black"
                }
              `}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          );
        })}
      </div>

      {/* Main Form */}
      <div className="border-2 border-black rounded-2xl p-4 flex flex-col text-start gap-4 bg-white shadow-lg max-w-full lg:max-w-fit">
        {/* Ride Type Selector (Desktop) */}
        <div className="hidden lg:flex gap-2 mb-4">
          {["localtrip", "oneway", "twoway", "airport"].map((type) => {
            const isActive = rideType === type;
            return (
              <button
                key={type}
                type="button"
                onClick={() => setRideType(type)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  isActive
                    ? "bg-black text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            );
          })}
        </div>

        {/* Input Row */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-4">
          {/* From Location */}
          <div className="flex flex-col w-full sm:w-1/2 lg:w-48">
            <label className="text-sm font-semibold text-black mb-1">
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
            {errors.from && (
              <p className="text-red-500 text-xs mt-1">{errors.from}</p>
            )}
          </div>

          {/* Arrow */}
          <div className="flex justify-center items-center w-full sm:w-auto">
            <div className="text-black mt-4 text-2xl font-bold w-6 h-6 flex items-center justify-center rounded-full">
              ➤
            </div>
          </div>

          {/* Drop Location */}
          <div className="flex flex-col w-full sm:w-1/2 lg:w-48">
            <label className="text-sm font-semibold text-black mb-1">
              📍Drop
            </label>
            <GeoapifyGeocoderAutocomplete
              placeholder="Select a location"
              options={{ type: "city" }}
              lang="en"
              limit={5}
              placeSelect={(val) => setTo(val)}
              className="!h-12"
            />
            {errors.to && (
              <p className="text-red-500 text-xs mt-1">{errors.to}</p>
            )}
          </div>

          {/* Departure DateTime */}
          <div className="flex flex-col w-full sm:w-1/2 lg:w-64">
            <label className="text-sm font-semibold text-black mb-1">
              Departure
            </label>
            <input
              type="datetime-local"
              value={dateTime}
              onChange={(e) => setDateTime(e.target.value)}
              className="border-2 border-gray-400 rounded-lg px-3 h-12 w-full bg-white"
            />
            {errors.dateTime && (
              <p className="text-red-500 text-xs mt-1">{errors.dateTime}</p>
            )}
          </div>

          {/* Return DateTime (Mobile inside row) */}
          {rideType === "twoway" && (
            <div className="flex flex-col w-full sm:w-1/2 lg:hidden">
              <label className="text-sm font-semibold text-black mb-1">
                Return
              </label>
              <input
                type="datetime-local"
                value={returnDateTime}
                onChange={(e) => setReturnDateTime(e.target.value)}
                className="border-2 border-gray-400 rounded-lg px-3 h-12 w-full bg-white"
              />
              {errors.returnDateTime && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.returnDateTime}
                </p>
              )}
            </div>
          )}

          {/* Passenger + Car Type side by side in mobile */}
          <div className="flex flex-row w-full gap-4 sm:flex-col sm:w-1/2 lg:flex-row lg:w-auto">
            {/* Passenger */}
            <div className="flex flex-col w-1/2 sm:w-full lg:w-28">
              <label className="text-sm font-semibold text-black mb-1">
                Passenger
              </label>
              <select
                value={passenger}
                onChange={(e) => setPassenger(e.target.value)}
                className="border-2 border-gray-400 rounded-lg px-3 h-12 w-full bg-white text-center"
              >
                {[...Array(6).keys()].map((num) => (
                  <option key={num + 1} value={num + 1}>
                    {num + 1}
                  </option>
                ))}
              </select>
            </div>

            {/* Car Type */}
            <div className="flex flex-col w-1/2 sm:w-full lg:w-32">
              <label className="text-sm font-semibold text-black mb-1">
                Car Type
              </label>
              <select
                value={vehicle}
                onChange={(e) => setVehicle(e.target.value)}
                className="border-2 border-gray-400 rounded-lg px-3 h-12 w-full bg-white text-center"
              >
                {Object.keys(vehicles).map((v) => (
                  <option key={v} value={v}>
                    {v}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Book Button */}
          <div className="w-full sm:w-auto flex items-end">
            <button
              onClick={handleSubmit}
              className="w-full lg:w-auto bg-black text-white font-bold py-2 px-6 rounded-lg transition text-sm"
            >
              Get Taxi
            </button>
          </div>
        </div>
      </div>

      {/* Return DateTime (Desktop below row) */}
      {rideType === "twoway" && (
        <div className="hidden lg:flex ml-0 lg:ml-14 justify-center w-full mt-2 transition-all">
          <div className="w-full lg:w-64">
            <label className="text-sm font-semibold text-black mb-1">
              Return (Date & Time)
            </label>
            <input
              type="datetime-local"
              value={returnDateTime}
              onChange={(e) => setReturnDateTime(e.target.value)}
              className="border-2 border-gray-400 rounded-lg px-3 h-12 w-full bg-white"
            />
            {errors.returnDateTime && (
              <p className="text-red-500 text-xs mt-1">{errors.returnDateTime}</p>
            )}
          </div>
        </div>
      )}

      {/* Booking Confirmation Dialog */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Booking Summary</DialogTitle>
        <DialogContent>
          <p>
            <strong>From:</strong> {from?.properties?.formatted}
          </p>
          <p>
            <strong>To:</strong> {to?.properties?.formatted}
          </p>
          <p>
            <strong>Departure:</strong> {dateTime}
          </p>
          {rideType === "twoway" && (
            <p>
              <strong>Return:</strong> {returnDateTime}
            </p>
          )}
          <p>
            <strong>Passengers:</strong> {passenger}
          </p>
          <p>
            <strong>Vehicle:</strong> {vehicle}
          </p>
          {distance && (
            <>
              <p>
                <strong>Distance:</strong> {distance.distanceKm} km
              </p>
              <p>
                <strong>Estimated Time:</strong> {distance.timeMin} min
              </p>
              <p>
                <strong>Total Cost:</strong> ₹{totalCost}
              </p>
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button
            variant="contained"
            onClick={() => {
              alert("Booking Confirmed!");
              setOpenDialog(false);
            }}
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </GeoapifyContext>
  );
}
