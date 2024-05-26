import { Link } from "react-router-dom"
import "./Experiencia.css"
import { Button } from "react-bootstrap";

const Experiencia = () => {
  return (
    <div className="experiencia">
      <h5>PROYECTO REAL</h5>
      <p>
        Trabajo freelance de front end realizado como única desarrolladora web,
        en conjunto con diseñadores y UX/UI. A partir de terminar el curso de
        React JS con la mejor calificación, desde Coderhouse me permitieron
        participar de este proyecto con un equipo de diseñadores. Página web
        realizada desde cero, en concordancia con los pedidos de nuestra
        cliente, la dueña de la marca UCHI.
        A continuación se muestra un screenshot de la landing page:
      </p>
      <Link
        className="link"
        to="https://uchi-three.vercel.app/"
        target="_blank"
      >
        <img
          title="Ir a la página"
          className="certificados"
          src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1716732753/screencapture-uchi-three-vercel-app-2024-05-26-11_11_58_d8auuv.png"
        />
        <Button variant="secondary">Visitar la página de UCHI</Button>
      </Link>
    </div>
  );
}

export default Experiencia