import React, { Component } from "react";
import { MammalsProvider } from "./context/MammalsContext";

import Species from "./components/Species";
import Orders from "./components/Orders";
import WindowSize from "./windowsize";
//import ItemToMeasure from "./measure";

class Application extends Component {
  render() {
    return (
      <MammalsProvider>
        <WindowSize />
        <Orders />
        <Species />
      </MammalsProvider>
    );
  }
}

export default Application;
