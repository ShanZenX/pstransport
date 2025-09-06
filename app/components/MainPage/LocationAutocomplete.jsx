"use client";
import React, { useState } from "react";
import {
  GeoapifyGeocoderAutocomplete,
  GeoapifyContext,
} from "@geoapify/react-geocoder-autocomplete";
import "@geoapify/geocoder-autocomplete/styles/minimal.css";

const LocationAutocomplete = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);

  function onPlaceSelect(value) {
    console.log("Selected place:", value);
    setSelectedPlace(value);
  }

  function onSuggestionsChange(value) {
    console.log("Suggestions:", value);
  }

  return (
    <GeoapifyContext apiKey="59905bf1b7e14b7d83a7825ad63ae722">
      <GeoapifyGeocoderAutocomplete
        placeholder="Enter address here"
        options={{
          type: "city",
        }}
        lang="en"
        limit={5}
        placeSelect={onPlaceSelect}
        suggestionsChange={onSuggestionsChange}
      />
      {/* Example: Display selected place */}
      {selectedPlace && (
        <div>
          <strong>Selected Place:</strong>
          <pre>{JSON.stringify(selectedPlace, null, 2)}</pre>
        </div>
      )}
    </GeoapifyContext>
  );
};

export default LocationAutocomplete;
