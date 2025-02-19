import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.css";

const Map = () => {
  const center = [36.510034987389005, -4.8861989382417566];

  return (
    <div className="map-container">
      <MapContainer
        className="map"
        center={center}
        zoom={14}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={center}>
          <Popup>C. Pedraza, 12, Marbella</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
