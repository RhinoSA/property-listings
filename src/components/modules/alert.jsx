import React, { Component } from "react";

class Toast extends Component {
  render() {
    const dismissable =
      this.props.alertDismiss === true
        ? "alert alert-dismissible fade show alert-" + this.props.alertClass
        : "alert alert-" + this.props.alertClass;
    //const classesAlert = dismissable + this.props.alertClass;
    return (
      <div className={dismissable} role="alert">
        {this.props.alertHeading !== "" ? (
          <h4 className="alert-heading">{this.props.alertHeading}</h4>
        ) : null}
        <p style={{ marginBottom: 7 }}>{this.props.alertText}</p>
        {this.props.alertDismiss === true ? (
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        ) : null}
      </div>
    );
  }
}

export default Toast;
