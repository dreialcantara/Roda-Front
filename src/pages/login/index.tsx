import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import FormLogin from "../../components/FormLogin";
import NavHeaderLogin from "../../components/NavHeaderLogin";

import "./index.css";

const imglogin = require("../../assets/img/imagelogin.png");

function Login() {
  return (
    <div>
      <NavHeaderLogin />
      <Container className="d-flex justify-content-center flex-wrap ">
        <img className="imglogin img-fluid mt-4" src={imglogin} alt="" />
        <FormLogin />
      </Container>
      <Row className="w-100">
        <Col className=" col-5"></Col>
        <Col className=" col-7">
          <ul className="footerlogingroup">
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
        </Col>
      </Row>
    </div>
  );
}

export default Login;
