import React, { Component } from "react";

class Collapse extends Component {
  // Need the props here for toggle
  constructor(props) {
    // Need the props here for the toggle
    super(props);
    this.state = {
      collapseBtnWidth: 80,
      collapseID: "exampleCollapse",
      closedText: "Show Info",
      openedText: "Hide Info",
      collapseText:
        "This is hidden information which is displayed when the user clicks on the button to open this panel to make it visible. The button's text also changes depending on whether the panel is opened or closed. Do not add a margin to the bottom of the hidden panel or there is an odd jump just as the panel is about to vanish."
    };
    this.toggleText = this.toggleText.bind(this);
  }

  toggleText() {
    this.setState(function(prevState) {
      return { isToggleOn: !prevState.isToggleOn };
    });
  }

  render() {
    const collapseThisID = "#" + this.state.collapseID;
    return (
      <React.Fragment>
        <p className="mb-0">
          <button
            style={{ width: this.state.collapseBtnWidth }}
            className="btn btn-secondary btn-sm"
            type="button"
            data-toggle="collapse"
            data-target={collapseThisID}
            aria-expanded="false"
            aria-controls="collapseExample"
            onClick={this.toggleText}
          >
            {this.state.isToggleOn
              ? this.state.openedText
              : this.state.closedText}
          </button>
        </p>
        <div className="collapse" id={this.state.collapseID}>
          <div className="card card-body mt-3">{this.state.collapseText}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default Collapse;
