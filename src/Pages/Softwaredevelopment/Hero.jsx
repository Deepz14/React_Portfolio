import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import softwareImg1 from "../Images/software1.png";
import softwareImg2 from "../Images/software3.png";
import "./style.css";

export const Hero = () => {
  return (
    <>
      <Container className="hero p-3">
        <Row>
          <Col md={8} className="left-side">
            <h3>About Software Developmemt</h3>
            <p>
              Simple Snippets is a professional website designing company based
              in Mumbai. We are having our client from various industries and
              served variety of web related projects at very cost effective
              prices. Our highly experienced team of professionals have their
              expertise in the field of web designing and related services.
              Simple Snippets is highly dedicated towards satisfaction of
              clients, we make there successful presence on internet by
              providing our expert advice for website designing related
              services. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto voluptatibus eos nemo quisquam sit laborum libero iure,
              ad excepturi debitis totam et, itaque illo, dicta repellendus
              sapiente. Voluptatum, illum ea. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Architecto voluptatibus eos nemo
              quisquam sit laborum libero iure, ad excepturi debitis totam et,
              itaque illo, dicta repellendus sapiente. Voluptatum, illum ea.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto voluptatibus eos nemo quisquam sit laborum libero iure,
              ad excepturi debitis totam et, itaque illo, dicta repellendus
              sapiente. Voluptatum, illum ea.
            </p>
          </Col>
          <Col md={4} className="rgt-side text-center pt-5 mb-4">
            <img src={softwareImg1} alt="prblem" className="softwareImg" />
          </Col>

          <Col md={8} className="left-side">
            <h3>Software Development Service offered by Us </h3>
            <p>
              Windows 7,8 and 10 Application Development. Custom Application
            </p>
            <p>Development. ASP.Net Development. Application Maintenance.</p>
            <p>Enterprice Application Integration.</p>
          </Col>
          <Col md={4} className="rgt-side text-center pt-2 mb-4">
            <img src={softwareImg2} alt="prblem" className="softwareImg" />
          </Col>
        </Row>
      </Container>
    </>
  );
};
