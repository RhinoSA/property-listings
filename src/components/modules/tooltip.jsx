import React, { Component } from "react";

class Tooltip extends Component {
  state = {
    tooltipClass: "secondary",
    tooltipPlace: "top",
    tooltipTitle: "This is the wording.",
    tooltipName: "Tooltip Top"
  };
  render() {
    const tooltipClasses = "btn btn-sm btn-" + this.props.tooltipClass;
    return (
      <button
        type="button"
        html="true"
        className={tooltipClasses}
        data-toggle="tooltip"
        data-placement={this.props.tooltipPlace}
        title={this.props.tooltipTitle}
      >
        {this.props.tooltipName}
      </button>
    );
  }
}

export default Tooltip;
