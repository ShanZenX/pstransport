"use client";
import React, { useState } from "react";
import { Tabs, Tab, TextField, Select, MenuItem, Button } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function CarBookingForm() {
  const [activeTab, setActiveTab] = useState("local");
  const [form, setForm] = useState({
    pickup: "",
    drop: "",
    flight: "",
    departDate: null,
    returnDate: null,
    passengers: 1,
    luggage: 1,
  });

  const handleChange = (name, value) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking:", activeTab, form);
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white rounded-lg shadow">
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

      <form onSubmit={handleSubmit} className="mt-4 space-y-3">
        {/* Pickup */}
        <TextField
          label="Pickup Location"
          fullWidth
          size="small"
          value={form.pickup}
          onChange={(e) => handleChange("pickup", e.target.value)}
        />

        {/* Drop - Only for non-local */}
        {activeTab !== "local" && (
          <TextField
            label="Drop Location"
            fullWidth
            size="small"
            value={form.drop}
            onChange={(e) => handleChange("drop", e.target.value)}
          />
        )}

        {/* Flight number for Airport */}
        {activeTab === "airport" && (
          <TextField
            label="Flight Number"
            fullWidth
            size="small"
            value={form.flight}
            onChange={(e) => handleChange("flight", e.target.value)}
          />
        )}

        {/* Dates */}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label={activeTab === "twoway" ? "Departure Date" : "Date"}
            value={form.departDate}
            onChange={(val) => handleChange("departDate", val)}
            slotProps={{ textField: { size: "small", fullWidth: true } }}
          />
          {activeTab === "twoway" && (
            <DatePicker
              label="Return Date"
              value={form.returnDate}
              onChange={(val) => handleChange("returnDate", val)}
              slotProps={{ textField: { size: "small", fullWidth: true } }}
            />
          )}
        </LocalizationProvider>

        {/* Passengers */}
        <Select
          fullWidth
          size="small"
          value={form.passengers}
          onChange={(e) => handleChange("passengers", e.target.value)}
        >
          {Array.from({ length: 10 }, (_, i) => (
            <MenuItem key={i + 1} value={i + 1}>
              {i + 1} Passenger{i > 0 ? "s" : ""}
            </MenuItem>
          ))}
        </Select>

        {/* Luggage for One Way & Two Way */}
        {(activeTab === "oneway" || activeTab === "twoway") && (
          <Select
            fullWidth
            size="small"
            value={form.luggage}
            onChange={(e) => handleChange("luggage", e.target.value)}
          >
            {Array.from({ length: 5 }, (_, i) => (
              <MenuItem key={i + 1} value={i + 1}>
                {i + 1} Bag{i > 0 ? "s" : ""}
              </MenuItem>
            ))}
          </Select>
        )}

        <Button variant="contained" type="submit" fullWidth>
          Book Now
        </Button>
      </form>
    </div>
  );
}
