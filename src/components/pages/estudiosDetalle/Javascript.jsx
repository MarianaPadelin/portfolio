import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./EstudiosDetalle.css";
import { Button } from "react-bootstrap";

const Javascript = () => {
  return (
    <div>
      <Card className="card" body>
        Curso de javascript terminado en abril 2023. Nota de proyecto final: 9.
        <br />
        Temas vistos en el curso:
        <ul>
          <li>Ciclos e iteraciones</li>
          <li>Funciones</li>
          <li>Objetos</li>
          <li>Arrays</li>
          <li>DOM</li>
          <li>Eventos</li>
          <li>Local storage</li>
          <li>Sugar syntax</li>
          <li>Librerías</li>
          <li>Asincronía y promesas</li>
          <li>Frameworks</li>
        </ul>
        Todos los temas mencionados están aplicados en el proyecto final
        <div className="botonesProyectos">
          {/* revisar repo */}
          <Link
            className="link"
            target="_blank"
            to="https://github.com/MarianaPadelin/ProyectoFinal.github.io.git"
          >
            <Button variant="secondary"> Repositorio del proyecto final</Button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Javascript;
