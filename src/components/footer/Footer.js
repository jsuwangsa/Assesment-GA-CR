import "./Footer.scss";
import React from "react";
import { Container } from "react-bootstrap";
import Logo from "../../assets/logo-white-txt-crop-100px.png";
import Google from "../../assets/GP.png";
import App from "../../assets/AP.png";

function Footer() {
  return (
    <footer className="page-footer font-small blue pt-4">
      <Container>
        <div className="container-fluid text-center text-md-left">
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <img src={Logo} alt="Logo" />
              <p>
                Get the latest updates on games that you like from here. Never
                miss out on new info for the things you love.
              </p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0" />

            <div className="col-md-3 mb-md-0 mb-3">
              <ul>
                <li>About us</li>
                <li>Contact us</li>
                <li>Career</li>
              </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
              <h6 className="text-uppercase">Downloads</h6>
              <div className="store">
                <a
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="imageGoogle"
                    src={Google}
                    alt="Google Playstore"
                  />
                </a>
                <a
                  href="https://www.apple.com/id/app-store/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="imageApp" src={App} alt="Apple Appstore" />
                </a>
              </div>
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
