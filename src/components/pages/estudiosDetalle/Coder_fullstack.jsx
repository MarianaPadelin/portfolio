import { Link } from "react-router-dom";
import "./EstudiosDetalle.css";
import { useContext } from "react";
import { IdiomaContext } from "../../../context/IdiomaContext";

const Coder_fullstack = () => {
  const { idioma } = useContext(IdiomaContext);

  return (
    <>
      {idioma ? (
        <div className="estudioDetalle">
          <p className="textoDetalle">
            Carrera que comprende los siguientes cursos (cada uno finalizado con
            la mejor nota y dentro del top 10 de alumnos)
          </p>

          <ul>
            <li>
              Desarrollo web -
              <Link to="../webdevelopement">Ver contenido</Link>
            </li>
            <li>
              Javascript - <Link to="../javascript">Ver contenido</Link>
            </li>
            <li>
              React Js - <Link to="../react">Ver contenido</Link>
            </li>
            <li>
              Programación Backend - <Link to="../backend">Ver contenido</Link>
            </li>
          </ul>

          <Link className="link" to="../estudios">
            Volver al listado de certificaciones
          </Link>
        </div>
      ) : (
        <div className="estudioDetalle">
          <p className="textoDetalle">
            Fullstack carreer that includes the following courses (each of them
            finished with top marks and between the top 10 of students)
          </p>

          <ul>
            <li>
              Web development -
              <Link to="../webdevelopement">View content</Link>
            </li>
            <li>
              Javascript -<Link to="../javascript">View content</Link>
            </li>
            <li>
              React Js - <Link to="../react">View content</Link>
            </li>
            <li>
              Backend - <Link to="../backend">View content</Link>
            </li>
          </ul>

          <Link className="link" to="../estudios">
            Go back to the certification&apos;s list
          </Link>
        </div>
      )}
    </>
  );
};

export default Coder_fullstack;
