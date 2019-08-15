import React, { Component } from "react";

export class CountDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSpan: false
    };
  }

  render() {
    return (
      <div id="messageDiv" className="h5 mt-3">
        {this.props.message}
      </div>
    );
  }
}
