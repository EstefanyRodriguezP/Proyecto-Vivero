import "./App.css";
import Footer from "./Components/Footer/Footer.jsx";
import Navbar from "./Components/NavBar/NavBar.jsx";
import Banner from "./Components/Banner/Banner.jsx";
import fotobanner from "/src/assets/fotobanner.jpg";
import Home from "./Pages/Home.jsx";
import Noticias from "./Pages/Noticias.jsx";

function App() {
  return (
    <>
      <div className="container">
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
        {/* <Home /> */}
        <Noticias />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
