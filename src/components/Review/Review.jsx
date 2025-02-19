import React from "react";
import estrella from "../../assets/images/estrella-resenyas.png";

const Resenyas = ({ nombre, fecha, calificacion, texto }) => {
	return (
		<div className="w-11/12 max-w-sm mx-auto font-sans text-black text-center">
			<div className="flex items-center justify-center my-5">
				<span className="flex-1 h-[2px] bg-black mx-2"></span>
				<div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
					<img src={estrella} alt="Estrella" className="w-6 h-6" />
				</div>
				<span className="flex-1 h-[2px] bg-black mx-2"></span>
			</div>

			<div className="flex flex-col items-center mb-5 gap-2">
				<div className="text-center">
					<h3 className="m-0 font-bold text-lg">{nombre}</h3>
					<p className="my-1 text-sm">{fecha}</p>
					<p className="font-bold text-sm">
						{calificacion} <span className="text-black">{generarEstrellas(calificacion)}</span>
					</p>
				</div>

				<p className="text-center leading-relaxed text-base max-w-[90%]">{texto}</p>
			</div>

			<div className="flex justify-center mb-5">
				<span className="w-3 h-3 rounded-full border-2 border-yellow-400 bg-yellow-400 mx-1 cursor-pointer"></span>
				<span className="w-3 h-3 rounded-full border-2 border-yellow-400 mx-1 cursor-pointer"></span>
				<span className="w-3 h-3 rounded-full border-2 border-yellow-400 mx-1 cursor-pointer"></span>
				<span className="w-3 h-3 rounded-full border-2 border-yellow-400 mx-1 cursor-pointer"></span>
				<span className="w-3 h-3 rounded-full border-2 border-yellow-400 mx-1 cursor-pointer"></span>
			</div>
		</div>
	);
};

const generarEstrellas = (calificacion) => {
	const estrellasLlenas = Math.floor(calificacion);
	const mediaEstrella = calificacion % 1 !== 0 ? "☆" : "";
	return (
		"★".repeat(estrellasLlenas) +
		mediaEstrella +
		"☆".repeat(5 - estrellasLlenas - (mediaEstrella ? 1 : 0))
	);
};

export default Resenyas;
