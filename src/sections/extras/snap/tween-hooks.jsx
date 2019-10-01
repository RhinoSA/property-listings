import React, { useState, useEffect } from "react";
import { TimelineLite } from "gsap/all";

const TweenHooks = function() {
  const [toggle, setToggle] = useState(false);
  const [tl] = useState(new TimelineLite({ paused: true }));

  let tweenTarget = null;

  const toggleTimeline = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    tl.to(tweenTarget, 0.5, { x: 100 })
      .to(tweenTarget, 1, { rotation: 360 })
      .reverse();
  }, [tl, tweenTarget]);

  useEffect(() => {
    tl.reversed(!toggle);
  }, [toggle, tl]);

  return (
    <React.Fragment>
      <h2>Using a Timeline with React Hooks</h2>
      <p>
        This is an example of how one can control an animation with REACT hooks.
      </p>
      <button className="btn btn-info mb-3" onClick={toggleTimeline}>
        Toggle Timeline
      </button>
      <div
        className="card text-white bg-success"
        style={{ width: 200, marginBottom: 15 }}
        ref={e => (tweenTarget = e)}
      >
        <div className="card-body" style={{ backgroundColor: "#333" }}>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TweenHooks;
