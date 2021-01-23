import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import Header from "./components/Header";
import { Provider } from "react-redux";
import store from "./store";

export default function app() {
  //o provider permite que os componentes acessem o redux
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}
