import React, { Component } from "react";

class BadgeBtn extends Component {
  state = {
    badgeBtnText: "Notifications",
    badgeBtnCount: 4,
    badgeBtnClass: "primary"
  };
  render() {
    const badeClasses = "btn btn-" + this.props.badgeBtnClass;
    return (
      <button type="button" className={badeClasses}>
        {this.props.badgeBtnText}
        <span className="badge badge-light ml-2">
          {this.props.badgeBtnCount}
        </span>
      </button>
    );
  }
}

export default BadgeBtn;
