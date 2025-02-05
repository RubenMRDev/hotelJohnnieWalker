import React, { useState } from 'react';

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
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white rounded-2xl shadow-lg p-6 w-96">
                <div className="flex justify-around border-b mb-6">
                    <button
                        onClick={() => setIsLogin(true)}
                        className={`pb-2 text-lg font-semibold ${isLogin ? 'border-b-2 border-gray-800' : 'text-gray-500'}`}
                    >
                        Inicia Sesión
                    </button>
                    <button
                        onClick={() => setIsLogin(false)}
                        className={`pb-2 text-lg font-semibold ${!isLogin ? 'border-b-2 border-gray-800' : 'text-gray-500'}`}
                    >
                        Registrarte
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
                                className="w-full border border-gray-300 rounded-lg p-2 mt-1"
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
                            className="w-full border border-gray-300 rounded-lg p-2 mt-1"
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
                            className="w-full border border-gray-300 rounded-lg p-2 mt-1"
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
                                    className="w-full border border-gray-300 rounded-lg p-2 mt-1"
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
                                    className="w-full border border-gray-300 rounded-lg p-2 mt-1"
                                    required
                                />
                            </div>
                        </>
                    )}
                    <button
                        type="submit"
                        className="w-full bg-yellow-500 text-white font-semibold rounded-lg p-2 mt-4 hover:bg-yellow-600"
                    >
                        {isLogin ? 'Entrar' : 'Registrar'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginRegister;
