import React from "react";
import "./Resenyas.css";
import estrella from "../../assets/images/estrella-resenyas.png";

const Resenyas = () => {
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
                    <h3 className="nombre">JONATHAN VARGAS</h3>
                    <p className="fecha">Julio 2024</p>
                    <p className="rating">
                        4,5/5 <span className="estrellas">★★★★☆</span>
                    </p>
                </div>

                <p className="resena-texto">
                    El hotel de die hermano, la limpiadora venia to los dia a
                    limpia. La comia un poco corta pero era grati.
                </p>
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

export default Resenyas;