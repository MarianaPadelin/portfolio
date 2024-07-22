import { Link } from "react-router-dom";
import "./EstudiosDetalle.css";
import { Button } from "react-bootstrap";

const Codo_fullstack = () => {
  return (
    <div className="estudioDetalle">
      <p className="textoDetalle">
        Curso de Java fullstack terminado en julio 2023. Nota de proyecto final:
        10.
      </p>
      <p className="textoDetalle">Temas vistos en el curso:</p>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>Java</li>
        <li>SQL</li>
      </ul>
      <p className="textoDetalle">
        Los temas mencionados relacionados al front end están aplicados en el
        proyecto final
      </p>
      <div className="botonesProyectos">
        <Link
          className="link"
          target="_blank"
          to="https://marianapadelin.github.io/bsas2.github.io/index.html"
        >
          <Button variant="secondary"> Deploy del proyecto final</Button>
        </Link>
        <Link
          className="link"
          target="_blank"
          to="https://github.com/MarianaPadelin/bsas2.github.io.git"
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

export default Codo_fullstack;
