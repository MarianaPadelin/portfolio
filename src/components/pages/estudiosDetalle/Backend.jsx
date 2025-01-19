import { Link } from "react-router-dom";
import "./EstudiosDetalle.css";
import { Button } from "react-bootstrap";
import { useContext } from "react";
import { IdiomaContext } from "../../../context/IdiomaContext";

const Backend = () => {
  const { idioma } = useContext(IdiomaContext);

  return (
    <>
      {idioma ? (
        <div className="estudioDetalle">
          <p className="textoDetalle">
            Curso de backend terminado en abril 2024. Nota de proyecto final: 10.
          </p>
          <p className="textoDetalle">Temas vistos en el curso:</p>

          <ul>
            <li>Creación de API rest</li>
            <li>Node JS y nodemon</li>
            <li>
              Escalabilidad de proyecto. Arquitectura del servidor por capas
            </li>
            <li>Express</li>
            <li>Routers</li>
            <li>Multer</li>
            <li>Websockets</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
            <li>Cookies y sessions</li>
            <li>JWT, autorización y autenticación con Passport</li>
            <li>Nodemailer</li>
            <li>Testing con Mocha, Chai y Supertest</li>
            <li>Manejo de loggers con Winston</li>
            <li>Mocking con Faker-js</li>
            <li>Documentación de API con Swagger</li>
            <li>Deployment con Vercel y Railway apps</li>
            <li>Pasarelas de pago con Stripe</li>
            <li>Conexión con frontEnd</li>
          </ul>
          <p className="textoDetalle">
            Todos los temas mencionados están aplicados en el proyecto final, en
            conjunto con el proyecto final realizado en front end para el curso
            de React JS
          </p>
          <div className="botonesProyectos">
            <Link
              className="link"
              target="_blank"
              to="https://github.com/MarianaPadelin/ProyectoFinalBackend.git"
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
            Backend course finished in april 2024. Final project&apos;s mark: 10. 
          </p>
          <p className="textoDetalle">Course Syllabus: </p>

          <ul>
            <li>API rest creation</li>
            <li>Node JS & nodemon</li>
            <li>
          Proyecto scalability. Server layered architecture. 
            </li>
            <li>Express</li>
            <li>Routers</li>
            <li>Multer</li>
            <li>Websockets</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
            <li>Cookies & sessions</li>
            <li>JWT, authorization y authentication with Passport</li>
            <li>Nodemailer</li>
            <li>Testing with Mocha, Chai & Supertest</li>
            <li>Loggers with Winston</li>
            <li>Mocking with Faker-js</li>
            <li>API documentation with Swagger</li>
            <li>Deployment with Vercel & Railway apps</li>
            <li>Payment gateways with Stripe</li>
            <li>Integration with frontEnd</li>
          </ul>
          <p className="textoDetalle">
            All the forementioned items are applied in the final project.
          </p>
          <div className="botonesProyectos">
            <Link
              className="link"
              target="_blank"
              to="https://github.com/MarianaPadelin/ProyectoFinalBackend.git"
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

export default Backend;
