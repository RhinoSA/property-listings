import React from "react";

export default function Row(props) {
  return (
    <tr>
      <td>{props.index + 1}</td>
      <td>{props.name}</td>
      <td>{props.name.length}</td>
      <td className="text-right">
        <button
          className="btn btn-secondary btn-sm"
          onClick={props.reverseCallback}
        >
          Reverse
        </button>
        <button
          className="btn btn-primary btn-sm ml-2"
          onClick={() => props.promoteCallback(props.name)}
        >
          Promote
        </button>
      </td>
    </tr>
  );
}
