import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import About from "./components/about/about";
import Services from "./components/ourServices/services";
import Solar from "./components/ourServices/solar/Solar";
import CCTV from "./components/ourServices/cctv/cctv";
import Sound from "./components/ourServices/sound/sound";
import ServicesIndex from "./components/ourServices/service_index/servicesIndex";
import Contact from "./components/contact/Contact";
import NotFound from "./components/notFound/NotFound";
import Arduino from "./components/ourServices/arduino/arduino";
import ArduinoIndex from "./components/ourServices/arduino/arduinoIndex";
import ArduinoItem from "./components/ourServices/arduino/arduinoItem";

const RouterConfig = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/our-services" element={<Services />}>
          <Route path="/" element={<ServicesIndex />} />
          <Route path=":cctv-cameras" element={<CCTV />} />
          <Route path=":arduino-shields" element={<Arduino />}>
            <Route path="/" element={<ArduinoIndex />} />
            <Route path=":slug" element={<ArduinoItem />} />
          </Route>
          <Route path=":sound-systems" element={<Sound />} />
          <Route path=":solar-panels" element={<Solar />} />
        </Route>
        <Route path="/contact-us" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};
export default RouterConfig;
