import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import solutionImg from "../Images/solutions.png";

export const AboutCompany = () => {
  return (
    <div>
      <Container>
        <Row className="p-3">
          <Col className="aboutcompanyLeft pt-3" md={6}>
            <h1>About Debuggers</h1>
            <p>
              Simple Snippets is a Tech-Educational Channel / Platform / Blog /
              Medium for anyone and everyone
            </p>
            <Button>Read more..</Button>
          </Col>

          <Col md={6} className="aboutcompanyImg p-3">
            <img src={solutionImg} alt="problems" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
