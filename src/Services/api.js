import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost/WPLocal/wordpress-6.7.1/wordpress/wp-json/wp/v2",
});

// Función para obtener publicaciones
export const getPosts = async () => await api.get("/posts");

// Función para obtener páginas
export const getPages = () => api.get("/pages");

// Función para obtener categorías
export const getCategories = () => api.get("/categories");

const addPost = () =>
  api.post("/posts", {
    caca: "2 caca hoy",
  });
