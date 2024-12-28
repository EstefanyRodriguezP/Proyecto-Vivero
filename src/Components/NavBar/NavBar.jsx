import React, { useState, useEffect } from "react";
import "./navbarstyle.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);

  // Cerrar menús al cambiar de vista
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
        setIsDropdownOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (state) => {
    setIsDropdownOpen(state);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <img
            src="src/assets/vivero-logo.png" // Cambia esta ruta por la de tu logo
            alt="Logo"
            className="logo-image"
          />
        </div>

        {/* Links de Navegación */}
        <div className="nav-options">
          <ul className={`nav-links ${isSearchActive ? "search-active" : ""}`}>
            <li>
              <a href="#">Inicio</a>
            </li>
            <li
              className="dropdown"
              onMouseOver={() => toggleDropdown(true)}
              onMouseOut={() => toggleDropdown(false)}
              onClick={() => toggleDropdown(!isDropdownOpen)}
            >
              <a href="#">Nuestras Plantas</a>
              <div
                className={`dropdown-menu ${isDropdownOpen ? "visible" : ""}`}
              >
                <ul>
                  <li>Herbáceas</li>
                  <li>Arbustos</li>
                  <li>Árboles</li>
                  <li>Gramíneas</li>
                  <li>Geófitas: Flores de bulbo y rizoma</li>
                </ul>
              </div>
            </li>
            <li>
              <a href="#">Noticias</a>
            </li>
            <li>
              <a href="#">Contacto</a>
            </li>
          </ul>
        </div>

        {/* Barra de Búsqueda */}
        <div className={`search-container ${isSearchActive ? "active" : ""}`}>
          <input type="text" className="search-input" placeholder="Buscar..." />
          <div
            className="search-icon"
            onClick={() => setIsSearchActive(!isSearchActive)}
          >
            <img
              src="src/assets/search-icon.svg
            "
              alt=""
            />
          </div>
        </div>

        {/* Menú de Hamburguesa */}
        <div className="hamburger-menu" onClick={toggleMenu}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>

      {/* Menú Responsivo */}
      {isMenuOpen && (
        <>
          <ul className="nav-links-mobile">
            <li>
              <a href="#">Inicio</a>
            </li>
            <li className="dropdown">
              <a href="#" onClick={() => toggleDropdown(!isDropdownOpen)}>
                Nuestras Plantas
              </a>
              {isDropdownOpen && (
                <div className="dropdown-menu-mobile">
                  <ul>
                    <li>Geófitas: Flores de bulbo y rizoma</li>
                    <li>Herbáceas</li>
                    <li>Arbustos</li>
                    <li>Árboles</li>
                    <li>Gramíneas</li>
                  </ul>
                </div>
              )}
            </li>
            <li>
              <a href="#">Noticias</a>
            </li>
            <li>
              <a href="#">Contacto</a>
            </li>
          </ul>
          <div className="search-container-mobile">
            <input
              type="text"
              className="search-input-mobile"
              placeholder="Buscar..."
            />
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
