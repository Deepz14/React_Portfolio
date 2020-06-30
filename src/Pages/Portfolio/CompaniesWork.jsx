import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import websiteImg1 from "../Images/website1.jpg";
import websiteImg2 from "../Images/website2.jpg";
import websiteImg3 from "../Images/website3.jpg";
import websiteImg4 from "../Images/website4.jpg";
import websiteImg5 from "../Images/website5.jpg";
import websiteImg6 from "../Images/website6.jpg";

export const CompaniesWork = () => {
  return (
    <div>
      <Container fluid className="p-5">
        <Row>
          <Col md={12} className="text-center">
            <h4>Some of the Work</h4>
          </Col>
          <Col md={4}>
            <div className="text-center p-4">
              <img src={websiteImg1} alt="problem" className="w-75" />
              <h4 className="title pt-3">XYZ Company</h4>
              <p className="description">Portfolio Website</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="text-center p-4">
              <img src={websiteImg2} alt="problem" className="w-75" />
              <h4 className="title pt-3">ABC Infotech </h4>
              <p className="description">Web Application</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="text-center p-4">
              <img src={websiteImg3} alt="problem" className="w-75" />
              <h4 className="title pt-3">PQR Tech</h4>
              <p className="description">Mobile App</p>
            </div>
          </Col>

          <Col md={4}>
            <div className="text-center p-4">
              <img src={websiteImg4} alt="problem" className="w-75" />
              <h4 className="title pt-3">Info Solutions </h4>
              <p className="description">Website</p>
            </div>
          </Col>

          <Col md={4}>
            <div className="text-center p-4">
              <img src={websiteImg5} alt="problem" className="w-75" />
              <h4 className="title pt-3">Technologies</h4>
              <p className="description">App</p>
            </div>
          </Col>

          <Col md={4}>
            <div className="text-center p-4">
              <img src={websiteImg6} alt="problem" className="w-75" />
              <h4 className="title pt-3">Systems</h4>
              <p className="description">Logo</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
