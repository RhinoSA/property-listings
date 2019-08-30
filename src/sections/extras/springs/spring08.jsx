import React from "react";
import { useSpring, animated } from "react-spring";

export default function Spring08() {
  const props = useSpring({
    from: {
      position: "absolute",
      left: "0",
      bottom: "0",
      marginLeft: "10px",
      marginBottom: "10px",
      width: "20px",
      height: "20px",
      background: "#333",
      borderRadius: "0px"
    },
    to: async next => {
      while (5000) {
        await next({
          left: "0",
          bottom: "0",
          marginLeft: "20px",
          marginBottom: "10px",
          width: "40px",
          height: "40px",
          borderRadius: "20px"
        });
        await next({
          marginLeft: "60px",
          marginBottom: "10px",
          width: "60px",
          height: "60px",
          borderRadius: "30px"
        });
        await next({
          marginLeft: "90px",
          marginBottom: "10px",
          width: "80px",
          height: "80px",
          borderRadius: "40px"
        });
        await next({
          marginLeft: "80px",
          marginBottom: "10px",
          width: "70px",
          height: "70px",
          borderRadius: "35px"
        });
        await next({
          marginLeft: "50px",
          marginBottom: "10px",
          width: "40px",
          height: "40px",
          borderRadius: "20px"
        });
        await next({
          marginLeft: "10px",
          marginBottom: "10px",
          width: "20px",
          height: "20px",
          borderRadius: "10px"
        });
      }
    }
  });
  return (
    <div
      style={{
        width: "100%",
        height: 100,
        overflow: "hidden",
        backgroundColor: "#d8d8d8",
        position: "relative"
      }}
    >
      <animated.div className="script-box" style={props} />
    </div>
  );
}
