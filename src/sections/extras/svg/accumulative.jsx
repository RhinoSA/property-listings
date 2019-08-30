import React from "react";

const Accumulative = () => {
  return (
    <svg width="100%" height="80">
      <circle
        id="orange-circle45"
        r="30"
        cx="30"
        cy="30"
        fill="orange"
        cursor="pointer"
      />

      <animate
        xlinkHref="#orange-circle45"
        attributeName="cx"
        from="0"
        to="200"
        additive="sum"
        repeatCount="3"
        calcMode="spline"
        keyTimes="0;1"
        keySplines=".42 0 1 1"
        dur="1s"
        begin="click"
        fill="freeze"
      />
    </svg>
  );
};

export default Accumulative;
