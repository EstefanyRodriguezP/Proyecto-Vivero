import "./NoticiasStyle.css";
import Banner from "../Components/Banner/Banner";
import fotobanner from "/src/assets/fotobanner.jpg";

function Noticias() {
  return (
    <>
      <div>
        <Banner
          backgroundImage={fotobanner}
          title="NUESTRAS NOTICIAS"
          subtitle="Detrás de cada planta, hay una historia de pasión y crecimiento.
                Descubre cómo nuestro vivero nació del amor por la naturaleza y el compromiso con un futuro más verde."
          buttonText="Ver catálogo"
          onButtonClick={() => console.log("Botón clickeado")}
        />
      </div>
      <div className="container_noticia">
        <h3>Noticia más reciente</h3>
        <section className="container_noticia_nosotros">
          <div className="container_noticia_nosotros_imagen">
            <img src="src/assets/sobre-nosotros.jpeg" alt="" />
          </div>
          <div className="container_noticia_texto">
            <h4>Título noticia</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus,
              fuga enim pariatur corrupti sit quae eveniet non. Fugit porro
              vitae dolore dolorem autem debitis esse voluptate. Nostrum omnis
              recusandae ullam. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Minus, fuga enim pariatur corrupti sit quae
              eveniet non. Fugit porro vitae dolore dolorem autem debitis esse
              voluptate. Nostrum omnis recusandae ullam. Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Minus, fuga enim pariatur
              corrupti sit quae eveniet non. Fugit porro vitae dolore dolorem
              autem debitis esse voluptate. Nostrum omnis recusandae ullam.
            </p>
          </div>
        </section>
        <h3>Más noticias que te pueden interesar </h3>
      </div>
    </>
  );
}

export default Noticias;
