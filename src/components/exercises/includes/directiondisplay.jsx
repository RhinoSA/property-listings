import React, { Component } from "react";

export class DirectionDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      direction: "up",
      lastValue: 0
    };
  }

  getClasses() {
    return (
      (this.state.direction === "up" ? "alert-info" : "alert-primary") +
      " text-center alert"
    );
  }

  render() {
    return <h5 className={this.getClasses()}>{this.props.value}</h5>;
  }

  static getDerivedStateFromProps(props, state) {
    if (props.value !== state.lastValue) {
      return {
        lastValue: props.value,
        direction: state.lastValue > props.value ? "down" : "up"
      };
    }
    return state;
  }
}
