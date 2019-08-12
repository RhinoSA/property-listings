import React, { Component } from "react";
import Exercise01 from "../exercises/exercise01";
import Title from "../modules/title";

class JavaScript extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="container">
        <Title title="JavaScript Fundamentals" />
        <h4>Primary Colours</h4>
        <p>
          <button className="btn btn-primary">Primary</button>&nbsp;&nbsp;
          <button className="btn btn-primary active">Primary</button>
          &nbsp;&nbsp;
          <button className="btn btn-primary" disabled>
            Primary
          </button>
        </p>
        <p className="alert alert-primary">This is an alert.</p>
        <h4>Secondary Colours</h4>
        <p>
          <button className="btn btn-secondary">Secondary</button>&nbsp;&nbsp;
          <button className="btn btn-secondary active">Secondary</button>
          &nbsp;&nbsp;
          <button className="btn btn-secondary" disabled>
            Secondary
          </button>
        </p>
        <p className="alert alert-secondary">This is an alert.</p>
        <h4>Info Colours</h4>
        <p>
          <button className="btn btn-info">Info</button>&nbsp;&nbsp;
          <button className="btn btn-info active">Info</button>&nbsp;&nbsp;
          <button className="btn btn-info" disabled>
            Info
          </button>
        </p>
        <p className="alert alert-info">This is an alert.</p>
        <h4>Warning Colours</h4>
        <p>
          <button className="btn btn-warning">Warning</button>&nbsp;&nbsp;
          <button className="btn btn-warning active">Warning</button>
          &nbsp;&nbsp;
          <button className="btn btn-warning" disabled>
            Warning
          </button>
        </p>
        <p className="alert alert-warning">This is an alert.</p>
        <Exercise01 />
      </div>
    );
  }
}

export default JavaScript;
