import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import "./btnstyle.css";
import uuid from "uuid/v4";

const styleBar = {
  width: "100%",
  backgroundColor: "#333",
  color: "#fff",
  padding: "8px 15px 8px 15px",
  textAlign: "right",
  marginBottom: 15,
  marginTop: 15
};

const searchBtn = {
  color: "#fff",
  backgroundColor: "#333 !important",
  border: "none",
  cursor: "pointer"
};

const searchField = {
  border: "none",
  backgroundColor: "#fff",
  padding: "3px 10px 3px 10px",
  borderRadius: 6,
  marginRight: 10
};

const SearchBar = props => {
  const [searchText, updateWords] = useState("Words");
  const [visible, setVisible] = useState(false);
  const [oldSearch, setPrevSearch] = useState("No results to display...");
  const searched = ["Lion", "Leopard", "Cheetah", "Rhino"];

  useEffect(() => {
    document.getElementById("demo").innerHTML = searchText;
  }, [searchText]);

  const handleSubmit = e => {
    e.preventDefault();
    setPrevSearch(searchText);
    return "Nothing in the results...";
  };

  /*
  const checkPoint = test => {
    if (test.length === 0) {
      return "Nothing here";
    } else if (searched.includes(test)) {
      return null;
    } else {
      return test;
    }
  };
  */

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="searchbar" style={styleBar}>
        <input
          className={visible === true ? "btn-search active" : "btn-search"}
          type="text"
          placeholder="Search..."
          style={searchField}
          name="search"
          onChange={e => updateWords(e.target.value)}
        />
        <span style={searchBtn} onClick={() => setVisible(!visible)}>
          <FaSearch />
        </span>
        <span
          className={visible === true ? "search-text active" : "search-text"}
        >
          <span id="demo">{searchText}</span>
        </span>
      </div>
      <p id="demotwo" className="text-right">
        You searched for: {oldSearch}
      </p>
      <ul className="list-unstyled">
        {oldSearch === ""
          ? "No results..."
          : searched
              .filter(item => item.toLowerCase() === oldSearch.toLowerCase())
              .map(item => {
                return <li key={uuid()}>{item}</li>;
              })}
      </ul>

      {/*{checkPoint(oldSearch)}*/}
    </form>
  );
};

export default SearchBar;
