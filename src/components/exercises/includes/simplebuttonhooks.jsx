import React, { useState } from "react";

export function SimpleButtonHooks(props) {
  const [counter, setCounter] = useState(0);
  const [hasButtonBeenClicked, setHasButtonBeenClicked] = useState(false);
  const handleClick = () => {
    setCounter(counter + 1);
    setHasButtonBeenClicked(true);
    props.callback();
  };

  return (
    <button
      onClick={handleClick}
      className={`btn btn-${props.className}`}
      disabled={props.disabled === "true" || props.disabled === true}
    >
      {props.text} ({counter}) {hasButtonBeenClicked && <span>- Clicked</span>}
    </button>
  );
}
