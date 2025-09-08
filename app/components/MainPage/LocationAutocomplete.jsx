"use client";
import React, { useState, useEffect } from "react";
import {
  GeoapifyGeocoderAutocomplete,
  GeoapifyContext,
} from "@geoapify/react-geocoder-autocomplete";
import "@geoapify/geocoder-autocomplete/styles/minimal.css";

const LocationAutocomplete = () => {
  const [pickupPlace, setPickupPlace] = useState(null);
  const [dropPlace, setDropPlace] = useState(null);
  const [distance, setDistance] = useState(null);

  const apiKey = "59905bf1b7e14b7d83a7825ad63ae722";

  function onPickupSelect(value) {
    setPickupPlace(value);
  }

  function onDropSelect(value) {
    setDropPlace(value);
  }

  function onSuggestionsChange(value) {
    // Optional: handle suggestions change
  }

  // Extract lon/lat
  const getLonLat = (place) => {
    if (place && place.properties) {
      const { lon, lat } = place.properties;
      return { lon, lat };
    }
    return null;
  };

  // Call Geoapify Route API once both pickup & drop are selected
  useEffect(() => {
    const fetchRoute = async () => {
      if (!pickupPlace || !dropPlace) return;

      const start = getLonLat(pickupPlace);
      const end = getLonLat(dropPlace);

      if (!start || !end) return;

      const url = `https://api.geoapify.com/v1/routing?waypoints=${start.lat},${start.lon}|${end.lat},${end.lon}&mode=drive&apiKey=${apiKey}`;

      try {
        const res = await fetch(url);
        const data = await res.json();

        if (data.features && data.features.length > 0) {
          const routeInfo = data.features[0].properties;
          setDistance({
            distanceKm: (routeInfo.distance / 1000).toFixed(2), // meters → km
            timeMin: Math.round(routeInfo.time / 60), // seconds → minutes
          });
        }
      } catch (error) {
        console.error("Error fetching route:", error);
      }
    };

    fetchRoute();
  }, [pickupPlace, dropPlace]);

  return (
    <GeoapifyContext apiKey={apiKey}>
      <div style={{ marginBottom: "1rem" }}>
        <label>
          Pick Up Location:
          <GeoapifyGeocoderAutocomplete
            placeholder="Enter pick up address"
            options={{ type: "city" }}
            lang="en"
            limit={5}
            placeSelect={onPickupSelect}
            suggestionsChange={onSuggestionsChange}
          />
        </label>
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <label>
          Drop Location:
          <GeoapifyGeocoderAutocomplete
            placeholder="Enter drop address"
            options={{ type: "city" }}
            lang="en"
            limit={5}
            placeSelect={onDropSelect}
            suggestionsChange={onSuggestionsChange}
          />
        </label>
      </div>

      {pickupPlace && (
        <div>
          <strong>Pick Up Selected:</strong>
          <pre>{JSON.stringify(getLonLat(pickupPlace), null, 2)}</pre>
        </div>
      )}
      {dropPlace && (
        <div>
          <strong>Drop Selected:</strong>
          <pre>{JSON.stringify(getLonLat(dropPlace), null, 2)}</pre>
        </div>
      )}

      {distance && (
        <div style={{ marginTop: "1rem", padding: "10px", border: "1px solid #ccc" }}>
          <h3>Route Info:</h3>
          <p>🚗 Distance: {distance.distanceKm} km</p>
          <p>⏱️ Estimated Time: {distance.timeMin} minutes</p>
        </div>
      )}
    </GeoapifyContext>
  );
};

export default LocationAutocomplete;
