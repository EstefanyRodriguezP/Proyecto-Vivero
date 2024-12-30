import React from "react";
import "./PlantDescription.css";

const PlantDescription = () => {
  return (
    <div className="plant-container">
      <h1>Flor del Gallo</h1>
      <p>
        La Flor del Gallo (Alstroemeria ligtu spp. simsii) es una planta
        herbácea perenne, apreciada por sus flores vibrantes y coloridas, que
        varían en tonos de amarillo, naranja, rosa y rojo. Ideal para jardines y
        macetas, se caracteriza por su resistencia y facilidad de cuidado. Sus
        pétalos delicados y su exuberante follaje la convierten en una opción
        perfecta para añadir un toque de color y elegancia a cualquier espacio.
      </p>
      <h3>Especificaciones:</h3>
      <p>
        <strong>Tipo de planta:</strong> Exterior / Interior
      </p>
      <p>
        <strong>Material de las macetas:</strong> Madera
      </p>
      <p>
        <strong>Color de las macetas:</strong> Beige
      </p>
      <p>
        <strong>País de origen:</strong> India
      </p>
      <div className="images-section">
        <div className="image-box large"></div>
        <div className="small-images">
          <div className="image-box small"></div>
          <div className="image-box small"></div>
          <div className="image-box small"></div>
          <div className="image-box small"></div>
        </div>
      </div>
    </div>
  );
};

export default PlantDescription;
