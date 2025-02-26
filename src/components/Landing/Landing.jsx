import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Landing.css";

const Landing = () => {
  const navigate = useNavigate();
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const calculateTranslation = () => {
    const translation = scrollPosition / 2.5;
    return `${translation}px`;
  };

  const handleStartClick = () => {
    if (localStorage.getItem("isLogged") === "true") {
      navigate("/main");
    } else {
      navigate("/loginregister");
    }
  };

  return (
    <>
      <div
        className="relative min-h-screen flex flex-col items-center justify-center text-white bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url('src/assets/images/room.jpg')",
        }}
      >
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#0C1440] to-transparent"></div>
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
        <button
          className="mt-6 sm:mt-10 text-xl sm:text-2xl px-6 py-2 bg-[#E9ECEF] text-[#475E75] rounded-md hover:bg-[#D9B26A] hover:text-[#000000] transition-all duration-300 font-bold shadow-lg"
          onClick={handleStartClick}
        >
          Empezar
        </button>
      </div>
      <div className="grid grid-cols-1 grid-rows-1 h-[30vh] overflow-hidden">
        <div className="col-start-1 row-start-1 flex justify-between items-center">
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
            className="right-half lg:w-[25%] lg:h-[100] w-[90%] h-[100%] bg-cover bg-center"
            style={{
              backgroundImage: "url('src/assets/images/leafgreen.png')",
              backgroundPosition: "center",
              backgroundSize: "cover",
              transform: `translateX(${calculateTranslation()})`,
              transition: "transform 0.2s ease-out",
            }}
          ></div>
        </div>
        <div className="col-start-1 row-start-1 flex items-center justify-center space-x-4 mx-10 lg:gap-50">
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
      <div className="flex items-center justify-center mt-6 sm:mt-8 mx-10">
        <h2 className="text-center text-xl sm:text-2xl mb-25">
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
