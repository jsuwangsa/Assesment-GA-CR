import "./Header.scss";
import { Container, Navbar } from "react-bootstrap";
import logo from "../../assets/logo-white-txt-crop-100px.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar expand="lg" className="header">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img className="brand-logo" src={logo} alt="Logo" />
          </Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
