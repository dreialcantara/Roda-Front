import React from "react";
import FormLogin from "../../components/FormLogin";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const imglogin = require("../../assets/img/imagelogin.png");

function TesteComponentes() {
  return (
    <div className="d-flex justify-content-center">
      <Container className="g-2">
        <Row className="">
          <Col sm={7} xs={6}>
            <img className="img-fluid" src={imglogin} alt="" />
          </Col>
          <Col className="" xs={8} md={4}>
            <FormLogin />
          </Col>
        </Row>
        <Row>
          <Col>
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
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TesteComponentes;
