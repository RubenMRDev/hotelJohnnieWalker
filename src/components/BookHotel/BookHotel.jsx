import React from "react";

function BookHotel() {
	const handleSearchClick = () => {
		console.log("Buscando hotel...");
	};

	return (
		<div className="font-bold w-full m-0 p-0">
			<div className="relative w-full h-72 overflow-hidden">
				<img
					className="w-full h-full object-cover filter blur-[1px]"
					src="https://res.cloudinary.com/dd5hetwb8/image/upload/upscalemedia-transformed_fk6qbb.png"
					alt="Piscina de hotel"
				/>
				<div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center">
					<h1 className="relative text-2xl bg-white bg-opacity-5 p-3 rounded-lg max-w-4/5 w-full font-bold">
						Obtén un descuento de hasta un 40%. Ahorra con Johnnie
						Walker Hotel
					</h1>
				</div>
			</div>

			<div className="relative top-[-40px] mx-auto w-11/12 max-w-lg bg-white rounded-lg shadow-lg p-5">
				<div className="border-b-3 border-blue-600 inline-block pb-1 mb-4">
					<h2 className="m-0 text-lg text-gray-800">
						Obten tu reserva
					</h2>
				</div>
				<div className="flex flex-col gap-4">
					<div className="flex flex-col">
						<label
							className="text-blue-600 font-bold text-sm mb-1"
							htmlFor="entrada"
						>
							Entrada
						</label>
						<input
							type="date"
							id="entrada"
							aria-label="Fecha de entrada"
							className="p-2 border border-gray-300 rounded-md text-sm"
						/>
					</div>
					<div className="flex flex-col">
						<label
							className="text-blue-600 font-bold text-sm mb-1"
							htmlFor="salida"
						>
							Salida
						</label>
						<input
							type="date"
							id="salida"
							aria-label="Fecha de salida"
							className="p-2 border border-gray-300 rounded-md text-sm"
						/>
					</div>
					<div className="flex flex-col">
						<label
							className="text-blue-600 font-bold text-sm mb-1"
							htmlFor="personas"
						>
							Personas
						</label>
						<input
							type="number"
							id="personas"
							min="1"
							defaultValue="1"
							aria-label="Número de personas"
							className="p-2 border border-gray-300 rounded-md text-sm"
						/>
					</div>
					<button
						className="bg-[#d9b26a] font-bold rounded-lg py-3 px-6 text-lg cursor-pointer transition-all ease-in-out duration-300 shadow-lg mx-auto hover:bg-[#c99a57]"
						onClick={handleSearchClick}
					>
						Buscar
					</button>
				</div>
			</div>
		</div>
	);
}

export default BookHotel;
