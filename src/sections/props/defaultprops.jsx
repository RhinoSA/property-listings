import React, { Component } from "react";
import Menu from "../menu";

class DefaultProps extends Component {
  state = {};

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Menu />
          </div>
          <div className="col-md-9">
            {/* DEFAULT PROPS */}
            <h1>Defining the Default Props</h1>
            <p>
              As the number of props used in an application grows, you may find
              yourself repeating the same set of prop values, even though the
              values are generally the same most of the time. An alternative
              approach is to define a set of defaults and only override them
              when you need to use a different value.
            </p>
            <p className="alert alert-secondary">
              import React from "react";
              <br />
              import &#123; SimpleButton &#125; from "./simplebutton;
              <br />
              <br />
              export function CallbackButton(props) &#123;
              <br />
              &nbsp;&nbsp;let &#123; theme, childProps &#125; = props;
              <br />
              &nbsp;&nbsp;return (<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;SimpleButton &#123;...ChildProps&#125;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;className=&#123;`btn btn-&#36;
              {/* */}
              &#123;props.theme&#125; btn-sm`&#125;
              <br />
              &nbsp;&nbsp;)
              <br />
              &#125;
              <br />
              <br />
              CallbackButton.defaultProps = &#123;
              <br />
              &nbsp;&nbsp;text: "Default Text"
              <br />
              &nbsp;&nbsp;theme: "warning"
              <br />
              &#125;
            </p>
            {/* END DEFAULT PROPS */}
          </div>
        </div>
      </div>
    );
  }
}

export default DefaultProps;
