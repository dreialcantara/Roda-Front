import baseApi from "./config";

interface CadastroPayload {
  name: string;
  email: string;
  password: string;
  bio: string;
  imgurl: string;
}

export function cadastroUsuario(payload: CadastroPayload) {
  return baseApi.post("/user", payload);
}
