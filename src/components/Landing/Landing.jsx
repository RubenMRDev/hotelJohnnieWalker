import React from "react";
import "./Landing.css";

const Landing = () => {
  return (
    <>
      <div className="relative min-h-screen">
        <img
          className="absolute top-0 left-0 w-full h-[900px] object-cover z-0"
          src="src/assets/images/room2.jpg"
          alt="Room of Johnnie Walker's hotel"
          style={{ filter: "blur(2px)" }}
        />

        <div className="absolute top-0 left-0 w-full h-[900px] bg-black opacity-10 z-1"></div>

        <div className="flex flex-col items-center justify-center min-h-screen text-white z-10 relative">
          <h1
            className="text-5xl font-bold"
            style={{ textShadow: "3px 3px 4px rgba(0, 0, 0, 0.5)" }}
          >
            JOHNNIE WALKER
          </h1>
          <h1
            className="text-5xl font-bold"
            style={{ textShadow: "3px 3px 4px rgba(0, 0, 0, 0.5)" }}
          >
            HOTEL
          </h1>
          <button className="mt-25 text-2xl px-6 py-2 bg-[#E9ECEF] text-[#475E75] rounded-md hover:bg-[#D9B26A] hover:text-[#000000] transition-all duration-300 font-bold shadow-lg">
            Empezar
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-4 mt-60 gap-30 mr-10 ml-10">
        <h3 className="text-xl text-center">Reserva 100% segura</h3>
        <h3 className="text-xl text-center">Sin gastos de gestión</h3>
        <h3 className="text-xl text-center">Pago directo en el hotel</h3>
      </div>
      <div className="flex items-center justify-center mt-30">
        <h2 className="text-center text-2xl mr-10 ml-10">
          Disfruta de vistas espectaculares al mar, habitaciones de lujo y
          servicios exclusivos en un ambiente relajado y sofisticado. Vive una
          experiencia única donde el sonido de las olas y la comodidad se
          encuentran. ¡Tu escape perfecto comienza aquí!
        </h2>
      </div>
    </>
  );
};

export default Landing;
