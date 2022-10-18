import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import {format, formatDistanceToNow, parse, parseISO} from 'date-fns'


import "./index.css";
import { useEffect } from "react";

const livroicon = require("../../assets/img/livroicon.png");
const membrosicon = require("../../assets/img/membrosicon.png");
const gbLocale = require("date-fns/locale/en-GB");

type CarrosselGruposType = {
  name: string;
  books: string;
  key?: number;
  updated_at : string;
};



function CardGrupos(props: CarrosselGruposType) {
  const dateformat = new Date(props.updated_at).toLocaleDateString("en-GB");

 // const datedif = formatDistanceToNow(dateformat);






  return (
    <Card
      className="cardgrupos rounded-5"
      border="light"
      style={{ width: "100%", height: "12rem" }}
    >
      <Row className="mt-4 gx-0 ">
        <Col className="text-left headercardgrupos" md={6} xs={7}>
          <div className="titulocardgrupo">{props.name}</div>
          <div className="labelgrupo rounded-5 d-flex justify-content-center">
            LABEL
          </div>
        </Col>
        <Col
          className="d-none encontrocard flex-wrap rounded-start text-dark bg-light d-flex justify-content-center align-items-center"
          md={4}
          xs={3}
        >
          <div className=" date-gcard-txt">Próximo encontro</div>
        </Col>
        <Col
          className="d-none encontrocard bg-danger d-flex justify-content-center align-items-center"
          md={2}
          xs={2}
        >
          10/10
        </Col>
      </Row>
      <Card.Body>
        <Row className="footercardgrupo mt-5">
          <Card.Text>
            <img src={livroicon} alt="" />
            {props.books}
          </Card.Text>
        </Row>
        <Row className="footercardgrupo2 justify-content-between mt-2">
          <Col>
            <Card.Text>
              <img src={membrosicon} alt="" /> # membros
            </Card.Text>
          </Col>
          <Col className="text-end">última atualização: {dateformat}</Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default CardGrupos;
