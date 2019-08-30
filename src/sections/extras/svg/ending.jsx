import React from "react";

const Ending = () => {
  return (
    <svg width="500" height="80">
      <circle id="orange-circle66" r="30" cx="100" cy="30" fill="orange" />
      <circle
        id="green-circle"
        r="30"
        cx="30"
        cy="30"
        fill="rgba(155, 178, 80, 1)"
        cursor="pointer"
      />

      <animate
        xlinkHref="#orange-circle66"
        attributeName="cx"
        from="100"
        to="450"
        dur="30s"
        begin="0s"
        end="gCircAnim.begin"
        fill="freeze"
        id="oCircAnim"
      />
      <animate
        xlinkHref="#green-circle"
        attributeName="cx"
        from="30"
        to="450"
        dur="1s"
        begin="click"
        fill="freeze"
        id="gCircAnim"
      />
    </svg>
  );
};

export default Ending;
