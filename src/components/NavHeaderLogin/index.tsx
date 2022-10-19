import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "./index.css";

const logo = require("../../assets/img/Logo.png");

const logoajuda = require("../../assets/img/logoajuda.png");

function NavHeader() {
  return (
    <Navbar sticky="top" className=" p-1">
      <Container className=" ">
        <div>
          <Navbar.Brand href="/" className="d-flex align-items-center">
            <img src={logo} alt="" className="img-fluid " />
            <div className="textologo">Roda</div>
          </Navbar.Brand>
        </div>

        <div className="">
          {" "}
          <Nav className="align-items-center justify-content-between">
            <div className="px-2">
              {" "}
              <Nav.Link
                href="#pricing"
                className="ajudatxt text-white d-flex flex-column align-items-center"
              >
                <img src={logoajuda} alt="" className="img-fluid w-60 mb-1" />
                Ajuda
              </Nav.Link>
            </div>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavHeader;
