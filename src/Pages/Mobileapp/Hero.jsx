import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import mobileappImg1 from "../Images/m1.png";
import mobileappImg2 from "../Images/m2.png";
import "./style.css";

export const Hero = () => {
  return (
    <>
      <Container className="hero p-3">
        <Row>
          <Col md={8} className="left-side">
            <h3>About Mobileapp Developmemt</h3>
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
            <img src={mobileappImg1} alt="prblem" className="mobileappImg" />
          </Col>

          <Col md={8} className="left-side">
            <h3>Mobileapp Development Service offered by Us </h3>
            <p>Android Apps.</p>
            <p>IOS Apps.</p>
            <p>Hybird Apps.</p>
          </Col>
          <Col md={4} className="rgt-side text-center pt-2 mb-4">
            <img src={mobileappImg2} alt="prblem" className="mobileappImg" />
          </Col>
        </Row>
      </Container>
    </>
  );
};
