// import Home from "../components/pages/Home.jsx";
import Contacto from "../components/pages/contacto/Contacto.jsx";
import Estudios from "../components/pages/estudios/Estudios.jsx";
import Experiencia from "../components/pages/experiencia/Experiencia.jsx";
import Backend from "../components/pages/estudiosDetalle/Backend.jsx";
import React from "../components/pages/estudiosDetalle/React.jsx";
import Javascript from "../components/pages/estudiosDetalle/Javascript.jsx";
import Codo_fullstack from "../components/pages/estudiosDetalle/Codo_fullstack.jsx";
import Sql from "../components/pages/estudiosDetalle/Sql.jsx";
import About from "../components/pages/about/About.jsx";
import Herramientas from "../components/pages/herramientas/Herramientas.jsx";
import Desarrollo from "../components/pages/estudiosDetalle/Desarrollo.jsx";
import Coder_fullstack from "../components/pages/estudiosDetalle/Coder_fullstack.jsx";
import Salesforce from "../components/pages/estudiosDetalle/Salesforce.jsx";
import Language from "../components/pages/estudiosDetalle/Language.jsx";


export const rutasApp = [
  // {
  //   id: "home",
  //   path: "/",
  //   Element: Home,
  // },
  {
    id: "estudios",
    path: "/estudios",
    Element: Estudios,
  },
  {
    id: "herramientas",
    path: "/herramientas",
    Element: Herramientas,
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
    id: "language",
    path: "/language",
    Element: Language,
  },
  {
    id: "react",
    path: "/react",
    Element: React,
  },
  {
    id: "javascript",
    path: "/javascript",
    Element: Javascript,
  },
  {
    id: "fullstack",
    path: "/fullstack",
    Element: Codo_fullstack,
  },
  {
    id: "sql",
    path: "/sql",
    Element: Sql,
  },
  {
    id: "about",
    path: "/about",
    Element: About,
  },
  {
    id: "desarrollo",
    path: "/webdevelopement",
    Element: Desarrollo,
  },
  {
    id: "fullstackCoder",
    path: "/fullstackCoder",
    Element: Coder_fullstack,
  },
  {
    id: "salesforce",
    path: "/salesforce",
    Element: Salesforce,
  },
];