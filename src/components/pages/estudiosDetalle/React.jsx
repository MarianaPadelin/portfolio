import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./EstudiosDetalle.css";
import { Button } from "react-bootstrap";


const React = () => {
  return (
    <div>
      <Card className="card" body>
        Curso de React JS terminado en julio 2023. Nota de proyecto final: 10.
        Temas vistos en el curso:
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
        Todos los temas mencionados están aplicados en el proyecto final
        <div className="botonesProyectos">
          <Link
            className="link"
            target="_blank"
            to="https://proyectofinalfrontend-production-b4ee.up.railway.app"
          >
            <Button variant="secondary"> Deploy del proyecto final</Button>
          </Link>
          <Link
            className="link"
            target="_blank"
            to="https://github.com/MarianaPadelin/ProyectoFinalFrontend.git"
          >
            <Button variant="secondary"> Repositorio del proyecto final</Button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default React;
