import baseApi from "./config";

export function listarUsuario() {
  const token = localStorage.getItem("token");

  return baseApi.get("/user/alluser", {
    headers: { Authorization: `Bearer ${token}` },
  });
}
