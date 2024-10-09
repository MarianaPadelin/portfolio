import NavbarContainer from "../layouts/navbar/Navbar";
import "./Home.css";
import {
 
  Paper,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArticleIcon from "@mui/icons-material/Article";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Paper elevation={10}>
        <NavbarContainer />
      </Paper>

      <div className="presentacion">
        <h1>
          <i>MARIANA PADELIN</i>
        </h1>
        <p className="typewriter">Full stack developer.</p>
        <br />
        <span className="iconosContacto">
          <Link
            className="link"
            to="https://www.linkedin.com/in/mariana-padelin/"
            target="_blank"
          >
            <LinkedInIcon
              sx={{ backgroundColor: "transparent" }}
              fontSize="large"
              titleAccess="Ver linkedin"
            />
          </Link>
          <Link
            className="link"
            to="https://drive.google.com/file/d/19kaODTMbjLnP91uq910mlqjlflQcyjd_/view?usp=sharing"
            target="_blank"
          >
            <ArticleIcon
              sx={{ backgroundColor: "transparent" }}
              fontSize="large"
              titleAccess="Ver CV"
            />
          </Link>
          <Link
            to="https://mail.google.com/mail/?view=cm&to=marianapadelin@gmail.com"
            className="link"
            target="_blank"
          >
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
  );
};

export default Home;
