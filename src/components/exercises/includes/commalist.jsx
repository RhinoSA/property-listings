import React from "react";

const capitalize = s => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

const noun = ["lion", "leopard", "cheetah"];
let info = "";
if (noun.length === 1) {
  for (let i = 0; i < noun.length; i++) {
    info += noun[i];
  }
} else {
  for (let i = 0; i < noun.length; i++) {
    if (i === noun.length - 1) {
      info += "and " + noun[i] + ".";
    } else if (i === noun.length - 2) {
      info += "" + noun[i] + " ";
    } else {
      info += noun[i] + ", ";
    }
  }
}

const CommaList = () => {
  return (
    <React.Fragment>
      <p>{capitalize(info)}</p>
    </React.Fragment>
  );
};

export default CommaList;
