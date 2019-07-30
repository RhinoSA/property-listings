import React from "react";

class ScrollUp extends Component {
  state = {};

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return <p>UP</p>;
  }
}

export default ScrollUp;
