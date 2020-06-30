import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const ContactForm = () => {
  return (
    <div>
      <Container className="p-4">
        <Row>
          <Col md={6}>
            <Form>
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter name" />
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>Contact Number</Form.Label>
                  <Form.Control type="number" placeholder="Contact Number" />
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>State</Form.Label>
                  <Form.Control as="select" defaultValue="Country">
                    <option disabled>Country</option>
                    <option>India</option>
                    <option>America</option>
                    <option>England</option>
                    <option>Spain</option>
                  </Form.Control>
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>Subject</Form.Label>
                  <Form.Control type="text" placeholder="Subject" />
                </Form.Group>
              </Form.Row>

              <Form.Group>
                <Form.Label>Enter Comments</Form.Label>
                <Form.Control as="textarea" rows="3" />
              </Form.Group>

              <Form.Group>
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Send Message
              </Button>
            </Form>
          </Col>

          <Col md={6} className="contact-rgt p-3">
            <div className="phn mb-3">
              <h5>Call us/WhatsApp</h5>
              <a href="!#">
                <FontAwesomeIcon icon={faPhone} className="contactIcon" />
                <span>+(91) 9090909090</span>
              </a>
            </div>
            <div className="web mb-3">
              <h5>Email/Website</h5>
              <a href="!#">
                <FontAwesomeIcon icon={faEnvelope} className="contactIcon" />
                <span>inquiry@deepakdeepz.com</span>
              </a>
            </div>
            <div className="workingHours mb-3">
              <h5>Working Hours</h5>
              <p>Mon-Fri 9am-6pm(IST)</p>
            </div>
            <div className="address mb-3">
              <h5>Address</h5>
              <p>22B Baker Street, London</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
