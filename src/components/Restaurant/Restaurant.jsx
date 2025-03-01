import React, { useState } from "react";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import emailjs from "emailjs-com";

const RestaurantReservation = () => {
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("19:00");
  const [comments, setComments] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const availableTimes = [
    "08:00", "09:00", "10:00", "14:00", "15:00",
    "18:00", "19:00", "20:00", "21:00", "22:00"
  ];

  const handleReserveClick = () => {
    if (!date || !time) {
      Swal.fire({
        title: "¡Error!",
        text: "Por favor, selecciona una fecha y hora antes de reservar.",
        icon: "error",
        confirmButtonColor: "#D9B26A",
      });
      return;
    }

    const newReservation = {
      id: Date.now(),
      type: "Restaurante",
      adults,
      children,
      date: date.toLocaleDateString(),
      time,
      comments,
    };

    const storedReservations = JSON.parse(localStorage.getItem("restaurantReservations")) || [];
    localStorage.setItem("restaurantReservations", JSON.stringify([...storedReservations, newReservation]));

    const userData = JSON.parse(localStorage.getItem("userData"));
    const userEmail = userData?.email;

    if (!userEmail) {
      Swal.fire({
        title: "¡Atención!",
        text: "No hay correo electrónico almacenado. La reserva se ha guardado localmente pero no se enviará ninguna confirmación por correo.",
        icon: "warning",
        confirmButtonColor: "#D9B26A",
      });
      return;
    }

    const templateParams = {
      adults,
      children,
      date: date.toLocaleDateString(),
      time,
      comments,
      to_email: userEmail,
    };

    emailjs.send(
      "service_blzzndg",
      "template_xhddu01",
      templateParams,
      "9IIIEOfjBQTNshIjc"
    ).then(
      () => {
        Swal.fire({
          title: "¡Reserva confirmada!",
          text: "Su reserva ha sido realizada y guardada. Se ha enviado una confirmación a su correo electrónico.",
          icon: "success",
          confirmButtonColor: "#D9B26A",
        });
      },
      (error) => {
        Swal.fire({
          title: "¡Error!",
          text: `Hubo un problema al enviar la confirmación por correo. Error: ${error.text}`,
          icon: "error",
          confirmButtonColor: "#D9B26A",
        });
      }
    );
  };

  return (
    <div className="relative flex justify-center items-center min-h-screen bg-cover bg-center p-4"
      style={{ backgroundImage: "url('https://res.cloudinary.com/dimlqpphf/image/upload/v1740556202/restaurant_ypfeba.png')" }}>
      <div className="relative z-10 w-96 bg-white p-6 rounded-2xl shadow-xl">
        <h2 className="text-2xl font-semibold text-center mb-4 italic">Reserva Restaurante</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Adultos</label>
          <input type="number" value={adults} onChange={(e) => setAdults(Math.max(0, parseInt(e.target.value)))}
            min="0" className="border p-2 w-full rounded" />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Niños</label>
          <input type="number" value={children} onChange={(e) => setChildren(Math.max(0, parseInt(e.target.value)))}
            min="0" className="border p-2 w-full rounded" />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Fecha</label>
          <DatePicker selected={date} onChange={setDate} dateFormat="dd/MM/yyyy" minDate={new Date()} className="border p-2 w-full rounded" 
            wrapperClassName="w-full" />
        </div>

        <div className="mb-4 relative">
          <label className="block text-sm font-medium mb-1">Hora</label>
          <input type="text" value={time} readOnly onClick={() => setShowDropdown(!showDropdown)}
            className="border p-2 w-full rounded cursor-pointer" placeholder="Seleccione hora" />
          {showDropdown && (
            <div className="absolute bg-white border rounded mt-1 w-full shadow-lg z-10 max-h-40 overflow-y-auto">
              {availableTimes.map((timeSlot) => (
                <div key={timeSlot} onClick={() => { setTime(timeSlot); setShowDropdown(false); }}
                  className="p-2 hover:bg-gray-200 cursor-pointer">
                  {timeSlot}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Comentarios</label>
          <textarea value={comments} onChange={(e) => setComments(e.target.value)}
            placeholder="Escriba aquí su comentario..." className="border p-2 w-full rounded resize-y max-h-32" rows={4} />
        </div>

        <button onClick={handleReserveClick} className="w-full bg-[#D9B26A] text-white hover:bg-yellow-600 py-2 rounded">
          Reservar
        </button>
      </div>
    </div>
  );
};

export default RestaurantReservation;
