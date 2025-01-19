import { Link } from "react-router-dom";
import "./EstudiosDetalle.css";
import { Button } from "react-bootstrap";
import { useContext } from "react";
import { IdiomaContext } from "../../../context/IdiomaContext";

const Javascript = () => {
    const { idioma } = useContext(IdiomaContext);

  return (
    <>
      {idioma ? (
        <div className="estudioDetalle">
          <p className="textoDetalle">
            Curso de javascript terminado en abril 2023. Nota de proyecto final:
            9.
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
            Javascript course finished in april 2023. Final project&apos;s mark: 9.
          </p>
          <p className="textoDetalle">Course Syllabus: </p>
          <ul>
            <li>Loops & iterations</li>
            <li>Functions</li>
            <li>Objects</li>
            <li>Arrays</li>
            <li>DOM</li>
            <li>Events</li>
            <li>Local storage</li>
            <li>Sugar syntax</li>
            <li>Libraries</li>
            <li>Asincrony and promises</li>
            <li>Frameworks</li>
          </ul>
          <p className="textoDetalle">
            All the forementioned items are applied in the final project.
          </p>
          <div className="botonesProyectos">
            <Link
              className="link"
              target="_blank"
              to="https://github.com/MarianaPadelin/ProyectoFinal.github.io.git"
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

export default Javascript;
