import baseApi from "./config";

interface CadastroPayload {
  name: string;
  email: string;
  password: string;
}

export function cadastroUsuario(payload: CadastroPayload) {
  return baseApi.post("/user", payload);
}
