import { ToastContainer, toast, Slide } from "react-toastify";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../store/modules/user";
import Loading from "../../components/Loading";

import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FormEvent, useState } from "react";
import { loginUsuario } from "../../services/MainApi/login";
import "./index.css";
import { Link } from "react-router-dom";
import { RootStore } from "../../store";

function FormLogin() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [hidePass, setHidePass] = useState("password");
  const dispatch = useDispatch();
  const user = useSelector((store: RootStore) => store);

  const passeye = require("../../assets/img/passeye.png");

  function logintimeout() {
    setTimeout(() => {
      window.location.pathname = "/feed";

      setLoading(false);
    }, 4000);
  }

  const login = async (event: FormEvent) => {
    event.preventDefault();

    const payload = {
      email,
      password,
    };

    const notify = () =>
      toast.error("Houve um erro no seu login", {
        position: "top-center",
        autoClose: false,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

    try {
      setLoading(true);
      const response = await loginUsuario(payload);
      if (response.status !== 200) {
        return alert("erro no seu login");
      } else {
        console.log(response.data);
        dispatch(
          setUser({
            iduser: response.data.user.iduser,
            name: response.data.user.name,
            bio: response.data.user.bio,
            imgurl: response.data.user.imgurl,
            token: response.data.token,
            email,
          })
        );

        logintimeout();
        // localStorage.setItem("token", response.data.token);
        // window.location.pathname = "/allusers";
      }
    } catch (error) {
      setLoading(false);
      notify();
    }
  };

  return (
    <div>
      <ToastContainer
        transition={Slide}
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <div className="containerform d-flex align-items-center justify-content-center">
        <Form className="formlogin w-75" onSubmit={login}>
          <div className="containercadastro">
            <h1>Entre na Roda!</h1>
            <hr className="w-50"></hr>
            <h5>
              Converse agora com pessoas que est??o lendo o mesmo que voc??!
            </h5>
          </div>
          <Form.Group
            className="mb-3 d-flex flex-column"
            controlId="formBasicEmail"
          >
            <Form.Label className="form-label mb-0 ">E-mail</Form.Label>
            <Form.Control
              type="email"
              placeholder="email@email.com"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </Form.Group>

          <Form.Group
            className="mb-3 d-flex flex-column"
            controlId="formBasicPassword"
          >
            <Form.Label className=" mb-0">Senha</Form.Label>
            <Form.Control
              type={hidePass}
              placeholder="Senha#123"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />{" "}
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
          {loading ? (
            <Loading />
          ) : (
            <div className="botaocontainer  d-flex justify-content-center text-start">
              <Link
                to="/cadastro"
                className=" px-lg-5 px-5 p-lg-3 p-1   botao-criar rounded-5 btn btn-primary"
                role="button"
              >
                Criar conta
              </Link>

              <Button
                className="px-lg-5 px-5 p-lg-3 p-1 botao-login rounded-5"
                type="submit"
              >
                Fazer Login
              </Button>
            </div>
          )}
        </Form>
      </div>
    </div>
  );
}

export default FormLogin;
