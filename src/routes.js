import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/navbar';

export const RouterConfig = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* <Route exact path="/" element={} />
        <Route path="/about" element={} />
        <Route exact path="/products" element={}>
          <Route path="/" element={} />
          <Route path=":slug" element={} />
        </Route> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
};
