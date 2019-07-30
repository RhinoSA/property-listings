import React, { Component } from "react";

class StickyNav extends Component {
  state = {};
  render() {
    return (
      <p className="sticky-item" data-toggle="sticky-onscroll">
        This is an example of a sticky navbar container.
      </p>
    );
  }
}

export default StickyNav;
