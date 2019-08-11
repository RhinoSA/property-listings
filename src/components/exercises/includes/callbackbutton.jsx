import React from "react";

export default function CallbackButton(props) {
  return (
    <button className={props.className} onClick={props.callback}>
      {props.text}
    </button>
  );
}
