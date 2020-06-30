import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import fbImg from "../Images/icons8-facebook-48.png";
import googleImg from "../Images/icons8-google-plus-48.png";
import instaImg from "../Images/icons8-instagram-48.png";
import twitterImg from "../Images/icons8-twitter-48.png";
import Iframe from "react-iframe";

export const Contact = () => {
  return (
    <div>
      <Container fluid className="contact-section p-5">
        <Row>
          <Col md={3}>
            <h3>Deepz</h3>
            <p>
              Deepz Snippets is a Tech-Educational Channel / Platform / Blog /
              Medium for anyone and everyone
            </p>
            <div>
              <img src={fbImg} alt="problems" />
              <img src={googleImg} alt="problems" />
              <img src={instaImg} alt="problems" />
              <img src={twitterImg} alt="problems" />
            </div>
          </Col>

          <Col md={3}>
            <h3>Important Links</h3>
            <Nav.Link>Privacy Policy</Nav.Link>
            <Nav.Link>Youtube Links</Nav.Link>
            <Nav.Link>Social Media</Nav.Link>
            <Nav.Link>Blog Articles</Nav.Link>
          </Col>

          <Col md={3}>
            <h3>Our services</h3>
            <Nav.Link>Webdesigning</Nav.Link>
            <Nav.Link>Webdevelopment</Nav.Link>
            <Nav.Link>Seoservices</Nav.Link>
            <Nav.Link>Software development</Nav.Link>
            <Nav.Link>Mobileapp development</Nav.Link>
            <Nav.Link>Graphicdesign</Nav.Link>
          </Col>

          <Col md={3}>
            <h3>Contact us</h3>
            <div>
              <FontAwesomeIcon icon={faPhone} className="contactIcon" />
              +(91) 9090909090
            </div>
            <div>
              <FontAwesomeIcon icon={faEnvelope} className="contactIcon" />
              inquiry@deepakdeepz.com
            </div>
            <div>
              <Iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62589.37128364112!2d77.680377329356!3d11.346708240342828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96f46762f4671%3A0xd97da6e3d9c7f75e!2sErode%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1586241530283!5m2!1sen!2sin"
                id="myId"
                className="myClassname"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
