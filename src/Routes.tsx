import {
  Routes as WrapperRoutes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Login from "./pages/login";
import Cadastro from "./pages/cadastro";
import AllUsers from "./pages/allusers";
import TesteComponentes from "./pages/testecomponentes";

export default function Routes() {
  return (// <BrowserRouter basename={process.env.PUBLIC_URL}>
    <BrowserRouter>
    
      <WrapperRoutes>
        <Route path="/teste" element={<TesteComponentes />} />
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/allusers" element={<AllUsers />} />
      </WrapperRoutes>
    </BrowserRouter>
  );
}
