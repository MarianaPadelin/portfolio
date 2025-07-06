import { Link } from "react-router-dom";
import "./Experiencia.css";
import { Button } from "react-bootstrap";
import ScrollToTop from "react-scroll-to-top";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { useContext, useState } from "react";
import { IdiomaContext } from "../../../context/IdiomaContext";
const Experiencia = () => {
  const { idioma } = useContext(IdiomaContext);
  const [showInfo1, setShowInfo1] = useState(false);
  const [showInfo2, setShowInfo2] = useState(false);
  const [showInfo3, setShowInfo3] = useState(false);
  const [showInfo4, setShowInfo4] = useState(false);

  const handleClick1 = () => {
    setShowInfo1(!showInfo1);
  };
  const handleClick2 = () => {
    setShowInfo2(!showInfo2);
  };
  const handleClick3 = () => {
    setShowInfo3(!showInfo3);
  };
  const handleClick4 = () => {
    setShowInfo4(!showInfo4);
  };

  return (
    <div className="experiencia">
      {idioma ? (
        <h1 className="titles">
          <i>PROYECTOS DE REALIZACIÓN PROPIA</i>
        </h1>
      ) : (
        <h1 className="titles">
          <i>PREVIOUS PROJECTS</i>
        </h1>
      )}

      <CardGroup>
        {/* CAMPUS */}
        <Card>
          <Card.Img
            variant="top"
            src="https://res.cloudinary.com/dvxkjikvk/image/upload/c_crop,ar_9:16/v1751842595/portfolio/Captura_de_pantalla_2025-07-06_195256_zobwba.png"
            title="CAMPUS"
          />
          <Card.Body>
            {idioma ? (
              <Card.Title>
                PROYECTO FREELANCE - CAMPUS VIRTUAL - CIRCO DE LAS ARTES
              </Card.Title>
            ) : (
              <Card.Title>
                FREELANCE PROJECT - VIRTUAL CAMPUS - CIRCO DE LAS ARTES
              </Card.Title>
            )}
            {idioma ? (
              <div className="buttonDiv">
                {showInfo1 ? (
                  <Button variant="light" onClick={handleClick1}>
                    Ver menos
                  </Button>
                ) : (
                  <Button variant="light" onClick={handleClick1}>
                    Ver más
                  </Button>
                )}
              </div>
            ) : (
              <div className="buttonDiv">
                {showInfo1 ? (
                  <Button variant="light" onClick={handleClick1}>
                    Show less
                  </Button>
                ) : (
                  <Button variant="light" onClick={handleClick1}>
                    Show more
                  </Button>
                )}
              </div>
            )}

            {showInfo1 && (
              <div>
                {idioma ? (
                  <div>
                    <Card.Text>
                      Proyecto de mayor complejidad hasta la fecha. Trabajo
                      freelance fullstack para una escuela de circo. Incluye
                      inicio de sesión, manejo de roles de administrador y
                      usuario. Control de asistencias, pagos, opción para subir
                      material con archivo o por link, manejo de la lista de
                      alumnos. Conexión con base de datos en mongoDB. Por
                      motivos de seguridad no puedo compartir el código, pero
                      adjunto un video navegando por el campus.
                    </Card.Text>
                    <ButtonGroup>
                      <Link
                        className="link"
                        to="https://uchi-three.vercel.app/"
                        target="_blank"
                      >
                        <Button variant="light">
                          Descargar un video demostrativo
                        </Button>
                      </Link>
                    </ButtonGroup>
                  </div>
                ) : (
                  <div>
                    <Card.Text>
                      Most complex project so far. Freelance fullstack project
                      for a circus school. Worked with sessions, admin and user
                      roles. Ability to handle payments, assitance, file uploads
                      or link uploads, student list. Conection to a database
                      stored in mongoDB. For security reasons i cannot show the
                      code, but I show a sample video below navigating the site.
                    </Card.Text>
                    <ButtonGroup>
                      <Link
                        className="link"
                        to="https://res.cloudinary.com/dvxkjikvk/video/upload/v1751843248/portfolio/campus_sample_efyls6.mkv"
                        target="_blank"
                      >
                        <Button variant="light">Download a sample video</Button>
                      </Link>
                    </ButtonGroup>
                  </div>
                )}
              </div>
            )}
          </Card.Body>
        </Card>
        {/*------ UCHI ------ */}
        <Card>
          <Card.Img
            variant="top"
            src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1716732753/screencapture-uchi-three-vercel-app-2024-05-26-11_11_58_d8auuv.png"
            title="UCHI"
          />
          <Card.Body>
            {idioma ? (
              <Card.Title>
                PROYECTO FREELANCE - UCHI ARTICULOS JAPONESES
              </Card.Title>
            ) : (
              <Card.Title>
                FREELANCE PROJECT - UCHI JAPANESE HANDCRAFTED PRODUCTS
              </Card.Title>
            )}
            {idioma ? (
              <div className="buttonDiv">
                {showInfo2 ? (
                  <Button variant="light" onClick={handleClick2}>
                    Ver menos
                  </Button>
                ) : (
                  <Button variant="light" onClick={handleClick2}>
                    Ver más
                  </Button>
                )}
              </div>
            ) : (
              <div className="buttonDiv">
                {showInfo2 ? (
                  <Button variant="light" onClick={handleClick2}>
                    Show less
                  </Button>
                ) : (
                  <Button variant="light" onClick={handleClick2}>
                    Show more
                  </Button>
                )}
              </div>
            )}
            {showInfo2 && (
              <div>
                {idioma ? (
                  <div>
                    <Card.Text>
                      Trabajo freelance de frontend realizado como única
                      desarrolladora web, en conjunto con diseñadores y UX/UI. A
                      partir de terminar el curso de React JS con la mejor
                      calificación, desde Coderhouse me permitieron participar
                      de este proyecto con un equipo de diseñadores. Página web
                      realizada desde cero, responsive, en concordancia con los
                      pedidos de nuestra cliente, la dueña de la marca UCHI.
                    </Card.Text>
                    <ButtonGroup>
                      <Link
                        className="link"
                        to="https://uchi-three.vercel.app/"
                        target="_blank"
                      >
                        <Button variant="light">
                          Visitar la página de UCHI
                        </Button>
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
                  </div>
                ) : (
                  <div>
                    <Card.Text>
                      Freelance frontend project, working as the sole web
                      developer, along with graphic designers and UX/UI. The
                      oportunity was given to me as a reward for finishing the
                      React JS course in Coderhouse with top marks. This website
                      was created from scratch, is responsive and follows the
                      requests of our client, the owner of UCHI.
                    </Card.Text>
                    <ButtonGroup>
                      <Link
                        className="link"
                        to="https://uchi-three.vercel.app/"
                        target="_blank"
                      >
                        <Button variant="light">
                          Visit UCHI&apos;s website
                        </Button>
                      </Link>
                      <Link
                        className="link"
                        to="https://github.com/MarianaPadelin/uchi.git"
                        target="_blank"
                      >
                        <Button variant="light">View the website code</Button>
                      </Link>
                    </ButtonGroup>
                  </div>
                )}
              </div>
            )}
          </Card.Body>
        </Card>
        {/*------ MGGM ------ */}
        <Card>
          <Card.Img
            variant="top"
            src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1716750307/screencapture-proyectofinalfrontend-production-b4ee-up-railway-app-2024-05-26-16_04_06_qw0i2m.png"
            title="MGGM"
          />
          <Card.Body>
            {idioma ? (
              <Card.Title>PROYECTO E-COMMERCE FULLSTACK - MGGM</Card.Title>
            ) : (
              <Card.Title>E-COMMERCE FULLSTACK PROJECT - MGGM</Card.Title>
            )}
            {idioma ? (
              <div className="buttonDiv">
                {showInfo3 ? (
                  <Button variant="light" onClick={handleClick3}>
                    Ver menos
                  </Button>
                ) : (
                  <Button variant="light" onClick={handleClick3}>
                    Ver más
                  </Button>
                )}
              </div>
            ) : (
              <div className="buttonDiv">
                {showInfo3 ? (
                  <Button variant="light" onClick={handleClick3}>
                    Show less
                  </Button>
                ) : (
                  <Button variant="light" onClick={handleClick3}>
                    Show more
                  </Button>
                )}
              </div>
            )}
            {showInfo3 && (
              <div>
                {idioma ? (
                  <div>
                    <Card.Text>
                      Trabajo de e-commerce realizado en primera instancia como
                      proyecto final del curso React JS en coderhouse. Luego
                      retomado en el curso de Backend en coderhouse, agregándole
                      inicio de sesión, permisos para administrador,
                      funcionalidad con API REST propia, chat en vivo, proceso
                      de compra completo. Sistema de envío de mails para tickets
                      y notificaciones, etc.
                    </Card.Text>
                    <ButtonGroup>
                      <Link
                        className="link"
                        to="https://github.com/MarianaPadelin/ProyectoFinalFrontend.git"
                        target="_blank"
                      >
                        <Button variant="light">
                          Ver el código de frontend
                        </Button>
                      </Link>
                      <Link
                        className="link"
                        to="https://github.com/MarianaPadelin/ProyectoFinalBackend.git"
                        target="_blank"
                      >
                        <Button variant="light">
                          Ver el código de backend
                        </Button>
                      </Link>
                    </ButtonGroup>
                  </div>
                ) : (
                  <div>
                    <Card.Text>
                      E-commerce project, at first presented for the React JS
                      course&apos;s final project. Then taken up again for the
                      backend course in Coderhouse, where I added login and
                      register functionality, admin permits, its own API REST,
                      live chat, and a full purchasing process, along with an
                      email system to send tickets and notifications.
                    </Card.Text>
                    <ButtonGroup>
                      <Link
                        className="link"
                        to="https://github.com/MarianaPadelin/ProyectoFinalFrontend.git"
                        target="_blank"
                      >
                        <Button variant="light">View the frontend code</Button>
                      </Link>
                      <Link
                        className="link"
                        to="https://github.com/MarianaPadelin/ProyectoFinalBackend.git"
                        target="_blank"
                      >
                        <Button variant="light">View the backend code</Button>
                      </Link>
                    </ButtonGroup>
                  </div>
                )}
              </div>
            )}
          </Card.Body>
        </Card>
        {/*------ CODO A CODO ------ */}
        <Card>
          <Card.Img
            variant="top"
            src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1725971201/screencapture-marianapadelin-github-io-bsas2-github-io-2024-09-10-09_25_44_akaowk.png"
            title="CODO A CODO"
          />
          <Card.Body>
            {idioma ? (
              <Card.Title>PROYECTO FREELANCE FRONTEND- CODO A CODO </Card.Title>
            ) : (
              <Card.Title>FREELANCE PROJECT - CODO A CODO </Card.Title>
            )}
            {idioma ? (
              <div className="buttonDiv">
                {showInfo4 ? (
                  <Button variant="light" onClick={handleClick4}>
                    Ver menos
                  </Button>
                ) : (
                  <Button variant="light" onClick={handleClick4}>
                    Ver más
                  </Button>
                )}
              </div>
            ) : (
              <div className="buttonDiv">
                {showInfo4 ? (
                  <Button variant="light" onClick={handleClick4}>
                    Show less
                  </Button>
                ) : (
                  <Button variant="light" onClick={handleClick4}>
                    Show more
                  </Button>
                )}
              </div>
            )}
            {showInfo4 && (
              <div>
                {idioma ? (
                  <div>
                    <Card.Text>
                      Trabajo freelance realizado para la agencia CODO A CODO,
                      del gobierno de la ciudad de Buenos Aires. Maquetación y
                      desarrollo web responsive.
                    </Card.Text>
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
                  </div>
                ) : (
                  <div>
                    <Card.Text>
                      Freelance frontend project for the CODO A CODO agency,
                      part of the government of the city of Buenos Aires. I was
                      in charge of web page layout and responsive web
                      developing.
                    </Card.Text>
                    <ButtonGroup>
                      <Link
                        className="link"
                        to="https://marianapadelin.github.io/bsas2.github.io/"
                        target="_blank"
                      >
                        <Button variant="light">Visit the website</Button>
                      </Link>
                      <Link
                        className="link"
                        to="https://github.com/MarianaPadelin/bsas2.github.io"
                        target="_blank"
                      >
                        <Button variant="light">View the website code</Button>
                      </Link>
                    </ButtonGroup>
                  </div>
                )}
              </div>
            )}
          </Card.Body>
        </Card>
      </CardGroup>

      <ScrollToTop smooth />
    </div>
  );
};

export default Experiencia;
