import React, { Component } from "react";
import Menu from "../menu";
import Users from "./users/users";

class UniqueID extends Component {
  state = {};

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Menu />
          </div>
          <div className="col-md-9">
            <h1>Unique ID</h1>
            <Users />
          </div>
        </div>
      </div>
    );
  }
}

export default UniqueID;
