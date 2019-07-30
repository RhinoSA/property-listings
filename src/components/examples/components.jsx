import React, { Component } from "react";

class Components extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
      </div>
    );
  }
}
class Header extends Component {
  render() {
    return (
      <div>
        <h1>Header</h1>
      </div>
    );
  }
}
class Content extends Component {
  render() {
    return (
      <div>
        <h2>Content</h2>
        <p>The content text!!!</p>
      </div>
    );
  }
}
export default Components;
