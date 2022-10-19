import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";

import "./index.css";

export function CardPost() {
  const icongrupopost = require("../../assets/img/icongrupopost.png");
  const iconusuariopost = require("../../assets/img/iconusuariopost.png");
  const imgpost = require("../../assets/img/imgpost.png");

  return (
    <Container>
      <Card className="cardposts mt-4 rounded-5 align-items-center w-100">
        <div className="w-50 ">
          <div className="mb-4 d-flex justify-content-between">
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
          <div className=" mb-4 text-center">
            <h1 className="mb-4 text-start">O despertar do dragão de fogo</h1>
            <h2 className="text-start">
              Como os primeiros capítulos do livro criam o setting perfeito para
              a história
            </h2>
          </div>
          <div className="mb-5">
            <img className="img-fluid" src={imgpost} alt="" />
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos. Praesent auctor purus
              luctus enim egestas, ac scelerisque ante pulvinar. Donec ut
              rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur
              vel bibendum lorem. Morbi convallis convallis diam sit amet
              lacinia. Aliquam in elementum tellus.
            </p>
          </div>
        </div>
      </Card>
    </Container>
  );
}
