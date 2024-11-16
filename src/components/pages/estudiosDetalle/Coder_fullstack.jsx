import { Link } from "react-router-dom";
import "./EstudiosDetalle.css";

const Coder_fullstack = () => {
  return (
    <div className="estudioDetalle">
      <p className="textoDetalle">
        Carrera que comprende los siguientes cursos (cada uno finalizado con la
        mejor nota y dentro del top 10 de alumnos)
      </p>

      <ul>
        <li>
          Desarrollo web - <a href="../webdevelopement">Ver contenido</a>
        </li>
        <li>
          Javascript <a href="../javascript">Ver contenido</a>
        </li>
        <li>
          React Js <a href="../react">Ver contenido</a>
        </li>
        <li>
          Programación Backend <a href="../backend">Ver contenido</a>
        </li>
      </ul>

      <Link className="link" to="../estudios">
        Volver al listado de certificaciones
      </Link>
    </div>
  );
};

export default Coder_fullstack;
