import React, { useState } from "react";

export default function HooksButton(props) {
  const [counter, setCounter] = useState(0);
  const [hasButtonBeenClicked, setHasButtonBeenClicked] = useState(false);

  const handleClick = () => {
    setCounter(counter + 1);
    setHasButtonBeenClicked(true);
    props.callback();
  };

  return (
    <button onClick={handleClick} className={props.className}>
      {props.text}{" "}
      {hasButtonBeenClicked && (
        <span>
          &nbsp;-&nbsp;{props.name} {counter}
        </span>
      )}
    </button>
  );
}
