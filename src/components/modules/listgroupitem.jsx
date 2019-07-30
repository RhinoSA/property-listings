import React, { Component } from "react";

class ListGroupItem extends Component {
  render() {
    const listGroupClasses =
      "list-group-item d-flex justify-content-between align-items-center";
    const listGroupBadgeClasses = "badge-custom badge badge-secondary badge-";
    return (
      <li
        className={
          this.props.listCount
            ? listGroupClasses
            : listGroupClasses + " list-group-item-secondary"
        }
      >
        {this.props.title}
        {this.props.listCount ? (
          <span className={listGroupBadgeClasses + "secondary"}>
            {this.props.listCount}
          </span>
        ) : (
          <span className={listGroupBadgeClasses + "warning"}>Zero</span>
        )}
      </li>
    );
  }
}

export default ListGroupItem;
