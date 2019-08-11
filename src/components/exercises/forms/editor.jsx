import React, { Component } from "react";
import { FormValidator } from "./formvalidator";
import { ValidationMessage } from "./validationmessage";
import { ValidateForm } from "./wholeformvalidation";

export class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      surname: "",
      email: "",
      emailConfirm: "",
      flavor: "",
      toppings: ["Sprinkles"],
      message: "",
      terms: false,
      cones: [],
      extra: ""
    };
    this.rules = {
      name: { required: true, minlength: 3, alpha: true },
      surname: { required: true, minlength: 3 },
      message: { required: true },
      terms: { true: true },
      email: { required: true, email: true, equals: "emailConfirm" },
      emailConfirm: { required: true, email: true, equals: "email" }
    };
    this.flavors = [
      "Chocolate",
      "Double Chocolate",
      "Triple Chocolate",
      "Vanilla"
    ];
    this.cones = ["Plain", "Fancy", "Large"];
    this.extras = ["One", "Two", "Three"];
    this.toppings = ["Sprinkles", "Fudge Sauce", "Strawberries", "Maple Syrup"];
  }

  updateFormValue = event => {
    this.setState({ [event.target.name]: event.target.value }, () =>
      this.props.submit(this.state)
    );
  };

  updateFormValueOptions = event => {
    let options = [...event.target.options]
      .filter(o => o.selected)
      .map(o => o.value);
    this.setState({ [event.target.name]: options }, () =>
      this.props.submit(this.state)
    );
  };

  updateFormValueCheckSingle = event => {
    this.setState({ [event.target.name]: event.target.checked }, () =>
      this.props.submit(this.state)
    );
  };

  updateFormValueCheck = event => {
    event.persist();
    this.setState(
      state => {
        if (event.target.checked) {
          state.cones.push(event.target.name);
        } else {
          let index = state.cones.indexOf(event.target.name);
          state.cones.splice(index, 1);
        }
      },
      () => this.props.submit(this.state)
    );
  };

  handleFormSubmit(event) {
    event.preventDefault();
    alert(`Thank you for getting in touch.`);
  }

  render() {
    return (
      <div className="h5 bg-info text-white p-3">
        <form onSubmit={this.handleFormSubmit} action="/forms">
          <FormValidator
            data={this.state}
            rules={this.rules}
            submit={this.props.submit}
            validateForm={ValidateForm}
          >
            <ValidationMessage field="form" />
            <div className="form-group">
              <label>Name</label>
              <input
                className="form-control"
                name="name"
                value={this.state.name}
                onChange={this.updateFormValue}
              />
              <ValidationMessage field="name" />
            </div>
            <div className="form-group">
              <label>Surname</label>
              <input
                className="form-control"
                name="surname"
                value={this.state.surname}
                onChange={this.updateFormValue}
              />
              <ValidationMessage field="surname" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                className="form-control"
                name="email"
                value={this.state.email}
                onChange={this.updateFormValue}
              />
              <ValidationMessage field="email" />
            </div>
            <div className="form-group">
              <label>Confirm Email</label>
              <input
                className="form-control"
                name="emailConfirm"
                value={this.state.emailConfirm}
                onChange={this.updateFormValue}
              />
              <ValidationMessage field="emailConfirm" />
            </div>
            <div className="form-group">
              <label>Icecream Flavors</label>
              <select
                className="form-control"
                name="flavor"
                value={this.state.flavor}
                onChange={this.updateFormValue}
              >
                {this.flavors.map(flavor => (
                  <option value={flavor} key={flavor}>
                    {flavor}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Icecream Toppings</label>
              <select
                className="form-control"
                multiple={true}
                name="toppings"
                value={this.state.toppings}
                onChange={this.updateFormValueOptions}
              >
                {this.toppings.map(top => (
                  <option value={top} key={top}>
                    {top}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Extras</label>
              {this.extras.map(extra => (
                <div className="form-check" key={extra}>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="extra"
                    value={extra}
                    checked={this.state.extra === extra}
                    onChange={this.updateFormValue}
                  />
                  <label>{extra}</label>
                </div>
              ))}
            </div>
            <div className="form-group">
              <label>Extras</label>
              {this.cones.map(cone => (
                <div className="form-check" key={cone}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name={cone}
                    value={this.state[cone]}
                    checked={this.state.cones.indexOf(cone) > -1}
                    onChange={this.updateFormValueCheck}
                  />
                  <label className="form-check-label">{cone}</label>
                </div>
              ))}
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                className="form-control"
                value={this.state.message}
                onChange={this.updateFormValue}
              />
              <ValidationMessage field="message" />
            </div>
            <div className="form-group">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="terms"
                  value={this.state.terms}
                  checked={this.state.terms}
                  onChange={this.updateFormValueCheckSingle}
                />
                <label className="form-check-label">
                  Agree to terms &amp; conditions
                </label>
              </div>
              <ValidationMessage field="terms" />
            </div>
          </FormValidator>
        </form>
      </div>
    );
  }
}
