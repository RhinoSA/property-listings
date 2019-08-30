import React from "react";

const Repeating = () => {
  return (
    <svg width="500" height="150">
      <circle id="repeater" r="30" cx="30" cy="35" fill="orange" />
      <circle
        id="repeaterTwo"
        r="30"
        cx="30"
        cy="105"
        fill="rgba(155, 178, 80, 1)"
      />
      <animate
        xlinkHref="#repeater"
        attributeName="cx"
        from="30"
        to="250"
        dur="2s"
        begin="2s"
        repeatCount="2"
        fill="freeze"
        id="circ-anim"
      />
      <animate
        xlinkHref="#repeaterTwo"
        attributeName="cx"
        from="30"
        to="250"
        dur="2s"
        begin="2s"
        repeatCount="indefinite"
        fill="freeze"
        id="circ-anim"
      />
    </svg>
  );
};

export default Repeating;
