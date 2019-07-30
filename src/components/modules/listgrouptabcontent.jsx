import React, { Component } from "react";

class ListGroupTabContent extends Component {
  render() {
    const contentID = "list-" + this.props.title;
    const ariaLabel = "list-" + this.props.title + "-list";
    const menuSubClass = "tab-pane fade";
    const menuSubClassActive = menuSubClass + "  show active";

    return (
      <div
        className={
          this.props.active === true ? menuSubClassActive : menuSubClass
        }
        id={contentID}
        role="tabpanel"
        aria-labelledby={ariaLabel}
      >
        <h1>{this.props.subHead}</h1>
        {this.props.tabContent}
      </div>
    );
  }
}

export default ListGroupTabContent;
