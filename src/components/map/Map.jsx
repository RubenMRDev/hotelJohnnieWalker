import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  return (
    <div 
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100%',}}
    >
      <MapContainer 
        center={[36.510034987389005, -4.8861989382417566]} 
        zoom={20} 
        style={{ height: '35vh', width: '65%', border: '4px solid #A9A9A9', borderRadius: '30px' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[36.510034987389005, -4.8861989382417566]}>
          <Popup>Marbella</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
