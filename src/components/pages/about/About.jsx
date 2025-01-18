import { Button } from "react-bootstrap";
import "./About.css";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import { useContext } from "react";
import { IdiomaContext } from "../../../context/IdiomaContext";

const About = () => {
  const { idioma } = useContext(IdiomaContext);
  return (
    <div>
      <div className="fondo">
        <div className="subtitle">
          {idioma ? (
            <h1>
              <i>SOBRE MI</i>
            </h1>
          ) : (
            <h1>
              <i>ABOUT ME</i>
            </h1>
          )}
        </div>
        {idioma ? (
          <div className="info">
            <p>
              Doy clases particulares desde 2014 para el instituto Clases del
              Norte.
              <br />
              Específicamente en las materias matemática, física, química y
              biología. Para ingresos universitarios, CBC y nivel secundario.
              <br />
              Preparo alumnos para los exámenes internacionales IGCSE y IB, de
              las materias ya mencionadas.
              <br />
              Soy profesora de danza desde 2017.
              <br />
              En 2023 me adentré en el mundo de la programación, hice diferentes
              cursos tanto de front end como de back end. Luego, en 2024,
              completé la carrera de programación fullstack en Coderhouse.
              <br />
              En cuanto a modalidad de trabajo soy muy metódica y extremadamente
              responsable. Aprendo rápidamente.
              <br />
              Mi objetivo es poder trabajar en el ámbito de programación.
              <br />
              Principalmente busco un trabajo con estabilidad horaria y
              salarial.
              <br />
              Me gusta todo lo que tenga que ver con la lógica y me resulta muy
              interesante todo lo que he aprendido en programación.
              <br />
              <hr />
              <Link
                to="https://www.linkedin.com/in/mariana-padelin/"
                target="_blank"
              >
                <Button variant="light"> Ir a mi perfil de LinkedIn</Button>
              </Link>
              <br />
              <Link
                to="https://www.salesforce.com/trailblazer/xaqss9vlrxj7dym4fq"
                target="_blank"
              >
                <Button className="boton2" variant="light">
                  Ir a mi perfil de Salesforce
                </Button>
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
        ) : (
          <div className="info">
            <p>
              I&apos;ve been working for a tutoring institute called Clases del
              Norte since 2013.
              <br />
              I specialize in Maths, Physics, Chemistry, English and Biology.
              <br />
              I prepare students for university admission exams, and for high
              school intenational exams such as ICGSE, IB and FCE.
              <br />
              I&apos;m also a dance professor since 2017.
              <br />
              I have started learning programming in 2023, by doing different
              courses in backend and front end, and then completed a fullstack
              career in Coderhouse in 2024.
              <br />
              Regarding my working methods, I&apos;m very methodic and extremely
              responsible. I&apos;m a fast learner and I&apos;m driven by logic.
              <br />
              My objective is working in a programming environment, with
              financial stability and a fixed schedule.
              <hr />
              <Link
                to="https://www.linkedin.com/in/mariana-padelin/"
                target="_blank"
              >
                <Button variant="light">Visit my LinkedIn profile</Button>
              </Link>
              <br />
              <Link
                to="https://www.salesforce.com/trailblazer/xaqss9vlrxj7dym4fq"
                target="_blank"
              >
                <Button className="boton2" variant="light">
                  Visit my Salesforce profile
                </Button>
              </Link>
            </p>
            <Link
              className="cv"
              to="https://res.cloudinary.com/dvxkjikvk/image/upload/v1737242021/certificados/CV_may_2024_ENG_xfzlig.jpg"
              target="_blank"
            >
              <img
                className="imgcv"
                src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1737242021/certificados/CV_may_2024_ENG_xfzlig.jpg"
              />
            </Link>
          </div>
        )}
      </div>

      <ScrollToTop smooth />
    </div>
  );
};

export default About;
