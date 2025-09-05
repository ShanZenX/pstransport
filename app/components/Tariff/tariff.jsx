"use client";

import React from "react";
import { Box, Typography, List, ListItem } from "@mui/material";
import TariffTable from "./TariffTable";
import useInView from "@/app/components/About/useInView";

const AnimatedSection = ({ children }) => {
  const [ref, inView] = useInView({ threshold: 0.2 });
  return (
    <Box
      ref={ref}
      sx={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
        mb: 6,
      }}
    >
      {children}
    </Box>
  );
};

const TariffPage = () => {
  return (
    <Box
      sx={{
        maxWidth: "1200px",
        mx: "auto",
        p: { xs: 1, sm: 3 },
        mt: 10,
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        fontWeight="bold"
        sx={{ fontSize: { xs: "1.25rem", sm: "2rem" } }}
      >
        Chennai & Tamil Nadu Cab Tariff
      </Typography>

      {/* Wrap all tables in scrollable container for mobile */}
      {[
        {
          title: "One Way Trips",
          description:
            "Affordable one-way taxi services for travel between cities. Perfect for those who don’t need a return trip.",
          headers: ["Vehicle Type", "Minimum Km", "Fixed Fare", "Extra per Km", "Driver Bata"],
          rows: [
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
          ],
          list: ["One way booking minimum 150 km", "Toll & Permit charges extra"],
        },
        {
          title: "Outstation / Native Trip",
          description:
            "Ideal for long-distance journeys across Tamil Nadu. Enjoy per-day packages with fixed minimum coverage.",
          headers: [
            "Vehicle Type",
            "Per Day Minimum Km",
            "Driver Bata",
            "Per Day Tariff",
            "Extra per Km",
          ],
          rows: [
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
          ],
          list: ["Minimum 250 km billing per day", "Toll, Parking & Permit charges extra"],
        },
        {
          title: "Local Chennai Trip",
          description:
            "Convenient hourly packages for Chennai city travel. Choose short 4-hour or full-day 8-hour trips.",
          headers: ["Vehicle Type", "4 Hrs / 40 Km", "8 Hrs / 80 Km", "Extra Km", "Extra Hr"],
          rows: [
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
          ],
          list: ["After 8 hrs, extra hours will be charged", "Toll & Parking extra"],
        },
        {
          title: "Tempo Traveller (Outstation)",
          description:
            "Spacious option for group travel and family trips. Best choice for long outstation journeys.",
          headers: ["Description", "Rate"],
          rows: [
            { col1: "Rate per km", col2: "₹32" },
            { col1: "Driver Bata", col2: "₹800/day" },
          ],
          list: ["Minimum 300 km billing per day", "Toll, Parking & Interstate Permit charges extra"],
        },
      ].map((section, idx) => (
        <AnimatedSection key={idx}>
          <Typography
            variant="h5"
            gutterBottom
            fontWeight="bold"
            sx={{ fontSize: { xs: "1rem", sm: "1.5rem" } }}
          >
            {section.title}
          </Typography>
          <Typography
            variant="body2"
            sx={{ mb: 2, fontSize: { xs: "0.7rem", sm: "0.875rem" } }}
          >
            {section.description}
          </Typography>

          {/* Horizontal scroll wrapper for mobile */}
          <Box sx={{ overflowX: "auto" }}>
            <Box sx={{ minWidth: { xs: "500px", sm: "100%" } }}>
              <TariffTable headers={section.headers} rows={section.rows} />
            </Box>
          </Box>

          <List sx={{ mt: 1, pl: 2 }}>
            {section.list.map((item, index) => (
              <ListItem
                key={index}
                sx={{ fontSize: { xs: "0.65rem", sm: "0.875rem" } }}
                disablePadding
              >
                • {item}
              </ListItem>
            ))}
          </List>
        </AnimatedSection>
      ))}
    </Box>
  );
};

export default TariffPage;
