import React, { Component } from "react";

const capitalize = s => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export class Display extends Component {
  formatValue = data =>
    Array.isArray(data) ? data.join(", ") : data.toString();

  render() {
    let keys = Object.keys(this.props.data);
    if (keys.length === 0) {
      return (
        <div className="h5 bg-secondary p-3 text-white">
          No data to display, please fill in the form.
        </div>
      );
    } else {
      return (
        <div className="bg-secondary p-3">
          {keys.map(key => (
            <div key={key} className="row h5 text-white">
              <div className="col-md-4">{capitalize(key)}:</div>
              <div className="col-md-8">
                {this.formatValue(this.props.data[key]) === "true"
                  ? "Yes"
                  : this.formatValue(this.props.data[key]) === "false"
                  ? "No"
                  : this.formatValue(this.props.data[key])}
              </div>
            </div>
          ))}
        </div>
      );
    }
  }
}
