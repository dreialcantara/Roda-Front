import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "bootstrap/dist/css/bootstrap.min.css";
import { FormEvent, useState } from "react";
import { cadastroUsuario } from "../../services/MainApi/cadastro";

function FormCadastro() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [bio, setBio] = useState<string>("");
  const [imgurl, setImgurl] = useState<string>("");

  const cadastro = async (event: FormEvent) => {
    event.preventDefault();

    const payload = {
      name,
      email,
      password,
      bio,
      imgurl,
    };

    try {
      const response = await cadastroUsuario(payload);
      if (response.status !== 201) {
        return alert("Algo deu errado");
      } else {
        console.log(response);
      }
    } catch (error) {
      alert("Algo deu errado");
      console.log(error);
    }
  };

  return (
    <Form onSubmit={cadastro}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nome</Form.Label>
        <Form.Control
          type="text"
          placeholder="Seu nome"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Bio</Form.Label>
        <Form.Control
          type="text"
          placeholder="Uma pequena biografia!"
          value={bio}
          onChange={(event) => {
            setBio(event.target.value);
          }}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Imagem de Perfil</Form.Label>
        <Form.Control
          type="text"
          placeholder="Link para imagem de Perfil"
          value={imgurl}
          onChange={(event) => {
            setImgurl(event.target.value);
          }}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default FormCadastro;
