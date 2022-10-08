import React from "react";
import { Container } from "react-bootstrap";
import FormCadastro from "../../components/FormCadastro";
import NavHeaderLogin from "../../components/NavHeaderLogin";

import "./index.css";

const imglogin = require("../../assets/img/imagelogin.png");

function Login() {
  return (
    <div>
      <NavHeaderLogin />
      <Container className="d-flex justify-content-center flex-wrap">
        <img className="imglogin img-fluid mt-4" src={imglogin} alt="" />
        <FormCadastro />
      </Container>
      <ul>
        <li>
          <a className="footerlogin" href="/">
            Termos de uso
          </a>
        </li>
        <li>
          {" "}
          <a className="footerlogin" href="/">
            Fale Conosco
          </a>
        </li>
        <li>
          <a className="footerlogin" href="/">
            Sobre
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Login;
