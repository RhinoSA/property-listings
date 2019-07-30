import React, { Component } from "react";

class TodoItemDetails extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        {this.props.item.completed ? null : <h4>{this.props.item.title}</h4>}
        {this.props.item.completed ? null : (
          <p>{this.props.item.description}</p>
        )}
      </React.Fragment>
    );
  }
}

export default TodoItemDetails;
