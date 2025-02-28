import React from "react";

const RestaurantReservationCard = ({
  adults,
  children,
  date,
  time,
  comments,
  onCancel
}) => {
  return (
    <div className="flex items-center bg-gray-100 rounded-2xl shadow-md p-4 w-full max-w-md sm:max-w-lg lg:max-w-xl mx-auto">
      <img
        src={"https://res.cloudinary.com/dd5hetwb8/image/upload/v1740388764/6d675de2-b8a5-40ff-94a0-9ac191e374b8.png"} 
        alt="Reservación de Restaurante"
        className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-lg object-cover"
      />

      <div className="flex-grow ml-3 sm:ml-4 text-left">
        <h3 className="text-base sm:text-lg font-semibold">Restaurante</h3>
        <div className="flex flex-col text-xs sm:text-sm text-gray-600 mt-2">
          <div>
            <span className="font-semibold">Fecha:</span> {date}
          </div>
          <div>
            <span className="font-semibold">Hora:</span> {time}
          </div>
          <div>
            <span className="font-semibold">Adultos:</span> {adults}
          </div>
          <div>
            <span className="font-semibold">Niños:</span> {children}
          </div>
          {comments && (
            <div>
              <span className="font-semibold">Comentarios:</span> {comments}
            </div>
          )}
        </div>
      </div>

      <div className="text-right ml-3">
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

export default RestaurantReservationCard;
