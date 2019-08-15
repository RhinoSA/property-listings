import React, { Component } from "react";
import Menu from "../menu";
import Block from "./hoc/block";

class HOCBasics extends Component {
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
            <h2>Higher Order Components</h2>
            <Block />
            <p>
              The photo featured above is selected randomly from an array of
              images. Every time you refresh the page, a new image is chosen
              from the array. First create a file named "block.js" and use the
              code below:
            </p>
            <p className="alert alert-secondary">
              import React from 'react';
              <br />
              import Rainbow from "./rainbow";
              <br />
              <br />
              const Block = () => &#123;
              <br />
              &nbsp;&nbsp;return (<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;)
              <br />
              &#125;
              <br />
              <br />
              export default Rainbow(Block);
            </p>
            <p>This is the code for the file named "rainbow.jsx":</p>
            <p className="alert alert-secondary">
              import React from 'react';
              <br />
              <br />
              const Rainbow = (WrappedComponent) => &#123;
              <br />
              &nbsp;&nbsp;const images =
              ['lion','elephant','giraffe','hyaena','cheetah','white-rhino'];
              <br />
              &nbsp;&nbsp;const randomImage = images[Math.floor(Math.random() *
              5)];
              <br />
              &nbsp;&nbsp;const imageName = '../../../assets/images/animals/' +
              randomImage + '.jpg';
              <br />
              <br />
              &nbsp;&nbsp;return (props) => &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;return (<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div
              style=&#123;&#123;padding: "15px 15px 15px 15px", borderRadius: 6,
              border: "solid 1px #d8d8d8"&#125;&#125;&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;WrappedComponent
              &#123;...props&#125; /&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;img
              src=&#123;imageName&#125; className="img-fluid"
              alt=&#123;imageName&#125; /&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;)
              <br />
              &nbsp;&nbsp;&#125;
              <br />
              &#125;
              <br />
              <br />
              export default Rainbow;
            </p>
            <p>To call the random photo you would then use this:</p>
            <p className="alert alert-secondary">&lt;Block /&gt;</p>
            <p>And also am import statement must be added:</p>
            <p className="alert alert-secondary">
              import Block from "../hoc/block";
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default HOCBasics;
