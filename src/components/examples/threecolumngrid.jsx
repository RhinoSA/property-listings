import React, { Component } from "react";

class ThreeColumnGrid extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-4">
            <h2>{this.props.headerOne}</h2>
            <p>{this.props.contentOne}</p>
          </div>
          <div className="col-md-4">
            <h2>{this.props.headerTwo}</h2>
            <p>{this.props.contentTwo}</p>
          </div>
          <div className="col-md-4">
            <h2>{this.props.headerThree}</h2>
            <p>{this.props.contentThree}</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ThreeColumnGrid;
