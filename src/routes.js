import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import About from "./components/about/about";
import Footer from "./components/home/footer/footer";
import LowerFooter from "./components/home/footer/lower_footer";
import Services from "./components/ourServices/services";
import Solar from "./components/ourServices/solar";
import Automation from "./components/ourServices/automation";
import Industry from "./components/ourServices/industry";
import Sound from "./components/ourServices/sound";

export const RouterConfig = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/our-services" element={<Services />}></Route>
        <Route path="/our-services/industry-solutions" element={<Industry />} />
        <Route path="/solar-panels" element={<Solar />} />
        <Route path="/our-services/automation " element={<Automation />} />
        <Route path="/our-services/sound-systems" element={<Sound />} />
        {/* <Route exact path="/products" element={}>
          <Route path="/" element={} />
          <Route path=":slug" element={} />
        </Route> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer />
      <LowerFooter />
    </Router>
  );
};
