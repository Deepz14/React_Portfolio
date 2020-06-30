import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

export const HeaderContactInfo = () => {
  return (
    <Container fluid className="headerContact">
      <Row>
        <Col className="header-info">
          <a href="!#" className="headerIcon">
            <span>
              <FontAwesomeIcon icon={faPhone} className="phoneIcon" />
            </span>
            <p>+(91) 9090909090</p>
          </a>

          <a href="!#" className="headerIcon">
            <span>
              <FontAwesomeIcon icon={faEnvelope} className="envelopeIcon" />
            </span>
            <p>inquiry@deepakdeepz.com</p>
          </a>
        </Col>
      </Row>
    </Container>
  );
};
