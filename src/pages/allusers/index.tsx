import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";
import { ListarUsuario } from "../../services/MainApi/listarusuarios";
import { RootStore } from "../../store";
import { removeUser } from "../../store/modules/user";
import { useDispatch } from "react-redux";

function AllUsers() {
  const user = useSelector((store: RootStore) => store.userReduce);
  const dispatch = useDispatch();
  const listar = async (event: any) => {
    event.preventDefault();

    try {
      const response = await ListarUsuario(user.token);
      if (response.status !== 200) {
        console.log(response.data);
        return alert("Algo deu errado");
      } else {
        console.log(response.data);
      }
    } catch (error) {
      alert("Algo deu errado");
    }
  };

  return (
    <>
      <h1>O e-mail logado é o {user.email}</h1>
      <Button variant="success" onClick={listar}>
        Listar Usuários
      </Button>
      <Button variant="danger" onClick={dispatch(removeUser)}>
        Sair
      </Button>
    </>
  );
}

export default AllUsers;
