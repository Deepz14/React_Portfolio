import React from "react";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";

export const BreadCrumbs = () => {
  return (
    <Container className="breadcrumb" fluid>
      <Row>
        <Col>
          <h3>Contact us</h3>
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Contact</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
    </Container>
  );
};
