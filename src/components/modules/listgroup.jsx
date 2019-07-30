import React, { Component } from "react";

import ListGroupItem from "./listgroupitem";

class ListGroup extends Component {
  state = {
    listUnsorted: [
      { id: 1, title: "Peter", listCount: 6 },
      { id: 2, title: "John", listCount: null },
      { id: 3, title: "Andrew", listCount: 5 },
      { id: 4, title: "Roger", listCount: 9 },
      { id: 5, title: "Mark", listCount: 9 }
    ]
  };

  render() {
    let list = this.state.listUnsorted.sort((a, b) =>
      a.title > b.title ? 1 : -1
    );

    const countTotal = this.state.listUnsorted.filter(c => c.id).length;

    const pointsTotal = this.state.listUnsorted.reduce(
      (sum, i) => (sum += i.listCount),
      0
    );

    function sortList() {
      if (!list) {
        return null;
      }
      if (!list.length) {
        return (
          <p className="alert alert-warning  alert-dismissible fade show">
            There are currently no items in the list.
            <button
              type="button"
              class="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </p>
        );
      } else {
        return (
          <React.Fragment>
            <li className="list-group-item list-group-item-info d-flex justify-content-between align-items-center">
              <strong>Group Members:&nbsp;({countTotal})</strong>
              <span>Points</span>
            </li>
            {list.map(rows => (
              <ListGroupItem
                key={rows.id}
                title={rows.title}
                listCount={rows.listCount}
              />
            ))}
            <li className="list-group-item list-group-item-info d-flex justify-content-between align-items-center">
              <strong>Total Points:</strong>
              <span className="badge-custom badge badge-secondary badge-info">
                {pointsTotal}
              </span>
            </li>
          </React.Fragment>
        );
      }
    }
    return (
      <React.Fragment>
        <ul className="list-group mb-3">{sortList()}</ul>
      </React.Fragment>
    );
  }
}

export default ListGroup;
