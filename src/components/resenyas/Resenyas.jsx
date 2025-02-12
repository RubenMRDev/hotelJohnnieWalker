import React from "react";
import "./Resenyas.css";
import estrella from "../../assets/images/estrella-resenyas.png";

const Resenyas = ({ nombre, fecha, rating, texto }) => {
	return (
		<div className="resena-container">
			{/* Cabecera con línea - estrella - línea */}
			<div className="resena-header">
				<span className="line"></span>
				<div className="estrella-wrapper">
					<img
						src={estrella}
						alt="Estrella"
						className="estrella-img"
					/>
				</div>
				<span className="line"></span>
			</div>

			{/* Contenido en columna para móviles */}
			<div className="resena-content">
				<div className="resena-info">
					<h3 className="nombre">{nombre}</h3>
					<p className="fecha">{fecha}</p>
					<p className="rating">
						{rating}{" "}
						<span className="estrellas">
							{generateStars(rating)}
						</span>
					</p>
				</div>

				<p className="resena-texto">{texto}</p>
			</div>

			{/* Paginación */}
			<div className="resena-paginacion">
				<span className="punto activo"></span>
				<span className="punto"></span>
				<span className="punto"></span>
				<span className="punto"></span>
				<span className="punto"></span>
			</div>
		</div>
	);
};

const generateStars = (rating) => {
	const fullStars = Math.floor(rating);
	const halfStar = rating % 1 !== 0 ? "☆" : "";
	return (
		"★".repeat(fullStars) +
		halfStar +
		"☆".repeat(5 - fullStars - (halfStar ? 1 : 0))
	);
};

export default Resenyas;
