import { Link } from "react-router-dom";
import "./EstudiosDetalle.css";
import { Button } from "react-bootstrap";
import { useContext } from "react";
import { IdiomaContext } from "../../../context/IdiomaContext";

const Codo_fullstack = () => {
    const { idioma } = useContext(IdiomaContext);

  return (
    <>
      {idioma ? (
        <div className="estudioDetalle">
          <p className="textoDetalle">
            Curso de Java fullstack terminado en julio 2023. Nota de proyecto
            final: 10.
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
            Los temas mencionados relacionados al front end están aplicados en
            el proyecto final
          </p>
          <div className="botonesProyectos">
            <Link
              className="link"
              target="_blank"
              to="https://marianapadelin.github.io/bsas2.github.io/index.html"
            >
              <Button variant="light"> Deploy del proyecto final</Button>
            </Link>
            <Link
              className="link"
              target="_blank"
              to="https://github.com/MarianaPadelin/bsas2.github.io.git"
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
            Java Fullstack course finished in July 2023. Final project&apos;s
            mark: 10.
          </p>
          <p className="textoDetalle">Course Syllabus: </p>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>Java</li>
            <li>SQL</li>
          </ul>
          <p className="textoDetalle">
            All the forementioned items are applied in the final project.
          </p>
          <div className="botonesProyectos">
            <Link
              className="link"
              target="_blank"
              to="https://marianapadelin.github.io/bsas2.github.io/index.html"
            >
              <Button variant="light">Final project&apos;s deploy</Button>
            </Link>
            <Link
              className="link"
              target="_blank"
              to="https://github.com/MarianaPadelin/bsas2.github.io.git"
            >
              <Button variant="light">Final project&apos;s repository </Button>
            </Link>
          </div>
          <Link className="link" to="../estudios">
            Go back to the certification&apos;s list{" "}
          </Link>
        </div>
      )}
    </>
  );
};

export default Codo_fullstack;
