import React, { useState } from "react";
import "./Popup.css";
import flowerImage from "../assets/flor.webp"; // Asegúrate de que la ruta sea correcta

const Popup = () => {
  const [showPopup, setShowPopup] = useState(true);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    showPopup && (
      <div className="popup">
        <div className="popup-content">
          <button className="close-btn" onClick={closePopup}>
            X
          </button>
          <div className="popup-body">
            <div className="popup-text">
              <h2>Noticias</h2>
              <h3>Girasol</h3>
              <p>Llegaron girasoles</p>
              <a href="#">Más información</a>
            </div>
            <div className="popup-image">
              <img src={flowerImage} alt="Flor" />
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Popup;
