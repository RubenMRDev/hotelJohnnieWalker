import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Rooms from "../../data/Rooms";

const RoomCarousel = ({ room }) => {
    if (!room) return null; // Evitar errores si room es undefined

    const [showArrows, setShowArrows] = useState(window.innerWidth >= 768);

    useEffect(() => {
        const handleResize = () => setShowArrows(window.innerWidth >= 768);
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
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 1, arrows: false },
            },
        ],
    };

    return (
        <div className="w-full max-w-4xl mx-auto px-4 bg-gray-100 rounded-lg shadow-md p-4">
            <div className="relative">
                <Slider {...settings} className="rounded-lg overflow-hidden">
                    {room.images.map((image, index) => (
                        <div key={index} className="px-2">
                            <img src={image} alt={`${room.type} ${index + 1}`} className="w-full aspect-video object-cover rounded-lg" />
                        </div>
                    ))}
                </Slider>
                <div className="absolute top-4 left-4 right-4 bg-gray-800 bg-opacity-70 text-white text-center p-2 rounded-lg font-bold">
                    {room.type}
                </div>
            </div>
            <p className="text-center mt-4 text-gray-700 font-medium">{room.description}</p>
            <button className="mt-4 w-full bg-yellow-500 text-black font-bold py-2 rounded-md shadow-md hover:bg-yellow-600 transition duration-300">
                Reservar por {room.price}€
            </button>
        </div>
    );
};


export default RoomCarousel;