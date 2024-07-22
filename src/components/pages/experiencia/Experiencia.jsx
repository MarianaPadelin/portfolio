import { Link } from "react-router-dom";
import "./Experiencia.css";
import { Button } from "react-bootstrap";
import ScrollToTop from "react-scroll-to-top";

const Experiencia = () => {
  return (
    <div className="experiencia">
      <h3><i>PROYECTOS DE REALIZACIÓN PROPIA</i></h3>
      <h4>PROYECTO REAL - UCHI</h4>
      <div className="info">
        <p>
          Trabajo freelance de front end realizado como única desarrolladora
          web, en conjunto con diseñadores y UX/UI. A partir de terminar el
          curso de React JS con la mejor calificación, desde Coderhouse me
          permitieron participar de este proyecto con un equipo de diseñadores.
          <br />
          Página web realizada desde cero, responsive, en concordancia con los
          pedidos de nuestra cliente, la dueña de la marca UCHI.
        </p>
      </div>
      <h5>A continuación se muestra un screenshot de la landing page:</h5>
      <Link
        className="link"
        to="https://uchi-three.vercel.app/"
        target="_blank"
      >
        <img
          title="Ir a la página"
          className="screenshots"
          src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1716732753/screencapture-uchi-three-vercel-app-2024-05-26-11_11_58_d8auuv.png"
        />
        <Button variant="secondary">Visitar la página de UCHI</Button>
      </Link>
      <Link
        className="link"
        to="https://github.com/MarianaPadelin/uchi.git"
        target="_blank"
      >
        <Button variant="secondary"> Ver el código de la página</Button>
      </Link>
      <br />
      <h4>E-COMMERCE - MGGM </h4>
      <div className="info">
        <p>
          Trabajo de e-commerce realizado en primera instancia como proyecto
          final del curso React JS en coderhouse.
          <br />
          Luego retomado en el curso de Backend en coderhouse, agregándole
          inicio de sesión, permisos para administrador, funcionalidad con API
          REST propia, chat en vivo, proceso de compra completo.
          <br />
          Sistema de envío de mails para tickets y notificaciones, etc.
        </p>
      </div>
      <h5>A continuación se muestra un screenshot de la landing page:</h5>

      <img
        title="Ir a la página"
        className="screenshots"
        src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1716750307/screencapture-proyectofinalfrontend-production-b4ee-up-railway-app-2024-05-26-16_04_06_qw0i2m.png"
      />

      <Link
        className="link"
        to="https://github.com/MarianaPadelin/ProyectoFinalFrontend.git"
        target="_blank"
      >
        <Button variant="secondary">
          Ver el código de frontend de la página
        </Button>
      </Link>
      <Link
        to="https://github.com/MarianaPadelin/ProyectoFinalBackend.git"
        className="link"
        target="_blank"
      >
        <Button variant="secondary">
          Ver el código de backend de la página
        </Button>
      </Link>

      <h4> PORTFOLIO - PROYECTO PERSONAL </h4>
      <div className="info">
        <p>
          Página responsive hecha en React JS, para consolidar lo aprendido y
          tener mis estudios y experiencias en un sólo lugar
        </p>
      </div>
      <img
        title="Ir a la página"
        className="screenshots"
        src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1721688482/desarrolloWeb/Captura_de_pantalla_2024-07-22_194726_zu9v1o.png"
      />
      <Link
        className="link"
        to="https://github.com/MarianaPadelin/portfolio.git"
        target="_blank"
      >
        <Button variant="secondary">Ver el código de esta página</Button>
      </Link>

      <ScrollToTop smooth />
    </div>
  );
};

export default Experiencia;
