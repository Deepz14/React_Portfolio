import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ceoImg from "../Images/ceo.png";
import bigdataImg from "../Images/big-data.png";
import hrImg from "../Images/hr.png";
import javadevImg from "../Images/programmer.png";
import salesheadImg from "../Images/salesman.png";
import internImg from "../Images/internship.png";
import "./style.css";

export const Team = () => {
  return (
    <div>
      <Container fluid className="p-3">
        <Row>
          <Col sm={12}>
            <h3 className="text-center p-3">Our Awesome team</h3>
          </Col>
          <Col md={4} className="p-3">
            <div className="companyIcon">
              <img src={ceoImg} alt="problems" />
              <h4 className="pt-3">CEO</h4>
            </div>
          </Col>

          <Col md={4} className="p-3">
            <div className="companyIcon">
              <img src={bigdataImg} alt="problems" />
              <h4 className="pt-3">Senior Business Analyst</h4>
            </div>
          </Col>

          <Col md={4} className="p-3">
            <div className="companyIcon">
              <img src={hrImg} alt="problems" />
              <h4 className="pt-3">Senior HR</h4>
            </div>
          </Col>

          <Col md={4} className="p-3">
            <div className="companyIcon">
              <img src={javadevImg} alt="problems" />
              <h4 className="pt-3">Java Developer</h4>
            </div>
          </Col>

          <Col md={4} className="p-3">
            <div className="companyIcon">
              <img src={salesheadImg} alt="problems" />
              <h4 className="pt-3">Sales Head</h4>
            </div>
          </Col>

          <Col md={4} className="p-3">
            <div className="companyIcon">
              <img src={internImg} alt="problems" />
              <h4 className="pt-3">Software Intern</h4>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
