import Home from "../components/pages/Home.jsx";
import Contacto from "../components/pages/contacto/Contacto.jsx";
import Estudios from "../components/pages/estudios/Estudios.jsx";
import Experiencia from "../components/pages/experiencia/Experiencia.jsx";
import Backend from "../components/pages/estudiosDetalle/Backend.jsx";
import React from "../components/pages/estudiosDetalle/React.jsx";

export const rutasApp = [
  {
    id: "home",
    path: "/",
    Element: Home,
  },
  {
    id: "estudios",
    path: "/estudios",
    Element: Estudios,
  },
  {
    id: "experiencia",
    path: "/experiencia",
    Element: Experiencia,
  },
  {
    id: "contacto",
    path: "/contacto",
    Element: Contacto,
  },
  {
    id: "backend",
    path: "/backend",
    Element: Backend,
  },
  {
    id: "react",
    path: "/react",
    Element: React,
  },
];