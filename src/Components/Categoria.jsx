import React from "react";

const Categorias = () => {
  const categorias = [
    { nombre: "Flores de bulbo y Rizoma", cantidad: 7 },
    { nombre: "Herbáceas mediterráneas", cantidad: 6 },
    { nombre: "Herbáceas anuales", cantidad: 2 },
    { nombre: "Otras Herbáceas", cantidad: 4 },
  ];

  return (
    <div>
      <h2>Categorías</h2>
      <ul>
        {categorias.map((categoria, index) => (
          <li key={index}>
            {categoria.nombre} ({categoria.cantidad})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categorias;
