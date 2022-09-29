import Button from "react-bootstrap/Button";
import { listarUsuario } from "../../services/MainApi/listarusuarios";

function AllUsers() {
  const listar = async (event: any) => {
    event.preventDefault();

    try {
      const response = await listarUsuario();
      if (response.status !== 200) {
        return alert("Algo deu errado");
      } else {
        console.log(response);
      }
    } catch (error) {
      alert("Algo deu errado");
    }
  };

  return (
    <>
      <Button variant="success" onClick={listar}>
        Listar Usuários
      </Button>{" "}
    </>
  );
}

export default AllUsers;
