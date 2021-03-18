import React from "react";
import { SmoothProvider } from "react-smooth-scrolling";
import "./App.css";
import { RouterConfig } from "./routes";

function App() {
  return (
    // <SmoothProvider skew={true}>
      <RouterConfig />
    // </SmoothProvider>
  );
}

export default App;
