import React from "react";
import { Container, Row } from "react-bootstrap";
import { CardPost } from "../../components/CardPost";
import CarrosselDesafio from "../../components/CarrosselDesafio";
import CarrosselGrupos from "../../components/CarrosselGrupos";
import CarrosselGruposRecomendados from "../../components/CarrosselGruposRecomendados";

import NavHeader from "../../components/NavHeader";

function Feed() {
  return (
    <div>
      <NavHeader />

      <Container>
        <CarrosselDesafio />
        <Row className="text-start">
          <CarrosselGrupos />
        </Row>
        <Row className="text-start">
          {/* <CarrosselGruposRecomendados /> */}
        </Row>
        <Row className="mt-4">
          <CardPost />
        </Row>
        <Row className="mt-4">
          <CardPost />
        </Row>
      </Container>
    </div>
  );
}

export default Feed;
