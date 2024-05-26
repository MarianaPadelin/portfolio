import NavbarContainer from "../layouts/navbar/Navbar"
import Footer from "../layouts/footer/Footer"
import "./Home.css"
import { Box, Chip, Divider, List, ListItem, ListItemIcon, ListItemText } from "@mui/material"
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArticleIcon from "@mui/icons-material/Article";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="header">
        <div className="presentacion">
          <p className="titulo">Full stack developer.</p>
          <br />
          <span className="iconosContacto">
            <Link
              className="link"
              to="https://www.linkedin.com/in/mariana-padelin/"
            >
              <LinkedInIcon
                sx={{ backgroundColor: "transparent" }}
                fontSize="large"
                titleAccess="Ver linkedin"
              />
            </Link>
            <Link
              className="link"
              to="https://drive.google.com/file/d/1HD9NyQgFBy2Xe-3NEBoIXLw89sOPNNi9/view?usp=sharing"
            >
              <ArticleIcon
                sx={{ backgroundColor: "transparent" }}
                fontSize="large"
                titleAccess="Ver CV"
              />
            </Link>
            <Link to="./contacto" className="link">
              <EmailIcon
                sx={{ backgroundColor: "transparent" }}
                fontSize="large"
                titleAccess="Enviar email"
              />
            </Link>

            <Link
              to="https://wa.me/541169550440?text=Buenos días. Vi tu portfolio y estoy interesado en información sobre"
              target="_blank"
              className="link"
            >
              <WhatsAppIcon
                sx={{ backgroundColor: "transparent" }}
                fontSize="large"
                titleAccess="Enviar whatsapp"
              />
            </Link>
          </span>
        </div>
      </div>
      <NavbarContainer />

      <div className="subtitle">
        <i>
          <h3>HERRAMIENTAS UTILIZADAS:</h3>
        </i>
      </div>

      <Box className="boxTools">
        <Divider>
          <Chip label="BÁSICOS" variant="outlined" />
        </Divider>
        <List className="lista">
          <ListItem>
            <ListItemIcon>
              <img
                className="icono"
                src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1716573808/iconos%20tools/html_zymjen.png"
              />
            </ListItemIcon>
            <ListItemText className="toolText" primary="HTML" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <img
                className="icono"
                src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1716573809/iconos%20tools/javascript_ssw83v.png"
              />
            </ListItemIcon>
            <ListItemText primary="JavaScript" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <img
                className="icono"
                src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1716573806/iconos%20tools/git_gev1f2.png"
              />
            </ListItemIcon>
            <ListItemText primary="Git" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <img
                className="icono"
                src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1716573796/iconos%20tools/react_jemrmm.png"
              />
            </ListItemIcon>
            <ListItemText primary="React JS" />
          </ListItem>
        </List>

        <Divider>
          <Chip label="BACKEND" variant="outlined" />
        </Divider>
        <List className="lista">
          <ListItem>
            <ListItemIcon>
              <img
                className="icono"
                src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1716573795/iconos%20tools/node_yjrxzn.png"
              />
            </ListItemIcon>
            <ListItemText primary="Node JS" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <img
                className="icono"
                src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1716573795/iconos%20tools/postman_yc7oyc.png"
              />
            </ListItemIcon>
            <ListItemText primary="Postman" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <img
                className="icono"
                src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1716573804/iconos%20tools/express_nrck6e.png"
              />
            </ListItemIcon>
            <ListItemText primary="Express" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <img
                className="icono"
                src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1716573800/iconos%20tools/websockets_g8xttx.png"
              />
            </ListItemIcon>
            <ListItemText primary="Websockets" />
          </ListItem>
        </List>
        <Divider>
          <Chip label="DATABASE" variant="outlined" />
        </Divider>
        <List className="lista">
          <ListItem>
            <ListItemIcon>
              <img
                className="icono"
                src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1716573806/iconos%20tools/mongo_ke61ml.png"
              />
            </ListItemIcon>
            <ListItemText primary="Mongo DB" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <img
                className="icono"
                src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1716573805/iconos%20tools/firebase_z8zaja.png"
              />
            </ListItemIcon>
            <ListItemText primary="Firebase" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <img
                className="icono"
                src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1716573811/iconos%20tools/mysql_atxmqs.png"
              />
            </ListItemIcon>
            <ListItemText primary="MySQL" />
          </ListItem>
        </List>
        <Divider>
          <Chip label="ESTÉTICOS" variant="outlined" />
        </Divider>
        <List className="lista">
          <ListItem>
            <ListItemIcon>
              <img
                className="icono"
                src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1716573803/iconos%20tools/css_ehd6zs.png"
              />
            </ListItemIcon>
            <ListItemText primary="CSS" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <img
                className="icono"
                src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1716573802/iconos%20tools/bootstrap_y9tqqk.png"
              />
            </ListItemIcon>
            <ListItemText primary="Bootstrap" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <img
                className="icono"
                src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1716573797/iconos%20tools/react-bootstrap_k2it21.png"
              />
            </ListItemIcon>
            <ListItemText primary="React Bootstrap" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <img
                className="icono"
                src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1716574843/iconos%20tools/mui_t6eqrc.png"
              />
            </ListItemIcon>
            <ListItemText primary="Mui Material" />
          </ListItem>
        </List>
        <Divider>
          <Chip label="DEPLOYS" variant="outlined" />
        </Divider>
        <List className="lista">
          <ListItem>
            <ListItemIcon>
              <img
                className="icono"
                src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1716573796/iconos%20tools/railway_ni9cgm.png"
              />
            </ListItemIcon>
            <ListItemText primary="Railway App" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <img
                className="icono"
                src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1716573799/iconos%20tools/vercel_uvbqin.png"
              />
            </ListItemIcon>
            <ListItemText primary="Vercell" />
          </ListItem>
        </List>
        <Divider>
          <Chip label="DOCUMENTACIÓN" variant="outlined" />
        </Divider>
        <List className="lista">
          <ListItem>
            <ListItemIcon>
              <img
                className="icono"
                src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1716573798/iconos%20tools/swagger_hwahlu.png"
              />
            </ListItemIcon>
            <ListItemText primary="Swagger" />
          </ListItem>
        </List>
        <Divider>
          <Chip label="PLATAFORMAS DE PAGO" variant="outlined" />
        </Divider>
        <List className="lista">
          <ListItem>
            <ListItemIcon>
              <img
                className="icono"
                src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1716573798/iconos%20tools/stripe_dqf9vq.png"
              />
            </ListItemIcon>
            <ListItemText primary="Stripe" />
          </ListItem>
        </List>
      </Box>

      <Footer />
    </div>
  );
}

export default Home