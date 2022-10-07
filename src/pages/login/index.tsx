import React from "react";
import { Container } from "react-bootstrap";
import FormLogin from "../../components/FormLogin";
import NavHeader from "../../components/NavHeader";

import "./index.css";

const imglogin = require("../../assets/img/imagelogin.png");

function Login() {
  return (
    <div>
      <NavHeader />
      <Container className="d-flex justify-content-center flex-wrap ">
        <img className="imglogin img-fluid" src={imglogin} alt="" />
        <FormLogin />
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
