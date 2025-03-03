import { useEffect, useState } from "react";
import CardAndDeck from "../CardAndDeck/CardAndDeck";
import RestaurantReservationCard from "../RestaurantReservationCard/RestaurantReservationCard";
import Swal from "sweetalert2";

export default function ProfilePage() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    id: null,
  });
  const [hotelReservations, setHotelReservations] = useState([]);
  const [restaurantReservations, setRestaurantReservations] = useState([]);

  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem("userData"));
    if (storedUserData) {
      setUserData(storedUserData);
      fetchReservations(storedUserData.id);
    }
  }, []);

  const fetchReservations = async (userId) => {
    try {
      const hotelResponse = await fetch(`http://localhost:5000/hotels?userId=${userId}`);
      const hotelData = await hotelResponse.json();
      setHotelReservations(hotelData);

      const restaurantResponse = await fetch(`http://localhost:5000/restaurants?userId=${userId}`);
      const restaurantData = await restaurantResponse.json();
      setRestaurantReservations(restaurantData);

      localStorage.setItem("reservations", JSON.stringify(hotelData));
      localStorage.setItem("restaurantReservations", JSON.stringify(restaurantData));
    } catch (error) {
      Swal.fire({
        title: "¡Error!",
        text: "No se pudieron cargar las reservas.",
        icon: "error",
        confirmButtonColor: "#D9B26A",
      });
    }
  };

  const handleEditProfile = () => {
    Swal.fire({
      title: "Editar Perfil",
      html: `
        <input id="swal-input1" class="swal2-input" placeholder="Nombre" value="${userData.name}">
        <input id="swal-input2" class="swal2-input" placeholder="Email" value="${userData.email}">
        <input id="swal-input3" class="swal2-input" placeholder="Teléfono" value="${userData.phone}">
      `,
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: "Guardar",
      preConfirm: () => {
        const name = document.getElementById("swal-input1").value;
        const email = document.getElementById("swal-input2").value;
        const phone = document.getElementById("swal-input3").value;
        if (!name || !email || !phone) {
          Swal.showValidationMessage("Por favor, llena todos los campos");
        }
        return { name, email, phone };
      },
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await fetch(`http://localhost:5000/users/${userData.id}`);
          if (!response.ok) {
            throw new Error("Error al obtener los datos del usuario");
          }
          const currentUserData = await response.json();

          const updatedUserData = {
            ...currentUserData,
            name: result.value.name,
            email: result.value.email,
            phone: result.value.phone,
          };

          const updateResponse = await fetch(`http://localhost:5000/users/${userData.id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedUserData),
          });

          if (!updateResponse.ok) {
            throw new Error("Error al actualizar el perfil en el servidor");
          }

          setUserData(updatedUserData);
          localStorage.setItem("userData", JSON.stringify(updatedUserData));

          Swal.fire({
            title: "¡Actualizado!",
            text: "Tu perfil se ha actualizado.",
            icon: "success",
            confirmButtonColor: "#D9B26A",
          });
        } catch (error) {
          Swal.fire({
            title: "¡Error!",
            text: "No se pudo actualizar el perfil.",
            icon: "error",
            confirmButtonColor: "#D9B26A",
          });
        }
      }
    });
  };

  const handleCancelHotelReservation = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/hotels/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Error al eliminar la reserva");
      }

      const updatedReservations = hotelReservations.filter(
        (reservation) => reservation.id !== id
      );
      setHotelReservations(updatedReservations);
      localStorage.setItem("reservations", JSON.stringify(updatedReservations));

      Swal.fire({
        title: "¡Éxito!",
        text: "La reserva ha sido borrada.",
        icon: "success",
        confirmButtonColor: "#D9B26A",
      });
    } catch (error) {
      Swal.fire({
        title: "¡Error!",
        text: error.message,
        icon: "error",
        confirmButtonColor: "#D9B26A",
      });
    }
  };

  const handleCancelRestaurantReservation = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/restaurants/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Error al eliminar la reserva");
      }

      const updatedReservations = restaurantReservations.filter(
        (reservation) => reservation.id !== id
      );
      setRestaurantReservations(updatedReservations);
      localStorage.setItem("restaurantReservations", JSON.stringify(updatedReservations));

      Swal.fire({
        title: "¡Éxito!",
        text: "La reserva ha sido borrada.",
        icon: "success",
        confirmButtonColor: "#D9B26A",
      });
    } catch (error) {
      Swal.fire({
        title: "¡Error!",
        text: error.message,
        icon: "error",
        confirmButtonColor: "#D9B26A",
      });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("isLogged");
    localStorage.removeItem("userData");
    localStorage.removeItem("reservations");
    localStorage.removeItem("restaurantReservations");
    window.location.href = "/";
  };

  const handleDeleteProfile = async () => {
    const storedUserData = JSON.parse(localStorage.getItem("userData"));
    if (!storedUserData) {
      Swal.fire({
        title: "¡Error!",
        text: "No se encontraron datos del usuario.",
        icon: "error",
        confirmButtonColor: "#D9B26A",
      });
      return;
    }

    const userId = storedUserData.id;

    try {
      const userResponse = await fetch(`http://localhost:5000/users/${userId}`);
      if (!userResponse.ok) {
        throw new Error("Usuario no encontrado.");
      }

      const restaurantResponse = await fetch(`http://localhost:5000/restaurants?userId=${userId}`);
      const restaurantReservations = await restaurantResponse.json();
      for (const reservation of restaurantReservations) {
        await fetch(`http://localhost:5000/restaurants/${reservation.id}`, {
          method: "DELETE",
        });
      }

      const hotelResponse = await fetch(`http://localhost:5000/hotels?userId=${userId}`);
      const hotelReservations = await hotelResponse.json();
      for (const reservation of hotelReservations) {
        await fetch(`http://localhost:5000/hotels/${reservation.id}`, {
          method: "DELETE",
        });
      }

      const deleteUserResponse = await fetch(`http://localhost:5000/users/${userId}`, {
        method: "DELETE",
      });

      if (!deleteUserResponse.ok) {
        throw new Error("Error al eliminar el usuario.");
      }

      localStorage.removeItem("isLogged");
      localStorage.removeItem("userData");
      localStorage.removeItem("reservations");
      localStorage.removeItem("restaurantReservations");

      Swal.fire({
        title: "¡Perfil eliminado!",
        text: "Tu perfil y todas tus reservas han sido eliminados.",
        icon: "success",
        confirmButtonColor: "#D9B26A",
      }).then(() => {
        window.location.href = "/";
      });
    } catch (error) {
      Swal.fire({
        title: "¡Error!",
        text: error.message,
        icon: "error",
        confirmButtonColor: "#D9B26A",
      });
    }
  };

  return (
    <div className="max-w-max mx-auto bg-white min-h-screen p-4 pb-8">
      <div className="rounded-xl border border-[#e5e7eb] p-5 mb-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-center text-2xl font-medium">Mi Perfil</h1>
          <button onClick={handleEditProfile} title="Editar perfil">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-600 hover:text-blue-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L7 21H3v-4L16.732 3.732z"
              />
            </svg>
          </button>
        </div>
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
          Mis Reservas de Hotel
        </h2>
        {hotelReservations.length > 0 ? (
          hotelReservations.map((reservation) => (
            <div key={reservation.id} className="mb-4">
              <CardAndDeck
                room={reservation.room}
                price={reservation.price}
                checkIn={reservation.checkIn}
                checkOut={reservation.checkOut}
                image={reservation.image}
                onCancel={() => handleCancelHotelReservation(reservation.id)}
              />
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">
            No tienes reservas de hotel aún.
          </p>
        )}
      </div>

      <div className="rounded-xl border border-[#e5e7eb] p-5 mb-4">
        <h2 className="text-[#6b7280] uppercase text-sm font-medium mb-4">
          Mis Reservas de Restaurante
        </h2>
        {restaurantReservations.length > 0 ? (
          restaurantReservations.map((reservation) => (
            <div key={reservation.id} className="mb-4">
              <RestaurantReservationCard
                name={reservation.type || "Restaurante"}
                date={reservation.date}
                time={reservation.time}
                adults={reservation.adults}
                children={reservation.children}
                onCancel={() => handleCancelRestaurantReservation(reservation.id)}
              />
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">
            No tienes reservas de restaurante aún.
          </p>
        )}
      </div>

      <div className="text-center space-y-4">
        <button
          onClick={handleLogout}
          className="text-blue-600 hover:text-blue-800 font-bold"
        >
          Cerrar sesión
        </button>
        <div>
          <button
            onClick={handleDeleteProfile}
            className="text-red-600 hover:text-red-800 font-bold"
          >
            Eliminar mi cuenta
          </button>
        </div>
      </div>
    </div>
  );
}