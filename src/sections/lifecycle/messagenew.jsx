import React, { Component } from "react";
import { ActionButton } from "./actionbutton";

export class MessageNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSpan: false
    };
  }

  componentDidMount() {
    console.log("Messages component mounted");
  }

  componentDidUpdate() {
    console.log("Messages component updated");
  }

  handleClick = event => {
    this.setState({ showSpan: !this.state.showSpan });
    this.props.callback(event);
  };

  getMessageElement() {
    let div = (
      <div id="messageDiv" className="h5 mt-3">
        {this.props.message}
      </div>
    );
    return this.state.showSpan ? <span>{div}</span> : div;
  }

  render() {
    console.log(`Render Message Component `);
    return (
      <div>
        <ActionButton
          theme="secondary"
          {...this.props}
          callback={this.handleClick}
        />
        {this.getMessageElement()}
      </div>
    );
  }

  shouldComponentUpdate(newProps, newState) {
    let change = newProps.message !== this.props.message;
    if (change) {
      console.log(`shouldComponentUpdate ${this.props.text}: Update Allowed`);
    } else {
      console.log(`shouldComponentUpdate ${this.props.text}: Update Prevented`);
    }
    return change;
  }
}
