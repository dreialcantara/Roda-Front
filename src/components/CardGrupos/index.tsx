import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";

import "./index.css";

const livroicon = require("../../assets/img/livroicon.png");
const membrosicon = require("../../assets/img/membrosicon.png");

function CardGrupos() {
  return (
    <Card
      className="cardgrupos rounded-5"
      border="light"
      style={{ width: "100%", height: "12rem" }}
    >
      <Row className="mt-4 gx-0 ">
        <Col className="text-left headercardgrupos" md={6} xs={7}>
          <div className="titulocardgrupo">Nome do Grupo</div>
          <div className="labelgrupo rounded-5 d-flex justify-content-center">
            LABEL
          </div>
        </Col>
        <Col
          className="encontrocard flex-wrap rounded-start text-dark bg-light d-flex justify-content-center align-items-center"
          md={4}
          xs={3}
        >
          Próximo encontro
        </Col>
        <Col
          className="encontrocard bg-danger d-flex justify-content-center align-items-center"
          md={2}
          xs={2}
        >
          10/10
        </Col>
      </Row>
      <Card.Body>
        <Row className="footercardgrupo mt-5">
          <Card.Text>
            <img src={livroicon} alt="" /> Livro (Capítulo #)
          </Card.Text>
        </Row>
        <Row className="footercardgrupo2">
          <Col>
            <Card.Text>
              <img src={membrosicon} alt="" /> # membros
            </Card.Text>
          </Col>
          <Col>última atividade há x dias atrás</Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default CardGrupos;
