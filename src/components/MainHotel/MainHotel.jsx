import React from "react";

const MainHotel = () => {
return (
    <div
        className="w-full h-screen bg-cover bg-center flex flex-col items-center justify-center text-white"
        style={{ backgroundImage: `url('../src/assets/image/mainHotel.jpg')` }}
    >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center">
            JOHNNIE WALKER
        </h1>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center">
            HOTEL
        </h2>
        <button className="bg-[#D9B26A] text-black px-9 py-3 text-lg font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition">
            Reservar
        </button>
    </div>
);
};

export default MainHotel;
