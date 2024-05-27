import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import "./Footer.css";

function Footer() {
  return (
    <Container>
      <Navbar sticky="bottom" expand="md" className="bg-body-primary">
        <Container className="containerFooter">
          <Link className="text" to="/" title="Ir a home">
            <Navbar.Brand>
              <b style={{ color: "black" }}>Mariana Padelin</b>
            </Navbar.Brand>
          </Link>

          <b>Contacto:</b>

          <span className="contacto">
            <Link
              to="https://mail.google.com/mail/?view=cm&to=marianapadelin@gmail.com"
              className="text"
              target="_blank"
              title="Enviar email"
            >
              <EmailOutlinedIcon /> marianapadelin@gmail.com
            </Link>
          </span>
          <Link
            to="https://wa.me/541169550440?text=Buenos días. Vi tu portfolio y estoy interesado en información sobre"
            target="_blank"
            className="link"
            title="Enviar whatsapp"
          >
            <span className="contacto">
              <WhatsAppIcon />
              1169550440
            </span>
          </Link>
        </Container>
      </Navbar>
    </Container>
  );
}

export default Footer;
