import React from "react";
import SimpleButton from "./simplebutton";
import CallBackButton from "./callbackbutton";
import HooksButton from "./hooksbutton";

export default function Rows(props) {
  return (
    <React.Fragment>
      <td style={{ width: "20%" }}>{props.index + 1}</td>
      <td style={{ width: "20%" }}>{props.name}</td>
      <td style={{ width: "20%" }}>{props.name.length}</td>
      <td style={{ width: "40%" }}>
        <CallBackButton
          theme="secondary"
          className="btn btn-secondary"
          text="Reverse"
          callback={props.reverseCallback}
        />
        <SimpleButton
          className="btn btn-secondary ml-2"
          text="Promote"
          name={props.name}
          callback={() => props.promoteCallback(props.name)}
        />
        <HooksButton
          className="btn btn-secondary ml-2"
          text="Promote"
          name={props.name}
          callback={() => props.promoteCallback(props.name)}
        />
      </td>
    </React.Fragment>
  );
}
