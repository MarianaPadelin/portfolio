import { Link } from "react-router-dom"
import "./Estudios.css"
import ScrollToTop from "react-scroll-to-top";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
// import ExampleCarouselImage from "components/ExampleCarouselImage";
const Estudios = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="estudios">
      <div className="subtitle">
        <h1>
          <i>CERTIFICADOS OBTENIDOS</i>
        </h1>
      </div>

      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <Link className="linkCertificado" to="/backend">
            <img
              title="Ver más información"
              className="certificados"
              src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1716302673/certificados/663248d96a0b85d346f657d1_1_gegddt.png"
              alt="First slide"
            />

          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link className="linkCertificado" to="/sql">
            <img
              title="Ver más información"
              className="certificados"
              src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1721164551/certificados/Certificado_sql_meigso.png"
              alt="Second slide"
            />
 
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link className="linkCertificado" to="/react">
            <img
              title="Ver más información"
              className="certificados"
              src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1716302714/certificados/64b10cd921cc7b0002d16d73_n97twl.png"
              alt="Third slide"
            />
         
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link className="linkCertificado" to="/javascript">
            <img
              title="Ver más información"
              className="certificados"
              src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1716302706/certificados/6453725464a952000263adbc_mpmrvh.png"
            ></img>
           
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link className="linkCertificado" to="/fullstack">
            <img
              title="Ver más información"
              className="certificados"
              src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1716303789/certificados/Captura_de_pantalla_2024-05-21_120236_tbm88z.png"
            ></img>
           
          </Link>
        </Carousel.Item>
        
      </Carousel>

    
      <ScrollToTop smooth />
    </div>
  );
}

export default Estudios