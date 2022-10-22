import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../store";
import { removeUser } from "../../store/modules/user";

import "./index.css";
import { NavDropdown } from "react-bootstrap";

const logo = require("../../assets/img/Logo.png");
const grupoicon = require("../../assets/img/grupoicon.png");
const chaticon = require("../../assets/img//chaticon.png");
const notificationicon = require("../../assets/img/notificationicon.png");
const sairvetor = require("../../assets/img/sairvetor.png");

function NavHeader() {
  const user = useSelector((store: RootStore) => store);
  const dispatch = useDispatch();

  function logintimeout() {
    setTimeout(() => {
      window.location.pathname = "/";
    }, 2000);
  }

  const sair = async (event: any) => {
    dispatch(removeUser());
    logintimeout();
  };

  function pageperfil() {
    window.location.pathname = "/perfil";
  }

  return (
    <Navbar sticky="top" className=" p-1">
      <Container className=" ">
        <div>
          <Navbar.Brand href="/feed" className="d-flex align-items-center">
            <img src={logo} alt="" className="img-fluid " />
            <div className="textologo">Roda</div>
          </Navbar.Brand>
        </div>
        <div className="w-25">
          {" "}
          <Form className="formpesquisa text-center">
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
            <div className="gruponav px-2">
              <Nav.Link href="#">
                <img src={grupoicon} alt="" />
              </Nav.Link>
            </div>
            <div className="chatnav px-2">
              {" "}
              <Nav.Link href="#">
                <img src={chaticon} alt="" />
              </Nav.Link>
            </div>
            <div className="notificationnav px-2">
              {" "}
              <Nav.Link href="#">
                <img src={notificationicon} alt="" />
              </Nav.Link>
            </div>{" "}
            <Nav.Link>
              <NavDropdown
                align="end"
                title={
                  <img
                    className="dropdown-toggle fotoheader rounded-5 w-25 img-fluid"
                    src={user.imgurl}
                    alt=""
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  />
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item onClick={pageperfil}>Perfil</NavDropdown.Item>
                <NavDropdown.Item href="#">Configurações</NavDropdown.Item>
                <NavDropdown.Item onClick={sair}>
                  <img className="mx-2" src={sairvetor} alt="" />
                  Sair
                </NavDropdown.Item>
              </NavDropdown>
            </Nav.Link>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavHeader;
