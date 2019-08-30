import React from "react";
import "./star.css";

const StarShape = () => {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      className="main-shape"
      viewBox="0 0 470.677 470.677"
    >
      <circle className="circle-main" cx="235.464" cy="234.906" r="221.973" />
      <path
        fill="none"
        strokeMiterlimit="10"
        d="M235.464,13.934c-59.024,0-114.515,22.985-156.251,64.721
	c-41.736,41.736-64.722,97.227-64.722,156.251c0,59.023,22.985,114.515,64.722,156.251s97.227,64.722,156.251,64.722
	c59.023,0,114.515-22.985,156.251-64.722s64.722-97.228,64.722-156.251c0-59.024-22.985-114.515-64.722-156.251
	C349.978,36.919,294.487,13.934,235.464,13.934z"
      />
      <circle className="circle-inner" cx="235.487" cy="234.827" r="185.879" />
      <polygon
        className="star"
        points="235.43,49.414 123.532,383.222 
	412.533,178.114 58.599,178.114 347.441,383.222 "
      />
      <g className="circle-group">
        <circle className="circ-01" cx="235.339" cy="235.339" r="26.319" />
        <circle className="circ-01" cx="78.347" cy="78.347" r="7" />
        <circle className="circ-01" cx="78.347" cy="392.33" r="7" />
        <circle className="circ-01" cx="392.33" cy="78.347" r="7" />
        <circle className="circ-01" cx="392.33" cy="392.33" r="7" />
        <circle className="circ-01" cx="235.339" cy="13.319" r="7" />
        <circle className="circ-01" cx="13.319" cy="235.339" r="7" />
        <circle className="circ-01" cx="457.358" cy="235.339" r="7" />
        <circle className="circ-01" cx="235.339" cy="457.358" r="7" />
      </g>

      <circle
        id="orange-circle2"
        className="springer"
        r="30"
        cx="235.339"
        cy="235.339"
      />

      <animate
        xlinkHref="#orange-circle2"
        attributeName="cy"
        from="50"
        to="250"
        dur="3s"
        begin="click"
        values="50; 250; 120;250; 170; 250; 210; 235.339"
        keyTimes="0; 0.15; 0.3; 0.45; 0.6; 0.75; 0.9; 1"
        keySplines=".42 0 1 1;
                0 0 .59 1;
                .42 0 1 1;
                0 0 .59 1;
                .42 0 1 1;
                0 0 .59 1;
                .42 0 1 1;
                0 0 .59 1;"
        fill="freeze"
        id="circ-anim"
      />

      <circle id="circleNew" className="path-follower" r="14" cx="0" cy="0" />

      <path
        id="motionPath"
        fill="none"
        stroke="#000000"
        strokeMiterlimit="10"
        d="M235.464,13.934c-59.024,0-114.515,22.985-156.251,64.721
        c-41.736,41.736-64.722,97.227-64.722,156.251c0,59.023,22.985,114.515,64.722,156.251s97.227,64.722,156.251,64.722
        c59.023,0,114.515-22.985,156.251-64.722s64.722-97.228,64.722-156.251c0-59.024-22.985-114.515-64.722-156.251
        C349.978,36.919,294.487,13.934,235.464,13.934z"
      />

      <animateMotion
        xlinkHref="#circleNew"
        dur="5s"
        begin="0s"
        fill="freeze"
        repeatCount="indefinite"
      >
        <mpath xlinkHref="#motionPath" />
      </animateMotion>
    </svg>
  );
};

export default StarShape;
