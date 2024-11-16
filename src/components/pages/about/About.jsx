import { Button } from "react-bootstrap";
import "./About.css";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";

const About = () => {
  return (
    <div>
      <div className="fondo">
        <div className="subtitle">
          <h1>
            <i>SOBRE MI</i>
          </h1>
        </div>
        <div className="info">
          <p>
            Doy clases particulares desde 2014 para el instituto Clases del
            Norte.
            <br />
            Específicamente en las materias matemática, física, química y
            biología. Para ingresos universitarios, CBC y nivel secundario.
            <br />
            Preparo alumnos para los exámenes internacionales IGCSE y IB, de las
            materias ya mencionadas.
            <br />
            Soy profesora de danza desde 2017.
            <br />
            En 2023 me adentré en el mundo de la programación, hice diferentes
            cursos tanto de front end como de back end.
            <br />
            En cuanto a modalidad de trabajo soy muy metódica y extremadamente
            responsable. Aprendo rápidamente.
            <br />
            Mi objetivo es poder trabajar en el ámbito de programación.
            <br />
            Principalmente busco un trabajo con estabilidad horaria y salarial.
            <br />
            Me gusta todo lo que tenga que ver con la lógica y me resulta muy
            interesante todo lo que he aprendido en programación.
            <br />
            <hr />
            <Link
              to="https://www.linkedin.com/in/mariana-padelin/"
              target="_blank"
            >
              <Button variant="light"> Ir a mi perfil de linkedin</Button>
            </Link>
            <br /> 
            <Link
              to="https://www.salesforce.com/trailblazer/xaqss9vlrxj7dym4fq"
              target="_blank"
            >
              <Button className="boton2" variant="light"> Ir a mi perfil de salesforce</Button>
            </Link>
          </p>
          <Link
            className="cv"
            to="https://res.cloudinary.com/dvxkjikvk/image/upload/v1731792076/certificados/Cv_noviembre_2024_vytrqu.png"
            target="_blank"
          >
            <img
              className="imgcv"
              src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1731792076/certificados/Cv_noviembre_2024_vytrqu.png"
            />
          </Link>
        </div>
      </div>

      <ScrollToTop smooth />
    </div>
  );
};

export default About;
