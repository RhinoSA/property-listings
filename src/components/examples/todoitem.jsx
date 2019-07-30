import React, { Component } from "react";

class ToDoItem extends Component {
  state = {};

  render() {
    const taskDone = {
      fontStyle: "italic",
      color: "#cdcdcd",
      textDecoration: "line-through"
    };
    return (
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          checked={this.props.item.completed}
          onChange={() => this.props.handleChange(this.props.item.id)}
        />
        <label
          className="form-check-label"
          style={this.props.item.completed ? taskDone : null}
        >
          {this.props.item.title} - {this.props.item.completed ? "yes" : "no"}
        </label>
      </div>
    );
  }
}

export default ToDoItem;
