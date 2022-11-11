import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, HashRouter } from "react-router-dom";
import DataProvider from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <DataProvider>
      <BrowserRouter>
        <HashRouter>
          <App />
        </HashRouter>
      </BrowserRouter>
    </ DataProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
