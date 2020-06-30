import React from "react";
import { BreadCrumbs } from "./BreadCrumbs";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { Requirements } from "./Requirements";
import { Hero } from "./Hero";
import { Progress } from "./Progress";

export const Softwaredevelopment = () => {
  return (
    <div>
      <BreadCrumbs />
      <Hero />
      <Progress />
      <Requirements />
      <Contact />
      <Footer />
    </div>
  );
};
