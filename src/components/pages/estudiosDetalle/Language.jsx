import { Link } from "react-router-dom";
import "./EstudiosDetalle.css";
import { useContext } from "react";
import { IdiomaContext } from "../../../context/IdiomaContext";

const Language = () => {
    const { idioma } = useContext(IdiomaContext);

  return (
    <>
      {idioma ? (
        <div className="estudioDetalle">
          <p className="textoDetalle">
            Certificado emitido por goFLUENT en marzo 2025 que establece un
            nivel de inglés C1
          </p>
          <a
            href="https://res.cloudinary.com/dvxkjikvk/image/upload/v1751572034/certificados/Mariana_Padelin_Certificate_of_Language_Proficiency_full_version_vlmgei.pdf"
            target="_blank"
          >
            Ver el informe detallado de goFLUENT
          </a>
          <Link className="link" to="../estudios">
            Volver al listado de certificaciones
          </Link>
        </div>
      ) : (
        <div className="estudioDetalle">
          <p className="textoDetalle">
            Certificate issued by goFLUENT in March 2025 attesting to a C1 level
            of English proficiency
          </p>
          <a
            href="https://res.cloudinary.com/dvxkjikvk/image/upload/v1751572034/certificados/Mariana_Padelin_Certificate_of_Language_Proficiency_full_version_vlmgei.pdf"
            target="_blank"
          >
            See the detailed report of competences
          </a>
          <Link className="link" to="../estudios">
            Go back to the certifications list
          </Link>
        </div>
      )}
    </>
  );
};

export default Language;
