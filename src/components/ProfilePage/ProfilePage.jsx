import { useEffect, useState } from "react";
import CardAndDeck from "../CardAndDeck/CardAndDeck";

export default function ProfilePage() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem("userData"));
    if (storedUserData) {
      setUserData(storedUserData);
    }

    const storedReservations =
      JSON.parse(localStorage.getItem("reservations")) || [];
    setReservations(storedReservations);
  }, []);

  const handleCancelReservation = (id) => {
    const updatedReservations = reservations.filter(
      (reservation) => reservation.id !== id
    );
    setReservations(updatedReservations);
    localStorage.setItem("reservations", JSON.stringify(updatedReservations));
  };

  return (
    <div className=" max-w-max mx-auto bg-white min-h-screen p-4 pb-8">
      <div className="rounded-xl border border-[#e5e7eb] p-5 mb-4">
        <h1 className="text-center text-2xl font-medium mb-6">Mi Perfil</h1>

        <div className="mb-6">
          <h2 className="text-[#6b7280] uppercase text-sm font-medium mb-4">
            INFORMACIÓN PERSONAL
          </h2>
          <div className="mb-4">
            <p className="text-[#6b7280] mb-1">Nombre</p>
            <p className="text-black text-lg">{userData.name || "N/A"}</p>
          </div>
          <div className="mb-4">
            <p className="text-[#6b7280] mb-1">Correo Electrónico</p>
            <p className="text-black text-lg">{userData.email || "N/A"}</p>
          </div>
          <div className="mb-4">
            <p className="text-[#6b7280] mb-1">Teléfono</p>
            <p className="text-black text-lg">{userData.phone || "N/A"}</p>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-[#e5e7eb] p-5 mb-4">
        <h2 className="text-[#6b7280] uppercase text-sm font-medium mb-4">
          Mis Reservas
        </h2>
        {reservations.length > 0 ? (
          reservations.map((reservation) => (
            <div key={reservation.id} className="mb-4">
              <CardAndDeck
                room={reservation.room} 
                price={reservation.price}
                checkIn={reservation.checkIn}
                checkOut={reservation.checkOut}
                image={reservation.image} 
                onCancel={() => handleCancelReservation(reservation.id)}
              />
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">No tienes reservas aún.</p>
        )}
      </div>

      <button
        className="w-full text-center text-[#ef4444] py-3 border rounded-lg mb-4 border-[#e5e7eb] hover:bg-[#f3f4f6] hover:text-[#e11d48] transition-colors"
        onClick={() => {
          localStorage.removeItem("isLogged");
          localStorage.removeItem("userData");
          window.location.href = "/";
        }}
      >
        Cerrar Sesión
      </button>
    </div>
  );
}
