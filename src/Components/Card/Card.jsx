import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom"; // Para hacer el enlace de navegación
import "./CardStyle.css";

const Card = ({ imageUrl, categoryName, categoryId }) => {
  return (
    <Link to={`/categoria/${categoryId}`} className="card">
      {/* Redirige a la página de categoría */}
      <img src={imageUrl} alt={categoryName} className="card-image" />
      <h4 className="card-name">{categoryName}</h4>
      {/* Nombre de la categoría */}
    </Link>
  );
};

Card.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  categoryName: PropTypes.string.isRequired, // Nombre de la categoría
  categoryId: PropTypes.string.isRequired, // ID de la categoría
};

export default Card;
