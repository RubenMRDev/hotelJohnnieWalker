import React, { useEffect, useState } from "react";
import "./Landing.css";

const Landing = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const calculateTranslation = () => {
    const translateValue = scrollPosition / 2.5;
    return `${translateValue}px`;
  };

  return (
    <>
      {/* Header: Imagen de fondo y contenido centrado */}
      <div
        className="min-h-screen flex flex-col items-center justify-center text-white bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url('src/assets/images/room.jpg')",
        }}
      >
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold"
          style={{ textShadow: "3px 3px 4px rgba(0,0,0,0.5)" }}
        >
          JOHNNIE WALKER
        </h1>
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold"
          style={{ textShadow: "3px 3px 4px rgba(0,0,0,0.5)" }}
        >
          HOTEL
        </h1>
        <button className="mt-6 sm:mt-10 text-xl sm:text-2xl px-6 py-2 bg-[#E9ECEF] text-[#475E75] rounded-md hover:bg-[#D9B26A] hover:text-[#000000] transition-all duration-300 font-bold shadow-lg">
          Empezar
        </button>
      </div>

      {/* Contenedor de hojas y textos (sin margen negativo) */}
      <div className="grid grid-cols-1 grid-rows-1 h-[30vh]">
        {/* Animación de hojas */}
        <div className="col-start-1 row-start-1 flex justify-between items-center">
          <div
            className="w-[80vw] sm:w-[90vw] h-full bg-cover bg-center"
            style={{
              backgroundImage: "url('src/assets/images/leafgreen.png')",
              transform: `translateX(-${calculateTranslation()}) scaleX(-1)`,
              transition: "transform 0.2s ease-out",
            }}
          ></div>
          <div
            className="w-[80vw] sm:w-[90vw] h-full bg-cover bg-center"
            style={{
              backgroundImage: "url('src/assets/images/leafgreen.png')",
              transform: `translateX(${calculateTranslation()})`,
              transition: "transform 0.2s ease-out",
            }}
          ></div>
        </div>
        {/* Textos superpuestos */}
        <div className="col-start-1 row-start-1 flex items-center justify-center space-x-4 mx-10">
          <h3 className="text-lg sm:text-xl text-center">
            Reserva 100% segura
          </h3>
          <h3 className="text-lg sm:text-xl text-center">
            Sin gastos de gestión
          </h3>
          <h3 className="text-lg sm:text-xl text-center">
            Pago directo en el hotel
          </h3>
        </div>
      </div>

      {/* Contenedor del contenido adicional */}
      <div className="flex items-center justify-center mt-6 sm:mt-10 mx-10">
        <h2 className="text-center text-xl sm:text-2xl">
          Disfruta de vistas espectaculares al mar, habitaciones de lujo y servicios exclusivos en un ambiente relajado y sofisticado. Vive una experiencia única donde el sonido de las olas y la comodidad se encuentran. ¡Tu escape perfecto comienza aquí!
        </h2>
      </div>
    </>
  );
};

export default Landing;
