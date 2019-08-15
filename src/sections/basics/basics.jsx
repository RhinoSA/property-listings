import React, { Component } from "react";

class Basics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Andrew"
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <React.Fragment>
        <h1>React Basics</h1>
        {/* TEMPLATE STRINGS */}
        <h2>Template Strings</h2>
        <p>
          This is exercise demonstates the use of template strings which are
          used to add JavaScript into a string.
        </p>
        <p>{`This is a message to ${this.state.username} using JS.`}</p>
        <p className="alert alert-secondary">
          &#123;`This is a message to &#36;{/**/}
          &#123;this.state.username&#125; using JS.`&#125;
        </p>
        {/* END TEMPLATE STRINGS */}
        <h2>Static Content</h2>
        <p>
          This example shows how one can include files which are inside the
          public folder.
        </p>
        <p className="alert alert-secondary">
          &lt;link rel="stylesheet" href=&#123; process.env.PUBLIC_URL +
          "/assets/css/static.css" &#125; /&gt;
          <br />
          &lt;img src=&#123; process.env.PUBLIC_URL + "/assets/images/logo.png"
          &#125; alt="logo" /&gt;
        </p>
      </React.Fragment>
    );
  }
}

export default Basics;
