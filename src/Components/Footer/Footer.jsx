import React from "react";
import "./footerstyle.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>VIVEROS CHIÑIGÜE</h3>
          <p>¡Síguenos en redes sociales!</p>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/viveroschinigue"
              aria-label="Facebook"
              className="icon facebook"
            >
              F
              <img src="" alt="" />
            </a>
            <a
              href="https://www.instagram.com/viveros_chinigue/"
              aria-label="Instagram"
              className="icon instagram"
            >
              I
              <img src="" alt="" />
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h4>Páginas</h4>
          <ul>
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">Nuestras Plantas</a>
            </li>
            <li>
              <a href="#">Noticias</a>
            </li>
            <li>
              <a href="#">Contacto</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contáctanos</h4>
          <li>
            <a href="mailto:ventas@viveroschinigue.cl">
              ventas@viveroschinigue.cl
            </a>
          </li>
          <li>
            <a href="tel:+56945016639">+56 9 4501 6639</a>
          </li>
          <li>
            <a href="tel:+56956794019">+56 9 5679 4019</a>
          </li>
        </div>
        <div className="footer-section">
          <h4>Visítanos</h4>
          <p>
            Pleno corazón de Chiñigüe, sector El Cristo, antes del Club de
            Paracaidismo.
          </p>
          <p>Entrada por Ruta 78, antiguo camino Santiago-Melipilla.</p>
          <p>Encuéntranos en Waze y Google Maps como Viveros Chiñigüe</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Desarrollador por Estefany Rodríguez y Marcelo Gallardo</p>
      </div>
    </footer>
  );
};

export default Footer;
