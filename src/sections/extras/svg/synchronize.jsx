import React from "react";

const Synchronize = () => {
  return (
    <svg width="100%" height="170">
      <circle
        id="orangecircle02"
        r="30"
        cx="30"
        cy="32"
        fill="orange"
        cursor="pointer"
      />
      <rect
        id="bluerectangle"
        width="30"
        height="30"
        x="15"
        y="72"
        fill="#0099cc"
      />
      <rect
        id="red-rectangle"
        width="30"
        height="30"
        x="15"
        y="110"
        fill="rgb(178, 119, 80)"
      />
      <animate
        xlinkHref="#orangecircle02"
        attributeName="cx"
        from="50"
        to="450"
        dur="5s"
        begin="click"
        fill="freeze"
        id="circanimate"
      />

      <animate
        xlinkHref="#bluerectangle"
        attributeName="x"
        from="50"
        to="435"
        dur="5s"
        begin="circanimate.begin + 1s"
        fill="freeze"
        id="rect-anim"
      />

      <animate
        xlinkHref="#red-rectangle"
        attributeName="x"
        from="50"
        to="435"
        dur="5s"
        begin="circanimate.end + 1s"
        fill="freeze"
        id="rect-anim"
      />
    </svg>
  );
};

export default Synchronize;
