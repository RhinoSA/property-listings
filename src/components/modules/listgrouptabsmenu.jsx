import React, { Component } from "react";

class ListGroupTabsMenu extends Component {
  render() {
    const menuID = "list-" + this.props.title + "-list";
    const menuHref = "#list-" + this.props.title;
    const ariaCtrl = this.props.title;
    const menuClass = "list-group-item list-group-item-action";
    const menuClassActive = menuClass + " active";

    return (
      <React.Fragment>
        <a
          className={this.props.active === true ? menuClassActive : menuClass}
          id={menuID}
          data-toggle="list"
          href={menuHref}
          role="tab"
          aria-controls={ariaCtrl}
        >
          {this.props.title}
        </a>
      </React.Fragment>
    );
  }
}

export default ListGroupTabsMenu;
