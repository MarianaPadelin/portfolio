import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./EstudiosDetalle.css";
import { Button } from "react-bootstrap";

const Sql = () => {
  return (
    <div>
      <Card className="card" body>
        Curso de React JS terminado en julio 2023. Nota de proyecto final: 10.
        <br />
        Temas vistos en el curso:
        <ul>
          <li>Lenguaje SQL</li>
          <li>Consultas SQL</li>
          <li>Sublenguaje DDL</li>
          <li>Objetos en DB</li>
          <li>Vistas</li>
          <li>Sublenguaje DML</li>
          <li>Funciones</li>
          <li>Triggers</li>
          <li>Sublenguaje TCL</li>
          <li>Backups</li>
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

export default Sql;
