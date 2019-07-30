import React, { Component } from "react";

class CollapesSingle extends Component {
  constructor() {
    super();
    this.state = {};
    this.toggleText = this.toggleText.bind(this);
  }

  toggleText() {
    this.setState(function(prevState) {
      return { isToggleOn: !prevState.isToggleOn };
    });
  }

  render() {
    const collapseThisID = "#" + this.props.collapseID;
    return (
      <React.Fragment>
        <p className="mb-0 mt-3">
          <button
            style={{ width: this.props.collapseBtnWidth }}
            className="collapser btn btn-secondary btn-sm"
            type="button"
            data-toggle="collapse"
            data-target={collapseThisID}
            aria-expanded="false"
            aria-controls="collapseExample"
            onClick={this.toggleText}
          >
            {this.state.isToggleOn
              ? this.props.closedText
              : this.props.openedText}
          </button>
        </p>
        <div className="collapse" id={this.props.collapseID}>
          <div className="card card-body mt-3">{this.props.collapseText}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default CollapesSingle;
