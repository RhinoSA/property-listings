import React, { Component } from "react";

class ListItem extends Component {
  state = {};
  render() {
    return (
      <div>
        {this.props.title} - ({this.props.id}){" "}
        {this.props.job === "" ? null : " - " + this.props.job}
      </div>
    );
  }
}

export default ListItem;
