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

// ==========================
// Fare Tables
// ==========================
const localTripRates = {
  Sedan: { baseKm: 40, baseFare: 1100, extraKmRate: 18 },
  Ertiga: { baseKm: 40, baseFare: 1500, extraKmRate: 21 },
  Innova: { baseKm: 40, baseFare: 1500, extraKmRate: 21 },
};

const oneWayRates = {
  Sedan: { minKm: 150, fixedFare: 2460, extraKmRate: 14 },
  Ertiga: { minKm: 150, fixedFare: 3200, extraKmRate: 19 },
  Innova: { minKm: 150, fixedFare: 3200, extraKmRate: 19 },
};

const twoWayRates = {
  Sedan: { minKm: 250, baseFare: 3300, extraKmRate: 12 },
  Ertiga: { minKm: 250, baseFare: 4500, extraKmRate: 17 },
  Innova: { minKm: 250, baseFare: 4500, extraKmRate: 17 },
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
  const [passengerName, setPassengerName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  // ==========================
  // Total Fare Calculation
  // ==========================
  const totalCost = (() => {
    if (!distance || !vehicle) return 0;
    const km = distance.distanceKm;

    if (rideType === "localtrip" || rideType === "airport") {
      const { baseKm, baseFare, extraKmRate } = localTripRates[vehicle];
      const extraKm = Math.max(0, km - baseKm);
      return baseFare + extraKm * extraKmRate;
    }

    if (rideType === "oneway") {
      const { minKm, fixedFare, extraKmRate } = oneWayRates[vehicle];
      const extraKm = Math.max(0, km - minKm);
      return fixedFare + extraKm * extraKmRate;
    }

    if (rideType === "twoway") {
      const { minKm, baseFare, extraKmRate } = twoWayRates[vehicle];
      const start = new Date(dateTime);
      const end = new Date(returnDateTime);

      const days = Math.max(
        1,
        Math.ceil((end - start) / (1000 * 60 * 60 * 24))
      );

      const defaultFare = baseFare * days;
      const effectiveMinKm = minKm * days;
      const extraKm = Math.max(0, km - effectiveMinKm);

      return defaultFare + extraKm * extraKmRate;
    }

    return 0;
  })();

  // ==========================
  // Submit Booking
  // ==========================
  const handleSubmit = async () => {
    let newErrors = {};
    if (!from && rideType !== "airport")
      newErrors.from = "Pickup location required";
    if (!to) newErrors.to = "Drop location required";
    if (!dateTime) newErrors.dateTime = "Departure date & time required";
    if (rideType === "twoway" && !returnDateTime)
      newErrors.returnDateTime = "Return date & time required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        const pickupLat =
          rideType === "airport" ? 12.9941 : from.properties.lat;
        const pickupLon =
          rideType === "airport" ? 80.1709 : from.properties.lon;
        const dropLat = to.properties.lat;
        const dropLon = to.properties.lon;

        const start = `${pickupLat},${pickupLon}`;
        const end = `${dropLat},${dropLon}`;

        const res = await fetch(
          `https://api.geoapify.com/v1/routing?waypoints=${start}|${end}&mode=drive&format=geojson&apiKey=59905bf1b7e14b7d83a7825ad63ae722`
        );
        const data = await res.json();

        if (data?.features?.length) {
          const leg = data.features[0].properties.legs[0];
          let distanceKm = parseFloat((leg.distance / 1000).toFixed(2));

          // ✅ Double distance for two-way trips
          if (rideType === "twoway") {
            distanceKm = distanceKm * 2;
          }

          const timeMin = Math.round(leg.time / 60);
          setDistance({ distanceKm, timeMin });
        } else {
          setDistance(null);
          alert("No route found. Please select precise addresses.");
          return;
        }

        setOpenDialog(true);
      } catch (err) {
        console.error("Error fetching distance:", err);
        setDistance(null);
        alert("Failed to calculate route. Please try again.");
      }
    }
  };

  // ==========================
  // Confirm Booking
  // ==========================
  const handleConfirmBooking = () => {
    let validationErrors = {};
    if (!passengerName.trim())
      validationErrors.passengerName = "Passenger name required";
    if (!/^[0-9]{10}$/.test(phoneNumber))
      validationErrors.phoneNumber = "Enter valid 10-digit phone number";

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const pickupName =
        rideType === "airport"
          ? "Chennai International Airport"
          : from.properties.formatted;
      const dropName = to.properties.formatted;

      const whatsappMsg = encodeURIComponent(
        `Booking Details:\n` +
          `From: ${pickupName}\n` +
          `To: ${dropName}\n` +
          `Departure: ${dateTime}\n` +
          `${rideType === "twoway" ? `Return: ${returnDateTime}\n` : ""}` +
          `Trip Type: ${rideType}\n` +
          `Passengers: ${passenger}\n` +
          `Vehicle: ${vehicle}\n` +
          `Distance: ${distance?.distanceKm} km\n` +
          `Fare: ₹${totalCost}\n\n` +
          `Google Maps Links:\n` +
          `Pickup: https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
            pickupName
          )}\n` +
          `Drop: https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
            dropName
          )}\n` +
          `Directions: https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(
            pickupName
          )}&destination=${encodeURIComponent(dropName)}`
      );

      const whatsappLink = `https://wa.me/918056101139?text=${whatsappMsg}`;
      window.open(whatsappLink, "_blank");

      alert("Booking Confirmed!");
      setOpenDialog(false);
    }
  };

  // ==========================
  // Vehicle Options Based on Passengers
  // ==========================
  const vehicleOptions = ["Sedan", "Ertiga", "Innova"];

  return (
    <GeoapifyContext apiKey="59905bf1b7e14b7d83a7825ad63ae722">
      <div className="flex gap-1.8 mb-3 overflow-x-auto lg:hidden">
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
                    ? "border-black  text-white"
                    : "border-transparent text-white hover:text-black"
                }
              `}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          );
        })}
      </div>

      <div className="border-2 border-black rounded-2xl p-4 flex flex-col text-start gap-4 bg-white shadow-lg max-w-full lg:max-w-fit">
        {/* Tabs */}
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
                    ? "bg-black text-white "
                    : "bg-gray-200 text-black sm:text-black hover:bg-gray-300"
                }`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            );
          })}
        </div>

        {/* Input Row */}
        <div className="flex flex-col sm:flex-row flex-wrap  gap-8">
          {/* From */}
          <div className="flex mb-2 sm:mb-0 flex-col w-full sm:w-1/2 lg:w-48">
            <label className="text-sm font-semibold text-black mb-1">
              📍From
            </label>
            {rideType === "airport" ? (
              <input
                type="text"
                value="Chennai International Airport"
                disabled
                className="border-2 border-gray-400 rounded-lg px-3 h-12 w-full bg-gray-100 text-gray-700 cursor-not-allowed"
              />
            ) : (
              <GeoapifyGeocoderAutocomplete
                placeholder="Select a location"
                options={{ type: "address" }}
                lang="en"
                limit={5}
                placeSelect={(val) => setFrom(val)}
                className="!h-12 !border-2 !border-gray-400 !rounded-lg"
              />
            )}
            {errors.from && (
              <p className="text-red-500 text-xs mt-1">{errors.from}</p>
            )}
          </div>

          {/* To */}
          <div className="flex mb-2 sm:mb-0  flex-col w-full sm:w-1/2 lg:w-48">
            <label className="text-sm font-semibold text-black mb-1">
              📍Drop
            </label>
            <GeoapifyGeocoderAutocomplete
              placeholder="Select a location"
              options={{ type: "address" }}
              lang="en"
              limit={5}
              placeSelect={(val) => setTo(val)}
              className="!h-12"
            />
            {errors.to && (
              <p className="text-red-500 text-xs mt-1">{errors.to}</p>
            )}
          </div>

          {/* Departure */}
          <div className="flex mb-2 sm:mb-0  flex-col w-full sm:w-1/2 lg:w-44">
            <label className="text-sm font-semibold text-black mb-1">
              Departure
            </label>
            <input
              type="datetime-local"
              value={dateTime}
              placeholder="Select date & time"
              onChange={(e) => setDateTime(e.target.value)}
              className=" border-b-2 rounded-none sm:rounded-lg  sm:border-2   border-gray-400   px-3 h-12 w-full bg-white"
            />
            {errors.dateTime && (
              <p className="text-red-500 text-xs mt-1">{errors.dateTime}</p>
            )}
          </div>

          {/* Return (twoway) */}
          {rideType === "twoway" && (
            <div className="flex mb-2 sm:mb-0  flex-col w-full sm:w-1/2 lg:w-44 transition-all duration-500">
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

          {/* Passenger + Car */}
          <div className="flex mb-2 sm:mb-0  flex-row w-full gap-4 sm:flex-col sm:w-1/2 lg:flex-row lg:w-auto">
            <div className="flex flex-col w-1/2 sm:w-full lg:w-28">
              <label className="text-sm font-semibold text-black mb-1">
                Passenger
              </label>
              <select
                value={passenger}
                onChange={(e) => {
                  setPassenger(parseInt(e.target.value));
                  if (parseInt(e.target.value) > 4 && vehicle === "Sedan")
                    setVehicle("Ertiga");
                }}
                className="border-2 border-gray-400 rounded-lg px-3 h-12 w-full bg-white text-center"
              >
                {[...Array(6).keys()].map((num) => (
                  <option key={num + 1} value={num + 1}>
                    {num + 1}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex mb-2 sm:mb-0  flex-col w-1/2 sm:w-full lg:w-32">
              <label className="text-sm font-semibold text-black mb-1">
                Car Type
              </label>
              <select
                value={vehicle}
                onChange={(e) => setVehicle(e.target.value)}
                className="border-2 border-gray-400 rounded-lg px-3 h-12 w-full bg-white text-center"
              >
                {vehicleOptions.map((v) => (
                  <option
                    key={v}
                    value={v}
                    disabled={v === "Sedan" && passenger > 4}
                  >
                    {v}{" "}
                    {v === "Sedan" && passenger > 4 ? "(Not enough seats)" : ""}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Book */}
          <div className="w-full sm:w-auto flex items-center">
            <button
              onClick={handleSubmit}
              className="w-full lg:w-auto bg-black text-white rounded font-bold py-2 px-6  transition text-sm "
            >
              Get Taxi
            </button>
          </div>
        </div>
      </div>

      {/* Popup */}
      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Complete Your Booking</DialogTitle>
        <DialogContent className="flex flex-col gap-4 mt-2">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1">
              <label className="text-sm font-semibold mb-1">
                Passenger Name
              </label>
              <input
                type="text"
                value={passengerName}
                onChange={(e) => setPassengerName(e.target.value)}
                className="border-2 border-gray-300 rounded-lg px-3 py-2 w-full"
                placeholder="Enter name"
              />
              {errors.passengerName && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.passengerName}
                </p>
              )}
            </div>
            <div className="flex-1">
              <label className="text-sm font-semibold mb-1">Phone Number</label>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="border-2 border-gray-300 rounded-lg px-3 py-2 w-full"
                placeholder="Enter phone number"
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.phoneNumber}
                </p>
              )}
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-gray-100 p-4 rounded-lg text-sm space-y-2">
            <p>
              <strong>From:</strong>{" "}
              {rideType === "airport"
                ? "Chennai International Airport"
                : from?.properties?.formatted}
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
              <strong>Trip Type:</strong>{" "}
              {rideType.charAt(0).toUpperCase() + rideType.slice(1)}
            </p>
            <p>
              <strong>Passengers:</strong> {passenger}
            </p>
            <p>
              <strong>Vehicle:</strong> {vehicle}
            </p>
            {distance && (
              <>
                <p>
                  <strong>Total Distance:</strong> {distance.distanceKm} km
                </p>
                <p>
                  <strong>Estimated Time:</strong> {distance.timeMin} min
                </p>
                <p className="text-lg font-bold text-green-600">
                  Total Fare: ₹{totalCost}
                </p>
              </>
            )}
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleConfirmBooking}>
            Confirm Booking
          </Button>
        </DialogActions>
      </Dialog>
    </GeoapifyContext>
  );
}
