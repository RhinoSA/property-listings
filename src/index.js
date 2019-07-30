import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductProvider } from "./context";

import * as serviceWorker from "./serviceWorker";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/js/jquery.min.js";

import { RoomProvider } from "./contextrooms";

import { MammalProvider } from "./contextmammals";

import App from "./App";

ReactDOM.render(
  <ProductProvider>
    <RoomProvider>
      <MammalProvider>
        <Router>
          <App />
        </Router>
      </MammalProvider>
    </RoomProvider>
  </ProductProvider>,
  document.getElementById("root")
);
serviceWorker.unregister();
