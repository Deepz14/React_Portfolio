import React from "react";
import { CompaniesWork } from "./CompaniesWork";
import { Requirements } from "./Requirements";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { BreadCrumbs } from "./BreadCrumbs";

export const Portfolio = () => {
  return (
    <div>
      <BreadCrumbs />
      <CompaniesWork />
      <Requirements />
      <Contact />
      <Footer />
    </div>
  );
};
