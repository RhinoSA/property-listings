import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { FaCaretRight } from "react-icons/fa";

export class ToggleLink extends Component {
  render() {
    return (
      <Route
        path={this.props.to}
        exact={this.props.exact}
        children={routeProps => {
          const baseClasses = this.props.className || "text-white mb-2 btn";
          const activeClass = this.props.activeClass || "btn-info pl-0";
          const inActiveClass = this.props.inActiveClass || "btn-secondary";

          const combinedClasses = `${baseClasses} ${
            routeProps.match ? activeClass : inActiveClass
          }`;

          const activeIcon = (
            <FaCaretRight style={{ position: "relative", top: -2 }} />
          );
          const inActiveIcon = null;

          const combinedIcon = routeProps.match ? activeIcon : inActiveIcon;

          return (
            <Link
              to={this.props.to}
              className={combinedClasses}
              style={{ width: 100 }}
            >
              {combinedIcon} {this.props.children}
            </Link>
          );
        }}
      />
    );
  }
}
