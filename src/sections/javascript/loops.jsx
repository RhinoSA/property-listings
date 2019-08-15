import React, { Component } from "react";
import Menu from "../menu";
import CommaList from "./commalist";

class Loops extends Component {
  state = {};

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <Menu />
            </div>
            <div className="col-md-9">
              <h1>Javascript Loops</h1>
              <h2>Comma Separated List</h2>
              <CommaList />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Loops;
