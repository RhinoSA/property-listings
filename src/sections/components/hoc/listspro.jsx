import React, { Component } from "react";
import { GeneralList } from "../generallist";
import { SortedList } from "../sortedlist";
import { ProFeature } from "./profeature";

const ProList = ProFeature(SortedList);

class ListsPro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ["Zoe", "Bob", "Alice", "Dora", "Joe", "John"],
      cities: ["London", "New York", "Paris", "Milan", "Boston"],
      proMode: false
    };
  }

  toggleProMode = () => {
    this.setState({ proMode: !this.state.proMode });
  };

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-12 text-center p-2">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                value={this.state.proMode}
                onChange={this.toggleProMode}
              />
              <label className="form-check-label">Pro Mode</label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <h4>List of Names</h4>
            <GeneralList theme="secondary" list={this.state.list} />
          </div>
          <div className="col-3">
            <h4>Sortable List of Names</h4>
            <ProList list={this.state.list} pro={this.state.proMode} />
          </div>
          <div className="col-3">
            <h4>List of Cities</h4>
            <GeneralList theme="secondary" list={this.state.cities} />
          </div>
          <div className="col-3">
            <h4>Sortable List of Cities</h4>
            <ProList list={this.state.cities} pro={this.state.proMode} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ListsPro;
