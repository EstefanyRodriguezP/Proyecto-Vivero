import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Footer from "./Components/Footer/Footer.jsx";
import Navbar from "./Components/NavBar/NavBar.jsx";
import Banner from "./Components/Banner/Banner.jsx";
import fotobanner from "/src/assets/fotobanner.jpg";

function App() {
  const [count, setCount] = useState(0);
  console.log("Ruta de la imagen de fondo:", fotobanner);

  return (
    <>
      <div className="container">
        <Navbar />
        <Banner
          backgroundImage={fotobanner}
          title="BIENVENIDO A VIVEROS CHIÑIGÜE"
          subtitle="Detrás de cada planta, hay una historia de pasión y crecimiento.
          Descubre cómo nuestro vivero nació del amor por la naturaleza y el compromiso con un futuro más verde."
          buttonText="Ver catálogo"
          onButtonClick={() => console.log("Botón clickeado")}
        />
      </div>
      <div>
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
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
