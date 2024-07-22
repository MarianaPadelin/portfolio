import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navbar.css"
import { Link } from "react-router-dom";

function NavbarContainer() {
  return (
    <Navbar expand="md" className="nv-bg" >
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
            <Link className="text" to="/estudios">
              Estudios
            </Link>
            <Link className="text" to="/herramientas">
              Herramientas
            </Link>
            <Link className="text" to="/experiencia">
              Experiencia
            </Link>
            <Link className="text" to="/about">
              Sobre mi
            </Link>
            <Link className="text" to="/contacto">
              Contacto
            </Link>
            {/* <img
              className="icono"
              src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1716835609/iconos%20tools/pngwing.com_6_fio2zz.png"
              title="Español"
            />
            <img
              className="icono"
              src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1716835607/iconos%20tools/pngwing.com_7_wmfy4t.png"
              title="English"
            /> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarContainer;

