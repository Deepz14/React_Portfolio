import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";

export const Progress = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h3>Skill set -</h3>
          <h5 className="static p-2">Static Websitedesigning - 95%</h5>
          <h5 className="dynamic p-2">Dynamic Websitedesigning - 85%</h5>
        </Col>
      </Row>
    </Container>
  );
};
