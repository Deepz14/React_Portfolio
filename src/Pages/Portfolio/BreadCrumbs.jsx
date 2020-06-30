import React from "react";
// import { Link } from "react-router-dom";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";

export const BreadCrumbs = () => {
  return (
    <Container className="breadcrumb" fluid>
      <Row>
        <Col>
          <h3>Portfolio</h3>
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Portfolio</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
    </Container>
  );
};
