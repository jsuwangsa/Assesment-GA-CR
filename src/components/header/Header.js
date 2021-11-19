import "./Header.scss";
import { Container, Navbar } from "react-bootstrap";
import logo from "../../assets/logo-white-txt-crop-100px.png";

function Header() {
  return (
    <Navbar expand="lg" className="header">
      <Container>
        <Navbar.Brand>
          <img className="brand-logo" src={logo} alt="Logo" />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
