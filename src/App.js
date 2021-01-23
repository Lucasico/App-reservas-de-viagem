import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";

import Header from "./components/Header";

export default function app() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
    </BrowserRouter>
  );
}
