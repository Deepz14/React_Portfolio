import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import graphicdesignImg1 from "../Images/graphicdesign2.png";
import graphicdesignImg2 from "../Images/graphicdesign3.png";
import "./style.css";

export const Hero = () => {
  return (
    <>
      <Container className="hero p-3">
        <Row>
          <Col md={8} className="left-side">
            <h3>About Graphic Designing</h3>
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
            <img
              src={graphicdesignImg1}
              alt="prblem"
              className="graphicdesignImg"
            />
          </Col>

          <Col md={8} className="left-side">
            <p>
              Graphic design is an ancient craft, dating back past Egyptian
              hieroglyphs to 17,000-year-old cave paintings. As a term
              originating in the 1920s’ print industry and covering a range of
              activities including logo creation, it concerns aesthetic appeal
              and marketing – attracting viewers using images, color and
              typography. However, graphic designers working in user experience
              (UX) design must justify stylistic choices regarding, say, image
              locations and font with a human-centered approach, focusing on—and
              seeking maximum empathy with—users while creating good-looking
              designs that maximize usability. Aesthetics must serve a purpose –
              in UX design we don’t create art for art’s sake. So, when doing
              graphic design for UX, you should consider the information
              architecture of your interactive designs, to ensure accessibility
              for users, and leverage graphic design skills in creating output
              that considers the entire user experience, including users’ visual
              processing abilities. For instance, if an otherwise pleasing
              mobile app can’t offer users what they need in several
              thumb-clicks, its designers will have failed to marry graphic
              design to user experience. The scope of graphic design in UX
              covers creating beautiful designs that users find highly
              pleasurable, meaningful, and usable.
            </p>
          </Col>
          <Col md={4} className="rgt-side text-center pt-2 mb-4">
            <img
              src={graphicdesignImg2}
              alt="prblem"
              className="graphicdesignImg"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};
