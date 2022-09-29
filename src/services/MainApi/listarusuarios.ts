import baseApi from "./config";

export function ListarUsuario(token: any) {
  return baseApi.get("/user/alluser", {
    headers: { Authorization: `Bearer ${token}` },
  });
}
