import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Dropdown extends Component {
  state = {
    dropdown: [
      { id: 1, title: "Home", linkUrl: "/home" },
      { id: 2, title: "Bootstrap", linkUrl: "/bootstrap" },
      { id: 3, title: "Components", linkUrl: "/components" },
      { id: 4, title: "Router", linkUrl: "/routers" }
    ]
  };
  render() {
    return (
      <div className="dropdown mb-3 mt-3">
        <button
          className="btn btn-secondary dropdown-toggle btn-sm"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {this.props.dropDownText}
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          {this.props.dropdown.map(item => (
            <NavLink
              key={item.id}
              className="dropdown-item"
              activeClassName="active"
              to={item.linkUrl}
            >
              {item.title}
            </NavLink>
          ))}
        </div>
      </div>
    );
  }
}

export default Dropdown;
