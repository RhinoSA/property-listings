import React, { Component } from "react";

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
      isLoggedOn: "This button is turned on.",
      isLoggedOff: "This button is turned off."
    };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <React.Fragment>
        <button
          className={
            this.state.isToggleOn
              ? "btn btn-secondary btn-sm active mb-2"
              : "btn btn-secondary btn-sm disabled mb-2"
          }
          onClick={this.handleClick}
        >
          {this.state.isToggleOn ? "ON" : "OFF"}
        </button>
        <p
          className={
            this.state.isToggleOn
              ? "alert alert-warning"
              : "alert alert-secondary"
          }
        >
          {this.state.isToggleOn
            ? this.state.isLoggedOn
            : this.state.isLoggedOff}
        </p>
      </React.Fragment>
    );
  }
}

export default Toggle;
