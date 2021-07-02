import React from "react";
import { SmoothProvider } from "react-smooth-scrolling";
import "./App.css";
import RouterConfig from "./routes";
import MessengerCustomerChat from 'react-messenger-customer-chat';

function App() {
  return (
    // <SmoothProvider skew={true}>
    <RouterConfig />
    // </SmoothProvider>
  );
}

export default App;
