import React from "react";
import { BreadCrumbs } from "./BreadCrumbs";
import { Hero } from "./Hero";
import { Subscribe } from "./Subscribe";
import { Team } from "./Team";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import "./style.css";

export const Aboutus = () => {
  return (
    <div>
      <BreadCrumbs />
      <Hero />
      <Subscribe />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};
