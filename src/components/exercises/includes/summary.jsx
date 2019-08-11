import React from "react";

function createInnerElements(names) {
  let arrayElems = [];
  let value = 0;
  for (let i = 0; i < names.length; i++) {
    arrayElems.push(
      <div className="list-group-item" key={value++}>
        {`${names[i]} (${names[i].length})`}
      </div>
    );
  }
  return arrayElems;
}

export function Summary(props) {
  return (
    <React.Fragment>
      <div className="list-group mb-3 mt-3">
        {createInnerElements(props.names)}
      </div>
    </React.Fragment>
  );
}
