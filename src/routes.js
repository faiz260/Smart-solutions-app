import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import About from "./components/about/about";
import Footer from './components/home/footer/footer';
import LowerFooter from './components/home/footer/lower_footer';


export const RouterConfig = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
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
