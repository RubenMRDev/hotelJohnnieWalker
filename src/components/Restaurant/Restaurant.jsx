import React, { useState } from "react";

const RestaurantReservation = () => {
  const [adults, setAdults] = useState(3);
  const [children, setChildren] = useState(1);
  const [date, setDate] = useState("2025-07-12");
  const [time, setTime] = useState("");
  const [comments, setComments] = useState("");
  const [alertMessage, setAlertMessage] = useState(null);

  const handleSelectTime = (selectedTime) => {
    setTime(selectedTime);
    setAlertMessage(`Hora seleccionada: ${selectedTime}`);
    setTimeout(() => setAlertMessage(null), 1500);
  };

  const availableTimes = [
    "08:00", "09:00", "10:00", "14:00", "15:00", 
    "18:00", "19:00", "20:00", "21:00", "22:00"
  ];

  const Card = ({ children, className }) => (
    <div className={`p-4 bg-white rounded-2xl shadow-lg ${className}`}>{children}</div>
  );

  const Button = ({ children, onClick, className }) => (
    <button onClick={onClick} className={`px-4 py-2 rounded ${className}`}>
      {children}
    </button>
  );

  const Input = ({ type, value, onChange, className }) => (
    <input type={type} value={value} onChange={onChange} className={`border p-2 w-full rounded ${className}`} />
  );

  const Textarea = ({ value, onChange, placeholder, className }) => (
    <textarea value={value} onChange={onChange} placeholder={placeholder} className={`border p-2 w-full rounded ${className}`} />
  );

  return (
    <div className="flex justify-center items-center h-screen bg-cover bg-center" style={{ backgroundImage: "url('/path-to-your-background-image.jpg')" }}>
      <Card className="w-96 bg-white/90">
        <div className="p-6">
          <h2 className="text-xl font-semibold text-center mb-4">Reserva Restaurante</h2>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Adultos</label>
            <Input
              type="number"
              value={adults}
              onChange={(e) => setAdults(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Niños</label>
            <Input
              type="number"
              value={children}
              onChange={(e) => setChildren(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Fecha</label>
            <Input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Comentarios</label>
            <Textarea
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              placeholder="Escriba aquí su comentario..."
            />
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-medium mb-2 text-center">Horario</h3>
            <div className="grid grid-cols-3 gap-2">
              {availableTimes.map((timeSlot) => (
                <Button
                  key={timeSlot}
                  onClick={() => handleSelectTime(timeSlot)}
                  className={`w-full ${time === timeSlot ? 'bg-blue-500 text-white' : ''}`}
                >
                  {timeSlot}
                </Button>
              ))}
            </div>
          </div>

          <div className="flex justify-between mt-6">
            <Button className="w-1/2 bg-gray-200 text-black mr-2">
              Carta
            </Button>
            <Button className="w-1/2 bg-blue-500 text-white ml-2">
              Reservar
            </Button>
          </div>

          <div className="mt-4 text-center">
            <Button className="text-sm text-blue-500">Volver</Button>
          </div>

          {alertMessage && (
            <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded shadow-lg">
              {alertMessage}
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default RestaurantReservation;