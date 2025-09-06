"use client";
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

const MapInput = () => {
  const mapContainerRef = useRef();
  const mapRef = useRef();

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhbnplbngiLCJhIjoiY21mN3d4cGxsMHI0eTJqczl3OG9kemQxdiJ9.4x5-iJjZ0qZRdCaA9QzW8g';

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      center: [80.1,13.0], // starting position [lng, lat]
      zoom: 9 // starting zoom13.040499, 80.152105
    });
  });

  return (
    <div
      style={{ height: '100%' }}

    //   ref={mapContainerRef}
      className="map-container"
    >
    <input ref={mapContainerRef} ></input></div >
  );
};

export default MapInput;