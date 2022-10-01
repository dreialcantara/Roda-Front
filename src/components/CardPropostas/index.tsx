import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { RootStore } from "../../store";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { useSelector } from "react-redux";

const imglivro1 = require("../../assets/img/livro1.png");
const imglivro2 = require("../../assets/img/livro2.png");
const setaup = require("../../assets/img/setaup.png");
const setadown = require("../../assets/img/setadownpng.png");

const name = <a href="/">João</a>;
const livro = <a href="/">Eragon</a>;
const livrousuario = <a href="/">A cantiga</a>;

function BasicExample() {
  const user = useSelector((store: RootStore) => store);
  // acima a const usuario que tera que ser usada para resgatar os dados

  return (
    <Card className="d-flex flex-column  border-0" style={{ width: "16rem" }}>
      <Card.Title className="p-0 m-0 align-self-center">Eragon #1</Card.Title>
      <Card.Text
        className="p-0 m-0 align-self-center"
        style={{ color: "#586BA4" }}
      >
        Proposta recebida!
      </Card.Text>
      <div className="mt-3 w-100 d-flex justify-content-center">
        <img
          src={setaup}
          className="setaup img-fluid align-self-center "
          alt=""
        />
        <img src={imglivro2} alt="" className="img-livro2 img-fluid" />
      </div>

      <div className="w-100 d-flex justify-content-center">
        <Card.Img
          className="img-fluid imglivro1"
          variant="top"
          src={imglivro1}
        />
        <img
          src={setadown}
          alt=""
          className="setadown img-fluid align-self-start"
        />
      </div>
      <Card.Body className="pt-3 d-flex flex-column align-items-center">
        <Card.Text className="text-center w-75">
          {name} deseja trocar {livro} pelo seu livro {livrousuario}
        </Card.Text>
        <Button className="rounded-5 w-75" variant="primary">
          Ver proposta
        </Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
