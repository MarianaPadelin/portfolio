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
                src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1716748365/iconos%20tools/javascript_icon_130900_b7yysi.png"
              />
            </ListItemIcon>
            <ListItemText primary="JavaScript" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <img
                className="icono"
                src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1716748449/iconos%20tools/github_git_icon_145985_vfzldz.png"
              />
            </ListItemIcon>
            <ListItemText primary="Git" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <img
                className="icono"
                src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1716748497/iconos%20tools/react_original_logo_icon_146374_bm5lgl.png"
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
                src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1716748594/iconos%20tools/file_type_node_icon_130301_swtdjd.png"
              />
            </ListItemIcon>
            <ListItemText primary="Node JS" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <img
                className="icono"
                src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1716748702/iconos%20tools/postman_macos_bigsur_icon_189815_hua9th.png"
              />
            </ListItemIcon>
            <ListItemText primary="Postman" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <img
                className="icono"
                id="express"
                src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1716748973/iconos%20tools/express_nrck6e.png"
              />
            </ListItemIcon>
            <ListItemText primary="Express" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <img
                className="icono"
                src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1716749257/iconos%20tools/pngwing.com_ffhzyy.png"
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
                src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1716749967/iconos%20tools/pngwing.com_4_vhflc8.png"
              />
            </ListItemIcon>
            <ListItemText primary="Mongo DB" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <img
                className="icono"
                src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1716750053/iconos%20tools/pngwing.com_5_losolw.png"
              />
            </ListItemIcon>
            <ListItemText primary="Firebase" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <img
                className="icono"
                src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1716747726/iconos%20tools/mysql_wwybe7.png"
              />
            </ListItemIcon>
            <ListItemText primary="MySQL" />
          </ListItem>
        </List>
        <Divider>
          <Chip label="ESTILOS" variant="outlined" />
        </Divider>
        <List className="lista">
          <ListItem>
            <ListItemIcon>
              <img
                className="icono"
                src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1716748251/iconos%20tools/4202020css3htmllogosocialsocialmedia-115668_115633_uczfkc.png"
              />
            </ListItemIcon>
            <ListItemText primary="CSS" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <img
                className="icono"
                src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1716749371/iconos%20tools/pngegg_c1elui.png"
              />
            </ListItemIcon>
            <ListItemText primary="Bootstrap" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <img
                className="icono"
                src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1716749490/iconos%20tools/kisspng-bootstrap-react-software-framework-javascript-fron-5b0f9b1ae420f1.5052388715277494029344_kuc0w9.png"
              />
            </ListItemIcon>
            <ListItemText primary="React Bootstrap" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <img
                className="icono"
                src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1716749990/iconos%20tools/pngwing.com_3_po0gnz.png"
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
                src="https://res.cloudinary.com/dvxkjikvk/image/upload/v1716747657/iconos%20tools/1685814539stripe-icon-png_fhw5lq.png"
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