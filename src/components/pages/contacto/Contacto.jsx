import { Link } from "react-router-dom";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import "./Contacto.css"
import TextField from "@mui/material/TextField";
import { Button } from "react-bootstrap";
// import { Box } from "@mui/material";

const Contacto = ({
  sendEmail,
  form,
  nombre,
  email,
  mensaje,
  setNombre,
  setEmail,
  setMensaje,
  celular
}) => {
  return (
    <div>
      <div className="tituloContacto">
        <h3>Ante cualquier consulta estoy a disposición</h3>
        <br />
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

      {/* <Box component="form" className="formulario"> */}
      <h5 className="tituloContacto">
        O si prefiere puede comunicarse a través del formulario y me contactaré
        a la brevedad:
      </h5>
      <form
        action="mailto:marianapadelin@gmail.com"
        method="post"
        ref={form}
        onSubmit={sendEmail}
        className="formulario"
      >
        <TextField
          id="nombre"
          name="nombre"
          label="Nombre"
          color="secondary"
          variant="outlined"
          helperText="Por favor ingrese su nombre"
          onChange={(event) => setNombre(event.target.value)}
          value={nombre}
        />
        <TextField
          id="celContacto"
          name="celular"
          label="Celular"
          color="secondary"
          variant="outlined"
          helperText="Ingrese el celular al que me comunicaré"
          onChange={(event) => setEmail(event.target.value)}
          value={celular}
        />
        <TextField
          id="emailContacto"
          name="email"
          label="Email"
          color="secondary"
          type="email"
          variant="outlined"
          helperText="Ingrese el email al que me comunicaré"
          onChange={(event) => setEmail(event.target.value)}
          value={email}
        />
        <TextField
          id="consulta"
          name="message"
          label="Consulta"
          multiline
          color="secondary"
          variant="outlined"
          helperText="Ingrese su consulta"
          onChange={(event) => setMensaje(event.target.value)}
          value={mensaje}
        />
        <Button 
        type="submit"
        value="send"
        variant="secondary">Enviar consulta</Button>
      </form>
      {/* </Box> */}
    </div>
  );
};

export default Contacto