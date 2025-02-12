import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Restaurant = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const images = ["restaurant1.webp", "restaurant2.webp"];

  const nextImage = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <div className="relative w-full h-[400px] bg-gray-900 overflow-hidden">
      {/* Imagen animada */}
      <div className="w-full h-full relative">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={images[currentIndex]}
            src={`src/assets/images/${images[currentIndex]}`}
            alt="Nuevo Restaurante"
            className="w-full h-full object-cover absolute"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "tween", duration: 0.6 }}
          />
        </AnimatePresence>
      </div>

      {/* Información del restaurante */}
      <div className="absolute top-8 left-8 flex items-center space-x-2 text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v2h-2zm0 4h2v6h-2z" />
        </svg>
        <h1 className="text-xl font-semibold">Nuevo Restaurante</h1>
      </div>

      {/* Flechas de navegación */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
        <button onClick={prevImage}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-16 h-16 text-white opacity-70 hover:opacity-100 transition"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          </svg>
        </button>
      </div>

      <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
        <button onClick={nextImage}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-16 h-16 text-white opacity-70 hover:opacity-100 transition"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M10 6l-1.41 1.41L13.17 12l-4.58 4.59L10 18l6-6z" />
          </svg>
        </button>
      </div>

      {/* Botones de acción */}
      <div className="absolute bottom-8 w-full flex justify-center space-x-2 px-4">
        <button className="bg-white/10 hover:bg-white/50 hover:text-black transition duration-300 backdrop-blur-sm border border-white text-white font-bold px-2 py-2 rounded-2xl shadow-md text-xs sm:text-sm md:text-base">
          HORARIO
        </button>
        <button className="bg-white/10 hover:bg-white/60 hover:text-black transition duration-300 backdrop-blur-sm border border-white text-white font-bold px-2 py-2 rounded-2xl shadow-md text-xs sm:text-sm md:text-base">
          VER DISPONIBILIDAD
        </button>
        <button className="bg-white/10 hover:bg-white/50 hover:text-black transition duration-300 backdrop-blur-sm border border-white text-white font-bold px-2 py-2 rounded-2xl shadow-md text-xs sm:text-sm md:text-base">
          CARTA
        </button>
      </div>
    </div>
  );
};

export default Restaurant;
