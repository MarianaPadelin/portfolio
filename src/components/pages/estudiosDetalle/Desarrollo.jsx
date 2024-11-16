import { Link } from "react-router-dom";
import "./EstudiosDetalle.css";
import { Button } from "react-bootstrap";

const Desarrollo = () => {
  return (
    <div className="estudioDetalle">
      <p className="textoDetalle">
        Curso de desarrollo web terminado en septiembre 2024. Nota de proyecto final: 10.
      </p>
      <p className="textoDetalle">Temas vistos en el curso:</p>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Box modeling y Flexbox</li>
        <li>Grids</li>
        <li>Bootstrap</li>
        <li>Git y github</li>
        <li>Sass</li>
        <li>Animaciones</li>
      </ul>
      <p className="textoDetalle">
        Todos los temas mencionados están aplicados en el proyecto final
      </p>
      <div className="botonesProyectos">
        <Link
          className="link"
          target="_blank"
          to="https://portfolio-marianapadelin.vercel.app/"
        >
          <Button variant="light"> Deploy del proyecto final</Button>
        </Link>
      </div>
      <div className="botonesProyectos">
        <Link
          className="link"
          target="_blank"
          to="https://github.com/MarianaPadelin/desarrollo-web.git"
        >
          <Button variant="light"> Repositorio del proyecto final</Button>
        </Link>
      </div>
      <Link className="link" to="../estudios">
        Volver al listado de certificaciones
      </Link>
    </div>
  );
}

export default Desarrollo

