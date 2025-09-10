"use client";
import React, { useState } from "react";
import {
  Tabs,
  Tab,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  GeoapifyGeocoderAutocomplete,
  GeoapifyContext,
} from "@geoapify/react-geocoder-autocomplete";
import "@geoapify/geocoder-autocomplete/styles/minimal.css";
import { AnimatePresence, motion } from "framer-motion";

// Vehicle price per km
const vehicles = {
  Sedan: 12,
  Ertiga: 18,
  Inova: 10,
};

// MUI style for borderless fields
const noBorderSx = {
  "& .MuiOutlinedInput-root": {
    "& fieldset": { border: "none" }, // removes border
    "&:hover fieldset": { border: "none" },
    "&.Mui-focused fieldset": { border: "none" },
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "black",
  },
};

export default function BookingForm() {
  const [activeTab, setActiveTab] = useState("local");
  const [form, setForm] = useState({
    pickup: null,
    drop: null,
    departDate: null,
    returnDate: null,
    tripType: "oneway",
    passengers: 1,
    vehicle: "Sedan",
  });
  const [errors, setErrors] = useState({});
  const [distance, setDistance] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [userDetails, setUserDetails] = useState({ name: "", phone: "" });

  // handle form change
  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  // calculate distance using Geoapify Route API
  const calculateDistance = async () => {
    if (!form.pickup || !form.drop) return;
    const start = [form.pickup.properties.lon, form.pickup.properties.lat].join(
      ","
    );
    const end = [form.drop.properties.lon, form.drop.properties.lat].join(",");

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

  // calculate cost
  const totalCost =
    distance && form.vehicle
      ? Math.round(distance.distanceKm * vehicles[form.vehicle])
      : 0;

  // confirm booking
  const confirmBooking = () => {
    alert("Booking confirmed!");
    setOpenDialog(false);
  };

  // open booking dialog
  const handleBookNow = () => {
    let newErrors = {};
    if (!form.pickup) newErrors.pickup = "Pickup required";
    if (!form.drop) newErrors.drop = "Drop required";
    if (!form.departDate) newErrors.departDate = "Departure required";
    if (
      activeTab === "outstation" &&
      form.tripType === "twoway" &&
      !form.returnDate
    ) {
      newErrors.returnDate = "Return required";
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      calculateDistance();
      setOpenDialog(true);
    }
  };

  return (
    <GeoapifyContext apiKey="59905bf1b7e14b7d83a7825ad63ae722">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="p-1 sm:p-10 bg-white border border-white/20 shadow-2xl rounded-2xl max-w-fit w-full mx-auto mt-10"
      >
        {/* Tabs */}
        <Tabs
          value={activeTab}
          onChange={(e, val) => setActiveTab(val)}
          textColor="inherit"
          indicatorColor="secondary"
          sx={{
            "& .MuiTab-root": { color: "black" },
            "& .Mui-selected": { color: "black" },
            "& .MuiTabs-indicator": { backgroundColor: "black" },
          }}
        >
          <Tab label="Local" value="local" />
          <Tab label="Outstation" value="outstation" />
          <Tab label="Airport" value="airport" />
        </Tabs>

        {/* Row 1 - Pickup & Drop */}
        <div className="flex flex-wrap gap-6 mt-6">
          {/* Pickup */}
          <div>
            <GeoapifyGeocoderAutocomplete
              placeholder="Pickup location"
              options={{ type: "city" }}
              lang="en"
              limit={5}
              placeSelect={(val) => handleChange("pickup", val)}
            />
            {errors.pickup && (
              <p className="text-red-500 text-sm">{errors.pickup}</p>
            )}
          </div>

          {/* Drop */}
          <div>
            <GeoapifyGeocoderAutocomplete
              placeholder="Drop location"
              options={{ type: "city" }}
              lang="en"
              limit={5}
              placeSelect={(val) => handleChange("drop", val)}
            />
            {errors.drop && (
              <p className="text-red-500 text-sm">{errors.drop}</p>
            )}
          </div>

          {/* Depart Date */}
          <div className="max-w-[150px]">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                label="Depart"
                value={form.departDate}
                onChange={(val) => handleChange("departDate", val)}
                slotProps={{
                  textField: {
                    size: "small",
                    fullWidth: true,
                    error: !!errors.departDate,
                    helperText: errors.departDate,
                    sx: noBorderSx,
                  },
                }}
              />
            </LocalizationProvider>
          </div>

          {/* Trip Type Dropdown (only Outstation) */}
          {activeTab === "outstation" && (
            <div className="min-w-[200px]">
              <FormControl fullWidth size="small" sx={noBorderSx}>
                <InputLabel>Trip Type</InputLabel>
                <Select
                  value={form.tripType}
                  label="Trip Type"
                  onChange={(e) => handleChange("tripType", e.target.value)}
                >
                  <MenuItem value="oneway">One Way</MenuItem>
                  <MenuItem value="twoway">Round Trip</MenuItem>
                </Select>
              </FormControl>
            </div>
          )}

          {/* Passengers */}
          <div className="min-w-[200px]">
            <FormControl fullWidth size="small" sx={noBorderSx}>
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
          <div className="min-w-[200px]">
            <FormControl fullWidth size="small" sx={noBorderSx}>
              <Select
                value={form.vehicle}
                onChange={(e) => handleChange("vehicle", e.target.value)}
              >
                {Object.keys(vehicles).map((v) => (
                  <MenuItem key={v} value={v}>
                    {v}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>

        {/* Animated Return Date */}
        <AnimatePresence>
          {activeTab === "outstation" && form.tripType === "twoway" && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden"
            >
              <div className="mt-4 w-[300px]">
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
                        sx: noBorderSx,
                      },
                    }}
                  />
                </LocalizationProvider>
              </div>

              <div>
                <Button
                  variant="contained"
                  size="medium"
                  className="!bg-gradient-to-r !from-yellow-300 !to-red-700 !text-white !font-semibold !rounded-lg !shadow-md px-6"
                  onClick={handleBookNow}
                >
                  Book Now
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </GeoapifyContext>
  );
}
