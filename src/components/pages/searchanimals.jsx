import React, { Component } from "react";
import { MammalContext } from "../../contextmammals";
import { Link } from "react-router-dom";

import Title from "../modules/title";
import Animal from "../modules/species/animal";

const nameSearched = searchTerm => rowitem =>
  rowitem.title.toLowerCase().includes(searchTerm.toLowerCase());

class SearchAnimals extends Component {
  static contextType = MammalContext;

  constructor(props) {
    super(props);

    this.state = {
      names: [{ objectID: 1, name: "Andrew" }, { objectID: 2, name: "Peter" }],
      searchTerm: "",
      mammals: [],
      animals: [],
      mammalsSorted: [],
      patterm: []
    };
    this.onSearchChange = this.onSearchChange.bind(this);
    this.clearThis = this.clearThis.bind(this);
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  clearThis(id) {
    const isNotId = rowitem => rowitem.objectID !== id;
    const updatedNames = this.state.names.filter(isNotId);
    this.setState({ names: updatedNames });
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    let { mammals: animals } = this.context;
    let mammalsSorted = animals.sort((a, b) => (a.title > b.title ? 1 : -1));
    animals = mammalsSorted.map(animal => {
      return <Animal key={animal.id} animals={animal} />;
    });
    // console.log("Mammal Species: ", animals);
    const title = "Search Animals";
    return (
      <React.Fragment>
        <div className="container" style={{ marginTop: 0 }}>
          <Title title={title} />
          <Search
            value={this.state.searchTerm}
            onChange={this.onSearchChange}
          />
          <Table
            names={this.state.names}
            animals={this.state.animals}
            pattern={this.state.searchTerm}
            clearThis={this.clearThis}
          />
        </div>
      </React.Fragment>
    );
  }
}

class Search extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <form>
        <input
          className="form-control mb-3 mt-3"
          placeholder="Search products..."
          type="text"
          value={value}
          onChange={onChange}
        />
      </form>
    );
  }
}

class Table extends React.Component {
  static contextType = MammalContext;
  render() {
    let { mammals: animalsNew } = this.context;
    const { pattern } = this.props;
    // console.log(animalsNew);
    return (
      <React.Fragment>
        <ul className="list-group mt-3 mb-3">
          {animalsNew.filter(nameSearched(pattern)).map(rowitem => (
            <li
              className="list-group-item d-flex justify-content-between align-items-center"
              key={rowitem.id}
            >
              <Link to={`/mammals/${rowitem.slug}`}>
                <span className="col-md-6">{rowitem.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default SearchAnimals;
