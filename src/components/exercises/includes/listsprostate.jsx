import React, { Component } from "react";
import { GeneralList } from "./generallist";
import { SortedList } from "./sortedlist";
import { ProController } from "./procontroller";

const ProList = ProController(SortedList);

class ListsPro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ["Zoe", "Bob", "Alice", "Dora", "Joe", "John"],
      cities: ["London", "New York", "Paris", "Milan", "Boston"]
    };
  }

  toggleProMode = () => {
    this.setState({ proMode: !this.state.proMode });
  };

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-3">
            <h4>List of Names</h4>
            <GeneralList theme="secondary" list={this.state.list} />
          </div>
          <div className="col-3">
            <h4>Sortable List of Names</h4>
            <ProList list={this.state.list} />
          </div>
          <div className="col-3">
            <h4>List of Cities</h4>
            <GeneralList theme="secondary" list={this.state.cities} />
          </div>
          <div className="col-3">
            <h4>Sortable List of Cities</h4>
            <ProList list={this.state.cities} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ListsPro;
