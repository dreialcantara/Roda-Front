import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "bootstrap/dist/css/bootstrap.min.css";
import { FormEvent, useEffect, useState } from "react";
import { cadastroUsuario } from "../../services/MainApi/cadastro";
import { Link } from "react-router-dom";

import "./index.css";
import { Slide, toast, ToastContainer } from "react-toastify";

function FormCadastro() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [imgurl, setimgurl] = useState<string>("");
  const [confPassword, setConfPassword] = useState<string>("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [cPasswordClass, setCPasswordClass] = useState("form-control");
  const [isCPasswordDirty, setIsCPasswordDirty] = useState(false);
  const [hidePass, setHidePass] = useState("password");
  const [hideConfPass, setHideConfPass] = useState("password");

  const passeye = require("../../assets/img/passeye.png");

  useEffect(() => {
    if (isCPasswordDirty) {
      if (password === confPassword) {
        setShowErrorMessage(false);
        setCPasswordClass("form-control");
      } else {
        setShowErrorMessage(true);
        setCPasswordClass("form-control");
      }
    }
  }, [confPassword, isCPasswordDirty, password]);

  const handleCPassword = (e: any) => {
    setConfPassword(e.target.value);
    setIsCPasswordDirty(true);
  };

  const cadastro = async (event: FormEvent) => {
    event.preventDefault();

    const payload = {
      name,
      email,
      password,
      imgurl,
    };

    const notify = () =>
      toast.error("Houve um erro no seu cadastro", {
        position: "top-center",
        autoClose: false,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

    const notifySuccess = () =>
      toast.success("Cadastro criado com sucesso!", {
        position: "top-center",
        autoClose: false,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

    const redirect = () => (window.location.pathname = "/");

    try {
      const response = await cadastroUsuario(payload);
      if (response.status !== 201) {
        notify();
      } else {
        console.log(response);
        notifySuccess();
        setTimeout(redirect, 2500);
      }
    } catch (error) {
      notify();
      console.log(error);
    }
  };

  return (
    <div className="containerformcadastro d-flex align-items-center justify-content-center">
      <ToastContainer transition={Slide} />
      <Form className="w-75" onSubmit={cadastro}>
        <div className="containercadastro">
          <h1>Junte-se a Roda!</h1>
          <hr className="w-50"></hr>
          <h5>Converse agora com pessoas que estão lendo o mesmo que você!</h5>
        </div>
        <Form.Group
          className="mb-3 d-flex flex-column"
          controlId="formBasicEmail"
        >
          <Form.Label className="form-label mb-0  ">Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </Form.Group>
        <Form.Group
          className="mb-3 d-flex flex-column"
          controlId="formBasicEmail"
        >
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

        <Form.Group
          className="mb-3 d-flex flex-column"
          controlId="formBasicEmail"
        >
          <Form.Label>Link da foto de Perfil</Form.Label>
          <Form.Control
            type="text"
            placeholder="link para foto"
            value={imgurl}
            onChange={(event) => {
              setimgurl(event.target.value);
            }}
          />
        </Form.Group>

        <Form.Group
          className="mb-3 d-flex flex-column"
          controlId="formBasicPassword"
        >
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type={hidePass}
            placeholder="senha#123"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <img
            className="passeye"
            src={passeye}
            alt=""
            onClick={() => {
              if (hidePass === "password") {
                setHidePass("text");
              } else {
                setHidePass("password");
              }
            }}
          />
        </Form.Group>
        <Form.Group
          className="mb-3 d-flex flex-column"
          controlId="formBasicPassword"
        >
          <Form.Label>Confirmar Senha</Form.Label>
          <Form.Control
            className={cPasswordClass}
            type={hideConfPass}
            placeholder="senha#123"
            value={confPassword}
            onChange={handleCPassword}
          />
          <img
            className="passeye"
            src={passeye}
            alt=""
            onClick={() => {
              if (hideConfPass === "password") {
                setHideConfPass("text");
              } else {
                setHideConfPass("password");
              }
            }}
          />

          {showErrorMessage && isCPasswordDirty ? (
            <div> As senhas não são iguais! </div>
          ) : (
            ""
          )}
        </Form.Group>
        <div className="botaocontainer">
          <Link
            className="botao-criar rounded-5 btn btn-primary"
            role="button"
            to="/"
          >
            Fazer Login
          </Link>

          <Button className="botao-login rounded-5" type="submit">
            Criar Conta
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default FormCadastro;
