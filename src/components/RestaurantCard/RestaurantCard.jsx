import React, { useState } from "react";
import Swal from "sweetalert2";
import './RestaurantCard.css'

const RestaurantCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "https://res.cloudinary.com/dd5hetwb8/image/upload/v1739955279/restaurant2_iohn5l.webp",
    "https://res.cloudinary.com/dd5hetwb8/image/upload/v1739958826/restaurant-6479818_skdtym.jpg"
  ];

  const handleMenuClick = () => {
    Swal.fire({
      title:
        '<span style="font-size: 24px; font-weight: bold; color: #D9B26A;">¡Disfruta de nuestra deliciosa carta!</span>',
      text: "Descubre nuestros platos exclusivos y disfruta de una experiencia única.",
      imageUrl:
        "https://res.cloudinary.com/dd5hetwb8/image/upload/menu_mh0axr.jpg",
      imageWidth: 420,
      imageHeight: 590,
      imageAlt: "Imagen de la carta",
      background: "#0C1440",
      color: "#ffffff",
      confirmButtonColor: "#D9B26A",
      showCloseButton: true,
      showConfirmButton: false,
      customClass: {
        popup: "custom-swal-popup",
        title: "custom-swal-title",
        text: "custom-swal-text",
      },
    });
  };

  const handleTimeClick = () => {
    Swal.fire({
      title:
        '<span style="font-size: 24px; font-weight: bold; color: #D9B26A;">¡Este es nuestro horario!</span>',
      imageUrl:
        "https://res.cloudinary.com/dimlqpphf/image/upload/v1740482754/pixelcut-export_2_p0lrga.png",
      imageWidth: 420,
      imageHeight: 590,
      imageAlt: "Imagen de la carta",
      background: "#0C1440",
      color: "#ffffff",
      confirmButtonColor: "#D9B26A",
      showCloseButton: true,
      showConfirmButton: false,
      customClass: {
        popup: "custom-swal-popup",
        title: "custom-swal-title",
        text: "custom-swal-text",
      },
    });
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-[400px] bg-gray-900 overflow-hidden">
      <div className="w-full h-full relative">
        <img
          key={images[currentIndex]}
          src={images[currentIndex]}
          alt="Nuevo Restaurante"
          className="w-full h-full object-cover absolute fade-in"
        />
      </div>

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

      <div className="absolute bottom-8 w-full flex justify-center space-x-2 px-4">
  <button onClick={handleTimeClick} className="bg-black/70 hover:bg-gray-800/80 hover:text-white transition duration-300 backdrop-blur-md border border-white text-white font-bold px-2 py-2 rounded-2xl shadow-md text-xs sm:text-sm md:text-base">
    Horario
  </button>
  <button 
    onClick={() => window.location.href = '/reserverestaurant'} 
    className="bg-black/70 hover:bg-gray-800/80 hover:text-white transition duration-300 backdrop-blur-md border border-white text-white font-bold px-2 py-2 rounded-2xl shadow-md text-xs sm:text-sm md:text-base"
  >
    Ver disponibilidad
  </button>
  <button onClick={handleMenuClick} className="bg-black/70 hover:bg-gray-800/80 hover:text-white transition duration-300 backdrop-blur-md border border-white text-white font-bold px-2 py-2 rounded-2xl shadow-md text-xs sm:text-sm md:text-base">
    Carta
  </button>
</div>

    </div>
  );
};

export default RestaurantCard;
