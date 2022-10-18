import React from "react";
import { Container, Row } from "react-bootstrap";
import CardPerfil from "../../components/CardPerfil";
import CarrosselPropostas from "../../components/CarrosselPropostas";

import NavHeader from "../../components/NavHeader";

function perfil() {
  return (
    <div>
      <NavHeader />
      <CardPerfil />
      <CarrosselPropostas />
    </div>
  );
}

export default perfil;
