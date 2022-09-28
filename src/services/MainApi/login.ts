import baseApi from "./config";

interface LoginPayload {
  email: string;
  password: string;
}

export function loginUsuario(payload: LoginPayload) {
  return baseApi.post("/login", payload);
}
