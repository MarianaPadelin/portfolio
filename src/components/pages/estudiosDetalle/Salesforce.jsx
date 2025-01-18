import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Salesforce = () => {
  return (
    <div className="estudioDetalle">
      <p className="textoDetalle">
        Curso de Salesforce terminado en diciembre 2024. Dictado por el Ministerio de Educación de la Ciudad Autónoma de Buenos Aires. 
      </p>
      <p className="textoDetalle">Temas vistos en el curso:</p>
      <ul>
        <li>Introducción a Salesforce y su ecosistema</li>
        <li>Desarrollo en Apex</li>
        <li>Trabajo con Visualforce y Lightning Components</li>
        <li>Gestión de bases de datos con SQL y SOSL</li>
        <li>Automatización de procesos de negocio</li>
        <li>Integración de Salesforce con otras aplicaciones</li>
        <li>Gestión de la seguridad y control de acceso</li>
        <li>Mejores prácticas de desarrollo en Salesforce</li>
        <li>Pruebas y depuración</li>
        <li>Preparación para la certificación Salesforce Platform Developer</li>
      </ul>
      
      <div className="botonesProyectos">
        <Link
          className="link"
          target="_blank"
          to="https://openbadgefactory.com/v1/assertion/34402f7d96bde771d6709a2ca3ed0f8446c36825"
        >
          <Button variant="light"> Link a la insignia del Ministerio de Educación</Button>
        </Link>
      </div>
      <Link className="link" to="../estudios">
        Volver al listado de certificaciones
      </Link>
    </div>
  );
}

export default Salesforce