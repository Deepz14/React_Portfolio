import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Iframe from "react-iframe";
import "./style.css";

export const Map = () => {
  return (
    <Container fluid className="map">
      <Row>
        <Col>
          <Iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62589.37128364112!2d77.680377329356!3d11.346708240342828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96f46762f4671%3A0xd97da6e3d9c7f75e!2sErode%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1586241530283!5m2!1sen!2sin"
            height="100%"
            width="100%"
            id="myId"
            className="myClassname"
          />
        </Col>
      </Row>
    </Container>
  );
};
