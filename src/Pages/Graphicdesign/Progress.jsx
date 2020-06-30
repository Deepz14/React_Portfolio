import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";

export const Progress = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h3>Skill set -</h3>
          <h5 className="mobileapp p-2">Mobile App - 90%</h5>
          <h5 className="lightroom p-2">Light Room - 85%</h5>
          <h5 className="illustrator p-2">Illustrator - 75%</h5>
        </Col>
      </Row>
    </Container>
  );
};
