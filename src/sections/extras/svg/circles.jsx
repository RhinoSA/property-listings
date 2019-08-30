import React from "react";
import "./circles.css";

const Circles = () => {
  return (
    <React.Fragment>
      <div className="wrapper-circles">
        <svg style={{ display: "none" }}>
          <defs>
            <symbol x="0" y="-25" viewBox="0 0 100 100" id="circles">
              <title>Circles</title>
              <path
                className="circleshape-outer"
                d="M50,0C22.386,0,0,22.386,0,50s22.386,50,50,50s50-22.386,50-50S77.614,0,50,0z M50,89.291
	C28.3,89.291,10.709,71.7,10.709,50S28.3,10.709,50,10.709C71.7,10.709,89.291,28.3,89.291,50S71.7,89.291,50,89.291z"
              />
              <circle className="circleshape-inner" cx="50" cy="50" r="25" />
            </symbol>
            <symbol
              x="0"
              y="0"
              viewBox="0 0 100 100"
              id="squares"
              className="squares-box"
            >
              <path
                className="squares-outer"
                d="M-0.184-0.374v100h100v-100H-0.184z M88.816,88.626h-78v-78h78V88.626z"
              />
              <rect
                x="31"
                y="31"
                className="squares-inner"
                transform="matrix(0.7071 -0.7071 0.7071 0.7071 -20.7107 50)"
                width="38"
                height="38"
              />
            </symbol>
          </defs>
        </svg>
        <svg className="circles-01">
          <use xlinkHref="#circles" />
        </svg>
        <svg className="circles-02">
          <use xlinkHref="#circles" />
        </svg>
        <svg className="circles-03">
          <use xlinkHref="#circles" />
        </svg>
        <svg className="squares-box">
          <use xlinkHref="#squares" />
        </svg>
      </div>
    </React.Fragment>
  );
};

export default Circles;
