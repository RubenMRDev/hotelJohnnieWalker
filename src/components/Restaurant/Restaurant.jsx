import React, { useState } from "react";

const RestaurantReservation = () => {
  const [adults, setAdults] = useState(3);
  const [children, setChildren] = useState(1);
  const [date, setDate] = useState("2025-07-12");
  const [time, setTime] = useState("");
  const [comments, setComments] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const availableTimes = [
    "08:00", "09:00", "10:00", "14:00", "15:00", 
    "18:00", "19:00", "20:00", "21:00", "22:00"
  ];

  return (
    <div className="flex justify-center items-center h-screen bg-cover bg-center p-4" style={{ backgroundImage: "url('../src/assets/image/bg-restaurant.png')" }}>
      <div className="w-96 bg-white p-6 rounded-2xl shadow-xl">
        <h2 className="text-2xl font-semibold text-center mb-4 italic">Reserva Restaurante</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Adultos</label>
          <input type="number" value={adults} onChange={(e) => setAdults(e.target.value)} className="border p-2 w-full rounded" />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Niños</label>
          <input type="number" value={children} onChange={(e) => setChildren(e.target.value)} className="border p-2 w-full rounded" />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Fecha</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="border p-2 w-full rounded" />
        </div>

        <div className="mb-4 relative">
          <label className="block text-sm font-medium mb-1">Hora</label>
          <input type="text" value={time} readOnly onClick={() => setShowDropdown(!showDropdown)} className="border p-2 w-full rounded cursor-pointer" placeholder="Seleccione hora" />
          {showDropdown && (
            <div className="absolute bg-white border rounded mt-1 w-full shadow-lg z-10 max-h-40 overflow-y-auto">
              {availableTimes.map((timeSlot) => (
                <div key={timeSlot} onClick={() => { setTime(timeSlot); setShowDropdown(false); }} className="p-2 hover:bg-gray-200 cursor-pointer">
                  {timeSlot}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Comentarios</label>
          <textarea value={comments} onChange={(e) => setComments(e.target.value)} placeholder="Escriba aquí su comentario..." className="border p-2 w-full rounded" />
        </div>

        <div className="flex justify-between mt-6">
          <button className="w-1/2 bg-[#D9B26A] text-white hover:bg-yellow-600 py-2 rounded mr-2">Carta</button>
          <button className="w-1/2 bg-[#D9B26A] text-white hover:bg-yellow-600 py-2 rounded ml-2">Reservar</button>
        </div>

        <div className="mt-4 text-center">
          <button className="text-sm text-gray-700 py-1 px-3 bg-gray-300 hover:bg-gray-400 rounded">Volver</button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantReservation;
