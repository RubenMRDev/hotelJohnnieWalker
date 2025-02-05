import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './routes/Register.jsx';
import Main from './routes/Main.js';
import Profile from './routes/profile.js';
import Login from './routes/Login.js';
import Register from './routes/Register.jsx';
import ReserveHotel from './routes/ReserveHotel.js';
import ReserveRestaurant from './routes/ReserveRestaurant.jsx';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/main" element={<Main />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/reservehotel" element={<ReserveHotel />} />
      <Route path="/reserverestaurant" element={<ReserveRestaurant />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default App;
