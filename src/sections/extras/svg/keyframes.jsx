import React, { Component } from "react";
class Keyframes extends Component {
  state = {};
  render() {
    return (
      <svg width="500" height="90">
        <circle
          id="orange-circle3"
          r="30"
          cx="30"
          cy="40"
          fill="orange"
          cursor="pointer"
        />

        <animate
          xlinkHref="#orange-circle3"
          attributeName="cx"
          from="30"
          to="450"
          dur="3s"
          begin="click"
          values="30; 450; 50; 200; 30"
          keyTimes="0; 0.5; 0.8; 0.9; 1"
          fill="freeze"
          id="circ-anim"
        />
      </svg>
    );
  }
}

export default Keyframes;
