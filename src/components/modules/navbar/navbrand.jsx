import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavBrand extends Component {
  state = {};
  render() {
    return (
      <NavLink className="navbar-brand" to={this.props.navBrandLink}>
        {this.props.navBrandTitle}
      </NavLink>
    );
  }
}

export default NavBrand;
