import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import webdesignImg from "../Images/content.png";
import webdevelopImg from "../Images/code.png";
import seoserviceImg from "../Images/support.png";
import softwareImg from "../Images/monitor.png";
import mobileImg from "../Images/app.png";
import graphicImg from "../Images/graphic-design.png";

export const ClassServices = () => {
  return (
    <div>
      <Container>
        <Row className="p-3">
          <Col sm={12}>
            <h3 className="text-center p-3">Out Best in Class Services</h3>
          </Col>
          <Col md={4}>
            <div className="companyIcon">
              <img src={webdesignImg} alt="problems" />
              <h4 className="pt-3">Web Designing</h4>
              <p>
                Every idea is unique and that's why we craft it as get your
                requirements
              </p>
            </div>
          </Col>

          <Col md={4}>
            <div className="companyIcon">
              <img src={webdevelopImg} alt="problems" />
              <h4 className="pt-3">Web Development</h4>
              <p>
                Every idea is unique and that's why we craft it as get your
                requirements
              </p>
            </div>
          </Col>

          <Col md={4}>
            <div className="companyIcon">
              <img src={seoserviceImg} alt="problems" />
              <h4 className="pt-3">SEO services</h4>
              <p>
                Every idea is unique and that's why we craft it as get your
                requirements
              </p>
            </div>
          </Col>

          <Col md={4}>
            <div className="companyIcon">
              <img src={softwareImg} alt="problems" />
              <h4 className="pt-3">Software Development</h4>
              <p>
                Every idea is unique and that's why we craft it as get your
                requirements
              </p>
            </div>
          </Col>

          <Col md={4}>
            <div className="companyIcon">
              <img src={mobileImg} alt="problems" />
              <h4 className="pt-3">Mobile Development</h4>
              <p>
                Every idea is unique and that's why we craft it as get your
                requirements
              </p>
            </div>
          </Col>

          <Col md={4}>
            <div className="companyIcon">
              <img src={graphicImg} alt="problems" />
              <h4 className="pt-3">Graphic Design</h4>
              <p>
                Every idea is unique and that's why we craft it as get your
                requirements
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
