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
  useMediaQuery,
} from "@mui/material";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Autocomplete from "@mui/material/Autocomplete";

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
    vehicle: "Mini",
  });
  const [errors, setErrors] = useState({});
  const isMobile = useMediaQuery("(max-width:640px)");

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
    <div
      className={`bg-white shadow-xl rounded-xl ${
        isMobile ? "p-4 w-full" : "p-6 max-w-6xl"
      } mx-auto relative`}
    >
      {/* Tabs */}
      {!isMobile ? (
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
      ) : (
        <div className="flex justify-around border-b mb-4">
          {["local", "oneway", "twoway", "airport"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-2 text-sm font-medium ${
                activeTab === tab
                  ? "border-b-2 border-orange-500 text-orange-500"
                  : "text-gray-600"
              }`}
            >
              {tab === "local"
                ? "Local"
                : tab === "oneway"
                ? "One Way"
                : tab === "twoway"
                ? "Two Way"
                : "Airport"}
            </button>
          ))}
        </div>
      )}

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className={`${isMobile ? "space-y-3" : "grid grid-cols-3 gap-4 mt-4"}`}
      >
        {/* Pickup */}
        <Autocomplete
          options={locations}
          value={form.pickup}
          onChange={(e, val) => handleChange("pickup", val)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="From"
              size="small"
              fullWidth
              error={!!errors.pickup}
              helperText={errors.pickup}
            />
          )}
        />

        {/* Drop */}
        <Autocomplete
          options={locations}
          value={form.drop}
          onChange={(e, val) => handleChange("drop", val)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="To"
              size="small"
              fullWidth
              error={!!errors.drop}
              helperText={errors.drop}
            />
          )}
        />

        {/* Flight */}
        {activeTab === "airport" && (
          <TextField
            label="Flight No."
            size="small"
            fullWidth
            value={form.flight}
            onChange={(e) => handleChange("flight", e.target.value)}
            error={!!errors.flight}
            helperText={errors.flight}
          />
        )}

        {/* Depart */}
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

        {/* Return */}
        {activeTab === "twoway" && (
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
        )}

        {/* Passengers */}
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

        {/* Vehicle */}
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

        {/* Submit */}
        {!isMobile && (
          <Button type="submit" variant="contained" size="large" fullWidth>
            Book Now
          </Button>
        )}
      </form>

      {/* Fixed bottom CTA for mobile */}
      {isMobile && (
        <div className="fixed bottom-0 left-0 w-full px-4 py-3 bg-white shadow-inner">
          <Button
            type="submit"
            variant="contained"
            size="large"
            fullWidth
            className="bg-[#6483ff] hover:bg-[#466bff]"
          >
            Submit
          </Button>
        </div>
      )}
    </div>
  );
}
