import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import relationImg from "../Images/relationship.png";
import databaseImg from "../Images/database.png";
import communication from "../Images/online-communication.png";
import shieldImg from "../Images/shield.png";
import truckImg from "../Images/maps-and-location.png";
import money from "../Images/value.png";
import "./style.css";

export const Companies = () => {
  return (
    <div>
      <Container>
        <Row className="p-3">
          <Col sm={12}>
            <h3 className="text-center p-3">
              Lots of IT Companies in town. Why you should choose us?
            </h3>
          </Col>
          <Col md={4}>
            <div className="companyIcon">
              <img src={relationImg} alt="problems" />
              <h4 className="pt-3">Customized Requirements</h4>
              <p>
                Every idea is unique and that's why we craft it as get your
                requirements
              </p>
            </div>
          </Col>

          <Col md={4}>
            <div className="companyIcon">
              <img src={databaseImg} alt="problems" />
              <h4 className="pt-3">99% Server Uptime</h4>
              <p>
                Every idea is unique and that's why we craft it as get your
                requirements
              </p>
            </div>
          </Col>

          <Col md={4}>
            <div className="companyIcon">
              <img src={communication} alt="problems" />
              <h4 className="pt-3">Quick Support</h4>
              <p>
                Every idea is unique and that's why we craft it as get your
                requirements
              </p>
            </div>
          </Col>

          <Col md={4}>
            <div className="companyIcon">
              <img src={shieldImg} alt="problems" />
              <h4 className="pt-3">Quality Assurance</h4>
              <p>
                Every idea is unique and that's why we craft it as get your
                requirements
              </p>
            </div>
          </Col>

          <Col md={4}>
            <div className="companyIcon">
              <img src={truckImg} alt="problems" />
              <h4 className="pt-3">On Time Delivery</h4>
              <p>
                Every idea is unique and that's why we craft it as get your
                requirements
              </p>
            </div>
          </Col>

          <Col md={4}>
            <div className="companyIcon">
              <img src={money} alt="problems" />
              <h4 className="pt-3">Value of Money</h4>
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
