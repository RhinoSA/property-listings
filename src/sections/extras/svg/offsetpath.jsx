import React from "react";
import "./star.css";

const OffsetPath = () => {
  return (
    <React.Fragment>
      <svg
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="500px"
        height="500px"
        viewBox="0 0 500 430"
      >
        <path
          fill="#FFFFFF"
          //className="shiftme"
          stroke="#000000"
          strokeMiterlimit="10"
          d="M104,80c-40,36-47,158-20.591,219.546
   C110.466,362.603,170.88,408.781,214,415c104,15,179.48-29.93,218-127c25-63,13.447-181.869-88-217.869
   C295.835,53.039,221,48,186,98c-23.117,33.024-36,78-23,130c8.335,33.34,43,64,76,79s102,0,120-41s12-103-24-128s-95-23-112,20
   c-10.464,26.467,4,74,35,85s61-17,61-17"
        />
        <g id="circle">
          <circle
            r="20"
            cx="0"
            cy="0"
            fill="tomato"
            //transform="scale (-1, 1) translate(-100, -80)"
            //className="shiftme"
          />
        </g>
        <animateMotion
          xlinkHref="#circle"
          dur="1s"
          begin="click"
          fill="freeze"
          path="M104,80c-40,36-47,158-20.591,219.546
          C110.466,362.603,170.88,408.781,214,415c104,15,179.48-29.93,218-127c25-63,13.447-181.869-88-217.869
          C295.835,53.039,221,48,186,98c-23.117,33.024-36,78-23,130c8.335,33.34,43,64,76,79s102,0,120-41s12-103-24-128s-95-23-112,20
          c-10.464,26.467,4,74,35,85s61-17,61-17"
        >
          <mpath xlinkHref="#circle" />
        </animateMotion>
      </svg>
    </React.Fragment>
  );
};

export default OffsetPath;
