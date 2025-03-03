import React, { useState } from "react";
import RoomCarousel from "../RoomCarousel/RoomCarousel";
import Rooms from "../../data/Rooms";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";

function BookHotel() {
  const [selectedBeds, setSelectedBeds] = useState("");
  const [selectedCapacity, setSelectedCapacity] = useState("");
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [guests, setGuests] = useState(1);
  const [filteredRooms, setFilteredRooms] = useState([]);

  const handleSearchClick = () => {
    const results = Rooms.filter((room) => {
      return (
        (selectedBeds === "" || room.beds === selectedBeds) &&
        (selectedCapacity === "" || room.capacity >= parseInt(selectedCapacity))
      );
    });
    setFilteredRooms(results);
  };

  const handleReserve = async (room) => {
    if (!checkInDate || !checkOutDate) {
      Swal.fire({
        title: "¡Error!",
        text: "Por favor, selecciona una fecha de entrada y salida antes de reservar.",
        icon: "error",
        confirmButtonColor: "#D9B26A",
      });
      return;
    }

    const userData = JSON.parse(localStorage.getItem("userData"));
    const userId = userData?.id;

    if (!userId) {
      Swal.fire({
        title: "¡Atención!",
        text: "No hay usuario logueado. La reserva se ha guardado localmente pero no se enviará al servidor.",
        icon: "warning",
        confirmButtonColor: "#D9B26A",
      });
      return;
    }

    const newReservation = {
      userId,
      room: room.type,
      price: room.price,
      checkIn: checkInDate.toLocaleDateString(),
      checkOut: checkOutDate.toLocaleDateString(),
      image: room.images[0],
    };

    const response = await fetch("http://localhost:5000/hotels", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newReservation),
    });
    const createdReservation = await response.json();

    const storedReservations = JSON.parse(localStorage.getItem("reservations")) || [];
    localStorage.setItem(
      "reservations",
      JSON.stringify([...storedReservations, createdReservation])
    );

    Swal.fire({
      title: "¡Reserva guardada con éxito!",
      text: "Tu reserva ha sido realizada.",
      icon: "success",
      confirmButtonColor: "#D9B26A",
    }).then(() => {
      window.location.href = "/main";
    });
  };

  return (
    <div className="font-bold w-full m-0 p-0">
      <div className="relative w-full h-72 overflow-hidden">
        <img
          className="w-full h-full object-cover filter blur-[1px]"
          src="https://res.cloudinary.com/dd5hetwb8/image/upload/upscalemedia-transformed_fk6qbb.png"
          alt="Piscina de hotel"
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center">
          <h1 className="relative text-2xl bg-white bg-opacity-5 p-3 rounded-lg max-w-4/5 w-full font-bold">
            Obtén un descuento de hasta un 40%. Ahorra con Johnnie Walker Hotel
          </h1>
        </div>
      </div>

      <div className="relative top-[-40px] mx-auto w-11/12 max-w-lg bg-white rounded-lg shadow-lg p-5">
        <h2 className="m-0 text-lg text-gray-800 border-b-3 border-blue-600 pb-1 mb-4">
          Obtén tu reserva
        </h2>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label className="text-blue-600 font-bold text-sm mb-1">
              Entrada
            </label>
            <DatePicker
              selected={checkInDate}
              onChange={(date) => setCheckInDate(date)}
              dateFormat="dd/MM/yyyy"
              minDate={new Date()}
              className="w-full p-2 border border-gray-300 rounded-md text-sm"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-blue-600 font-bold text-sm mb-1">
              Salida
            </label>
            <DatePicker
              selected={checkOutDate}
              onChange={(date) => setCheckOutDate(date)}
              dateFormat="dd/MM/yyyy"
              minDate={new Date()}
              className="w-full p-2 border border-gray-300 rounded-md text-sm"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-blue-600 font-bold text-sm mb-1">
              Personas
            </label>
            <input
              type="number"
              min="1"
              value={guests}
              onChange={(e) => setGuests(parseInt(e.target.value))}
              className="p-2 border border-gray-300 rounded-md text-sm"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-blue-600 font-bold text-sm mb-1">
              Tipo de cama
            </label>
            <select
              className="p-2 border border-gray-300 rounded-md text-sm"
              value={selectedBeds}
              onChange={(e) => setSelectedBeds(e.target.value)}
            >
              <option value="">Todas</option>
              <option value="1 Cama">1 Cama</option>
              <option value="2 Camas">2 Camas</option>
              <option value="1 Cama King">1 Cama King</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-blue-600 font-bold text-sm mb-1">
              Capacidad
            </label>
            <select
              className="p-2 border border-gray-300 rounded-md text-sm"
              value={selectedCapacity}
              onChange={(e) => setSelectedCapacity(e.target.value)}
            >
              <option value="">Cualquier capacidad</option>
              <option value="2">2 Personas</option>
              <option value="4">4 Personas</option>
            </select>
          </div>
          <button
            className="bg-[#d9b26a] font-bold rounded-lg py-3 px-6 text-lg cursor-pointer transition-all ease-in-out duration-300 shadow-lg mx-auto hover:bg-[#c99a57]"
            onClick={handleSearchClick}
          >
            Buscar
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-4 flex flex-col gap-6 justify-center">
        {filteredRooms.length > 0 ? (
          filteredRooms.map((room) => (
            <div key={room.id} className="w-full">
              <RoomCarousel room={room} onReserve={handleReserve} />
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">
            No hay habitaciones disponibles con los filtros seleccionados.
          </p>
        )}
      </div>
    </div>
  );
}

export default BookHotel;