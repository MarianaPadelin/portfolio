import { Link } from "react-router-dom";
import "./EstudiosDetalle.css";
import { Button } from "react-bootstrap";
import { useContext } from "react";
import { IdiomaContext } from "../../../context/IdiomaContext";

const React = () => {
    const { idioma } = useContext(IdiomaContext);

  return (
    <>
      {idioma ? (
        <div className="estudioDetalle">
          <p className="textoDetalle">
            Curso de React JS terminado en julio 2023. Nota de proyecto final:
            10.
          </p>
          <p className="textoDetalle">Temas vistos en el curso:</p>
          <ul>
            <li>Configuración de entorno</li>
            <li>Uso de componentes</li>
            <li>Hooks: useEstate, useEffect, useContext, useRef</li>
            <li>Custom hooks</li>
            <li>React Bootstrap y Material UI</li>
            <li>Promesas y asincronía. Fetch y axios. </li>
            <li>Render props, uso de children y map</li>
            <li>Rendering condicional </li>
            <li>Routing</li>
            <li>Formularios con Formik y Yup</li>
            <li>Firebase, Firestore y Fireauth </li>
          </ul>
          <p className="textoDetalle">
            Todos los temas mencionados están aplicados en el proyecto final
          </p>
          <div className="botonesProyectos">
            <Link
              className="link"
              target="_blank"
              to="https://github.com/MarianaPadelin/ProyectoFinalFrontend.git"
            >
              <Button variant="light"> Repositorio del proyecto final</Button>
            </Link>
          </div>
          <Link className="link" to="../estudios">
            Volver al listado de certificaciones
          </Link>
        </div>
      ) : (
        <div className="estudioDetalle">
          <p className="textoDetalle">
            React JS course finished in July 2023. Final project&apos;s mark:
            10.
          </p>
          <p className="textoDetalle">Course Syllabus:</p>
          <ul>
            <li>Environment configuration</li>
            <li>Components</li>
            <li>Hooks: useEstate, useEffect, useContext, useRef</li>
            <li>Custom hooks</li>
            <li>React Bootstrap & Material UI</li>
            <li>Asyncrony & promises. Fetch & Axios</li>
            <li>Render props, use of children & mapping</li>
            <li>Conditional rendering </li>
            <li>Routing</li>
            <li>Forms using Formik & Yup</li>
            <li>Firebase, Firestore & Fireauth </li>
          </ul>
          <p className="textoDetalle">
            All the forementioned items are applied in the final project.
          </p>
          <div className="botonesProyectos">
            <Link
              className="link"
              target="_blank"
              to="https://github.com/MarianaPadelin/ProyectoFinalFrontend.git"
            >
              <Button variant="light"> Final projct&apos;s repository</Button>
            </Link>
          </div>
          <Link className="link" to="../estudios">
            Go back to the certification&apos;s list
          </Link>
        </div>
      )}
    </>
  );
};

export default React;
