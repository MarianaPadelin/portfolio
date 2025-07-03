import { Link } from "react-router-dom";
import "./EstudiosDetalle.css";
import { Button } from "react-bootstrap";
import { useContext } from "react";
import { IdiomaContext } from "../../../context/IdiomaContext";

const Sql = () => {
    const { idioma } = useContext(IdiomaContext);

  return (
    <>
      {idioma ? (
        <div className="estudioDetalle">
          <p className="textoDetalle">
            Curso de SQL terminado en junio 2024. Nota de proyecto final: 10.
          </p>
          <p className="textoDetalle">Temas vistos en el curso:</p>
          <ul>
            <li>MySQL workbench</li>
            <li>Lenguaje SQL</li>
            <li>Consultas SQL</li>
            <li>Sublenguaje DDL</li>
            <li>Objetos en DB</li>
            <li>Vistas</li>
            <li>Sublenguaje DML</li>
            <li>Funciones</li>
            <li>Stored procedures</li>
            <li>Triggers</li>
            <li>Sublenguaje TCL</li>
            <li>Backups</li>
          </ul>
          <p className="textoDetalle">
            Todos los temas mencionados están aplicados en el proyecto final
          </p>
          <div className="botonesProyectos">
            <Link
              className="link"
              target="_blank"
              to="https://drive.google.com/drive/folders/1G3Zi-Ervx7H_Ji2XDYbGMBP9ZI5vwl_H?usp=drive_link"
            >
              <Button variant="light">
                Carpeta con la base de datos del proyecto final
              </Button>
            </Link>
          </div>
          <Link className="link" to="../estudios">
            Volver al listado de certificaciones
          </Link>
        </div>
      ) : (
        <div className="estudioDetalle">
          <p className="textoDetalle">
            SQL course finished in June 2024. Final project&apos;s mark: 10.
          </p>
          <p className="textoDetalle">Course Syllabus:</p>
          <ul>
            <li>MySQL workbench</li>
            <li>SQL language</li>
            <li>SQL queries</li>
            <li>DDL sublanguage</li>
            <li>Objects in database</li>
            <li>Views</li>
            <li>DML sublanguage</li>
            <li>Functions</li>
            <li>Stored procedures</li>
            <li>Triggers</li>
            <li>TCL sublanguage</li>
            <li>Backups</li>
          </ul>
          <p className="textoDetalle">
            All the forementioned items are applied in the final project.
          </p>
          <div className="botonesProyectos">
            <Link
              className="link"
              target="_blank"
              to="https://drive.google.com/drive/folders/1G3Zi-Ervx7H_Ji2XDYbGMBP9ZI5vwl_H?usp=drive_link"
            >
              <Button variant="light">
                Folder with the final project&apos;s database
              </Button>
            </Link>
          </div>
          <Link className="link" to="../estudios">
            Go back to the certifications list
          </Link>
        </div>
      )}
    </>
  );
};

export default Sql;
