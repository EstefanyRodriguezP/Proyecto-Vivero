import "./App.css";
import Footer from "./Components/Footer/Footer.jsx";
import Navbar from "./Components/NavBar/NavBar.jsx";
import Home from "./Pages/Home.jsx";
import Noticias from "./Pages/Noticias.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importamos react-router-dom

function App() {
  return (
    <Router>
      {/* Envolver toda la aplicación con Router */}
      <div className="container">
        <div className="components">
          <Navbar />
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Home />} /> {/* Página de inicio */}
            <Route path="/categoria/:categoryId" element={<Noticias />} />
            {/* Página de la categoría */}
            <Route path="/noticias" element={<Noticias />} />
            {/* Página de noticias */}
          </Routes>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;

{
  /* <Banner
          backgroundImage={fotobanner}
          title="BIENVENIDO A VIVEROS CHIÑIGÜE"
          subtitle="Detrás de cada planta, hay una historia de pasión y crecimiento.
          Descubre cómo nuestro vivero nació del amor por la naturaleza y el compromiso con un futuro más verde."
          buttonText="Ver catálogo"
          onButtonClick={() => console.log("Botón clickeado")}
        /> */
}
