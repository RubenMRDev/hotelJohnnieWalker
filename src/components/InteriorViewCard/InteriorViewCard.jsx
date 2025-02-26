import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const InteriorViewCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = ["hotelExterior1.jpg", "hotelExterior2.jpg"];

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="flex justify-center items-center p-4">
      <div className="max-w-4xl w-full relative">
        <h2 className="text-2xl font-semibold text-left mb-4">Vistas de interior:</h2>

        <div className="relative w-full h-[400px] bg-gray-900 overflow-hidden rounded-2xl shadow-lg">
          <AnimatePresence>
            <motion.img
              key={images[currentIndex]}
              src={`src/assets/images/${images[currentIndex]}`}
              alt="Nuevo Restaurante"
              className="w-full h-full object-cover absolute"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            />
          </AnimatePresence>
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
            <button onClick={prevImage}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 text-white opacity-70 hover:opacity-100 transition"
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
                className="w-10 h-10 text-white opacity-70 hover:opacity-100 transition"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M10 6l-1.41 1.41L13.17 12l-4.58 4.59L10 18l6-6z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteriorViewCard;
