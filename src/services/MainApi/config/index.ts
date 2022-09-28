import axios from "axios";

const baseApi = axios.create({
  baseURL: "http://roda-api.herokuapp.com",
  headers: { "Content-Type": "application/json" },
});

export default baseApi;
