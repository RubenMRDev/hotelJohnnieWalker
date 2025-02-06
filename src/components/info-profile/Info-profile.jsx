import React from "react";
import "./Info-profile.css";
import lapiz from "../../assets/images/lapiz-edit-perfil.png";

const InfoProfile = () => {
    return (
        <div className="info-profile-container">
            <div className="info-header">
                <img src={lapiz} alt="Editar" className="edit-icon" />
            </div>
            <div className="info-field">
                <p className="label">Nombre y apellidos</p>
                <p className="value">Paco Flores</p>
            </div>
            <div className="info-field">
                <p className="label">Email</p>
                <p className="value email">pacoflores@gmail.com</p>
            </div>
            <div className="info-field">
                <p className="label">Número de teléfono</p>
                <p className="value">+642 475 432</p>
            </div>
            <div className="info-field">
                <p className="label">Tarjeta de crédito</p>
                <p className="value">Mastercard: **** **** **** *456</p>
            </div>
        </div>
    );
};

export default InfoProfile;
