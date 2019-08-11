import React, { Component } from "react";

export class TodoCreator extends Component {
  constructor(props) {
    super(props);
    this.state = { newItemText: "" };
  }

  updateNewTextValue = event => {
    this.setState({ newItemText: event.target.value });
  };

  createNewTodo = () => {
    this.props.callback(this.state.newItemText);
    this.setState({ newItemText: "" });
  };

  render = () => (
    <div className="form-group form-inline mt-3 mb-3">
      <label>Add Item:</label>
      <input
        className="form-control ml-2 col-md-3"
        value={this.state.newItemText}
        onChange={this.updateNewTextValue}
      />
      <button className="btn btn-secondary ml-2" onClick={this.createNewTodo}>
        Add
      </button>
    </div>
  );
}
