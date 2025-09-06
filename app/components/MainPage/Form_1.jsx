"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
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
import MapInput from './MapInput';

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

  // Common sx for black borders
  const blackBorderSx = {
    "& .MuiOutlinedInput-root": {
      "& fieldset": { borderColor: "black" },
      "&:hover fieldset": { borderColor: "black" },
      "&.Mui-focused fieldset": { borderColor: "black" },
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "black",
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="p-6 sm:p-10 bg-white/5 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl max-w-5xl w-full mx-auto mt-10"
    >
      {/* Tabs */}
      <Tabs
        value={activeTab}
        onChange={(e, val) => setActiveTab(val)}
        textColor="inherit"
        indicatorColor="secondary"
        sx={{
          "& .MuiTab-root": {
            color: "gray",
          },
          "& .Mui-selected": {
            color: "black",
          },
          "& .MuiTabs-indicator": {
            backgroundColor: "black",
          },
        }}
      >
        <Tab label="Local" value="local" />
        <Tab label="One Way" value="oneway" />
        <Tab label="Two Way" value="twoway" />
        <Tab label="Airport" value="airport" />
      </Tabs>

      {/* Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-6 space-y-6"
      >
        <div className="flex flex-wrap lg:flex-nowrap gap-6">
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
                  sx={blackBorderSx}
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
                  sx={blackBorderSx}
                />
              )}
            />
          </div>

          {/* Flight */}
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
                sx={blackBorderSx}
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
                    sx: blackBorderSx,
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
                      sx: blackBorderSx,
                    },
                  }}
                />
              </LocalizationProvider>
            </div>
          )}

          {/* Passengers */}
          <div className="w-full sm:w-1/2 lg:flex-1">
            <FormControl fullWidth size="small" sx={blackBorderSx}>
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
            <FormControl fullWidth size="small" sx={blackBorderSx}>
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
        <motion.div
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.95 }}
          className="flex justify-end"
        >
          <Button
            type="submit"
            variant="contained"
            size="medium"
            className="!bg-gradient-to-r !from-yellow-300 !to-red-700 !text-white !font-semibold !rounded-lg !shadow-md px-6"
          >
            Book Now
          </Button>
        </motion.div>
      </motion.form>
    </motion.div>
  );
}
