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
    <Navbar sticky="top" className="">
      <Container className=" ">
        <div>
          <Navbar.Brand href="/">
            <img src={logo} alt="" /> {""}Roda
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
        <div>
          {" "}
          <Nav className="">
            <Nav.Link href="#home">
              <img src={grupoicon} alt="" />
            </Nav.Link>
            <Nav.Link href="#features">
              <img src={chaticon} alt="" />
            </Nav.Link>
            <Nav.Link href="#pricing">
              <img src={notificationicon} alt="" />
            </Nav.Link>
            <Nav.Link href="#pricing">
              <img src={fotoperfilicon} alt="" />
            </Nav.Link>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavHeader;
