import { Link } from "react-router-dom";
import "./EstudiosDetalle.css";
import { Button } from "react-bootstrap";

const Javascript = () => {
  return (
    <div className="estudioDetalle">
      <p className="textoDetalle">
        Curso de javascript terminado en abril 2023. Nota de proyecto final: 9.
      </p>
      <p className="textoDetalle">Temas vistos en el curso:</p>
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
      <p className="textoDetalle">
        Todos los temas mencionados están aplicados en el proyecto final
      </p>
      <div className="botonesProyectos">
        <Link
          className="link"
          target="_blank"
          to="https://github.com/MarianaPadelin/ProyectoFinal.github.io.git"
        >
          <Button variant="secondary"> Repositorio del proyecto final</Button>
        </Link>
      </div>
      <Link className="link" to="../estudios">
        Volver al listado de certificaciones
      </Link>
    </div>
  );
};

export default Javascript;
