import React, { Component } from "react";
import { ActionButton } from "./actionbutton";
import Row from "./row";

export class FunctionProps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: ["Andrew", "Bob", "Mike", "Simon"]
    };
  }

  reverseList = () => {
    this.setState({ names: this.state.names.reverse() });
  };

  promoteName = name => {
    this.setState({
      names: [name, ...this.state.names.filter(val => val !== name)]
    });
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
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Letters in Name</th>
              <th className="text-right">Options</th>
            </tr>
          </thead>
          <tbody>
            {this.state.names.map((name, index) => {
              return (
                <Row
                  key={index}
                  name={name}
                  index={index}
                  reverseCallback={this.reverseList}
                  promoteCallback={this.promoteName}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
