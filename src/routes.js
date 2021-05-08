import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import About from "./components/about/about";
import Footer from "./components/footer/footer";
import LowerFooter from "./components/footer/lower_footer";
import Services from "./components/ourServices/services";
import Solar from "./components/ourServices/solar/solar";
import Automation from "./components/ourServices/automation/automation";
import Industry from "./components/ourServices/industry/industry";
import Sound from "./components/ourServices/sound/sound";
import ServicesIndex from "./components/ourServices/service_index/servicesIndex";
import Contact from "./components/contact/Contact";

export const RouterConfig = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/our-services" element={<Services />}>
          <Route path="/" element={<ServicesIndex />} />
          <Route path=":sound-systems" element={<Sound />} />
          <Route path=":solar-panels" element={<Solar />} />
          <Route path=":industrial-solutions" element={<Industry />} />
          <Route path=":automation" element={<Automation />} />
        </Route>
        <Route path="/contact-us" element={<Contact />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      {/* <Footer />
      <LowerFooter /> */}
    </Router>
  );
};
