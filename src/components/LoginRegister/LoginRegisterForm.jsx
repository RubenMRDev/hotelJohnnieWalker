import React, { useState } from 'react';
import Select from 'react-select';
import "./LoginRegister.css";

const LoginRegister = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        password: '',
        repeatPassword: '',
        telefono: '',
        countryCode: '+34', 
    });

    const countryOptions = [
        { value: '+93', label: '🇦🇫 +93 (Afganistán)' },
        { value: '+1', label: '🇦🇸 +1 (Antillas Neerlandesas)' },
        { value: '+355', label: '🇦🇱 +355 (Albania)' },
        { value: '+213', label: '🇩🇿 +213 (Argelia)' },
        { value: '+1', label: '🇦🇸 +1 (American Samoa)' },
        { value: '+376', label: '🇦🇩 +376 (Andorra)' },
        { value: '+244', label: '🇦🇴 +244 (Angola)' },
        { value: '+1', label: '🇧🇸 +1 (Bahamas)' },
        { value: '+973', label: '🇧🇭 +973 (Baréin)' },
        { value: '+880', label: '🇧🇩 +880 (Bangladesh)' },
        { value: '+1', label: '🇧🇧 +1 (Barbados)' },
        { value: '+375', label: '🇧🇾 +375 (Bielorrusia)' },
        { value: '+32', label: '🇧🇪 +32 (Bélgica)' },
        { value: '+501', label: '🇧🇿 +501 (Belice)' },
        { value: '+229', label: '🇧🇯 +229 (Benín)' },
        { value: '+1', label: '🇧🇲 +1 (Bermudas)' },
        { value: '+975', label: '🇧🇹 +975 (Bután)' },
        { value: '+591', label: '🇧🇴 +591 (Bolivia)' },
        { value: '+387', label: '🇧🇦 +387 (Bosnia y Herzegovina)' },
        { value: '+267', label: '🇧🇼 +267 (Botsuana)' },
        { value: '+55', label: '🇧🇷 +55 (Brasil)' },
        { value: '+1', label: '🇧🇧 +1 (Barbados)' },
        { value: '+226', label: '🇧🇫 +226 (Burkina Faso)' },
        { value: '+257', label: '🇧🇮 +257 (Burundi)' },
        { value: '+855', label: '🇰🇭 +855 (Camboya)' },
        { value: '+237', label: '🇨🇲 +237 (Camerún)' },
        { value: '+1', label: '🇨🇦 +1 (Canadá)' },
        { value: '+238', label: '🇨🇻 +238 (Cabo Verde)' },
        { value: '+345', label: '🇰🇾 +345 (Islas Caimán)' },
        { value: '+236', label: '🇨🇫 +236 (República Centroafricana)' },
        { value: '+56', label: '🇨🇱 +56 (Chile)' },
        { value: '+86', label: '🇨🇳 +86 (China)' },
        { value: '+61', label: '🇨🇱 +61 (Australia)' },
        { value: '+57', label: '🇨🇴 +57 (Colombia)' },
        { value: '+269', label: '🇰🇲 +269 (Comoras)' },
        { value: '+242', label: '🇨🇬 +242 (Congo)' },
        { value: '+243', label: '🇨🇩 +243 (República Democrática del Congo)' },
        { value: '+506', label: '🇨🇷 +506 (Costa Rica)' },
        { value: '+225', label: '🇨🇮 +225 (Costa de Marfil)' },
        { value: '+385', label: '🇭🇷 +385 (Croacia)' },
        { value: '+53', label: '🇨🇺 +53 (Cuba)' },
        { value: '+599', label: '🇧🇶 +599 (Curazao)' },
        { value: '+357', label: '🇨🇾 +357 (Chipre)' },
        { value: '+420', label: '🇨🇿 +420 (República Checa)' },
        { value: '+45', label: '🇩🇰 +45 (Dinamarca)' },
        { value: '+253', label: '🇩🇯 +253 (Yibuti)' },
        { value: '+1', label: '🇩🇲 +1 (Dominica)' },
        { value: '+593', label: '🇪🇨 +593 (Ecuador)' },
        { value: '+20', label: '🇪🇬 +20 (Egipto)' },
        { value: '+503', label: '🇸🇻 +503 (El Salvador)' },
        { value: '+240', label: '🇬🇶 +240 (Guinea Ecuatorial)' },
        { value: '+291', label: '🇪🇷 +291 (Eritrea)' },
        { value: '+372', label: '🇪🇪 +372 (Estonia)' },
        { value: '+251', label: '🇪🇹 +251 (Etiopía)' },
        { value: '+500', label: '🇬🇸 +500 (Islas Georgias del Sur)' },
        { value: '+298', label: '🇩🇴 +298 (Islas Feroe)' },
        { value: '+679', label: '🇫🇯 +679 (Fiyi)' },
        { value: '+358', label: '🇫🇮 +358 (Finlandia)' },
        { value: '+33', label: '🇫🇷 +33 (Francia)' },
        { value: '+594', label: '🇬🇫 +594 (Guayana Francesa)' },
        { value: '+241', label: '🇬🇦 +241 (Gabón)' },
        { value: '+220', label: '🇬🇳 +220 (Gambia)' },
        { value: '+995', label: '🇬🇪 +995 (Georgia)' },
        { value: '+233', label: '🇬🇭 +233 (Ghana)' },
        { value: '+350', label: '🇬🇮 +350 (Gibraltar)' },
        { value: '+30', label: '🇬🇷 +30 (Grecia)' },
        { value: '+299', label: '🇬🇱 +299 (Groenlandia)' },
        { value: '+1', label: '🇬🇩 +1 (Granada)' },
        { value: '+502', label: '🇬🇹 +502 (Guatemala)' },
        { value: '+44', label: '🇬🇧 +44 (Reino Unido)' },
        { value: '+224', label: '🇬🇳 +224 (Guinea)' },
        { value: '+245', label: '🇬🇼 +245 (Guinea-Bisáu)' },
        { value: '+509', label: '🇭🇹 +509 (Haití)' },
        { value: '+504', label: '🇭🇳 +504 (Honduras)' },
        { value: '+852', label: '🇭🇰 +852 (Hong Kong)' },
        { value: '+36', label: '🇭🇺 +36 (Hungría)' },
        { value: '+354', label: '🇮🇸 +354 (Islandia)' },
        { value: '+91', label: '🇮🇳 +91 (India)' },
        { value: '+62', label: '🇮🇩 +62 (Indonesia)' },
        { value: '+98', label: '🇮🇷 +98 (Irán)' },
        { value: '+964', label: '🇮🇶 +964 (Irak)' },
        { value: '+353', label: '🇮🇪 +353 (Irlanda)' },
        { value: '+972', label: '🇮🇱 +972 (Israel)' },
        { value: '+39', label: '🇮🇹 +39 (Italia)' },
        { value: '+1', label: '🇯🇲 +1 (Jamaica)' },
        { value: '+81', label: '🇯🇵 +81 (Japón)' },
        { value: '+962', label: '🇯🇴 +962 (Jordania)' },
        { value: '+254', label: '🇰🇪 +254 (Kenia)' },
        { value: '+686', label: '🇰🇮 +686 (Kiribati)' },
        { value: '+965', label: '🇰🇼 +965 (Kuwait)' },
        { value: '+996', label: '🇰🇬 +996 (Kirguistán)' },
        { value: '+856', label: '🇱🇸 +856 (Laos)' },
        { value: '+371', label: '🇱🇻 +371 (Letonia)' },
        { value: '+961', label: '🇱🇧 +961 (Líbano)' },
        { value: '+266', label: '🇱🇸 +266 (Lesoto)' },
        { value: '+231', label: '🇱🇷 +231 (Liberia)' },
        { value: '+218', label: '🇱🇾 +218 (Libia)' },
        { value: '+417', label: '🇱🇺 +417 (Liechtenstein)' },
        { value: '+370', label: '🇱🇹 +370 (Lituania)' },
        { value: '+352', label: '🇱🇺 +352 (Luxemburgo)' },
        { value: '+853', label: '🇲🇴 +853 (Macao)' },
        { value: '+389', label: '🇲🇰 +389 (Macedonia del Norte)' },
        { value: '+261', label: '🇲🇬 +261 (Madagascar)' },
        { value: '+265', label: '🇲🇼 +265 (Malawi)' },
        { value: '+60', label: '🇲🇾 +60 (Malasia)' },
        { value: '+960', label: '🇲🇻 +960 (Maldivas)' },
        { value: '+223', label: '🇲🇱 +223 (Malí)' },
        { value: '+356', label: '🇲🇹 +356 (Malta)' },
        { value: '+692', label: '🇲🇭 +692 (Islas Marshall)' },
        { value: '+1', label: '🇲🇽 +1 (México)' },
        { value: '+373', label: '🇲🇩 +373 (Moldavia)' },
        { value: '+976', label: '🇲🇳 +976 (Mongolia)' },
        { value: '+382', label: '🇲🇪 +382 (Montenegro)' },
        { value: '+1', label: '🇲🇹 +1 (Montserrat)' },
        { value: '+212', label: '🇲🇦 +212 (Marruecos)' },
        { value: '+258', label: '🇲🇿 +258 (Mozambique)' },
        { value: '+264', label: '🇳🇦 +264 (Namibia)' },
        { value: '+674', label: '🇳🇷 +674 (Nauru)' },
        { value: '+977', label: '🇳🇵 +977 (Nepal)' },
        { value: '+31', label: '🇳🇱 +31 (Países Bajos)' },
        { value: '+64', label: '🇳🇿 +64 (Nueva Zelanda)' },
        { value: '+505', label: '🇳🇮 +505 (Nicaragua)' },
        { value: '+227', label: '🇳🇪 +227 (Níger)' },
        { value: '+234', label: '🇳🇬 +234 (Nigeria)' },
        { value: '+683', label: '🇳🇺 +683 (Niue)' },
        { value: '+1', label: '🇲🇲 +1 (Islas Malvinas)' },
        { value: '+672', label: '🇳🇫 +672 (Norfolk)' },
        { value: '+47', label: '🇳🇴 +47 (Noruega)' },
        { value: '+968', label: '🇴🇲 +968 (Omán)' },
        { value: '+92', label: '🇵🇰 +92 (Pakistán)' },
        { value: '+680', label: '🇵🇼 +680 (Palaos)' },
        { value: '+970', label: '🇵🇸 +970 (Palestina)' },
        { value: '+507', label: '🇵🇦 +507 (Panamá)' },
        { value: '+675', label: '🇵🇬 +675 (Papúa Nueva Guinea)' },
        { value: '+595', label: '🇵🇾 +595 (Paraguay)' },
        { value: '+51', label: '🇵🇪 +51 (Perú)' },
        { value: '+63', label: '🇵🇭 +63 (Filipinas)' },
        { value: '+48', label: '🇵🇱 +48 (Polonia)' },
        { value: '+351', label: '🇵🇹 +351 (Portugal)' },
        { value: '+1', label: '🇵🇷 +1 (Puerto Rico)' },
        { value: '+974', label: '🇶🇦 +974 (Catar)' },
        { value: '+262', label: '🇷🇪 +262 (Reunión)' },
        { value: '+40', label: '🇷🇴 +40 (Rumania)' },
        { value: '+7', label: '🇷🇺 +7 (Rusia)' },
        { value: '+250', label: '🇷🇼 +250 (Ruanda)' },
        { value: '+290', label: '🇸🇭 +290 (Santa Elena)' },
        { value: '+1', label: '🇧🇱 +1 (Saint Kitts y Nevis)' },
        { value: '+508', label: '🇵🇲 +508 (San Pedro y Miquelón)' },
        { value: '+685', label: '🇼🇸 +685 (Samoa)' },
        { value: '+378', label: '🇸🇲 +378 (San Marino)' },
        { value: '+239', label: '🇸🇹 +239 (Santo Tomé y Príncipe)' },
        { value: '+966', label: '🇸🇦 +966 (Arabia Saudita)' },
        { value: '+221', label: '🇸🇳 +221 (Senegal)' },
        { value: '+381', label: '🇷🇸 +381 (Serbia)' },
        { value: '+248', label: '🇸🇨 +248 (Seychelles)' },
        { value: '+232', label: '🇸🇱 +232 (Sierra Leona)' },
        { value: '+65', label: '🇸🇬 +65 (Singapur)' },
        { value: '+421', label: '🇸🇰 +421 (Eslovaquia)' },
        { value: '+386', label: '🇸🇮 +386 (Eslovenia)' },
        { value: '+677', label: '🇸🇧 +677 (Islas Salomón)' },
        { value: '+252', label: '🇸🇴 +252 (Somalia)' },
        { value: '+27', label: '🇿🇦 +27 (Sudáfrica)' },
        { value: '+82', label: '🇰🇷 +82 (Corea del Sur)' },
        { value: '+211', label: '🇸🇸 +211 (Sudán del Sur)' },
        { value: '+34', label: '🇪🇸 +34 (España)' },
        { value: '+94', label: '🇱🇰 +94 (Sri Lanka)' },
        { value: '+249', label: '🇸🇩 +249 (Sudán)' },
        { value: '+597', label: '🇸🇷 +597 (Surinam)' },
        { value: '+47', label: '🇸🇯 +47 (Svalbard y Jan Mayen)' },
        { value: '+268', label: '🇸🇿 +268 (Esuatini)' },
        { value: '+46', label: '🇸🇪 +46 (Suecia)' },
        { value: '+41', label: '🇨🇭 +41 (Suiza)' },
        { value: '+963', label: '🇸🇾 +963 (Siria)' },
        { value: '+886', label: '🇹🇼 +886 (Taiwán)' },
        { value: '+992', label: '🇹🇯 +992 (Tayikistán)' },
        { value: '+255', label: '🇹🇿 +255 (Tanzania)' },
        { value: '+66', label: '🇹🇭 +66 (Tailandia)' },
        { value: '+670', label: '🇹🇱 +670 (Timor Oriental)' },
        { value: '+228', label: '🇹🇬 +228 (Togo)' },
        { value: '+690', label: '🇹🇰 +690 (Tokelau)' },
        { value: '+676', label: '🇹🇴 +676 (Tonga)' },
        { value: '+1', label: '🇹🇹 +1 (Trinidad y Tobago)' },
        { value: '+216', label: '🇹🇳 +216 (Túnez)' },
        { value: '+90', label: '🇹🇷 +90 (Turquía)' },
        { value: '+993', label: '🇹🇲 +993 (Turkmenistán)' },
        { value: '+688', label: '🇹🇻 +688 (Tuvalu)' },
        { value: '+256', label: '🇺🇬 +256 (Uganda)' },
        { value: '+380', label: '🇺🇦 +380 (Ucrania)' },
        { value: '+971', label: '🇦🇪 +971 (Emiratos Árabes Unidos)' },
        { value: '+598', label: '🇺🇾 +598 (Uruguay)' },
        { value: '+998', label: '🇺🇿 +998 (Uzbekistán)' },
        { value: '+678', label: '🇻🇺 +678 (Vanuatu)' },
        { value: '+58', label: '🇻🇪 +58 (Venezuela)' },
        { value: '+84', label: '🇻🇳 +84 (Vietnam)' },
        { value: '+1', label: '🇻🇮 +1 (Islas Vírgenes de EE.UU.)' },
        { value: '+681', label: '🇼🇫 +681 (Wallis y Futuna)' },
        { value: '+967', label: '🇾🇪 +967 (Yemen)' },
        { value: '+260', label: '🇿🇲 +260 (Zambia)' },
        { value: '+263', label: '🇿🇼 +263 (Zimbabue)' }
    ]
    

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleCountryCodeChange = (selectedOption) => {
        setFormData({
            ...formData,
            countryCode: selectedOption.value,
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
                        Regístrate
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
                                <div className="flex">
                                    <div className="w-1/3 border border-gray-300 rounded-l-lg p-3 focus:ring-2 focus:ring-yellow-500 focus:outline-none">
                                        <Select
                                            options={countryOptions}
                                            value={countryOptions.find(option => option.value === formData.countryCode)}
                                            onChange={handleCountryCodeChange}
                                            className="basic-single w-full"
                                            classNamePrefix="select"
                                            styles={{
                                                menu: (base) => ({
                                                    ...base,
                                                    zIndex: 9999, 
                                                    width: 'auto',
                                                    maxWidth: 'none', 
                                                }),
                                                menuList: (base) => ({ 
                                                    ...base,
                                                    width: '300px',
                                                    overflowY: 'auto',
                                                })
                                            }}
                                        />
                                    </div>
                                    <input
                                        type="text"
                                        name="telefono"
                                        value={formData.telefono}
                                        onChange={handleInputChange}
                                        className="w-2/3 border border-gray-300 rounded-r-lg p-3 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                                        required
                                    />
                                </div>
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
