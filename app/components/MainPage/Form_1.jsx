"use client";
import React, { useState } from "react";
import {
  Tabs,
  Tab,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Autocomplete from "@mui/material/Autocomplete";

// Dummy data
const locations = ["Chennai", "Bangalore", "Mumbai", "Delhi"];
const vehicles = ["Mini", "Sedan", "Etios", "SUV", "Inova", "Crysta"];

export default function LandscapeTaxiBookingForm() {
  const [activeTab, setActiveTab] = useState("local");
  const [form, setForm] = useState({
    pickup: "",
    drop: "",
    flight: "",
    departDate: null,
    returnDate: null,
    passengers: 1,
    luggage: 0,
    vehicle: "Mini",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (name, value) => {
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    let temp = {};
    if (!form.pickup) temp.pickup = "Pickup required";
    if (!form.drop) temp.drop = "Drop required";
    if (activeTab === "airport" && !form.flight)
      temp.flight = "Flight required";
    if (!form.departDate) temp.departDate = "Departure required";
    if (activeTab === "twoway" && !form.returnDate)
      temp.returnDate = "Return required";
    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) console.log("Booking:", form);
  };

  return (
    <div className="p-6 bg-white shadow-xl rounded-xl min-w-[70%] max-w-[90%] mx-auto">
      {/* Tabs */}
      <Tabs
        value={activeTab}
        onChange={(e, val) => setActiveTab(val)}
        textColor="primary"
        indicatorColor="primary"
        variant="fullWidth"
      >
        <Tab label="Local" value="local" />
        <Tab label="One Way" value="oneway" />
        <Tab label="Two Way" value="twoway" />
        <Tab label="Airport" value="airport" />
      </Tabs>

      {/* Form */}
      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        {/* Flex wrapper: stacked on mobile, single line on large screens */}
        <div className="flex flex-wrap lg:flex-nowrap gap-4">
          {/* Pickup */}
          <div className="w-full sm:w-1/2 lg:flex-1">
            <Autocomplete
              options={locations}
              value={form.pickup}
              onChange={(e, val) => handleChange("pickup", val)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Pickup"
                  size="small"
                  error={!!errors.pickup}
                  helperText={errors.pickup}
                  fullWidth
                />
              )}
            />
          </div>

          {/* Drop */}
          <div className="w-full sm:w-1/2 lg:flex-1">
            <Autocomplete
              options={locations}
              value={form.drop}
              onChange={(e, val) => handleChange("drop", val)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Drop"
                  size="small"
                  error={!!errors.drop}
                  helperText={errors.drop}
                  fullWidth
                />
              )}
            />
          </div>

          {/* Flight (only for airport) */}
          {activeTab === "airport" && (
            <div className="w-full sm:w-1/2 lg:flex-1">
              <TextField
                label="Flight No."
                size="small"
                fullWidth
                value={form.flight}
                onChange={(e) => handleChange("flight", e.target.value)}
                error={!!errors.flight}
                helperText={errors.flight}
              />
            </div>
          )}

          {/* Depart Date */}
          <div className="w-full sm:w-1/2 lg:flex-1">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                label={activeTab === "twoway" ? "Depart" : "Date & Time"}
                value={form.departDate}
                onChange={(val) => handleChange("departDate", val)}
                slotProps={{
                  textField: {
                    size: "small",
                    fullWidth: true,
                    error: !!errors.departDate,
                    helperText: errors.departDate,
                  },
                }}
              />
            </LocalizationProvider>
          </div>

          {/* Return Date */}
          {activeTab === "twoway" && (
            <div className="w-full sm:w-1/2 lg:flex-1">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  label="Return"
                  value={form.returnDate}
                  onChange={(val) => handleChange("returnDate", val)}
                  slotProps={{
                    textField: {
                      size: "small",
                      fullWidth: true,
                      error: !!errors.returnDate,
                      helperText: errors.returnDate,
                    },
                  }}
                />
              </LocalizationProvider>
            </div>
          )}

          {/* Passengers */}
          <div className="w-full sm:w-1/2 lg:flex-1">
            <FormControl fullWidth size="small">
              <Select
                value={form.passengers}
                onChange={(e) => handleChange("passengers", e.target.value)}
              >
                {[...Array(6)].map((_, i) => (
                  <MenuItem key={i + 1} value={i + 1}>
                    {i + 1} Passenger{i > 0 ? "s" : ""}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          {/* Vehicle */}
          <div className="w-full sm:w-1/2 lg:flex-1">
            <FormControl fullWidth size="small">
              <Select
                value={form.vehicle}
                onChange={(e) => handleChange("vehicle", e.target.value)}
              >
                {vehicles.map((v) => (
                  <MenuItem key={v} value={v}>
                    {v}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>

        {/* Submit */}
        <Button
          type="submit"
          variant="contained"
          size="large"
          fullWidth
          className="!bg-black"
        >
          Book Now
        </Button>
      </form>
    </div>
  );
}
