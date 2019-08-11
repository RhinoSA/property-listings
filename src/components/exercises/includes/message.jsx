import React from "react";

export function Message({ type, title, name, message }) {
  let classes;
  switch (name) {
    case "Mark":
      classes = "alert alert-warning mb-0";
      break;
    case "Andrew":
      classes = "alert alert-info mb-0";
      break;
    default:
      classes = "alert alert-secondary mb-0";
  }
  if (type === "Heading") {
    return (
      <React.Fragment>
        <h2>{title}</h2>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <div className="card mt-3 mb-3">
          <div className="card-body">
            <h4 className="card-title">{name}'s Message:</h4>
            <div className="card-text">
              <p className={classes}>{message}</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
