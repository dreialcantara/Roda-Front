import { useState } from "react";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";
import { ListarUsuario } from "../../services/MainApi/listarusuarios";
import { RootStore } from "../../store";
import { removeUser } from "../../store/modules/user";

function AllUsers() {
  const user = useSelector((store: RootStore) => store.userReduce);
  const [lista, setLista] = useState("");

  const listar = async (event: any) => {
    event.preventDefault();

    try {
      const response = await ListarUsuario(user.token);
      if (response.status !== 200) {
        console.log(response.data);

        return alert("Algo deu errado");
      } else {
        console.log(response.data);
        setLista(response.data);
        console.log(lista);
      }
    } catch (error) {
      alert("Algo deu errado");
    }
  };

  const sair = async (event: any) => {
    removeUser("");
  };
  return (
    <>
      <h1>O e-mail logado é o {user.email}</h1>
      <Button variant="success" onClick={listar}>
        Listar Usuários
      </Button>
      <Button variant="danger" onClick={sair}>
        Sair
      </Button>
      <p>{` A resposta da requisição é: ${lista}`}</p>
    </>
  );
}

export default AllUsers;
