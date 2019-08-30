import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
// npm i use-measure --save
import useMeasure from "use-measure";
// npm i resize-observer-polyfill
// npm i react-scripts
function Spring12() {
  const [open, toggle] = useState(false);
  const [bind, { width }] = useMeasure();
  const props = useSpring({ width: open ? width : 0 });

  return (
    <div {...bind} class="main" onClick={() => toggle(!open)}>
      <animated.div class="fill" style={props} />
      <animated.div class="content">
        {props.width.interpolate(x => x.toFixed(0))}
      </animated.div>
    </div>
  );
}

export default Spring12;
