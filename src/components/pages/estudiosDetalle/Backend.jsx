import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./EstudiosDetalle.css"
import { Button } from "react-bootstrap";

const Backend = () => {
  return (
    <div className="estudioDetalle">
      <Card className="card" body>
        Curso de backend terminado en abril 2024 Nota de proyecto final: 10.
        <br />
        Temas vistos en el curso:
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
          <li>Moking con Faker-js</li>
          <li>Documentación de API con Swagger</li>
          <li>Deployment con Vercel y Railway apps</li>
          <li>Pasarelas de pago con Stripe</li>
          <li>Conexión con frontEnd</li>
        </ul>
        Todos los temas mencionados están aplicados en el proyecto final, en
        conjunto con el proyecto final realizado en front end para el curso de
        React JS
        <div className="botonesProyectos">
          <Link
            className="link"
            target="_blank"
            to="https://proyectofinalfrontend-production-b4ee.up.railway.app"
          >
            <Button variant="secondary"> Deploy del proyecto final</Button>
          </Link>
          <Link
            className="link"
            target="_blank"
            to="https://github.com/MarianaPadelin/ProyectoFinalBackend.git"
          >
            <Button variant="secondary"> Repositorio del proyecto final</Button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Backend;
