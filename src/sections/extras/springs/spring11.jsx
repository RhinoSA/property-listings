import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

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

function Spring11() {
  const [state, toggle] = useState(true);
  const { x } = useSpring({
    from: { x: 0 },
    x: state ? 1 : 0,
    config: ({ duration: 1000 },
    { mass: 1 },
    { tension: 120 },
    { friction: 40 })
  });
  return (
    <div onClick={() => toggle(!state)}>
      <animated.div
        style={{
          backgroundColor: "#333",
          fontSize: 20,
          color: "#fff",
          padding: 15,
          cursor: "pointer",
          margin: "15px 0px 15px 0px",
          opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
          transform: x
            .interpolate({
              range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
              output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
            })
            .interpolate(x => `scaleY(${x})`)
        }}
      >
        Font
      </animated.div>
    </div>
  );
}

export default Spring11;
