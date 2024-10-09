import { Link } from "react-router-dom";
import "./EstudiosDetalle.css";
import { Button } from "react-bootstrap";

const Sql = () => {
  return (
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
  );
};

export default Sql;
