import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";

import "./index.css";

const logo = require("../../assets/img/Logo.png");

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
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavHeader;
