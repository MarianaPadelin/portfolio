import { Link } from "react-router-dom";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import "./Contacto.css"
import { useContext } from "react";
import { IdiomaContext } from "../../../context/IdiomaContext";

const Contacto = () => {

  const { idioma } = useContext(IdiomaContext)
  return (
    <div>
      <div className="presentacion">
        {idioma ? (
          <h1>
            <i>MEDIOS DE CONTACTO</i>
          </h1>
        ) : (
          <h1>
            <i>CONTACT INFORMATION</i>
          </h1>
        )}
        <hr />

        <div className="medios">
          <Link
            to="https://mail.google.com/mail/?view=cm&to=marianapadelin@gmail.com"
            className="link"
            target="_blank"
            title="Enviar email"
          >
            <span className="email">
              <EmailOutlinedIcon /> marianapadelin@gmail.com
            </span>
          </Link>
          <Link
            to="https://wa.me/541169550440?text=Buenos días. Vi tu portfolio y estoy interesado en información sobre"
            target="_blank"
            className="link"
            title="Enviar whatsapp"
          >
            <span>
              <WhatsAppIcon />
              1169550440
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contacto