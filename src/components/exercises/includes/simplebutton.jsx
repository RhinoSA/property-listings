import React, { Component } from "react";

class SimpleButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasButtonBeenClicked: false
    };
  }

  handleClick = () => {
    this.props.incrementCallback(1);
    this.setState({
      hasButtonBeenClicked: true
    });
    this.props.callback();
  };

  render() {
    return (
      <button onClick={this.handleClick} className={this.props.className}>
        {this.props.text}
        {this.state.hasButtonBeenClicked && (
          <span>
            &nbsp;-&nbsp;{this.props.name} Clicked {this.props.counter}
          </span>
        )}
      </button>
    );
  }
}

export default SimpleButton;
