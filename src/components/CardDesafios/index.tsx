import Card from "react-bootstrap/Card";

import "./index.css";

const imgdesafio = require("../../assets/img/imgdesafio.png");

function CardDesafios() {
  return (
    <Card className="bg-dark text-white rounded-5 border-0">
      <Card.Img src={imgdesafio} alt="Card image" className="rounded-5" />
      <Card.ImgOverlay className="mx-5">
        <div className="text-left d-flex flex-column justify-content-center h-100 w-75 align-items-start ">
          <div className="mt-4 mb-0 mescarddesafio">
            <Card.Title>Desafio do mês | Outubro</Card.Title>
          </div>
          <div className="   mt-5 titulocarddesafio w-75 h-100">
            <Card.Text>
              Uma das vozes mais originais da ficção contemporânea
            </Card.Text>
          </div>
          <a href="/">
            <p className="saibamaiscarddesafio mt-auto mb-5 bg-white rounded-4 align-items-center text-dark">
              Saiba Mais
            </p>
          </a>
        </div>
      </Card.ImgOverlay>
    </Card>
  );
}

export default CardDesafios;
