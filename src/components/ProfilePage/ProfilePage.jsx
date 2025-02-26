import { useEffect, useState } from "react";
import { CreditCard, Plus } from "lucide-react";

export default function ProfilePage() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem("userData"));
    if (storedUserData) {
      setUserData(storedUserData);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLogged");
    localStorage.removeItem("userData");
    window.location.href = "/"; 
  };

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen p-4 pb-8">
      <div className="rounded-xl border border-[#e5e7eb] p-5 mb-4">
        <h1 className="text-center text-2xl font-medium mb-6">Mi Perfil</h1>

        <div className="mb-6">
          <h2 className="text-[#6b7280] uppercase text-sm font-medium mb-4">INFORMACIÓN PERSONAL</h2>

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

      <button
        className="w-full text-center text-[#ef4444] py-3 border rounded-lg mb-4 border-[#e5e7eb] hover:bg-[#f3f4f6] hover:text-[#e11d48] transition-colors"
        onClick={handleLogout}
      >
        Cerrar Sesión
      </button>

      <div className="rounded-xl border border-[#e5e7eb] p-5 mb-4">
        <h2 className="text-[#6b7280] uppercase text-sm font-medium mb-4">MÉTODO DE PAGO</h2>

        <div className="bg-[#2563eb] text-white rounded-xl p-4 mb-4">
          <div className="flex justify-between items-center mb-4">
            <CreditCard className="h-6 w-6" />
            <span className="font-medium">VISA</span>
          </div>
          <div className="mb-4">
            <p className="text-lg">•••• •••• •••• 4589</p>
          </div>
          <div className="flex justify-between">
            <div>
              <p className="text-xs text-white/70">Titular</p>
              <p>{userData.name || "Usuario"}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-white/70">Expira</p>
              <p>03/26</p>
            </div>
          </div>
        </div>

        <button className="w-full border border-[#e5e7eb] rounded-lg py-3 flex items-center justify-center text-[#2563eb]">
          <Plus className="h-5 w-5 mr-2" />
          Cambiar tarjeta
        </button>
      </div>

      <button
        className="bg-[#f3f4f6] px-6 py-2 rounded-lg hover:bg-[#e5e7eb] transition-colors"
        onClick={() => window.location.href = "/main"}
      >
        Volver
      </button>
    </div>
  );
}
