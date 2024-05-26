import { Link } from "react-router-dom";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import "./Contacto.css"
import TextField from "@mui/material/TextField";
import { Button } from "react-bootstrap";
import { Box } from "@mui/material";

const Contacto = () => {
  return (
    <div>
      <div className="tituloContacto">
        <h3>Ante cualquier consulta estoy a disposición</h3>
        <h5>Medios de contacto:</h5>
      </div>

      <div className="medios">
        <span>
          <EmailOutlinedIcon /> marianapadelin@gmail.com
        </span>
        <Link
          to="https://wa.me/541169550440?text=Buenos días. Vi tu portfolio y estoy interesado en información sobre"
          target="_blank"
          className="link"
        >
          <span>
            <WhatsAppIcon />
            1169550440
          </span>
        </Link>
      </div>

        <Box component="form" className="formulario">
          <h5>
            O si prefiere puede comunicarse a través del formulario y me
            contactaré a la brevedad:
          </h5>
          <TextField
            id="nombre"
            label="Nombre"
            color="secondary"
            variant="outlined"
            helperText="Por favor ingrese su nombre"
          />
          <TextField
            id="celContacto"
            label="Celular"
            color="secondary"
            variant="outlined"
            helperText="Ingrese el celular al que me comunicaré"
          />
          <TextField
            id="emailContacto"
            label="Email"
            color="secondary"
            type="email"
            variant="outlined"
            helperText="Ingrese el email al que me comunicaré"
          />
          <TextField
            id="consulta"
            label="Consulta"
            multiline
            color="secondary"
            variant="outlined"
            helperText="Ingrese su consulta"
          />
          <Button variant="secondary">Enviar consulta</Button>
        </Box>
    </div>
  );
}

export default Contacto