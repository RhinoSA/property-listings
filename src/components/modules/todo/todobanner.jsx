import React, { Component } from "react";

export class TodoBanner extends Component {
  render = () => (
    <React.Fragment>
      <h4 className="bg-secondary text-white text-center p-2 mt-3">
        {this.props.name}'s To Do List (
        {this.props.tasks.filter(t => !t.done).length} items to do)
      </h4>
    </React.Fragment>
  );
}
