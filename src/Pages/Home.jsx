import "./HomeStyle.css";
import Banner from "../Components/Banner/Banner";
import fotobanner from "/src/assets/fotobanner.jpg";

function Home() {
  return (
    <>
      <div className="banner">
        <Banner
          backgroundImage={fotobanner}
          title="BIENVENIDO A VIVEROS CHIÑIGÜE"
          subtitle="Detrás de cada planta, hay una historia de pasión y crecimiento.
                Descubre cómo nuestro vivero nació del amor por la naturaleza y el compromiso con un futuro más verde."
          buttonText="Ver catálogo"
          onButtonClick={() => console.log("Botón clickeado")}
        />
      </div>
      <div className="container_home">
        <h3>Nuestras Plantas</h3>
        <h3>Sobre Nosotros</h3>
        <section className="container_home_nosotros">
          <div className="container_home_nosotros_imagen">
            <img src="src/assets/sobre-nosotros.jpeg" alt="" />
          </div>
          <div className="container_home_texto">
            <h4>Creciendo junto a la naturaleza</h4>
            <p>
              En nuestro vivero, cada planta representa el fruto de años de
              dedicación y amor por la tierra. Fundado con el propósito de
              brindar belleza y sostenibilidad a cada hogar, comenzamos este
              viaje con la visión de conectar a las personas con el poder
              transformador de la naturaleza. A lo largo de los años, hemos
              cultivado no solo plantas, sino relaciones basadas en el respeto
              por el medio ambiente y la pasión por la jardinería. Te invitamos
              a ser parte de nuestra historia y a cultivar, junto a nosotros, un
              futuro más verde y lleno de vida.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
