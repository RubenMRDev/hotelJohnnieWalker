import React, { useEffect, useState } from "react";
import "./Landing.css";

const Landing = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

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
    const translateValue = scrollPosition / 2.5;
    const isDesktop = window.innerWidth >= 1024;
    const adjustedTranslateValue = isDesktop ? translateValue * 0.8 : translateValue;
    return `${adjustedTranslateValue}px`;
  };
  

  return (
    <>
      <div className="relative min-h-screen">
        <div
          className="absolute top-0 left-0 w-full h-[750px] md:h-[750px] lg:h-[750px] bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('src/assets/images/room.jpg')",
            backgroundPosition: "center",
          }}
        ></div>

        <div className="absolute top-0 left-0 w-full h-[750px] md:h-[750px] lg:h-[750px] bg-black opacity-10 z-1"></div>

        <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-[#0C1440] to-transparent"></div>
        
        <div className="flex flex-col items-center justify-center min-h-screen text-white z-10 relative pb-20">
          <h1
            className="text-5xl md:text-5xl font-bold"
            style={{ textShadow: "6px 6px 3px rgba(0, 0, 0, 0.5)" }}
          >
            JOHNNIE WALKER
          </h1>
          <h1
            className="text-5xl md:text-5xl font-bold"
            style={{ textShadow: "6px 6px 3px rgba(0, 0, 0, 0.5)" }}
          >
            HOTEL
          </h1>
          <button className="mt-6 mt-15 text-2xl px-6 py-2 bg-[#E9ECEF] text-[#475E75] rounded-md hover:bg-[#D9B26A] hover:text-[#000000] transition-all duration-300 font-bold shadow-lg">
            Empezar
          </button>
        </div>
      </div>

      <div
        className="leaves-background-container absolute top-[831px] w-full h-[250px] z-0 overflow-x-hidden overflow-y-hidden"
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          className="left-half lg:w-[25%] lg:h-[100] w-[90%] h-[100%] bg-cover bg-center"
          style={{
            backgroundImage: "url('src/assets/images/leafgreen.png')",
            backgroundPosition: "center",
            backgroundSize: "cover",
            transform: `translateX(-${calculateTranslation()}) scaleX(-1)`,
            transition: "transform 0.2s ease-out",
          }}
        ></div>

        <div
          className="right-half lg:w-[25%] lg:h-[100] w-[90%] h-[30vh] bg-cover bg-center"
          style={{
            backgroundImage: "url('src/assets/images/leafgreen.png')",
            backgroundPosition: "center",
            backgroundSize: "cover",
            transform: `translateX(${calculateTranslation()})`,
            transition: "transform 0.2s ease-out",
          }}
        ></div>
      </div>

      <div className="flex items-center justify-center space-x-4 mt-25 gap-6 lg:gap-65 mr-10 ml-10">
        <h3 className="text-xl text-center">Reserva 100% segura</h3>
        <h3 className="text-xl text-center">Sin gastos de gestión</h3>
        <h3 className="text-xl text-center">Pago directo en el hotel</h3>
      </div>

      <div className="flex items-center justify-center mt-25">
        <h2 className="text-center text-3xl mr-20 ml-20 lg:mr-35 lg:ml-35">
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
