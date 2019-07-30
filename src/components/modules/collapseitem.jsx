import React, { Component } from "react";

class CollapseItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openedText: "Hide",
      closedText: "Show",
      collapseBtnWidth: 50
    };
    this.toggleText = this.toggleText.bind(this);
  }

  toggleText() {
    this.setState(function(prevState) {
      return { isToggleOn: !prevState.isToggleOn };
    });
  }

  render() {
    const collapseThisID = "#" + this.props.collapseID;
    const wrapperID = "#" + this.props.wrapperID;
    return (
      <div className="card">
        <div
          id={this.props.headingID}
          className="card-header d-flex justify-content-between align-items-center"
          style={{ paddingTop: 4, paddingBottom: 5 }}
        >
          <h5 className="mb-0">{this.props.accTitle}</h5>
          <button
            style={{ width: this.state.collapseBtnWidth }}
            className="btn btn-secondary btn-sm collapsed"
            type="button"
            data-toggle="collapse"
            data-target={collapseThisID}
            aria-expanded={this.props.ariaExpand}
            aria-controls={this.props.id}
            aria-labelledby={this.props.headingID}
            //onClick={this.toggleText}
          />
        </div>
        <div
          className="collapse"
          id={this.props.collapseID}
          data-parent={wrapperID}
        >
          <div className="card-body">{this.props.accText}</div>
        </div>
      </div>
    );
  }
}

export default CollapseItem;
