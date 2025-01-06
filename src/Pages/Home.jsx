import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./HomeStyle.css";
import Banner from "../Components/Banner/Banner";
import fotobanner from "/src/assets/fotobanner.jpg";
import Card from "../Components/Card/Card"; // Importar el componente Card
import { getPosts } from "../Services/api";

function Home() {
  const [data, setData] = useState();
  const fetchPost = async () => {
    try {
      const response = await getPosts();
      setData(response.data[0].content.rendered);
      console.log(response.data[0].content.rendered);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <>
      <div className="banner">
        <Banner
          backgroundImage={fotobanner}
          title="VIVEROS CHIÑIGÜE"
          subtitle={data}
          buttonText="Ver catálogo"
          // Enlazamos el botón al ID de la sección 'nuestras-plantas'
          onButtonClick={() =>
            document
              .getElementById("nuestras-plantas")
              .scrollIntoView({ behavior: "smooth" })
          }
        />
      </div>
      {data}
      <div className="container_home">
        <h3 id="nuestras-plantas">Nuestras Categorías</h3>{" "}
        {/* Aquí agregamos el ID */}
        {/* Aquí se añaden las tarjetas de categorías con productId */}
        <div className="card-container">
          <Link to="/categoria/1">
            <Card
              imageUrl="/src/assets/Herbaceas.jpg"
              categoryName="Herbáceas"
              categoryId="1"
            />
          </Link>
          <Link to="/categoria/2">
            <Card
              imageUrl="/src/assets/arbustos.jpg"
              categoryName="Arbustos"
              categoryId="2"
            />
          </Link>
          <Link to="/categoria/3">
            <Card
              imageUrl="/src/assets/arboles.jpg"
              categoryName="Árboles"
              categoryId="3"
            />
          </Link>
          <Link to="/categoria/4">
            <Card
              imageUrl="/src/assets/Gramineas.jpeg"
              categoryName="Gramíneas"
              categoryId="4"
            />
          </Link>
          <Link to="/categoria/5">
            <Card
              imageUrl="/src/assets/Geofitas.jpg"
              categoryName="Geófitas: Flores de bulbo y rizoma"
              productId="5"
            />
          </Link>
        </div>
        <h3>Sobre Nosotros</h3>
        <section className="container_home_nosotros">
          <div className="container_home_nosotros_imagen">
            <img src="/src/assets/sobre-nosotros.jpeg" alt="Sobre Nosotros" />
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
