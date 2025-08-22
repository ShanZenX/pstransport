"use client";

import React, { useState, useRef } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Select, MenuItem, TextField, Radio, RadioGroup, FormControlLabel } from "@mui/material";
import { Autocomplete, LoadScript } from "@react-google-maps/api";

const libraries = ["places"];

const Form_1 = () => {
  const [tripType, setTripType] = useState("oneway");
  const [from, setFrom] = useState("");
  const [drop, setDrop] = useState("");
  const [date, setDate] = useState(null);
  const [passenger, setPassenger] = useState(1);
  const [luggage, setLuggage] = useState(1);
  const [distance, setDistance] = useState(null);
  const [duration, setDuration] = useState(null);

  const fromRef = useRef(null);
  const dropRef = useRef(null);

  const handleGetCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        setFrom(`Lat: ${lat}, Lng: ${lng}`);
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const calculateDistance = () => {
    if (!from || !drop) {
      alert("Please select both pickup and drop locations.");
      return;
    }

    const service = new window.google.maps.DistanceMatrixService();
    service.getDistanceMatrix(
      {
        origins: [from],
        destinations: [drop],
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (response, status) => {
        if (status === "OK") {
          const result = response.rows[0].elements[0];
          if (result.status === "OK") {
            setDistance(result.distance.text);
            setDuration(result.duration.text);
          } else {
            alert("Could not calculate distance.");
          }
        } else {
          console.error("DistanceMatrix failed:", status);
        }
      }
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateDistance();

    console.log({
      tripType,
      from,
      drop,
      date: date ? date.format("YYYY-MM-DD") : null,
      passenger,
      luggage,
      distance,
      duration,
    });
  };

  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_API_KEY" libraries={libraries}>
      <form
        onSubmit={handleSubmit}
        className="w-10/12 sm:w-9/12 mt-8 flex flex-wrap sm:justify-around gap-2 sm:items-center 
          backdrop-blur-lg bg-white/20 border border-white/30 p-4 rounded-xl shadow-md text-sm"
      >
        {/* Trip Type Radio */}
        <div className="w-full flex justify-center mb-4">
          <RadioGroup
            row
            value={tripType}
            onChange={(e) => setTripType(e.target.value)}
            className="text-xs"
          >
            <FormControlLabel value="oneway" control={<Radio size="small" />} label="One Way" />
            <FormControlLabel value="twoway" control={<Radio size="small" />} label="Two Way" />
            <FormControlLabel value="airport" control={<Radio size="small" />} label="Airport" />
          </RadioGroup>
        </div>

        {/* From Input */}
        <div className="flex w-full sm:w-auto flex-col items-start">
          <h6 className="text-xs font-semibold mb-1">From</h6>
          <Autocomplete
            onLoad={(auto) => (fromRef.current = auto)}
            onPlaceChanged={() => {
              const place = fromRef.current.getPlace();
              setFrom(place.formatted_address || "");
            }}
            sx={{ width: "100%" }}
            className="w-full sm:w-auto"
          >
            <TextField
              id="from"
              placeholder="Enter pickup"
              variant="outlined"
              onClick={handleGetCurrentLocation}
              size="small"
              fullWidth
            />
          </Autocomplete>
        </div>

        {/* Divider */}
        <div className="w-[1px] sm:flex hidden h-10 bg-white/40"></div>

        {/* Drop Input */}
        <div className="flex w-full sm:w-auto flex-col items-start">
          <h6 className="text-xs font-semibold mb-1">To</h6>
          <Autocomplete
            onLoad={(auto) => (dropRef.current = auto)}
            onPlaceChanged={() => {
              const place = dropRef.current.getPlace();
              setDrop(place.formatted_address || "");
            }}
            sx={{ width: "100%" }}
            className="w-full sm:w-auto"
          >
            <TextField
              id="drop"
              placeholder="Enter drop"
              variant="outlined"
              size="small"
              fullWidth
            />
          </Autocomplete>
        </div>

        {/* Divider */}
        <div className="w-[1px] sm:flex hidden h-10 bg-white/40"></div>

        {/* Date Picker */}
        <div className="w-full sm:w-auto flex flex-col items-start">
          <h6 className="text-xs font-semibold mb-1">Date</h6>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Select"
              value={date}
              onChange={(newDate) => setDate(newDate)}
              slotProps={{ textField: { size: "small" } }}
            />
          </LocalizationProvider>
        </div>

        {/* Divider */}
        <div className="w-[1px] sm:flex hidden h-10 bg-white/40"></div>

        {/* Passenger Select */}
        <div className="flex flex-col items-start w-[48%] sm:w-auto">
          <h6 className="text-xs font-semibold mb-1">Passengers</h6>
          <Select
            className="w-full sm:w-[90px]"
            id="passenger"
            value={passenger}
            onChange={(e) => setPassenger(e.target.value)}
            size="small"
          >
            {Array.from({ length: 14 }, (_, i) => (
              <MenuItem key={i + 1} value={i + 1}>
                {i + 1}
              </MenuItem>
            ))}
          </Select>
        </div>

        {/* Divider */}
        <div className="w-[1px] sm:flex hidden h-10 bg-white/40"></div>

        {/* Luggage Select */}
        <div className="flex flex-col items-start w-[48%] sm:w-auto">
          <h6 className="text-xs font-semibold mb-1">Luggage</h6>
          <Select
            className="w-full sm:w-[90px]"
            id="luggage"
            value={luggage}
            onChange={(e) => setLuggage(e.target.value)}
            size="small"
          >
            {Array.from({ length: 5 }, (_, i) => (
              <MenuItem key={i + 1} value={i + 1}>
                {i + 1}
              </MenuItem>
            ))}
          </Select>
        </div>

        {/* Divider */}
        <div className="w-[1px] sm:flex hidden h-10 bg-white/40"></div>

        {/* Submit */}
        <div className="flex w-full sm:w-auto mt-2 flex-col">
          <button
            type="submit"
            className="px-3 py-2 h-[40px] w-full sm:w-[140px] bg-black/80 text-white rounded-md hover:bg-black"
          >
            Get Taxi
          </button>
        </div>
      </form>

      {/* Distance Result */}
      {distance && duration && (
        <div className="mt-4 p-4 bg-black/20 backdrop-blur-md rounded-lg text-center text-sm text-white">
          <p>
            <strong>Distance:</strong> {distance}
          </p>
          <p>
            <strong>Duration:</strong> {duration}
          </p>
        </div>
      )}
    </LoadScript>
  );
};

export default Form_1;
