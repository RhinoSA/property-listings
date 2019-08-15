import React, { Component } from "react";
import Menu from "../menu";
import PropTypes from "prop-types";
const desc = "This is the description...";

class BlogPostExcerpt extends Component {
  render() {
    return (
      <div className="card mb-3">
        <div className="card-body">
          <h4 className="card-title">{this.props.title}</h4>
          <div className="card-text">{this.props.description}</div>
        </div>
      </div>
    );
  }
}

class PropTypesExample extends Component {
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
            <h1>Using Prop Types</h1>
            <p>
              The example below shows how one can use "propTypes" to test the
              prop values used.
            </p>
            <p className="alert alert-secondary">
              import PropTypes from 'prop-types';
              <br />
              <br />
              const desc = 'This is the description...';
              <br />
              <br />
              class BlogPostExcerpt extends Component &#123;
              <br />
              &nbsp;&nbsp;render() &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;return (<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div className="card
              mb-3"&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div
              className="card-body"&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h4
              className="card-title"&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;this.props.title&#125;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/h4&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div
              className="card-text"&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;this.props.description&#125;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
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
              BlogPostExcerpt.propTypes = &#123;
              <br />
              &nbsp;&nbsp;title: PropTypes.string,
              <br />
              &nbsp;&nbsp;description: PropTypes.string
              <br />
              &#125;
              <br />
              <br />
              BlogPostExcerpt.defaultProps = &#123;
              <br />
              &nbsp;&nbsp;title: 'Anonymous',
              <br />
              &nbsp;&nbsp;description: ''
              <br />
              &#125;
            </p>

            <p>To pass down the prop values, one would do the following:</p>
            <p className="alert alert-secondary">
              &lt;BlogPostExcerpt title="A Blog Post"
              description=&#123;desc&#125; /&gt;
            </p>
            <h4>The Output:</h4>
            <BlogPostExcerpt title="A Blog Post" description={desc} />
            <p>
              If one used the following component call, omitting the "title"
              prop, then the default title declared in the "defaultProps" woulld
              be used.
            </p>
            <p className="alert alert-secondary">
              &lt;BlogPostExcerpt description=&#123;desc&#125; /&gt;
            </p>
            <p>This would be the output:</p>
            <BlogPostExcerpt description={desc} />
            <p>
              If one used the wrong type of prop type, for example an object
              instead of a string for the "title", then one would get an error
              message displayed in the console.
            </p>
            <p className="alert alert-secondary">
              &lt;BlogPostExcerpt title=&#123;4&#125;
              description=&#123;desc&#125; /&gt;
            </p>
            <h4>Available PropTypes:</h4>
            <ol>
              <li>PropTypes.array</li>
              <li>PropTypes.bool</li>
              <li>PropTypes.func</li>
              <li>PropTypes.number</li>
              <li>PropTypes.object</li>
              <li>PropTypes.symbol</li>
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

BlogPostExcerpt.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};

BlogPostExcerpt.defaultProps = {
  title: "Anonymous",
  description: ""
};

export default PropTypesExample;
