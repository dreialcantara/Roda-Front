import baseApi from "./config";

export function ListarGrupos(token: any) {
  return baseApi.get("/group/mygroups", {
    headers: { Authorization: `Bearer ${token}` },
    // headers: { Authorization: `Bearer ${token}` }, <-- recebendo o token pelo state do redux
  });
}
