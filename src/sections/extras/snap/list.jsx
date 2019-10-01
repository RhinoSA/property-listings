import React, { Component } from "react";

const users = [
  {
    id: "1",
    name: "List Item 01"
  },
  {
    id: "2",
    name: "List Item 02"
  },
  {
    id: "3",
    name: "List Item 03"
  },
  {
    id: "4",
    name: "List Item 04"
  },
  {
    id: "5",
    name: "List Item 05"
  }
];

class List extends Component {
  constructor(props) {
    super(props);
    this.users = [];
    this.getUsers = this.getUsers.bind(this);
  }

  getUsers() {
    return this.users;
  }

  render() {
    return (
      <div className="row">
        {users.map((e, i) => (
          <div
            className="col-12 col-md-4"
            key={e.id}
            ref={div => (this.users[i] = div)}
          >
            <div className="alert alert-info">{e.name}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default List;
