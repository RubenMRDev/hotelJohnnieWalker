import React from "react";

const MainHotel = () => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center flex flex-col items-center justify-center text-white relative"
      style={{ backgroundImage: `url('https://res.cloudinary.com/dd5hetwb8/image/upload/50aeda3e-bc7b-4dee-9e38-99c7ec1c3b6b.png')` }}
    >
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#0C1440] to-transparent"></div>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center">
        JOHNNIE WALKER
      </h1>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center">
        HOTEL
      </h2>
      <button 
        className="bg-[#D9B26A] text-black px-9 py-3 text-lg font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition"
        onClick={() => window.location.href = '/reservehotel'}
      >
        Reservar
      </button>

    </div>
  );
};

export default MainHotel;