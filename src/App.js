import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import Header from "./components/Header";
import { Provider } from "react-redux";
import store from "./store";

export default function app() {
  //o provider permite que os componentes acessem o redux
  return (
    //para uso de requisições assincronas no redux, ver o
    //redux thunk=>https://www.digitalocean.com/community/tutorials/redux-redux-thunk-pt
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}
