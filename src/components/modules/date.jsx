import React, { Component } from "react";

function formatDate(date) {
  const datetwo = new Date();
  return datetwo.toLocaleDateString();
}

class Date extends Component {
  render() {
    return <h5>{formatDate(this.props.datetwo)}</h5>;
  }
}

export default Date;
