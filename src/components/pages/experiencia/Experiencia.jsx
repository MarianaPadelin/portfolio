import { Link } from "react-router-dom";
import "./Experiencia.css";
import { Button } from "react-bootstrap";
import ScrollToTop from "react-scroll-to-top";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import ButtonGroup from "react-bootstrap/ButtonGroup";

// import ToggleButton from "@mui/material/ToggleButton";
import Navbar from "react-bootstrap/Navbar";
const Experiencia = () => {
  return (
    <div className="experiencia">
      <h1 className="titles">
        <i>PROYECTOS DE REALIZACIÓN PROPIA</i>
      </h1>
      <CardGroup>
        {/*------ UCHI ------ */}
        <Card>
          <Card.Img
            variant="top"
            src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1716732753/screencapture-uchi-three-vercel-app-2024-05-26-11_11_58_d8auuv.png"
            title="UCHI"
          />
          <Card.Body>
            <Card.Title>
              PROYECTO FREELANCE - UCHI ARTICULOS JAPONESES
            </Card.Title>
            <Navbar expand="xxxl" className="nv-bg navbar-dark cardtoggle">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />

              <Navbar.Collapse id="basic-navbar-nav">
                <Card.Text>
                  Trabajo freelance de front end realizado como única
                  desarrolladora web, en conjunto con diseñadores y UX/UI. A
                  partir de terminar el curso de React JS con la mejor
                  calificación, desde Coderhouse me permitieron participar de
                  este proyecto con un equipo de diseñadores. Página web
                  realizada desde cero, responsive, en concordancia con los
                  pedidos de nuestra cliente, la dueña de la marca UCHI.
                </Card.Text>
              </Navbar.Collapse>
            </Navbar>
          </Card.Body>

          <ButtonGroup>
            <Link
              className="link"
              to="https://uchi-three.vercel.app/"
              target="_blank"
            >
              <Button variant="light">Visitar la página de UCHI</Button>
            </Link>
            <Link
              className="link"
              to="https://github.com/MarianaPadelin/uchi.git"
              target="_blank"
            >
              <Button variant="light">
                Ver el código de la página
              </Button>
            </Link>
          </ButtonGroup>
        </Card>
        {/*------ MGGM ------ */}
        <Card>
          <Card.Img
            variant="top"
            src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1716750307/screencapture-proyectofinalfrontend-production-b4ee-up-railway-app-2024-05-26-16_04_06_qw0i2m.png"
            title="MGGM"
          />
          <Card.Body>
            <Card.Title>PROYECTO E-COMMERCE FULLSTACK - MGGM</Card.Title>
            <Navbar expand="xxxl" className="nv-bg navbar-dark cardtoggle">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />

              <Navbar.Collapse id="basic-navbar-nav">
                <Card.Text>
                  Trabajo de e-commerce realizado en primera instancia como
                  proyecto final del curso React JS en coderhouse. Luego
                  retomado en el curso de Backend en coderhouse, agregándole
                  inicio de sesión, permisos para administrador, funcionalidad
                  con API REST propia, chat en vivo, proceso de compra completo.
                  Sistema de envío de mails para tickets y notificaciones, etc.
                </Card.Text>
              </Navbar.Collapse>
            </Navbar>
          </Card.Body>
          <ButtonGroup>
            <Link
              className="link"
              to="https://github.com/MarianaPadelin/ProyectoFinalFrontend.git"
              target="_blank"
            >
              <Button variant="light">Ver el código de frontend</Button>
            </Link>
            <Link
              className="link"
              to="https://github.com/MarianaPadelin/ProyectoFinalBackend.git"
              target="_blank"
            >
              <Button variant="light">Ver el código de backend</Button>
            </Link>
          </ButtonGroup>
        </Card>
        {/*------ CODO A CODO ------ */}
        <Card>
          <Card.Img
            variant="top"
            src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1725971201/screencapture-marianapadelin-github-io-bsas2-github-io-2024-09-10-09_25_44_akaowk.png"
            title="CODO A CODO"
          />
          <Card.Body>
            <Card.Title>PROYECTO FREELANCE FRONTEND- CODO A CODO </Card.Title>
            <Navbar expand="xxxl" className="nv-bg navbar-dark cardtoggle">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />

              <Navbar.Collapse id="basic-navbar-nav">
                <Card.Text>
                  Trabajo freelance realizado para la agencia CODO A CODO, del
                  gobierno de la ciudad de buenos aires. Maquetación y
                  desarrollo web responsive.
                </Card.Text>
              </Navbar.Collapse>
            </Navbar>
          </Card.Body>
          <ButtonGroup>
            <Link
              className="link"
              to="https://marianapadelin.github.io/bsas2.github.io/"
              target="_blank"
            >
              <Button variant="light">Visitar la página</Button>
            </Link>
            <Link
              className="link"
              to="https://github.com/MarianaPadelin/bsas2.github.io"
              target="_blank"
            >
              <Button variant="light">
                Ver el código de la página
              </Button>
            </Link>
          </ButtonGroup>
        </Card>
      </CardGroup>

      <ScrollToTop smooth />
    </div>
  );
};

export default Experiencia;
