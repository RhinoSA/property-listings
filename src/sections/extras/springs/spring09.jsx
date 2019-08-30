import React from "react";
import { useSpring, animated, interpolate } from "react-spring";
export default function Spring09() {
  const animation = useSpring({
    number: 40,
    opacity: 1,
    width: 300,
    color: "#333",
    from: { number: 0, opacity: 0, width: 0, color: "#fff" }
  });

  return (
    <div>
      <animated.p
        style={{
          opacity: animation.opacity,
          width: animation.width,
          backgroundColor: animation.color,
          padding: 10,
          borderRadius: 20,
          textAlign: "center",
          color: "#fff"
        }}
      >
        {animation.number.interpolate(n => n.toFixed(2))}
      </animated.p>
    </div>
  );
}
