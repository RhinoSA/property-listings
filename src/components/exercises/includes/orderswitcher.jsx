import React, { Component } from "react";

class EventsExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "ready"
    };
  }
  render() {
    return (
      <div>
        <div className="h4 bg-secondary text-white text-center p-2">
          {this.state.message}
        </div>
      </div>
    );
  }
}

export default EventsExample;
