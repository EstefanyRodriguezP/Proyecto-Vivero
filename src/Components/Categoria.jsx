import React, { useState } from "react";
import "./Categoria.css";

const Categorias = () => {
  const [selectedCategoria, setSelectedCategoria] = useState(null);

  const categorias = [
    { nombre: "Flores de bulbo y Rizoma", cantidad: 7 },
    { nombre: "Herbáceas mediterráneas", cantidad: 6 },
    { nombre: "Herbáceas anuales", cantidad: 2 },
    { nombre: "Otras Herbáceas", cantidad: 4 },
  ];

  const handleCategoriaClick = (categoria) => {
    setSelectedCategoria(categoria.nombre);
  };

  return (
    <div className="categorias-container">
      <div className="categorias">
        <h2>Categorías</h2>
        <ul>
          {categorias.map((categoria, index) => (
            <li
              key={index}
              onClick={() => handleCategoriaClick(categoria)}
              className={
                selectedCategoria === categoria.nombre ? "selected" : ""
              }
            >
              {categoria.nombre} ({categoria.cantidad})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Categorias;
