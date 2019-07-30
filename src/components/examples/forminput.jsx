import React, { Component } from "react";

class FormInput extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      message: "",
      subscribe: false,
      gender: "",
      color: "",
      submitBtn: true
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }

  handleSubmit(event) {
    if ((this.state.firstName === "") | (this.state.lastName === "")) {
      event.preventDefault();
      alert("You need to enter a name and surname...");
    } else {
      event.preventDefault();
      alert(
        `Thank you ${this.state.firstName} ${this.state.lastName} for sending us a message.\r\n\r\n${this.state.subscribe === true ? "You subscribed to the newsletter and " : "You did not subscribe to the newsletter and "}${this.state.color !== "" ? `chose the colour ${this.state.color}.` : "did not choose a colour."}\r\n\r\n${this.state.message !== "" ? `Your Message:\r\n${this.state.message}` : "There was no message."}`
      );
    }
  }

  render() {
    const capitalize = s => {
      if (typeof s !== "string") return "";
      return s.charAt(0).toUpperCase() + s.slice(1);
    };

    return (
      <React.Fragment>
        <div className="row">
          <form
            className="col-md-8"
            onSubmit={this.handleSubmit}
            action="/forms"
          >
            <h2>Contact Us</h2>
            <div className="form-group row">
              <div className="form-group col-md-6 mb-0 mt-2">
                <input
                  className="form-control"
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={this.state.firstName}
                  onChange={this.handleChange}
                />
              </div>
              <p>{this.state.errorName}</p>
              <div className="form-group col-md-6 mb-0 mt-2">
                <input
                  className="form-control"
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={this.state.lastName}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-12 mb-2">
                <textarea
                  className="form-control"
                  type="text"
                  name="message"
                  value={this.state.message}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="form-group row mt-2">
              <div className="form-check col-md-12">
                <label className="form-check-label">
                  <input
                    className="form-check-checkbox"
                    type="checkbox"
                    name="subscribe"
                    checked={this.state.subscribe}
                    onChange={this.handleChange}
                  />
                  <span className="ml-2">Subscribe</span>
                </label>
              </div>
            </div>

            <div className="form-group row">
              <div className="form-check col-md-12">
                <label className="form-check-label">
                  <input
                    className="form-check-checkbox"
                    type="radio"
                    name="gender"
                    value="male"
                    checked={this.state.gender === "male"}
                    onChange={this.handleChange}
                  />
                  <span className="ml-2">Male</span>
                </label>
              </div>
            </div>

            <div className="form-group row">
              <div className="form-check col-md-12">
                <label className="form-check-label">
                  <input
                    className="form-check-checkbox"
                    type="radio"
                    name="gender"
                    value="female"
                    checked={this.state.gender === "female"}
                    onChange={this.handleChange}
                  />
                  <span className="ml-2">Female</span>
                </label>
              </div>
            </div>

            <div className="form-group row">
              <div className="form-group col-md-12 mb-2">
                <select
                  className="form-control"
                  value={this.state.color}
                  onChange={this.handleChange}
                  name="color"
                >
                  <option value="">Choose a colour...</option>
                  <option value="red">Red</option>
                  <option value="blue">Blue</option>
                  <option value="green">Green</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <div className="form-group col-md-12 mb-2">
                <button id="submit" className="btn btn-primary">
                  Send Message
                </button>
              </div>
            </div>
          </form>

          <div className="col-md-4">
            <h2>Form Text</h2>
            <p>
              <span>Name: </span>
              {this.state.firstName}
              <span> </span>
              {this.state.lastName}
              <br />
              <span>Message: </span>
              {this.state.message}
              <br />
              <span>Subscribe: </span>
              {this.state.subscribe ? "Yes" : ""}
              <br />
              <span>Gender: </span>
              {capitalize(this.state.gender)}
              <br />
              <span>Color: </span>
              {capitalize(this.state.color)}
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default FormInput;
