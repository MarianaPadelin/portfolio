import { Link } from "react-router-dom"
import "./Estudios.css"
const Estudios = () => {
  return (
    <div className="estudios">
      <Link className="linkCertificado" to="/backend">
        <b>2024</b>
        <img
          title="Ver más información"
          className="certificados"
          src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1716302673/certificados/663248d96a0b85d346f657d1_1_gegddt.png"
        ></img>
      </Link>
      <Link className="linkCertificado" to="/react">
        <b>2023</b>
        <img
          title="Ver más información"
          className="certificados"
          src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1716302714/certificados/64b10cd921cc7b0002d16d73_n97twl.png"
        ></img>
      </Link>

      <Link className="linkCertificado" to="/javascript">
        <b>2023</b>
        <img
          title="Ver más información"
          className="certificados"
          src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1716302706/certificados/6453725464a952000263adbc_mpmrvh.png"
        ></img>
      </Link>

      <Link className="linkCertificado" to="/fullstack">
        <b>2023</b>
        <img
          title="Ver más información"
          className="certificados"
          src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1716303789/certificados/Captura_de_pantalla_2024-05-21_120236_tbm88z.png"
        ></img>
      </Link>
      <Link className="linkCertificado" to="/sql">
        <b>Actualmente cursando</b>
        <img
          title="Ver más información"
          className="certificados"
          src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1716304555/certificados/Captura_de_pantalla_2024-05-21_121520_lboplz.png"
        ></img>
      </Link>
    </div>
  );
}

export default Estudios