import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Pagination from "./Components/Pagination";
import ProductList from "./Components/ProductList";
import Categoria from "./Components/Categoria";
import Popup from "./Components/Popup";

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
      <Popup /> {/* Añadir el componente de pop-up */}
      <div className="content">
        <Categoria />{" "}
        {/* Asegúrate de que el componente Categoria esté correctamente importado y escrito */}
        <div>
          <ProductList products={products} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
