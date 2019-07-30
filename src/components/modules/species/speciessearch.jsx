import React, { Component } from "react";
import { MammalContext } from "../../../contextmammals";
import { Link } from "react-router-dom";
const mammals = [];
const nameSearched = searchTerm => rowitem =>
  rowitem.title.toLowerCase().includes(searchTerm.toLowerCase());
const nameSearchedLatin = searchTermLatin => rowitem =>
  rowitem.latin.toLowerCase().includes(searchTermLatin.toLowerCase());

class SpeciesSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mammals,
      searchTerm: "",
      searchTermLatin: ""
    };
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onSearchChangeLatin = this.onSearchChangeLatin.bind(this);
  }
  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  onSearchChangeLatin(event) {
    this.setState({ searchTermLatin: event.target.value });
  }

  render() {

    const { searchTerm, searchTermLatin, mammals } = this.state;
    return (
      <div className="App">
        <form className="form-inline">
        <div className="form-group">
          <label className="col-form-label mr-2">Common Name</label>
          <Search value={searchTerm} onChange={this.onSearchChange} />
        </div>
        <div className="form-group">
        <label className="col-form-label ml-3 mr-2">Latin</label>
          <SearchLatin value={searchTermLatin} onChange={this.onSearchChangeLatin} />
        </div>
        </form>
        <Table names={mammals} pattern={searchTerm} patternLatin={searchTermLatin} />
      </div>
    );
  }
}
class Search extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
        <input
          id="common"
          className="form-control mb-3 mt-3"
          placeholder="Search names..."
          type="text"
          value={value}
          onChange={onChange}
        />
    );
  }
}

class SearchLatin extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
        <input
          id="latin"
          className="form-control mb-3 mt-3"
          placeholder="Search latin names..."
          type="text"
          value={value}
          onChange={onChange}
        />
    );
  }
}

class Table extends React.Component {
  static contextType = MammalContext;
  render() {
    const { pattern, patternLatin } = this.props;
    return (
        <React.Fragment>
      <ul className="list-group mt-3">
        {mammals.filter(nameSearched(pattern)).filter(nameSearchedLatin(patternLatin)).map(rows => (
            <li className="list-group-item" key={rows.id}><Link to={`/mammals/${rows.slug}`}>{rows.title} - {rows.latin}</Link></li>
        ))}
      </ul>
      </React.Fragment>
    );
  }
}

export default SpeciesSearch;
