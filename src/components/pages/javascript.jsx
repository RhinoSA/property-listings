import React, { Component } from "react";
import Exercise01 from "../exercises/exercise01";
import Title from "../modules/title";

class JavaScript extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="container">
        <Title title="JavaScript Fundamentals" />
        <Exercise01 />
      </div>
    );
  }
}

export default JavaScript;
