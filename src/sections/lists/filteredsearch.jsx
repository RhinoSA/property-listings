import React, { Component } from "react";
import Menu from "../menu";

const datalist = [
  {
    objectID: 1,
    name: "x-WIng Fighter",
    price: 200,
    description: "This is a description of the product.",
    category: "Fighter"
  },
  {
    objectID: 2,
    name: "The Death Star",
    price: 140,
    description: "This is a description of the product.",
    category: "Fighter"
  },
  {
    objectID: 3,
    name: "Imperial Landing Craft",
    price: 160,
    description: "This is a description of the product.",
    category: "Fighter"
  },
  {
    objectID: 4,
    name: "Millennium Falcon",
    price: 145,
    description: "This is a description of the product.",
    category: "Ship"
  },
  {
    objectID: 5,
    name: "Azure Angel II",
    price: 175,
    description: "This is a description of the product.",
    category: "Ship"
  }
];

const names = datalist.sort((a, b) => (a.name > b.name ? 1 : -1));

const nameSearched = searchTerm => rowitem =>
  rowitem.name.toLowerCase().includes(searchTerm.toLowerCase());

class FilteredSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      names,
      searchTerm: ""
    };
    this.onSearchChange = this.onSearchChange.bind(this);
    this.clearThis = this.clearThis.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  clearThis(id) {
    const isNotId = rowitem => rowitem.objectID !== id;
    const updatedNames = this.state.names.filter(isNotId);
    this.setState({ names: updatedNames });
  }

  render() {
    const { searchTerm, names } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Menu />
          </div>
          <div className="col-md-9">
            <h1>Filtering Lists</h1>
            <Search value={searchTerm} onChange={this.onSearchChange} />
            <Table
              names={names}
              pattern={searchTerm}
              clearThis={this.clearThis}
            />
          </div>
        </div>
      </div>
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
  render() {
    const { names, pattern, clearThis } = this.props;
    const productsTotal = names.filter(c => c.objectID).length;
    const priceTotal = names
      .reduce((sum, i) => (sum += i.price), 0)
      .toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
      });

    return (
      <ul className="list-group mt-3">
        {names.filter(nameSearched(pattern)).map(rowitem => (
          <li
            className="list-group-item d-flex justify-content-between align-items-center"
            key={rowitem.objectID}
          >
            <span className="col-md-6">{rowitem.name}</span>
            <span className="col-md-4" style={{ textAlign: "right" }}>
              {rowitem.price.toLocaleString("en-US", {
                style: "currency",
                currency: "USD"
              })}
            </span>
            <span className="col-md-2" style={{ textAlign: "right" }}>
              <button
                className="btn btn-info btn-sm ml-2"
                style={{
                  paddingLeft: 9,
                  paddingRight: 9,
                  paddingTop: 4,
                  paddingBottom: 4,
                  lineHeight: "14px",
                  borderRadius: 14
                }}
                onClick={() =>
                  alert(rowitem.name + ":\n" + rowitem.description)
                }
              >
                I
              </button>
              <button
                className="btn btn-warning btn-sm ml-2"
                style={{
                  paddingLeft: 7,
                  paddingRight: 7,
                  paddingTop: 4,
                  paddingBottom: 4,
                  lineHeight: "14px",
                  borderRadius: 14
                }}
                onClick={() => clearThis(rowitem.objectID)}
              >
                X
              </button>
            </span>
          </li>
        ))}
        <p className="alert alert-secondary mt-3">
          <span>Total Cost: </span>
          {priceTotal}
          <br />
          <span>Total Products: </span>
          {productsTotal}
        </p>
      </ul>
    );
  }
}

export default FilteredSearch;
