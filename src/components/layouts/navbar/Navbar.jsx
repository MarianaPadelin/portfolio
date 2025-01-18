import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css"
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { useContext } from "react";
import { IdiomaContext } from "../../../context/IdiomaContext";
import { NavDropdown } from "react-bootstrap";
function NavbarContainer() {

    const { handleSpanish, handleEnglish } = useContext(IdiomaContext);
  
  return (
    <Navbar expand="md" className="nv-bg">
      <Container className="navContainer">
        <Link className="text" to="/" title="Ir a home">
          <Navbar.Brand className="title">
            Portfolio Mariana Padelin
            <img
              className="imgNavbar"
              src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1716212310/foto_de_perfil_xot1ub.jpg"
            />
          </Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" id="navegadores">
            <Link className="text navIt" to="/estudios">
              Estudios
            </Link>
            <Link className="text navIt" to="/herramientas">
              Herramientas
            </Link>
            <Link className="text navIt" to="/experiencia">
              Experiencia
            </Link>
            <Link className="text navIt" to="/about">
              Sobre mi
            </Link>
            <Link className="text navIt" to="/contacto">
              Contacto
            </Link>
            <NavDropdown title="Idioma" className="text navIt" menuVariant="dark">
              <Button onClick={handleSpanish}>
                <img
                  className="icono"
                  src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1716835609/iconos%20tools/pngwing.com_6_fio2zz.png"
                  title="Español"
                />
              </Button>
              <Button onClick={handleEnglish}>
                <img
                  className="icono"
                  src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1716835607/iconos%20tools/pngwing.com_7_wmfy4t.png"
                  title="English"
                />
              </Button>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarContainer;

