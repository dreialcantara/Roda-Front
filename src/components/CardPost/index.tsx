import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "./index.css";

export function CardPost() {
  const icongrupopost = require("../../assets/img/icongrupopost.png");
  const iconusuariopost = require("../../assets/img/iconusuariopost.png");
  const imgpost = require("../../assets/img/imgpost.png");

  return (
    <Container>
      <Card className="align-items-center" style={{ width: "1110px" }}>
        <div className="w-50 ">
          <div className="d-flex justify-content-between">
            <div className="d-flex align-items-center">
              <img
                className="img-fluid icongrupopost"
                src={icongrupopost}
                alt=""
              />
              <img
                className="img-fluid iconusuariopost"
                src={iconusuariopost}
                alt=""
              />
              <div className="flex-column mx-3">
                <div>TAVERNA DO DRAGÃO</div> <div>Thiago Moreira</div>
              </div>
            </div>
            <div className="text-end align-items-start">
              <div>...</div>
              <div>FANTASIA</div>
              <div>Eragon (cap 03)</div>
            </div>
          </div>
          <div className="text-center">
            <h1>O despertar do dragão de fogo</h1>
            <h2>
              Como os primeiros capítulos do livro criam o setting perfeito para
              a história
            </h2>
          </div>
          <div>
            <img className="img-fluid" src={imgpost} alt="" />
          </div>
        </div>
      </Card>
    </Container>
  );
}
