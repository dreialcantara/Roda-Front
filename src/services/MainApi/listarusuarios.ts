import baseApi from "./config";

export function ListarUsuario(token: any) {
  const tokenLocalStorage = localStorage.getItem("token");

  return baseApi.get("/user/alluser", {
    headers: { Authorization: `Bearer ${tokenLocalStorage}` },
    // headers: { Authorization: `Bearer ${token}` }, <-- recebendo o token pelo state do redux
  });
}
