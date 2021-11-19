import "./Footer.scss";
import React from "react";
import { Container } from "react-bootstrap";
import Logo from "../../assets/logo-white-txt-crop-100px.png";

function Footer() {
  return (
    <footer className="page-footer font-small blue pt-4">
      <Container>
        <div className="container-fluid text-center text-md-left">
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              {/* <h5 className="text-uppercase">Gamer's Den</h5> */}
              <img src={Logo} alt="Logo" />
              <p>
                Get the latest updates on games that you like from here. Never
                miss out on new info for the things you love.
              </p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0" />

            <div className="col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase">Links</h5>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase">Links</h5>
            </div>
          </div>
        </div>

        <div className="footer-copyright text-center py-3">
          {`Copyright © Gamer's Den ${new Date().getFullYear()}`}
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
