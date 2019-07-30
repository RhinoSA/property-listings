import React, { Component } from "react";

class NavToggle extends Component {
  render() {
    return (
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target={"#" + this.props.navBarID}
        aria-controls={this.props.navBarID}
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
    );
  }
}

export default NavToggle;
