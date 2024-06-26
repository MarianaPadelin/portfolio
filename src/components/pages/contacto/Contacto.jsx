import { Link } from "react-router-dom";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import "./Contacto.css"

const Contacto = () => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <div className="tituloContacto">
        <h3>Ante cualquier consulta estoy a disposición</h3>
        <br />
        <h5>Medios de contacto:</h5>
      </div>

      <div className="medios">
        <Link
          to="https://mail.google.com/mail/?view=cm&to=marianapadelin@gmail.com"
          className="link"
          target="_blank"
          title="Enviar email"
        >
          <span>
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
  );
};

export default Contacto