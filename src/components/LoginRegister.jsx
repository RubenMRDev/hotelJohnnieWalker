import React, { useState } from 'react';
import "./LoginRegister.css";

const LoginRegister = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        password: '',
        repeatPassword: '',
        telefono: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (isLogin) {
            console.log('Logging in with', formData);
        } else {
            console.log('Registering with', formData);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-200 to-gray-100">
            <div className="bg-white rounded-2xl shadow-xl p-8 w-96">
                <div className="flex justify-between border-b-2 pb-3 mb-6">
                    <button
                        onClick={() => setIsLogin(true)}
                        className={`text-lg font-semibold px-4 py-1 ${isLogin ? 'border-b-4 border-yellow-500 text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}
                    >
                        Inicia Sesión
                    </button>
                    <button
                        onClick={() => setIsLogin(false)}
                        className={`text-lg font-semibold px-4 py-1 ${!isLogin ? 'border-b-4 border-yellow-500 text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}
                    >
                        Regístrarte
                    </button>
                </div>
                <form onSubmit={handleFormSubmit}>
                    {!isLogin && (
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Nombre y apellidos:</label>
                            <input
                                type="text"
                                name="nombre"
                                value={formData.nombre}
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
                            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                            required
                        />
                    </div>
                    {!isLogin && (
                        <>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Repite Contraseña:</label>
                                <input
                                    type="password"
                                    name="repeatPassword"
                                    value={formData.repeatPassword}
                                    onChange={handleInputChange}
                                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Número de teléfono:</label>
                                <input
                                    type="text"
                                    name="telefono"
                                    value={formData.telefono}
                                    onChange={handleInputChange}
                                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                                    required
                                />
                            </div>
                        </>
                    )}
                    <button
                        type="submit"
                        className="w-full bg-[#D9B26A] text-white font-semibold rounded-lg p-3 mt-4 hover:bg-yellow-600 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                    >
                        {isLogin ? 'Entrar' : 'Registrar'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginRegister;
