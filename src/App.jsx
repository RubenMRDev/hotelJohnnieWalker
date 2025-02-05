import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './routes/LandingPage.jsx';
import Main from './routes/Main.jsx';
import Profile from './routes/profile.jsx';
import Login from './routes/Login.jsx';
import Register from './routes/Register.jsx';
import ReserveHotel from './routes/ReserveHotel.jsx';
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
