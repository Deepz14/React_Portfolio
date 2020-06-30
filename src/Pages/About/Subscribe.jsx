import React from "react";
import { Container, Row, Col, InputGroup, FormControl } from "react-bootstrap";
import "./style.css";

export const Subscribe = () => {
  return (
    <div>
      <Container fluid className="subcribe-section p-3 text-center">
        <Row>
          <Col sm={12}>
            <h5>Subscribe to Our Newsletter</h5>
            <InputGroup className="mb-3 mx-auto w-75">
              <FormControl
                placeholder="Enter Your Email"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                className="subcribe-searchbar"
              />
              <InputGroup.Append>
                <InputGroup.Text id="basic-addon2" className="btnSubscribe">
                  Subscribe
                </InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
