import React, { useState, useEffect } from "react";
import { ActionButton } from "./actionbutton";

export function HooksMessage(props) {
  const [showSpan, setShowSpan] = useState(false);

  useEffect(() => {
    console.log("useEffect function invoked");
    return () => console.log("useEffect cleanup");
  });

  const handleClick = event => {
    setShowSpan(!showSpan);
    props.callback(event);
  };

  const getMessageElement = () => {
    let div = (
      <div id="messageDiv" className="h5 mt-3 mb-3">
        {props.message}
      </div>
    );
    return showSpan ? <span>{div} </span> : div;
  };

  return (
    <div>
      <ActionButton theme="secondary" {...props} callback={handleClick} />
      {getMessageElement()}
    </div>
  );
}
