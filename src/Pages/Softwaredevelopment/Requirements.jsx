import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./style.css";

export const Requirements = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col md={12} className="requirement-section p-3">
            <h3>Do You have any requirements? We can do it for you..</h3>
            <Button>Get Started</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
