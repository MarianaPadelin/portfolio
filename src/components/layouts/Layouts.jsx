import { Outlet } from "react-router-dom";
import NavbarContainer from "./navbar/Navbar.jsx";
// import Footer from "./footer/Footer.jsx";
import { Paper } from "@mui/material";
import NavbarENG from "./navbar/NavbarENG.jsx";
import { useContext } from "react";
import { IdiomaContext } from "../../context/IdiomaContext";

const Layouts = () => {
    const { idioma } = useContext(IdiomaContext);
  
  return (
    <>
      <Paper elevation={10}>
        {idioma ? <NavbarContainer /> : <NavbarENG />}
      </Paper>

      <Outlet />

      {/* <Footer /> */}
    </>
  );
};

export default Layouts;
