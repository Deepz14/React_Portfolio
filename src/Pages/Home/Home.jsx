import React from "react";
import { Carousel } from "react-bootstrap";
import webdesigningImg from "../Images/web-designing.jpg";
import webdevelopmentImg from "../Images/web-development.jpg";
import seoservicesImg from "../Images/seo.jpg";
import mobiledevelopmentImg from "../Images/mobile-development.jpg";
import graphicdesignImg from "../Images/graphic-designing.jpg";
import { Companies } from "./Companies";
import { Requirements } from "./Requrirements";
import { AboutCompany } from "./AboutCompany";
import { Subscribe } from "./SubscribeForm";
import { ClassServices } from "./ClassServices";
import { Contact } from "./Contact";
import { Footer } from "./Footer";

export const Home = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={webdesigningImg} alt="slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={webdevelopmentImg} alt="slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={seoservicesImg} alt="slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={mobiledevelopmentImg}
            alt="Third slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={graphicdesignImg} alt="slide" />
        </Carousel.Item>
      </Carousel>
      <Companies />
      <Requirements />
      <AboutCompany />
      <Subscribe />
      <ClassServices />
      <Contact />
      <Footer />
    </div>
  );
};
