import "./App.css";
import Footer from "./Components/Footer/Footer.jsx";
import Navbar from "./Components/NavBar/NavBar.jsx";
import Home from "./Pages/Home.jsx";
import Noticias from "./Pages/Noticias.jsx";

function App() {
  return (
    <>
      <div className="container">
        <div className="components">
          <Navbar />
          {/* <Banner
          backgroundImage={fotobanner}
          title="BIENVENIDO A VIVEROS CHIÑIGÜE"
          subtitle="Detrás de cada planta, hay una historia de pasión y crecimiento.
          Descubre cómo nuestro vivero nació del amor por la naturaleza y el compromiso con un futuro más verde."
          buttonText="Ver catálogo"
          onButtonClick={() => console.log("Botón clickeado")}
        /> */}
        </div>
        <div>
          <Home />
          {/* <Noticias /> */}
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
