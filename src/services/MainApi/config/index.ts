import axios from "axios";

const baseApi = axios.create({
  baseURL: "https://roda-api.herokuapp.com",
  headers: { "Content-Type": "application/json" },
});

export default baseApi;
