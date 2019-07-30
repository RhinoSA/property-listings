import React, { Component } from "react";

class Popover extends Component {
  render() {
    return (
      <button
        type="button"
        className="btn btn-secondary btn-sm"
        data-container="body"
        data-toggle="popover"
        data-placement="right"
        data-html="true"
        data-content={this.props.poptext}
        data-title={this.props.poptitle}
      >
        {this.props.popbtn}
      </button>
    );
  }
}

export default Popover;
