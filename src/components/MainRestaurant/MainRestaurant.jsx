import React from "react";

const MainRestaurant = () => {
return (
    <div
        className="w-full h-screen bg-cover bg-center flex flex-col items-center justify-center text-white"
        style={{ backgroundImage: `url('../src/assets/image/mainRestaurant.jpg')` }}
    >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center">
            JOHNNIE WALKER<br className="hidden md:inline-block" />RESTAURANTE
        </h1>
        <button className="bg-[#D9B26A] text-black px-9 py-3 text-lg font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition">
            Reservar
        </button>
    </div>
);
};

export default MainRestaurant;