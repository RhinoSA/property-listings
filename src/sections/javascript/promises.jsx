import React, { Component } from "react";
import Menu from "../menu";
import { sumValues } from "./sum";

class Promises extends Component {
  state = { loading: false };

  componentDidMount() {
    window.scrollTo(0, 0);
    this.setState({ loading: this.state.loading === true });
  }

  // Sum Without Promise
  asyncAddOne(values) {
    setTimeout(() => {
      let total = sumValues(values);
      return total;
    }, 500);
  }

  // Sum With Promise
  asyncAddTwo(values) {
    return new Promise(callback =>
      setTimeout(() => {
        let total = sumValues(values);
        callback(total);
      }, 500)
    );
  }

  render() {
    // Values
    let values = [10, 20, 30, 40, 50];
    // Log No Promise
    let total = this.asyncAddOne(values);
    console.log(`Total without Promise: ${total}`);
    // Log With Promise
    this.asyncAddTwo(values).then(total =>
      console.log(`Total with Promise: ${total}`)
    );
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Menu />
          </div>
          <div className="col-md-9">
            <h1>Javascript Promises</h1>
            <p>
              A promise is a background activity that will be completed at some
              time in the future. The most common use of promises is when an app
              requests data using an HTTP request, which is performed
              asynchronously and produces a result when a response is received
              from the web server. A promise is simply put, a wrapper around a
              value that may or may not be known when the object is instanced
              and provides a method for handling the value agter it is known
              (also known as "resolved") or is unavailable for a failure reason
              (which is referred to as "rejected").
            </p>
            <h4>Without a Promise:</h4>
            <p className="alert alert-secondary">
              asyncAddOne(values) &#123;
              <br />
              &nbsp;&nbsp;setTimeout(() =&gt; &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;let total = sumValues(values);
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;return total;
              <br />
              &nbsp;&nbsp;&#125;, 500);
              <br />
              &#125;
            </p>
            <h4>With a Promise:</h4>
            <p className="alert alert-secondary">
              asyncAddTwo(values) &#123;
              <br />
              &nbsp;&nbsp;return new Promise(callback =&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;setTimeout(() =&gt; &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;let total = sumValues(values);
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;callback(total);
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&#125;, 500)
              <br />
              &nbsp;&nbsp;);
              <br />
              &#125;
            </p>
            <h4>Addition Function:</h4>
            <p className="alert alert-secondary">
              export function sumValues(values) &#123;
              <br />
              &nbsp;&nbsp;return values.reduce((total, val) =&gt; total + val,
              0);
              <br />
              &#125;
            </p>
            <h4>Calling the Functions:</h4>
            <p className="alert alert-secondary">
              &frasl;&frasl;&nbsp;&nbsp;Declare Values
              <br />
              let values = [10, 20, 30, 40, 50];
              <br />
              &frasl;&frasl;&nbsp;&nbsp;Log No Promise
              <br />
              let total = this.asyncAddOne(values);
              <br />
              console.log(`Total without Promise: &#36;{/**/}
              &#123;total&#125;`);
              <br />
              &frasl;&frasl;&nbsp;&nbsp;Log With Promise
              <br />
              this.asyncAddTwo(values).then(total =&gt;
              <br />
              console.log(`Total with Promise: &#36;{/**/}&#123;total&#125;`)
              <br />
              );
              <br />
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Promises;
