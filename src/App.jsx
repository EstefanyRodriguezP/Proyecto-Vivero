import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Pagination from "./Components/Pagination";
import ProductList from "./Components/ProductList";
import Categoria from "./Components/Categoria";
import Popup from "./Components/Popup";
import Formulario from "./Components/Formulario"; // Importa el componente de formulario
import MapContainer from "./Components/MapContainer"; // Importa el componente de mapa
import ContactInfo from "./Components/ContactInfo"; // Importa el componente de información de contacto
import PlantDescription from "./Components/PlantDescription"; // Importa el componente de descripción de la planta

function App() {
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10; // Cantidad de páginas que necesitas

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const products = [
    { name: "Euphorbia Ingens" },
    { name: "Calathea Beauty Star" },
    { name: "ZZ Plants" },
    { name: "Bird of Paradise" },
    { name: "Calathea Rufibarba" },
    { name: "Dracaena Lisa" },
    // Agrega más productos según necesites
  ];

  return (
    <div className="container">
      <div className="logos">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <Popup />
      <div className="content">
        <Categoria />
        <div className="products-section">
          <ProductList products={products} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
      <Formulario /> {/* Añade el formulario aquí */}
      <MapContainer /> {/* Añade el mapa aquí */}
      <ContactInfo /> {/* Añade la información de contacto aquí */}
      <PlantDescription /> {/* Añade la descripción de la planta aquí */}
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
