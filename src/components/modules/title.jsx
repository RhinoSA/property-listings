import React, { Component } from "react";

class Title extends Component {
  state = {};
  render() {
    return <h1 className="main-head">{this.props.title}</h1>;
  }
}

export default Title;
