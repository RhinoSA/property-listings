import React, { Component } from "react";

class SignIn extends Component {
  state = {
    user: "",
    rememberMe: false
  };

  componentDidMount() {
    const rememberMe = localStorage.getItem("rememberMe") === "true";
    const user = rememberMe ? localStorage.getItem("user") : "";
    this.setState({ user, rememberMe });
  }

  handleChange = event => {
    const input = event.target;
    const value = input.type === "checkbox" ? input.checked : input.value;

    this.setState({ [input.name]: value });
  };

  handleFormSubmit = () => {
    const { user, rememberMe } = this.state;
    localStorage.setItem("rememberMe", rememberMe);
    localStorage.setItem("user", rememberMe ? user : "");
  };

  render() {
    return (
      <form
        className="form-inline"
        onSubmit={this.handleFormSubmit}
        action="/forms"
      >
        <label>
          User:{" "}
          <input
            className="form-control ml-2 mr-2"
            name="user"
            value={this.state.user}
            onChange={this.handleChange}
          />
        </label>
        <label>
          <input
            className="form-check-control mr-2"
            name="rememberMe"
            checked={this.state.rememberMe}
            onChange={this.handleChange}
            type="checkbox"
          />{" "}
          Remember me
        </label>
        <button className="btn btn-secondary ml-2" type="submit">
          Sign In
        </button>
      </form>
    );
  }
}

export default SignIn;
