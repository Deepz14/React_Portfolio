import React from "react";
import { BreadCrumbs } from "./BreadCrumbs";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { ContactForm } from "./ContactForm";
import { Map } from "./Map";

export const Contactus = () => {
  return (
    <div>
      <BreadCrumbs />
      <ContactForm />
      <Map />
      <Contact />
      <Footer />
    </div>
  );
};
