import React from "react";

const Morph = () => {
  return (
    <React.Fragment>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="80"
        height="80"
        viewBox="0 0 360.36 339.979"
      >
        <polygon
          fill="rgb(219, 180, 107)"
          id="star"
          stroke="none"
          strokeWidth="0"
          strokeMiterlimit="10"
          cursor="pointer"
          points="249.062,208.54 357.221,131.845 
       223.304,131.845 180.119,3.145 136.976,131.845 3.287,131.845 111.272,208.459 68.22,336.854 180.206,257.359 292.129,336.861"
        >
          <animate
            attributeName="points"
            begin="star.click"
            dur="500ms"
            repeatCount="1"
            fill="freeze"
            to="288.754,134.512 353.754,69.345 
       316.446,32.655 215.254,132.345 107.254,237.845 25.754,168.845 4.254,191.512 55.587,275.178 93.254,338.345 217.556,209.9"
          />
          <animate
            attributeName="fill"
            begin="star.click"
            dur="500ms"
            repeatCount="1"
            fill="freeze"
            to="rgba(155, 178, 80, 1)"
          />
        </polygon>
      </svg>
    </React.Fragment>
  );
};

export default Morph;
