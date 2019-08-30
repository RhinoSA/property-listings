import React from "react";
import "./star.css";

const PathFollow = () => {
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
        stroke-miterlimit="10"
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
      <circle id="orange-circle" r="30" cx="140" cy="50" fill="orange" />

      <rect
        id="blue-rectangle"
        width="50"
        height="50"
        x="25"
        y="200"
        fill="#0099cc"
      />
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
      <animate
        xlinkHref="#orange-circle"
        attributeName="cx"
        from="140"
        to="40"
        dur="5s"
        begin="click"
        fill="freeze"
        d="circ-anim"
      />

      <animate
        xlinkHref="#blue-rectangle"
        attributeName="x"
        from="140"
        to="325"
        dur="5s"
        begin="circ-anim.begin + 1s"
        fill="freeze"
        id="rect-anim"
      />

      <circle id="circle" r="20" cx="100" cy="100" fill="tomato" />

      <animateMotion
        xlinkHref="#circle"
        dur="1s"
        begin="click"
        fill="freeze"
        path="M0,0c3.2-3.4,18.4-0.6,23.4-0.6c5.7,0.1,10.8,0.9,16.3,2.3
	c13.5,3.5,26.1,9.6,38.5,16.2c12.3,6.5,21.3,16.8,31.9,25.4c10.8,8.7,21,18.3,31.7,26.9c9.3,7.4,20.9,11.5,31.4,16.7
	c13.7,6.8,26.8,9.7,41.8,9c21.4-1,40.8-3.7,61.3-10.4c10.9-3.5,18.9-11.3,28.5-17.8c5.4-3.7,10.4-6.7,14.8-11.5
	c1.9-2.1,3.7-5.5,6.5-6.5"
      />

      <path
        id="motionPath"
        fill="none"
        stroke="#000000"
        stroke-miterlimit="10"
        d="M235.464,13.934c-59.024,0-114.515,22.985-156.251,64.721
        c-41.736,41.736-64.722,97.227-64.722,156.251c0,59.023,22.985,114.515,64.722,156.251s97.227,64.722,156.251,64.722
        c59.023,0,114.515-22.985,156.251-64.722s64.722-97.228,64.722-156.251c0-59.024-22.985-114.515-64.722-156.251
        C349.978,36.919,294.487,13.934,235.464,13.934z"
      />

      <circle id="circleNew" className="path-follower" r="14" cx="0" cy="0" />

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

export default PathFollow;
