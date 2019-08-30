import React, { Component } from "react";
import Menu from "../../menu.jsx";
//import Snap from "react-snap";

class SnapSVG extends Component {
  state = {};
  componentDidMount() {}

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Menu />
          </div>
          <div className="col-md-9">
            <h1>Snap SVG</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default SnapSVG;
