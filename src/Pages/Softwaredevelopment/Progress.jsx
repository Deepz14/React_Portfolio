import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";

export const Progress = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h3>Skill set -</h3>
          <h5 className="dotnet p-2">.net Application - 90%</h5>
          <h5 className="java p-2">java Application - 85%</h5>
          <h5 className="custom p-2">custom Application - 75%</h5>
        </Col>
      </Row>
    </Container>
  );
};
