import { Link } from "react-router-dom"
import "./Estudios.css"
import ScrollToTop from "react-scroll-to-top";
import { useContext, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { IdiomaContext } from "../../../context/IdiomaContext";
// import ExampleCarouselImage from "components/ExampleCarouselImage";
const Estudios = () => {
  const [index, setIndex] = useState(0);
  const { idioma } = useContext(IdiomaContext)

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="estudios">
      <div className="subtitle">
        {idioma ? (
          <h1>
            <i>CERTIFICADOS OBTENIDOS</i>
          </h1>
        ) : (
          <h1>
            <i>CERTIFICATES EARNED</i>
          </h1>
        )}
       
      </div>

      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <Link className="linkCertificado" to="/fullstackCoder">
            <img
              title="Ver más información"
              className="certificados"
              src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1731790308/certificados/66fb2c7d4622b238595bbcbd_xej19f.png"
              alt="First slide"
            />
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link className="linkCertificado" to="/webdevelopement">
            <img
              title="Ver más información"
              className="certificados"
              src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1731790313/certificados/66f8c20e4adcbaf26952930e_2_zgqokz.png"
              alt="Second slide"
            />
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link className="linkCertificado" to="/backend">
            <img
              title="Ver más información"
              className="certificados"
              src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1716302673/certificados/663248d96a0b85d346f657d1_1_gegddt.png"
              alt="Third slide"
            />
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link className="linkCertificado" to="/sql">
            <img
              title="Ver más información"
              className="certificados"
              src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1721164551/certificados/Certificado_sql_meigso.png"
              alt="Fourth slide"
            />
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link className="linkCertificado" to="/react">
            <img
              title="Ver más información"
              className="certificados"
              src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1716302714/certificados/64b10cd921cc7b0002d16d73_n97twl.png"
              alt="Fifth slide"
            />
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link className="linkCertificado" to="/javascript">
            <img
              title="Ver más información"
              className="certificados"
              src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1716302706/certificados/6453725464a952000263adbc_mpmrvh.png"
              alt="Sixth slide"
            ></img>
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link className="linkCertificado" to="/fullstack">
            <img
              title="Ver más información"
              className="certificados"
              src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1716303789/certificados/Captura_de_pantalla_2024-05-21_120236_tbm88z.png"
              alt="Seventh slide"
            ></img>
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link className="linkCertificado" to="/salesforce">
            <img
              title="Ver más información"
              className="certificados"
              src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1737242563/certificados/Captura_de_pantalla_2025-01-18_202225_fxq9mb.png"
              alt="Eight slide"
            ></img>
          </Link>
        </Carousel.Item>
      </Carousel>

      <ScrollToTop smooth />
    </div>
  );
}

export default Estudios