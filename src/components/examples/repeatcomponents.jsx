import React, { Component } from "react";

import ListItem from "./listitem";

class RepeatComponents extends Component {
  render() {
    return (
      <React.Fragment>
        <ListItem title="Name 01" />
        <ListItem title="Name 02" />
        <ListItem title="Name 03" />
      </React.Fragment>
    );
  }
}

export default RepeatComponents;
