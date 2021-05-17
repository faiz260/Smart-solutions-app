import React from "react";
import "./NotFound.css";
import Footer from "../footer/footer";
import LowerFooter from "../footer/lower_footer";
import Lottie from "react-lottie";
// import animationData from "../../assets/not-found.json";
import animationData from "../../assets/page-not-found-404.json";

function NotFound() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="notFound">
      <div className="notFound_lottie">
        <Lottie options={defaultOptions} />
      </div>
      <Footer />
      <LowerFooter />
    </div>
  );
}

export default NotFound;
