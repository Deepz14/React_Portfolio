import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AboutImg from "../Images/code1.png";
import "./style.css";

export const Hero = () => {
  return (
    <Container fluid>
      <Row>
        <Col className="hero p-4">
          <div className="img-container p-3">
            <img src={AboutImg} alt="problems" className="img-main" />
          </div>
          <div className="rgt-hero pt-4">
            <h3>About us</h3>
            <p>
              If it is a website or app or graphics,we can develop it for you at
              affordable.send us your requrirements.
            </p>
            <p>
              Every idea is unique and that's why we craft it as get your
              requirements
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
