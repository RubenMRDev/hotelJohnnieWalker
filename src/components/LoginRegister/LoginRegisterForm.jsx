import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import Swal from "sweetalert2";
import CountryNumbers from "../../data/CountryNumbers.json";

const LoginRegister = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    countryCode: "+34",
  });
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [phoneError, setPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    if (localStorage.getItem("isLogged") === "true") {
      navigate("/profile");
    }
  }, [navigate]);

  const countryOptions = Object.entries(CountryNumbers).map(
    ([country, details]) => ({
      value: details.dialCode,
      label: `${country} (${details.dialCode})`,
    })
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "phone") {
      setPhoneError("");
    }
    if (name === "password") {
      setPasswordError("");
    }
  };

  const handleCountryCodeChange = (selectedOption) => {
    setFormData({ ...formData, countryCode: selectedOption.value });
  };

  const handleCheckboxChange = () => {
    setAcceptedTerms(!acceptedTerms);
  };

  const validatePhone = () => {
    if (formData.phone.length < 9) {
      setPhoneError("El número de teléfono debe tener al menos 9 caracteres");
      return false;
    }
    setPhoneError("");
    return true;
  };

  const validatePassword = () => {
    if (formData.password.length < 8) {
      setPasswordError("La contraseña debe tener al menos 8 caracteres");
      return false;
    }
    setPasswordError("");
    return true;
  };

  const saveUserData = async (userData) => {

    localStorage.setItem("userData", JSON.stringify(userData));
    localStorage.setItem("userID", String(userData.id)); 

    if (!isLogin) {
   
      const response = await fetch("http://localhost:5000/users");
      const registeredUsers = await response.json();
      const userWithPassword = {
        ...userData,
        password: formData.password,
        id: String(registeredUsers.length + 1),
      };


      await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userWithPassword),
      });
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!isLogin && !validatePassword()) {
      return;
    }

    if (!isLogin) {
      if (!acceptedTerms) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Debes aceptar los términos y condiciones para continuar.",
          confirmButtonColor: "#D9B26A",
        });
        return;
      }

      if (!validatePhone()) {
        return;
      }
    }

    if (isLogin) {
      const response = await fetch("http://localhost:5000/users");
      const registeredUsers = await response.json();
      const registeredUser = registeredUsers.find(
        (user) => user.email === formData.email && user.password === formData.password
      );

      if (registeredUser) {
        const userDataToSave = {
          id: String(registeredUser.id),
          name: registeredUser.name,
          email: registeredUser.email,
          phone: registeredUser.phone || "",
          countryCode: registeredUser.countryCode || "+34",
        };
        await saveUserData(userDataToSave);
        localStorage.setItem("isLogged", "true");
        navigate("/main");
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Credenciales erróneas",
          confirmButtonColor: "#D9B26A",
        });
      }
    } else {
      if (formData.password !== formData.confirmPassword) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Las contraseñas no coinciden",
          confirmButtonColor: "#D9B26A",
        });
        return;
      }

      const response = await fetch("http://localhost:5000/users");
      const registeredUsers = await response.json();
      const emailExistsInRegistered = registeredUsers.some(
        (user) => user.email === formData.email
      );

      if (emailExistsInRegistered) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Este email ya está registrado",
          confirmButtonColor: "#D9B26A",
        });
        return;
      }

      const userDataToSave = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        countryCode: formData.countryCode,
        id: String(registeredUsers.length + 1),
      };
      await saveUserData(userDataToSave);
      localStorage.setItem("isLogged", "true");
      navigate("/main");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-200 to-gray-100 relative">
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-[#0C1440] to-transparent"></div>
      <div className="bg-white rounded-2xl shadow-xl p-8 w-96 relative z-10">
        <div className="flex justify-between border-b-2 pb-3 mb-6">
          <button
            onClick={() => setIsLogin(true)}
            className={`text-lg font-semibold px-4 py-1 ${isLogin ? "border-b-4 border-yellow-500 text-gray-900" : "text-gray-500 hover:text-gray-900"}`}
          >
            Inicia Sesión
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`text-lg font-semibold px-4 py-1 ${!isLogin ? "border-b-4 border-yellow-500 text-gray-900" : "text-gray-500 hover:text-gray-900"}`}
          >
            Regístrate
          </button>
        </div>
        <form onSubmit={handleFormSubmit}>
          {!isLogin && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Nombre y apellidos:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                required
              />
            </div>
          )}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Contraseña:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className={`w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-yellow-500 focus:outline-none ${passwordError ? "border-red-500" : ""}`}
              required
            />
            {passwordError && (
              <p className="text-red-500 text-xs mt-1">{passwordError}</p>
            )}
          </div>
          {!isLogin && (
            <>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Repite Contraseña:</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Número de teléfono:</label>
                <div className="flex">
                  <div className="w-1/3 border border-gray-300 rounded-l-lg p-3 focus:ring-2 focus:ring-yellow-500 focus:outline-none">
                    <Select
                      options={countryOptions}
                      value={countryOptions.find(option => option.value === formData.countryCode)}
                      onChange={handleCountryCodeChange}
                      className="basic-single w-full"
                      classNamePrefix="select"
                    />
                  </div>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-2/3 border border-gray-300 rounded-r-lg p-3 focus:ring-2 focus:ring-yellow-500 focus:outline-none ${phoneError ? "border-red-500" : ""}`}
                    required
                  />
                </div>
                {phoneError && (
                  <p className="text-red-500 text-xs mt-1">{phoneError}</p>
                )}
              </div>
              <div className="mb-4 flex items-center">
                <input
                  type="checkbox"
                  id="terms"
                  checked={acceptedTerms}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                <label htmlFor="terms" className="text-sm text-gray-700">
                  Acepto los <span className="text-yellow-500">términos y condiciones</span> para recibir correos electrónicos.
                </label>
              </div>
            </>
          )}
          <button
            type="submit"
            className="w-full bg-[#D9B26A] text-white font-semibold rounded-lg p-3 mt-4 hover:bg-yellow-600 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
          >
            {isLogin ? "Entrar" : "Registrar"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginRegister;