import { Button } from "react-bootstrap"
import NavbarContainer from "../layouts/navbar/Navbar"
import Footer from "../layouts/footer/Footer"
import "./Home.css"

const Home = () => {
  return (
    <div>
      <div
        className="header"
        
      ></div>
      <NavbarContainer />
      <Button> Contenido </Button>
      <Footer />
    </div>
  );
}

export default Home