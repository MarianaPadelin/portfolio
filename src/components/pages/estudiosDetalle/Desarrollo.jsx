import { Link } from "react-router-dom";
import "./EstudiosDetalle.css";
import { Button } from "react-bootstrap";
import { useContext } from "react";
import { IdiomaContext } from "../../../context/IdiomaContext";

const Desarrollo = () => {
  const { idioma } = useContext(IdiomaContext);

  return (
    <>
      {idioma ? (
        <div className="estudioDetalle">
          <p className="textoDetalle">
            Curso de desarrollo web terminado en septiembre 2024. Nota de
            proyecto final: 10.
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
      ) : (
        <div className="estudioDetalle">
          <p className="textoDetalle">
            Web development course finished in september 2024. Final
            project&apos;s mark: 10.
          </p>
          <p className="textoDetalle">Course Syllabus: </p>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Box modeling & Flexbox</li>
            <li>Grids</li>
            <li>Bootstrap</li>
            <li>Git & github</li>
            <li>Sass</li>
            <li>Animaciones</li>
          </ul>
          <p className="textoDetalle">
            All the forementioned items are applied in the final project.
          </p>
          <div className="botonesProyectos">
            <Link
              className="link"
              target="_blank"
              to="https://portfolio-marianapadelin.vercel.app/"
            >
              <Button variant="light">Final projct&apos;s deploy</Button>
            </Link>
          </div>
          <div className="botonesProyectos">
            <Link
              className="link"
              target="_blank"
              to="https://github.com/MarianaPadelin/desarrollo-web.git"
            >
              <Button variant="light">Final projct&apos;s repository</Button>
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

export default Desarrollo;
