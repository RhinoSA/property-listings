import React from "react";
import { useSpring, animated, interpolate } from "react-spring";
export default function Spring10() {
  const { num, xyz, color } = useSpring({
    from: {
      num: 0,
      xyz: [0, 0, 0],
      color: "#333"
    },
    num: 1,
    xyz: [100, 0, 0],
    color: "#fff"
  });

  const svganimate = useSpring({ value: 46, from: { value: 10 } });
  return (
    <React.Fragment>
      <svg width="100" height="100">
        <animated.circle
          cx="50"
          cy="50"
          r={svganimate.value}
          stroke="#333"
          strokeWidth="2"
          fill="#ccc"
        />
      </svg>
      <animated.div
        style={{
          margin: "15px 0px 15px 0px",
          width: "100px",
          borderRadius: 20,
          fontSize: 30,
          // Colour is not interpolated...
          color,
          // Unless you need to interpolate them
          background: num.interpolate(o => `rgba(120, 120, 120, ${o})`),
          // Which works with arrays as well
          transform: xyz.interpolate(
            (x, y, z) => `translate3d(${x}px, ${y}px, ${z}px)`
          ),
          // If you want to combine multiple values use the "interpolate" helper
          border: interpolate(
            [num, color],
            (num, c) => `${num * 2}px solid ${c}`
          ),
          // You can also form ranges, even chain multiple interpolations
          padding: num
            .interpolate({ range: [0, 0.5, 1], output: [0, 0, 2] })
            .interpolate(num => `${num}%`),
          // Interpolating strings (like up-front) through ranges is allowed ...
          borderColor: num.interpolate({
            range: [0, 1],
            output: ["#ccc", "#333"]
          }),
          // There's also a shortcut for plain, optionless ranges ...
          opacity: num.interpolate([0.1, 0.2, 0.6, 1], [1, 0.1, 0.5, 1])
        }}
      >
        {num.interpolate(n => n.toFixed(2))}
      </animated.div>
    </React.Fragment>
  );
}
