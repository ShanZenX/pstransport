"use client";

import React from "react";
import { Box, Typography, List, ListItem } from "@mui/material";
import TariffTable from "./TariffTable";

const TariffPage = () => {
  return (
    <Box sx={{ maxWidth: "1200px", mx: "auto", p: 3, mt: 10 }}>
      <Typography variant="h4" gutterBottom fontWeight="bold">
        Chennai & Tamil Nadu Cab Tariff
      </Typography>

      {/* 1. One Way Trips */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h5" gutterBottom fontWeight="bold">
          One Way Trips
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Affordable one-way taxi services for travel between cities.
          Perfect for those who don’t need a return trip.
        </Typography>
        <TariffTable
          headers={[
            "Vehicle Type",
            "Minimum Km",
            "Fixed Fare",
            "Extra per Km",
            "Driver Bata",
          ]}
          rows={[
            {
              col1: "Sedan (Dzire / Etios)",
              col2: "150 km",
              col3: "₹2460",
              col4: "₹14",
              col5: "₹500/day",
            },
            {
              col1: "Ertiga 6+1",
              col2: "150 km",
              col3: "₹3200",
              col4: "₹19",
              col5: "₹500/day",
            },
          ]}
        />
        <List sx={{ mt: 2, pl: 2 }}>
          <ListItem disablePadding>• One way booking minimum 150 km</ListItem>
          <ListItem disablePadding>• Toll & Permit charges extra</ListItem>
        </List>
      </Box>

      {/* 2. Outstation / Native Trip */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h5" gutterBottom fontWeight="bold">
          Outstation / Native Trip
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Ideal for long-distance journeys across Tamil Nadu. 
          Enjoy per-day packages with fixed minimum coverage.
        </Typography>
        <TariffTable
          headers={[
            "Vehicle Type",
            "Per Day Minimum Km",
            "Driver Bata",
            "Per Day Tariff",
            "Extra per Km",
          ]}
          rows={[
            {
              col1: "Sedan (Dzire / Etios)",
              col2: "250 km",
              col3: "₹500/day",
              col4: "₹3300",
              col5: "₹12",
            },
            {
              col1: "Ertiga 6+1",
              col2: "250 km",
              col3: "₹600/day",
              col4: "₹4500",
              col5: "₹17",
            },
            {
              col1: "Innova Crysta 6+1",
              col2: "250 km",
              col3: "₹700/day",
              col4: "₹5900",
              col5: "₹22",
            },
          ]}
        />
        <List sx={{ mt: 2, pl: 2 }}>
          <ListItem disablePadding>• Minimum 250 km billing per day</ListItem>
          <ListItem disablePadding>
            • Toll, Parking & Permit charges extra
          </ListItem>
        </List>
      </Box>

      {/* 3. Local Chennai Trip */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h5" gutterBottom fontWeight="bold">
          Local Chennai Trip
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Convenient hourly packages for Chennai city travel. 
          Choose short 4-hour or full-day 8-hour trips.
        </Typography>
        <TariffTable
          headers={[
            "Vehicle Type",
            "4 Hrs / 40 Km",
            "8 Hrs / 80 Km",
            "Extra Km",
            "Extra Hr",
          ]}
          rows={[
            {
              col1: "Sedan (Dzire / Etios 4+1)",
              col2: "₹1100",
              col3: "₹2200",
              col4: "₹18",
              col5: "₹250",
            },
            {
              col1: "Ertiga 6+1",
              col2: "₹1500",
              col3: "₹3000",
              col4: "₹21",
              col5: "₹380",
            },
            {
              col1: "Innova Crysta 6+1",
              col2: "₹2100",
              col3: "₹4200",
              col4: "₹23",
              col5: "₹400",
            },
            {
              col1: "Tempo Traveller",
              col2: "NA",
              col3: "₹6000",
              col4: "₹32",
              col5: "₹500",
            },
          ]}
        />
        <List sx={{ mt: 2, pl: 2 }}>
          <ListItem disablePadding>
            • After 8 hrs, extra hours will be charged
          </ListItem>
          <ListItem disablePadding>• Toll & Parking extra</ListItem>
        </List>
      </Box>

      {/* 4. Tempo Traveller */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h5" gutterBottom fontWeight="bold">
          Tempo Traveller (Outstation)
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Spacious option for group travel and family trips. 
          Best choice for long outstation journeys.
        </Typography>
        <TariffTable
          headers={["Description", "Rate"]}
          rows={[
            { col1: "Rate per km", col2: "₹32" },
            { col1: "Driver Bata", col2: "₹800/day" },
          ]}
        />
        <List sx={{ mt: 2, pl: 2 }}>
          <ListItem disablePadding>• Minimum 300 km billing per day</ListItem>
          <ListItem disablePadding>
            • Toll, Parking & Interstate Permit charges extra
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default TariffPage;
