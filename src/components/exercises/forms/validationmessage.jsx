import React, { Component } from "react";
import { ValidationContext } from "./validationcontext";

export class ValidationMessage extends Component {
  static contextType = ValidationContext;

  render() {
    return this.context.getMessagesForField(this.props.field).map(err => (
      <div className="small bg-danger text-white mt-1 p-1" key={err}>
        {err}
      </div>
    ));
  }
}
