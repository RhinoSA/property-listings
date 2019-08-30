import React from "react";

const Bounce = () => {
  return (
    <svg width="500" height="290">
      <circle
        id="orange-circle33"
        r="30"
        cx="30"
        cy="35"
        fill="orange"
        cursor="pointer"
      />

      <animate
        xlinkHref="#orange-circle33"
        attributeName="cy"
        from="30"
        to="250"
        dur="3s"
        begin="click"
        calcMode="spline"
        values="35; 250; 120; 250; 170; 250; 210; 250"
        keyTimes="0; 0.15; 0.3; 0.45; 0.6; 0.75; 0.9; 1"
        keySplines="0.42 0 1 1;
                         0 0 0.59 1;
                         0.42 0 1 1;
                         0 0 0.59 1;
                         0.42 0 1 1;
                         0 0 0.59 1;
                         0.42 0 1 1"
        fill="freeze"
        id="circ-anim"
      />
    </svg>
  );
};

export default Bounce;
