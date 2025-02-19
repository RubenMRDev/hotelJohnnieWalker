import React, { useEffect, useState } from "react";
import "./Landing.css";

const Landing = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  // Detectar el scroll para aplicar el efecto de desplazamiento
  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const calculateTranslation = () => {
    const translateValue = scrollPosition / 1.5;
    return `${translateValue}px`;
  };

  return (
    <>
      <div className="relative min-h-screen">
        <div
          className="absolute top-0 left-0 w-full h-[750px] bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('src/assets/images/room.jpg')",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
          }}
        ></div>

        <div className="absolute top-0 left-0 w-full h-[750px] bg-black opacity-10 z-1"></div>

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

      <div
        className="leaves-background-container absolute top-[831px] w-full h-[250px] z-0"
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >

        <div
          className="left-half w-1/2 h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('src/assets/images/leaves.png')",
            backgroundPosition: "left",
            transform: `translateX(-${calculateTranslation()})`,
            transition: "transform 0.2s ease-out",
          }}
        ></div>

        <div
          className="right-half w-1/2 h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('src/assets/images/leaves.png')",
            backgroundPosition: "right",
            transform: `translateX(${calculateTranslation()})`,
            transition: "transform 0.2s ease-out",
          }}
        ></div>
      </div>

      <div className="flex items-center justify-center space-x-4 mt-25 gap-30 mr-10 ml-10">
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
