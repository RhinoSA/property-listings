import React, { useState } from "react";
import { useSpring, animated as a } from "react-spring";
import "./styles01.css";

function Spring04() {
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  });
  return (
    <div
      onClick={() => set(state => !state)}
      style={{
        position: "relative",
        width: 300,
        height: 100,
        marginTop: 15,
        marginBottom: 15
      }}
    >
      <a.div
        className="c back"
        style={{ opacity: opacity.interpolate(o => 1 - o), transform }}
      >
        Front
      </a.div>
      <a.div
        className="c front"
        style={{
          opacity,
          transform: transform.interpolate(t => `${t} rotateX(180deg)`)
        }}
      >
        Back
      </a.div>
    </div>
  );
}

export default Spring04;
