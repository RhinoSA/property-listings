import React, { Component } from "react";
import Menu from "../menu";
import { FaAddressBook, FaCamera } from "react-icons/fa";

class ReactIcons extends Component {
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
            <h1>React Icons</h1>
            <p>Installing React icons using terminal:</p>
            <p className="alert alert-secondary">
              npm install react-icons --save
            </p>
            <p>
              View the{" "}
              <a
                href="https://www.npmjs.com/package/react-icons"
                target="react-icons"
              >
                documentation
              </a>
              &nbsp;about using React icons. To view a list of the available
              Font Awesome icons,{" "}
              <a href="https://fontawesome.com/icons" target="font-awesome">
                click here
              </a>
              .
            </p>
            <p className="alert alert-secondary">
              import &#123; FaBeer &#125; from 'react-icons/fa';
              <br />
              <br />
              class Question extends React.Component &#123;
              <br />
              &nbsp;&nbsp;render() &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;return &lt;h3&gt; Lets go for a &lt;FaBeer
              /&gt;? &lt;/h3&gt;
              <br />
              &nbsp;&nbsp;&#125;
              <br />
              &#125;
            </p>
            <h4>Examples:</h4>
            <p>Below are two examples of using Font Awesome icons:</p>
            <p>
              <FaAddressBook style={{ fontSize: 40, color: "#9b9b9b" }} /> -
              FaAddressBook &nbsp;&nbsp;
              <FaCamera style={{ fontSize: 40, color: "#9b9b9b" }} /> - FaCamera
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ReactIcons;
