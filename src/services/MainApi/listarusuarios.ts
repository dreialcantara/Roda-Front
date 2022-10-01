import baseApi from "./config";

export function ListarUsuario(token: any) {
  return baseApi.get("/user/alluser", {
    headers: { Authorization: `Bearer ${token}` },
    // headers: { Authorization: `Bearer ${token}` }, <-- recebendo o token pelo state do redux
  });
}
