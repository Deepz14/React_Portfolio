import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";

export const Progress = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h3>Skill set -</h3>
          <h5 className="android p-2">Android Application - 90%</h5>
          <h5 className="ios p-2">IOS Application - 85%</h5>
          <h5 className="custom p-2">custom Application - 75%</h5>
        </Col>
      </Row>
    </Container>
  );
};
