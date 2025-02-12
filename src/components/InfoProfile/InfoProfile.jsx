import React from "react";
import "./Info-profile.css";
import lapiz from "../../assets/images/lapiz-edit-perfil.png";

const InfoProfile = ({ name, email, phone, creditCard }) => {
	return (
		<div className="info-profile-container">
			<div className="info-header">
				<img src={lapiz} alt="Editar" className="edit-icon" />
			</div>
			<div className="info-field">
				<p className="label">Nombre y apellidos</p>
				<p className="value">{name}</p>
			</div>
			<div className="info-field">
				<p className="label">Email</p>
				<p className="value email">{email}</p>
			</div>
			<div className="info-field">
				<p className="label">Número de teléfono</p>
				<p className="value">{phone}</p>
			</div>
			<div className="info-field">
				<p className="label">Tarjeta de crédito</p>
				<p className="value">{creditCard}</p>
			</div>
		</div>
	);
};

export default InfoProfile;
