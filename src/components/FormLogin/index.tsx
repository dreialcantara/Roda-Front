import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/modules/user";

import "bootstrap/dist/css/bootstrap.min.css";
import { FormEvent, useState } from "react";
import { loginUsuario } from "../../services/MainApi/login";
import "./index.css";

function FormLogin() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useDispatch();

  const login = async (event: FormEvent) => {
    event.preventDefault();

    const payload = {
      email,
      password,
    };

    try {
      const response = await loginUsuario(payload);
      if (response.status !== 200) {
        return alert("Algo deu errado");
      } else {
        console.log(response.data);
        dispatch(
          setUser({
            token: response.data.token,
            email,
          })
        );
        window.location.pathname = "/teste";

        // localStorage.setItem("token", response.data.token);
        // window.location.pathname = "/allusers";
      }
    } catch (error) {
      alert("Algo deu errado");
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center">
      <Form className="w-25" onSubmit={login}>
        <div className="container">
          <h1>Entre na Roda!</h1>
          <h5>Converse agora com pessoas que estão lendo o mesmo que você!</h5>
        </div>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="mb-0">E-mail</Form.Label>
          <Form.Control
            type="e-mail"
            placeholder="email@email.com"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="mb-0">Senha</Form.Label>
          <Form.Control
            type="password"
            placeholder="Senha#123"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </Form.Group>
        <div className="d-flex justify-content-start">
          <Form.Group className="">
            <Button className="botao-criar rounded-5" type="submit">
              Criar Conta
            </Button>

            <Button className="botao-login rounded-5" type="submit">
              Fazer Login
            </Button>
          </Form.Group>
        </div>
      </Form>
    </div>
  );
}

export default FormLogin;
