import React from "react";
import "./styles.css";
import { HeaderContactInfo } from "./HeaderContact/HeaderContactInfo";
import { NavbarSection } from "./NavComponent/NavbarSection";
import { Home } from "./Pages/Home/Home";
import { Aboutus } from "./Pages/About/Aboutus";
import { Portfolio } from "./Pages/Portfolio/Portfolio";
import { Contactus } from "./Pages/Contact/Contactus";
import { Webdesign } from "./Pages/Webdesign/Webdesign";
import { Webdevelopment } from "./Pages/Webdevelopment/Webdevelopment";
import { Seoservice } from "./Pages/Seoservice/Seoservice";
import { Softwaredevelopment } from "./Pages/Softwaredevelopment/Softwaredevelopment";
import { Mobileapp } from "./Pages/Mobileapp/Mobileapp";
import { Graphicdesign } from "./Pages/Graphicdesign/Graphicdesign";
import { BrowserRouter, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderContactInfo />
        <NavbarSection />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={Aboutus} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contactus} />
        <Route path="/webdesigning" component={Webdesign} />
        <Route path="/webdevelopment" component={Webdevelopment} />
        <Route path="/seoservices" component={Seoservice} />
        <Route path="/mobileapp" component={Mobileapp} />
        <Route path="/softwaredevelopment" component={Softwaredevelopment} />
        <Route path="/graphicdesign" component={Graphicdesign} />
      </div>
    </BrowserRouter>
  );
}
