import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";

export const Progress = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h3>Skill set -</h3>
          <h5 className="php p-2">PHP - 90%</h5>
          <h5 className="mysql p-2">MySql - 85%</h5>
          <h5 className="jquery p-2">jquery - 80%</h5>
          <h5 className="asp p-2">ASP.Net - 95%</h5>
          <h5 className="ecommerse p-2">Ecommerse - 75%</h5>
        </Col>
      </Row>
    </Container>
  );
};
