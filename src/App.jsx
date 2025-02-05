import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage.jsx';
import Main from './pages/Main.jsx';
import Profile from './pages/profile.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import ReserveHotel from './pages/ReserveHotel.jsx';
import ReserveRestaurant from './pages/ReserveRestaurant.jsx';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/main" element={<Main />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/reservehotel" element={<ReserveHotel />} />
        <Route path="/reserverestaurant" element={<ReserveRestaurant />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default App;
