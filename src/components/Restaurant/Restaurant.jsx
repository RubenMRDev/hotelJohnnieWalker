import React, { useState } from "react";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import emailjs from "emailjs-com";

const RestaurantReservation = () => {
  const [adults, setAdults] = useState(3);
  const [children, setChildren] = useState(1);
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("08:00");
  const [comments, setComments] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const availableTimes = [
    "08:00",
    "09:00",
    "10:00",
    "14:00",
    "15:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
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

  const handleReserveClick = () => {
    const toEmail = "hoteljohnniewalker.oficial@gmail.com";

    const templateParams = {
      adults,
      children,
      date: date.toLocaleDateString(),
      time,
      comments,
      to_email: toEmail,
    };

    emailjs
      .send(
        "service_blzzndg",
        "template_xhddu01",
        templateParams,
        "9IIIEOfjBQTNshIjc"
      )
      .then(
        (response) => {
          console.log("Email enviado con éxito:", response);
          Swal.fire({
            title: "!Reserva confirmada!",
            text: "Su reserva ha sido guardada exitosamente.",
            icon: "success",
            confirmButtonColor: "#D9B26A",
          });
        },
        (error) => {
          console.error("Error al enviar el email:", error);
          Swal.fire({
            title: "¡Error!",
            text: `Hubo un problema al enviar la reserva. Error: ${error.text}`,
            icon: "error",
            confirmButtonColor: "#D9B26A",
          });
        }
      );
  };

  return (
    <div
      className="relative flex justify-center items-center min-h-screen bg-cover bg-center p-4"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dimlqpphf/image/upload/v1740556202/restaurant_ypfeba.png')",
      }}
    >
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-[#0C1440] to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#0C1440] to-transparent pointer-events-none"></div>

      <div className="relative z-10 w-96 bg-white p-6 rounded-2xl shadow-xl">
        <h2 className="text-2xl font-semibold text-center mb-4 italic">
          Reserva Restaurante
        </h2>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Adultos</label>
          <input
            type="number"
            value={adults}
            onChange={(e) => {
              const value = Math.max(0, e.target.value);
              setAdults(value);
            }}
            min="0"
            className="border p-2 w-full rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Niños</label>
          <input
            type="number"
            value={children}
            onChange={(e) => {
              const value = Math.max(0, e.target.value);
              setChildren(value);
            }}
            min="0"
            className="border p-2 w-full rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Fecha</label>
          <DatePicker
            selected={date}
            onChange={setDate}
            dateFormat="dd/MM/yyyy"
            minDate={new Date()}
            className="border p-2 w-84 rounded"
          />
        </div>

        <div className="mb-4 relative">
          <label className="block text-sm font-medium mb-1">Hora</label>
          <input
            type="text"
            value={time}
            readOnly
            onClick={() => setShowDropdown(!showDropdown)}
            className="border p-2 w-full rounded cursor-pointer"
            placeholder="Seleccione hora"
          />
          {showDropdown && (
            <div className="absolute bg-white border rounded mt-1 w-full shadow-lg z-20 max-h-40 overflow-y-auto">
              {availableTimes.map((timeSlot) => (
                <div
                  key={timeSlot}
                  onClick={() => {
                    setTime(timeSlot);
                    setShowDropdown(false);
                  }}
                  className="p-2 hover:bg-gray-200 cursor-pointer"
                >
                  {timeSlot}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Comentarios</label>
          <textarea
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            placeholder="Escriba aquí su comentario..."
            className="border p-2 w-full rounded resize-y max-h-33"
            rows={4}
          />
        </div>

        <div className="flex justify-between mt-6">
          <button
            onClick={handleMenuClick}
            className="w-1/2 bg-[#D9B26A] text-white hover:bg-yellow-600 py-2 rounded mr-2"
          >
            Carta
          </button>
          <button
            onClick={handleReserveClick}
            className="w-1/2 bg-[#D9B26A] text-white hover:bg-yellow-600 py-2 rounded ml-2"
          >
            Reservar
          </button>
        </div>

        <div className="mt-4 text-center">
          <button
            onClick={() => (window.location.href = "/")}
            className="text-sm text-gray-700 py-1 px-3 bg-gray-300 hover:bg-gray-400 rounded"
          >
            Volver
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantReservation;
