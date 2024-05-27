import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navbar.css"
import { Link } from "react-router-dom";

function NavbarContainer() {
  return (
    <Navbar expand="md" className="bg-body-primary">
      <Container className="navContainer">
        <Link className="text" to="/">
          <Navbar.Brand className="title">
            Portfolio Mariana Padelin
          </Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <img
            className="imgNavbar"
            src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1716212310/foto_de_perfil_xot1ub.jpg"
          />
          <Nav className="me-auto" id="navegadores">
            <Link className="text" to="/estudios">
              Estudios
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

            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarContainer;

