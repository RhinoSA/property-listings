import React, { Component } from "react";
import { ActionButton } from "./actionbutton";

export class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: ["Andrew", "Bob", "Mike", "Simon"]
    };
  }

  reverseList = () => {
    this.setState({ names: this.state.names.reverse() });
  };

  render() {
    console.log("Render List Component");
    return (
      <div>
        <p>
          <ActionButton
            theme="secondary"
            callback={this.reverseList}
            text="Reverse Names"
          />
        </p>
        <ul className="list-unstyled">
          {this.state.names.map((name, index) => {
            return (
              <li id={name.toLowerCase()} key={name}>
                {name}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
