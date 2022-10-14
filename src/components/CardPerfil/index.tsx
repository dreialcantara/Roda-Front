import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useSelector } from "react-redux";
import { RootStore } from "../../store";

import "./index.css";

const vetorgrupos = require("../../assets/img/vetorgrupos.png");
const vetoramg = require("../../assets/img/vetoramg.png");

function CardPerfil() {
  const user = useSelector((store: RootStore) => store);

  return (
    <div className="mt-3 d-flex justify-content-center align-items-start">
      <Card className="cardperfil w-75">
        <Row>
          <Col md={4}>
            <img src={user.imgurl} className="imgperfil" alt="" />
          </Col>
          <Col md={8} className="d-flex flex-column justify-content-between ">
            {" "}
            <Row className="nomeusuario">
              {user.name}{" "}
              <button className=" botaoeditarperfil mx-5 rounded-5 h-75">
                Editar perfil
              </button>
            </Row>
            <Row className="d-flex flex-column justify-content-start">
              <Col className="textovetores">
                <img className="vetorcardperfil" src={vetoramg} alt="" /> 87
                Amigos
                <img
                  className="vetorcardgrupo rounded-circle"
                  src={vetorgrupos}
                  alt=""
                />{" "}
                8 Grupos
              </Col>
            </Row>
            <Row className="biotxt w-100">{user.bio}</Row>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default CardPerfil;
