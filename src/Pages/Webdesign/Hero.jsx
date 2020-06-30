import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import webdesignImg1 from "../Images/webdesign1.png";
import webdesignImg2 from "../Images/webdesign2.png";
import webdesignImg3 from "../Images/webdesign3.png";
import "./style.css";

export const Hero = () => {
  return (
    <>
      <Container className="hero p-3">
        <Row>
          <Col md={8} className="left-side">
            <h3>About Webdesigning</h3>
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
              sapiente. Voluptatum, illum ea. There are 2 types of website
              normally -
            </p>
          </Col>
          <Col md={4} className="rgt-side text-center pt-5 mb-4">
            <img src={webdesignImg1} alt="prblem" className="webdesignImg" />
          </Col>

          <Col md={8} className="left-side">
            <h3>Static Website Designing </h3>
            <p>
              If you just want to have a website with details about your company
              and products / services then this is simple and good option. In
              static website also you have two options one is template based
              website and other is completely customized designed website.
              Template based website is ready to use design in which logo,
              content, links and images are changed, but the layout of website
              is not changed. Such website are fast to deliver and economical in
              cost. Second is completely customized website, in this our web
              designers work on your website right from the scratch and do
              completely unique design. Such website cost is higher than
              template based and takes longer time to complete, but such
              websites look are totally as per clients requirement.
            </p>
          </Col>
          <Col md={4} className="rgt-side text-center pt-5 mb-4">
            <img src={webdesignImg2} alt="prblem" className="webdesignImg" />
          </Col>

          <Col md={8} className="left-side">
            <h3>Dynamic Webiste Designing</h3>
            <p>
              If you just want to have a website with details about your company
              and products / services then this is simple and good option. In
              static website also you have two options one is template based
              website and other is completely customized designed website.
              Template based website is ready to use design in which logo,
              content, links and images are changed, but the layout of website
              is not changed. Such website are fast to deliver and economical in
              cost. Second is completely customized website, in this our web
              designers work on your website right from the scratch and do
              completely unique design. Such website cost is higher than
              template based and takes longer time to complete, but such
              websites look are totally as per clients requirement.
            </p>
          </Col>
          <Col md={4} className="rgt-side text-center pt-5 mb-4">
            <img src={webdesignImg3} alt="prblem" className="webdesignImg" />
          </Col>
        </Row>
      </Container>
    </>
  );
};
