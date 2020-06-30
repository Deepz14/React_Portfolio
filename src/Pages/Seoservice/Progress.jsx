import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";

export const Progress = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h3>Skill set -</h3>
          <h5 className="google p-2">Googel Ads - 90%</h5>
          <h5 className="facebook p-2">Facebook Ads - 85%</h5>
          <h5 className="instagram p-2">Instagram Ads - 75%</h5>
        </Col>
      </Row>
    </Container>
  );
};
