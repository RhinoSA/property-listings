import React from "react";
import "./star.css";
const Intervals = () => {
  return (
    <svg width="100%" height="90">
      <rect
        id="intervals"
        width="50"
        height="50"
        x="10"
        y="10"
        fill="rgba(155, 178, 80, 1)"
      />
      <animateTransform
        xlinkHref="#intervals"
        attributeName="transform"
        attributeType="XML"
        type="rotate"
        from="0 35 35"
        to="360 35 35"
        dur="2s"
        begin="0s; 5s; 9s; 17s;"
        end="2s; 8s; 15s; 25s;"
        fill="freeze"
        restart="whenNotActive"
      />
    </svg>
  );
};

export default Intervals;
