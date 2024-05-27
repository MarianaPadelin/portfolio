import { Button } from "react-bootstrap";
import "./About.css"
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="divImagen">
        <img
          className="imgAbout"
          src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1716212310/foto_de_perfil_xot1ub.jpg"
        ></img>
      </div>

      <p className="info">
        Doy clases particulares desde 2014 para el instituto Clases del Norte. 
        <br/> 
        Específicamente en
        las materias matemática, física, química y biología. Para ingresos universitarios, CBC y nivel secundario.
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
      </p>
      <div id="cv">
        <Link className="link" to="https://drive.google.com/file/d/1HD9NyQgFBy2Xe-3NEBoIXLw89sOPNNi9/view?usp=sharing" target="_blank">
          <img className="imgcv" src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1716477075/certificados/Captura_de_pantalla_2024-05-23_121006_r2mk70.png" />
        </Link>

        <Link to="https://www.linkedin.com/in/mariana-padelin/" target="_blank">
          <Button variant="secondary"> Ir a mi perfil de linkedin</Button>
        </Link>
      </div>
    </div>
  );
}

export default About