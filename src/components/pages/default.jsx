import React, { Component } from "react";
import Title from "../modules/title";
import { Link } from "react-router-dom";
import Hero from "../modules/hero";
import Banner from "../modules/banner";

class Default extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Hero style={{ marginTop: 50 }}>
          <Banner title="404" subtitle="Page not found">
            <Link to="/home" className="btn btn-primary">
              Home
            </Link>
          </Banner>
        </Hero>
        <div className="container">
          <Title title="404 Page" />
          <p>Page not found...</p>
        </div>
      </React.Fragment>
    );
  }
}

export default Default;
