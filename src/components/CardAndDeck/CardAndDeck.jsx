import React from "react";

const CardAndDeck = ({ room, price, checkIn, checkOut, image, onCancel }) => {
  return (
    <div className="flex items-center bg-gray-100 rounded-2xl shadow-md p-4 w-full max-w-md sm:max-w-lg lg:max-w-xl mx-auto">
      <img
        src={image}
        alt={`Habitación ${room}`}
        className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-lg object-cover"
      />

      <div className="flex-grow ml-3 sm:ml-4 text-left">
        <h3 className="text-base sm:text-lg font-semibold">{room}</h3>
        <div className="flex flex-col text-xs sm:text-sm text-gray-600 mt-2">
          <div>
            <span className="font-semibold">Check-in:</span> {checkIn}
          </div>
          <div>
            <span className="font-semibold">Check-out:</span> {checkOut}
          </div>
        </div>
      </div>

      <div className="text-right ml-3">
        <p className="text-base sm:text-lg font-bold text-gray-800">{price} €</p>
        <button
          onClick={onCancel}
          className="mt-2 bg-red-500 text-white font-medium text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl shadow hover:bg-red-600 transition-colors"
        >
          Cancelar
        </button>
      </div>
    </div>
  );
};

export default CardAndDeck;
