import React from "react";
import "./BannerStyle.css";

const Banner = ({
  backgroundImage,
  title,
  subtitle,
  buttonText,
  onButtonClick,
}) => {
  console.log("Imagen recibida:", backgroundImage); // Depuración

  return (
    <div
      className="banner"
      style={{ backgroundImage: `url(${backgroundImage})` }} // Verifica que el valor sea una URL válida
    >
      <div className="banner-overlay">
        <div className="banner-content">
          <h1>{title}</h1>
          <p>{subtitle}</p>
          {buttonText && (
            <button className="banner-button" onClick={onButtonClick}>
              {buttonText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;
