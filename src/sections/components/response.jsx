import React from "react";

export function Response({ name, response }) {
  return (
    <React.Fragment>
      <div className="card mt-3 mb-3 ml-3 mr-3">
        <div className="card-body">
          <p className="card-text">
            {name}: {response}
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}
