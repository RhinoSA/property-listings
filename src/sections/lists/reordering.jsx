import React, { Component } from "react";
import Menu from "../menu";

import Application from "./sort/Application.jsx";
import { Provider } from "react-redux";
import { configureStore } from "./sort/store/configureStore";
import SortInfo from "./sort/shared/SortInfo";
import data from "./sort/shared/data";

class Reordering extends Component {
  state = {
    animals: ["lion", "buffalo", "leopard", "cheetah", "duiker"]
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const initialState = {
      app: {
        developersList: data
      }
    };
    const store = configureStore(initialState);
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Menu />
          </div>
          <div className="col-md-9">
            <h1>Reordering Lists</h1>
            <Provider store={store}>
              <Application />
              <SortInfo />
            </Provider>
          </div>
        </div>
      </div>
    );
  }
}

export default Reordering;
