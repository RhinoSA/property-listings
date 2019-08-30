import React, { useState } from "react";

import { useSpring, animated } from "react-spring";
import "./styles01.css";

/*
0 % { transform: scale(1); }
25 % { transform: scale(.97); }
35 % { transform: scale(.9); }
45 % { transform: scale(1.1); }
55 % { transform: scale(.9); }
65 % { transform: scale(1.1); }
75 % { transform: scale(1.03); }
100 % { transform: scale(1); }
`*/

function Spring03() {
  // Spring text
  const [state, toggle] = useState(true);
  const { x } = useSpring({
    from: { x: 0 },
    x: state ? 1 : 0,
    config: { duration: 1000 }
  });
  // Fade in block
  const props2 = useSpring({
    number: 0,
    from: { number: 100 },
    config: { duration: 1000 }
  });
  const props = useSpring({
    marginBottom: 15,
    fontSize: 30,
    to: [
      {
        height: 0,
        borderRadius: 2,
        padding: 0,
        width: 0,
        opacity: 0,
        color: "rgba(250,250,250,0.3)",
        overflow: "hidden"
      },
      {
        height: 20,
        borderRadius: 4,
        padding: 5,
        width: 10,
        opacity: 0.1,
        color: "rgba(250,250,250,0.6)",
        overflow: "hidden"
      },
      {
        height: 40,
        borderRadius: 6,
        padding: 10,
        width: 60,
        opacity: 0.3,
        color: "rgba(250,250,250,0.8)",
        overflow: "hidden"
      },
      {
        height: 60,
        borderRadius: 14,
        padding: 15,
        width: 120,
        opacity: 1,
        color: "rgba(250,250,250,1)",
        overflow: "hidden"
      }
    ],
    from: {
      height: 0,
      borderRadius: 0,
      padding: 0,
      width: 0,
      opacity: 0,
      color: "rgba(250,250,250,0)",
      overflow: "hidden"
    },
    config: { duration: 500 }
  });
  return (
    <React.Fragment>
      <div onClick={() => toggle(!state)}>
        <animated.div
          style={{
            fontSize: 30,
            cursor: "pointer",
            opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
            transform: x
              .interpolate({
                range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
              })
              .interpolate(x => `scale(${x})`)
          }}
        >
          Click Here
        </animated.div>
      </div>
      <animated.div className="test-block" style={props}>
        Click
      </animated.div>
      <div className="mt-3 mb-3">
        <animated.span>{props2.number}</animated.span>
      </div>
    </React.Fragment>
  );
}

export default Spring03;
