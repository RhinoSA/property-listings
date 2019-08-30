import React from "react";

const Rotating = () => {
  return (
    <svg width="210" height="140" style={{ backgroundColor: "#504b3b" }}>
      <rect
        id="rotator-one"
        className="rotator-one"
        width="40"
        height="40"
        x="20"
        y="20"
        fill="rgba(155, 178, 80, 1)"
        transform="rotate(0) translate(0 0)"
      />

      <rect
        id="rotator-two"
        className="rotator-two"
        width="40"
        height="40"
        x="80"
        y="80"
        fill="rgba(155, 178, 80, 1)"
        transform="rotate(0) translate(0 0)"
      />

      <rect
        id="rotator-three"
        className="rotator-three"
        width="40"
        height="40"
        x="150"
        y="20"
        fill="rgba(155, 178, 80, 1)"
        transform="rotate(0) translate(0 0)"
      />

      <animateTransform
        xlinkHref="#rotator-one"
        attributeName="transform"
        attributeType="XML"
        type="rotate"
        from="0 0 0"
        to="360 0 0"
        dur="2s"
        begin="0s"
        repeatCount="indefinite"
        fill="freeze"
      />

      <animateTransform
        xlinkHref="#rotator-two"
        attributeName="transform"
        attributeType="XML"
        type="rotate"
        from="0 0 0"
        to="360 0 0"
        dur="2s"
        begin="0s"
        repeatCount="indefinite"
        fill="freeze"
      />
      <animateTransform
        xlinkHref="#rotator-three"
        attributeName="transform"
        attributeType="XML"
        type="rotate"
        from="0 0 0"
        to="360 0 0"
        dur="2s"
        begin="0s"
        repeatCount="indefinite"
        fill="freeze"
      />
    </svg>
  );
};

export default Rotating;
