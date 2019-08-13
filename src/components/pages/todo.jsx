import React, { Component } from "react";
import ToDo from "../modules/todo/todo";

class ToDoList extends Component {
  render() {
    return (
      <React.Fragment>
        <ToDo />
      </React.Fragment>
    );
  }
}

export default ToDoList;
