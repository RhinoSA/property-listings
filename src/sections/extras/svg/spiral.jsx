import React from "react";
import "./star.css";

const Spiral = () => {
  return (
    <div
      style={{
        padding: 0,
        margin: "15px 0px 15px 0px",
        textAlign: "center",
        width: 140,
        display: "inline-block"
      }}
    >
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="80px"
        height="80px"
        margin="15px"
        viewBox="0 0 80 80"
      >
        <circle cx="40" cy="40" r="10" className="inner-spin" />
        <circle
          cx="40"
          cy="40"
          r="36"
          fill="transparent"
          stroke="rgba(155, 178, 80, 1)"
          strokeWidth="1"
        />
        <circle
          transform="rotate(-90 40 40)"
          className="another-circle"
          cx="40"
          cy="40"
          r="36"
          fill="transparent"
          stroke="rgba(155, 178, 80, 1)"
          strokeWidth="4"
        />
      </svg>
    </div>
  );
};

export default Spiral;
