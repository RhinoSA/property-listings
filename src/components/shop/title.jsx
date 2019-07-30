import React from "react";

function Title({ name, title }) {
  return (
    <div className="row">
      <div className="col-md-12">
        <h1 className="main-head">
          {name} {title}
        </h1>
      </div>
    </div>
  );
}

export default Title;
