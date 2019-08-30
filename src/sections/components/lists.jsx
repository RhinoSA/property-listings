import React, { Component } from "react";
import { GeneralList } from "./generallist";
import { SortedList } from "./sortedlist";

class Lists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ["Zoe", "Bob", "Alice", "Dora", "Joe", "John"]
    };
  }
  render() {
    return (
      <div className="row">
        <div className="col-6">
          <h4>List of Names</h4>
          <GeneralList theme="secondary" list={this.state.list} />
        </div>
        <div className="col-6">
          <h4>Sortable List of Names</h4>
          <SortedList theme="info" list={this.state.list} />
        </div>
      </div>
    );
  }
}

export default Lists;
