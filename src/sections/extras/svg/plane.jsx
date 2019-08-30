import React from "react";
import "./star.css";
import Rocket from "./rocket";
import Planet from "./planet";

const Plane = () => {
  return (
    <div className="space-scene">
      <div className="space-overlay">CSS Motion Path</div>
      <div className="planet-move">
        <Planet />
      </div>
      <div className="mover">
        <div className="rocket-scale">
          <Rocket />
        </div>
      </div>
    </div>
  );
};

export default Plane;
