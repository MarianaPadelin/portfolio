import { Outlet } from "react-router-dom";
import NavbarContainer from "./navbar/Navbar.jsx";
import Footer from "./footer/Footer.jsx";
import { Paper } from "@mui/material";

const Layouts = () => {
  return (
    <>
      <Paper elevation={10}>
        <NavbarContainer />
      </Paper>

      <Outlet />

      <Footer />
    </>
  );
};

export default Layouts;
