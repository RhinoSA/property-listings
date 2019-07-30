import React, { Component } from "react";

class UpdateChild extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: "Initial data..."
    };
    this.updateState = this.updateState.bind(this);
  }
  updateState() {
    this.setState({ data: "Data updated..." });
  }
  render() {
    return (
      <div>
        <Content
          myDataProp={this.state.data}
          updateStateProp={this.updateState}
        />
      </div>
    );
  }
}

class Content extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h3>Update Child</h3>
        <p>Clicking on the button updates the text inside the input field.</p>
        <div className="form-inline">
          <div className="form-group mb-2">
            <input
              className="form-control"
              value={this.props.myDataProp}
              onChange={this.props.updateStateProp}
            />
          </div>
          <button
            className="btn btn-primary mb-2 ml-2"
            onClick={this.props.updateStateProp}
          >
            Update
          </button>
        </div>
      </React.Fragment>
    );
  }
}
export default UpdateChild;
