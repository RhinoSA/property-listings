import React, { Component } from "react";
import Menu from "../menu";
import { Link, animateScroll as scroll } from "react-scroll";

class SmoothScroll extends Component {
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="container" id="top">
        <div className="row">
          <div className="col-md-3">
            <Menu />
          </div>
          <div className="col-md-9">
            <h1>Smooth Scrolling</h1>
            <p>To install Smooth Scrolling use the following command:</p>
            <p className="alert alert-secondary">npm install react-scroll</p>
            <p>
              For more information, view the{" "}
              <a
                href="https://www.npmjs.com/package/react-scroll"
                target="smooth"
              >
                documentation
              </a>
              .
            </p>
            <p style={{ position: "fixed" }}>
              <Link
                activeClass="active"
                className="btn btn-secondary"
                to="test1"
                spy={true}
                smooth={true}
                duration={500}
                offset={-80}
              >
                Test 1
              </Link>
              <Link
                activeClass="active"
                className="btn btn-secondary ml-2"
                to="test2"
                spy={true}
                smooth={true}
                duration={500}
                offset={-80}
              >
                Test 2
              </Link>
              <Link
                to="top"
                className="btn btn-secondary ml-2"
                smooth={true}
                duration={500}
                onClick={this.scrollToTop}
              >
                Top
              </Link>
              scrollToTop
            </p>
            <div style={{ height: 3000 }}>Moo</div>
            <p name="test1" style={{ height: 200, backgroundColor: "#d8d8d8" }}>
              ONE
            </p>
            <div style={{ height: 3000 }}>Moo</div>
            <p name="test2" style={{ height: 200, backgroundColor: "#d8d8d8" }}>
              TWO
            </p>
            <div style={{ height: 3000 }}>Moo</div>
          </div>
        </div>
      </div>
    );
  }
}

export default SmoothScroll;
