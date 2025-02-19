import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  const center = [36.510034987389005, -4.8861989382417566];

  return (
    <div
      style={{
        height: "50vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "15%",
      }}
    >
      <MapContainer
        center={center}
        zoom={14}
        style={{ height: "50vh", width: "70%", border: "2px solid grey", borderRadius: "20px" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={center}>
          <Popup>Marbella</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
