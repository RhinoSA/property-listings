import React, { useState, useEffect } from "react";
import { TweenLite } from "gsap/all";

const TweenHooksToggle = function() {
  const [rotate, setRotate] = useState(false);
  const [rotationTween, setRotationTween] = useState(
    TweenLite.to({}, 1, { paused: true })
  );

  let rotator = null;

  const toggleRotate = () => {
    setRotate(!rotate);
  };

  useEffect(() => {
    setRotationTween(TweenLite.to(rotator, 0.3, { rotation: 180 }).reverse());
  }, [rotator]);

  useEffect(() => {
    rotationTween.reversed(!rotate);
  }, [rotationTween, rotate]);

  return (
    <React.Fragment>
      <h2>GSAP Toggle using React Hooks</h2>
      <p>
        An example of how one can toggle the rotation of an element using GSAP
        and REACT hooks.
      </p>
      <button className="btn btn-info mb-3" onClick={toggleRotate}>
        Toggle Rotate
      </button>
      <div
        style={{
          width: 200,
          padding: 15,
          backgroundColor: "#333",
          color: "#fff",
          textAlign: "center",
          marginBottom: 15
        }}
        ref={e => (rotator = e)}
      >
        Side Effect
      </div>
    </React.Fragment>
  );
};

export default TweenHooksToggle;
