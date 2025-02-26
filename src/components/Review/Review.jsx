import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";

const ResenyasCarousel = ({ resenyas = [] }) => {
  const [showArrows, setShowArrows] = useState(window.innerWidth >= 768);
  const [currentSlide, setCurrentSlide] = useState(0); 

  useEffect(() => {
    const handleResize = () => {
      setShowArrows(window.innerWidth >= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!resenyas || resenyas.length === 0) {
    return <p>No hay reseñas disponibles.</p>;
  }

  const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return showArrows ? (
      <div
        className={`${className} bg-gray-800 p-2 rounded-full absolute left-0 z-10 cursor-pointer`}
        style={{ ...style, backgroundColor: "rgba(0,0,0,0.2)" }}
        onClick={onClick}
      >
        ◀
      </div>
    ) : null;
  };

  const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return showArrows ? (
      <div
        className={`${className} bg-gray-800 p-2 rounded-full absolute right-0 z-10 cursor-pointer`}
        style={{ ...style, backgroundColor: "rgba(0,0,0,0.2)" }}
        onClick={onClick}
      >
        ▶
      </div>
    ) : null;
  };

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: showArrows,
    prevArrow: <CustomPrevArrow />, 
    nextArrow: <CustomNextArrow />,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex), // Actualiza el estado al cambiar de diapositiva
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex items-center justify-center my-5">
        <span className="flex-1 h-[2px] bg-black mx-2"></span>
        <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
          <img
            src="https://res.cloudinary.com/dd5hetwb8/image/upload/v1739955279/estrella-resenyas_qwubvx.png"
            alt="Estrella"
            className="w-6 h-6"
          />
        </div>
        <span className="flex-1 h-[2px] bg-black mx-2"></span>
      </div>
      <Slider {...settings} className="w-full max-w-md mx-auto">
        {resenyas.map((resenya, index) => (
          <Resenya key={index} {...resenya} />
        ))}
      </Slider>
      <div className="flex justify-center mt-4 gap-2">
        {resenyas.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-gray-700" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const Resenya = ({ name, date, rating, text }) => {
  return (
    <div className="w-11/12 max-w-sm mx-auto font-sans text-black text-center">
      <div className="flex flex-col items-center mb-5 gap-2">
        <div className="text-center">
          <h3 className="m-0 font-bold text-lg">{name}</h3>
          <p className="my-1 text-sm">{date}</p>
          <p className="font-bold text-sm">
            {rating} {" "}
            <span className="text-black">{generarEstrellas(rating)}</span>
          </p>
        </div>
        <p className="text-center leading-relaxed text-base max-w-[90%]">
          {text}
        </p>
      </div>
    </div>
  );
};

const generarEstrellas = (rating) => {
  const estrellasLlenas = Math.floor(rating);
  const mediaEstrella = rating % 1 !== 0 ? "☆" : "";
  return (
    "★".repeat(estrellasLlenas) +
    mediaEstrella +
    "☆".repeat(5 - estrellasLlenas - (mediaEstrella ? 1 : 0))
  );
};

export default ResenyasCarousel;