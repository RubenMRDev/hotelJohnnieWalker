import React from "react";

const MainRestaurant = () => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center flex flex-col items-center justify-center text-white relative"
      style={{ backgroundImage: `url('https://res.cloudinary.com/dd5hetwb8/image/upload/v1740387399/df1a678c-20ef-4446-8f56-1d3ab0207df2.png')` }}
    >
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center">
        JOHNNIE WALKER
      </h1>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center">
        RESTAURANTE
      </h2>
      <button
        className="bg-[#D9B26A] text-black px-9 py-3 text-lg font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition"
        onClick={() => window.location.href = '/reserverestaurant'}
      >
        Reservar
      </button>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0C1440] to-transparent"></div>
    </div>
  );
};

export default MainRestaurant;