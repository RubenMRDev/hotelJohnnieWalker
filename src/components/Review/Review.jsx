import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ResenyasCarousel = ({ resenyas = [] }) => {
  if (!resenyas || resenyas.length === 0) {
    return <p>No hay reseñas disponibles.</p>;
  }
  const CustomPrevArrow = (props) => {
	const { className, style, onClick } = props;
	return (
	  <div
		className={`${className} bg-gray-800 p-2 rounded-full absolute left-0 z-10 cursor-pointer`}
		style={{ ...style, display: "block", backgroundColor: "rgba(0,0,0,0.2)" }}
		onClick={onClick}
	  >
		◀
	  </div>
	);
  };
  
  const CustomNextArrow = (props) => {
	const { className, style, onClick } = props;
	return (
	  <div
		className={`${className} bg-gray-800 p-2 rounded-full absolute right-0 z-10 cursor-pointer`}
		style={{ ...style, display: "block", backgroundColor: "rgba(0,0,0,0.2)" }}
		onClick={onClick}
	  >
		▶
	  </div>
	);
  };
  const settings = {
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	speed: 1000,
	autoplay: true,
	autoplaySpeed: 4000,
	arrows: true,
	prevArrow: <CustomPrevArrow />,
	nextArrow: <CustomNextArrow />,
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
            {rating}{" "}
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
