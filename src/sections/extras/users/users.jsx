import React, { Component } from "react";
import User from "./user";
import AddUser from "./adduser";
// Install uuid to create unique ids
// npm install uuid --save
import uuid from "uuid/v4";

class Users extends Component {
  state = {
    users: [{ id: 1, name: "John", age: 34, job: "Doctor" }]
  };

  componentDidMount() {
    console.log("Component mounted");
    console.log(this.state);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component updated");
    console.log(prevProps, prevState);
  }

  addUser = user => {
    // Create a unique user id
    user.id = uuid();
    // console.log(user);
    // Create a copy of the users array
    let users = [...this.state.users, user];
    this.setState({
      users: users
    });
  };

  deleteUser = id => {
    // delete user function
    // console.log(id);
    let users = this.state.users.filter(user => {
      return user.id !== id;
    });
    this.setState({
      users: users
    });
  };

  render() {
    return (
      <React.Fragment>
        <p>
          This example usese "unique ID" to generate random id numbers for the
          users that are added.
        </p>

        <h3>List of Users</h3>
        {this.state.users.length === 0 ? (
          <p>
            There are currently no users, you can add a user to the list by
            using the form below.
          </p>
        ) : null}
        <User users={this.state.users} deleteUser={this.deleteUser} />
        <h3>Add User</h3>
        <AddUser addUser={this.addUser} />
      </React.Fragment>
    );
  }
}

export default Users;
