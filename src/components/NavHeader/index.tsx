import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";

import "./index.css";

const logo = require("../../assets/img/Logo.png");
const grupoicon = require("../../assets/img/grupoicon.png");
const chaticon = require("../../assets/img//chaticon.png");
const notificationicon = require("../../assets/img/notificationicon.png");
const fotoperfilicon = require("../../assets/img/fotoperfilicon.png");

function NavHeader() {
  return (
    <Navbar sticky="top" className=" p-1">
      <Container className=" ">
        <div>
          <Navbar.Brand href="/teste" className="d-flex align-items-center">
            <img src={logo} alt="" className="img-fluid " />
            <div className="textologo">Roda</div>
          </Navbar.Brand>
        </div>
        <div className="w-25">
          {" "}
          <Form className="text-center">
            <Form.Control
              type="search"
              placeholder="         Pesquisar livros, grupos e usuários"
              className="me-2 rounded-5"
              aria-label="Search"
            />
          </Form>
        </div>
        <div className="">
          {" "}
          <Nav className="align-items-center justify-content-between">
            <div className="px-2">
              <Nav.Link href="#home">
                <img src={grupoicon} alt="" />
              </Nav.Link>
            </div>
            <div className="px-2">
              {" "}
              <Nav.Link href="#features">
                <img src={chaticon} alt="" />
              </Nav.Link>
            </div>
            <div className="px-2">
              {" "}
              <Nav.Link href="#pricing">
                <img src={notificationicon} alt="" />
              </Nav.Link>
            </div>
            <div className="px-2">
              {" "}
              <Nav.Link href="#pricing" className="">
                <img className="img-fluid" src={fotoperfilicon} alt="" />
              </Nav.Link>
            </div>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavHeader;
