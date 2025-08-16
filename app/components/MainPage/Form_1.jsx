"use client";

import React, { useState, useRef } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Select, MenuItem, TextField } from "@mui/material";
import { Autocomplete, LoadScript } from "@react-google-maps/api";

const libraries = ["places"];

const Form_1 = () => {
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
        className="w-10/12 mt-10  sm:mt-0 sm:w-10/12 flex flex-wrap sm:justify-around gap-2 sm:items-center bg-white p-6 rounded-lg shadow-lg"
      >
        {/* From Input */}
        <div className="flex w-full sm:w-auto flex-col items-start">
          <label htmlFor="from">From</label>
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
              placeholder="Enter pickup location"
              variant="outlined"
              onClick={handleGetCurrentLocation}
              fullWidth
            />
          </Autocomplete>
        </div>

        <div className="w-[2px] sm:flex hidden h-full bg-black/20"></div>

        {/* Drop Input */}
        <div className="flex w-full sm:w-auto flex-col items-start">
          <label htmlFor="drop">Drop</label>
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
              placeholder="Enter drop location"
              variant="outlined"
              fullWidth
            />
          </Autocomplete>
        </div>

        <div className="w-[2px] sm:flex hidden h-full bg-black/20"></div>

        {/* Date Picker */}
        <div className="w-full sm:w-auto flex flex-col items-start">
          <label htmlFor="date">Date</label>
          <LocalizationProvider
            dateAdapter={AdapterDayjs}
            className="w-full sm:w-auto"
          >
            <DatePicker
              label="Select date"
              value={date}
              onChange={(newDate) => setDate(newDate)}
              className="w-full sm:w-auto"
              fullWidth
            />
          </LocalizationProvider>
        </div>

        <div className="w-[2px] sm:flex hidden h-full bg-black/20"></div>

        {/* Passenger Select */}
        <div className="flex flex-col items-start w-[48%] sm:w-auto">
          <label htmlFor="passenger">Passengers</label>
          <Select
            className="w-full sm:w-[100px]"
            id="passenger"
            value={passenger}
            onChange={(e) => setPassenger(e.target.value)}
          >
            {Array.from({ length: 14 }, (_, i) => (
              <MenuItem key={i + 1} value={i + 1}>
                {i + 1}
              </MenuItem>
            ))}
          </Select>
        </div>

        <div className="w-[2px] sm:flex hidden h-full bg-black/20"></div>

        {/* Luggage Select */}
        <div className="flex flex-col items-start w-[48%] sm:w-auto">
          <label htmlFor="luggage">Luggage</label>
          <Select
            className="w-full sm:w-[100px]"
            id="luggage"
            value={luggage}
            onChange={(e) => setLuggage(e.target.value)}
          >
            {Array.from({ length: 5 }, (_, i) => (
              <MenuItem key={i + 1} value={i + 1}>
                {i + 1}
              </MenuItem>
            ))}
          </Select>
        </div>

        <div className="w-[2px] sm:flex hidden h-full bg-black/20"></div>

        {/* Submit */}
        <div className="flex w-full sm:w-auto  mt-2 flex-col">
          <button
            type="submit"
            className="px-4 py-2 top-[30px] h-[50px] w-full sm:w-[160px] bg-black text-white rounded hover:bg-gray-700"
          >
            Get Taxi
          </button>
        </div>
      </form>

      {/* Distance Result */}
      {distance && duration && (
        <div className="mt-4 p-4 bg-gray-100 rounded-lg text-center">
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
