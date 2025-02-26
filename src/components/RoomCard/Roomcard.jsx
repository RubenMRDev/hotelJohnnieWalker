import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const RoomCarousel = () => {
    const images = [
        "https://res.cloudinary.com/dd5hetwb8/image/upload/v1740391254/habitacion_2_camas_simples_zdnafz.jpg",
        "https://res.cloudinary.com/dd5hetwb8/image/upload/v1740391252/habitacion_2_camas_simples_2_u0fmxb.jpg",
        "https://res.cloudinary.com/dd5hetwb8/image/upload/v1740391251/habitacion_2_camas_simples_3_tsrqao.jpg",
    ];

    const [showArrows, setShowArrows] = useState(window.innerWidth >= 768);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            setShowArrows(window.innerWidth >= 768);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: showArrows,
        beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    };

    return (
        <div className="max-w-2xl mx-auto p-4 bg-gray-100 rounded-lg shadow-md">
            <div className="relative">
                <Slider {...settings}>
                    {images.map((image, index) => (
                        <div key={index} className="relative">
                            <img
                                src={image}
                                alt={`Habitación ${index + 1}`}
                                className="w-full h-64 object-cover rounded-lg"
                            />
                        </div>
                    ))}
                </Slider>
                <div className="absolute top-4 left-4 right-4 bg-gray-800 bg-opacity-70 text-white text-center p-2 rounded-lg font-bold">
                    Habitación estándar con 1 o 2 camas
                </div>
            </div>
            <p className="text-center mt-4 text-gray-700 font-medium">
                Perfecta para una estancia corta, cama individual, baño privado
                y ambiente tranquilo.
            </p>
            <div className="mt-4 text-center">
                <label
                    htmlFor="beds"
                    className="block text-sm font-medium text-gray-700"
                >
                    Selecciona las camas simples que quieres en la habitación:
                </label>
                <select
                    id="beds"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                >
                    <option value="1 Cama">1 Cama</option>
                    <option value="2 Camas">2 Camas</option>
                </select>
            </div>
            <button className="mt-4 w-full bg-yellow-500 text-black font-bold py-2 rounded-md shadow-md">
                Reservar por $(€)
            </button>
            <div className="flex justify-center mt-4 gap-2">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`w-3 h-3 rounded-full ${
                            index === currentSlide
                                ? "bg-gray-700"
                                : "bg-gray-300"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default RoomCarousel;
