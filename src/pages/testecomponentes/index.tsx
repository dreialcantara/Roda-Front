import React from "react";
import { Container, Row } from "react-bootstrap";
import CarrosselGrupos from "../../components/CarrosselGrupos";
import CarrosselGruposRecomendados from "../../components/CarrosselGruposRecomendados";

import NavHeader from "../../components/NavHeader";

function TesteComponentes() {
  return (
    <div>
      <NavHeader />
      <Container>
        <Row className="text-start">
          <CarrosselGrupos />
        </Row>
        <Row className="text-start">
          <CarrosselGruposRecomendados />
        </Row>
      </Container>
    </div>
  );
}

export default TesteComponentes;
