import React, { Component } from "react";
import Measure from "react-measure";
import classNames from "classnames";

class WindowSize extends Component {
  state = {
    windowWith: window.innerWidth,
    windowHeight: window.innerHeight,
    dimensions: {
      width: -1,
      height: -1,
      theposition: 0,
      scrolledY: 0,
      showElement: false
    }
  };

  listenToScroll = () => {
    const scrolled = (document.documentElement.dataset.scroll = window.scrollY);
    this.setState({
      theposition: scrolled
    });
    if (scrolled > 40) {
      this.setState({ showElement: true });
    } else if (scrolled < 40) {
      this.setState({ showElement: false });
    }
  };

  handleResize = event => {
    this.setState({ windowWith: window.innerWidth });
    this.setState({ windowHeight: window.innerHeight });
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
    window.addEventListener("scroll", this.listenToScroll);
    this.setState({
      theposition: 0,
      showElement: false
    });
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
    window.removeEventListener("scroll", this.listenToScroll);
  }

  trackCursor = () => {
    const ele = document.getElementById("mousemove");
    //ele.innerHTML = "Move your mouse to see the demo";
    ele.addEventListener("mousemove", function(evt) {
      const { screenX, screenY } = evt;
      ele.innerHTML =
        "<div>Mouse is at: X: " + screenX + ", Y: " + screenY + "</div>";
    });
  };

  render() {
    const { width, height } = this.state.dimensions;
    const className = classNames(width < 400 && "small-width-modifier");
    return (
      <React.Fragment>
        <h2>Breakpoints</h2>
        <Measure
          bounds
          onResize={contentRect => {
            this.setState({ dimensions: contentRect.bounds });
          }}
        >
          {({ measureRef }) => (
            <div className="alert alert-secondary text-center">
              <div ref={measureRef} className={className}>
                {this.state.windowWith >= 1200 && <div>LG - 1200</div>}
                {this.state.windowWith <= 1199 &&
                  this.state.windowWith >= 992 && <div>MD - 992</div>}
                {this.state.windowWith <= 991 &&
                  this.state.windowWith >= 768 && <div>SM - 768</div>}
                {this.state.windowWith <= 767 && <div>XS</div>}
                Container: {width} x {height}
                <br />
                Window:&nbsp;
                {this.state.windowWith} x {this.state.windowHeight}
                <br />
                Scroll Position: {this.state.theposition}
              </div>
            </div>
          )}
        </Measure>
        <p>
          To use the above measurement functions, one needs to install
          react-measure:
        </p>
        <p className="alert alert-secondary">
          npm install react-measure --save
        </p>
        <p>
          For more information, see the{" "}
          <a
            href="https://www.npmjs.com/package/react-measure"
            target="measure"
          >
            documentation
          </a>
          .
        </p>
        <h2>Scroll Position</h2>
        <div
          className={
            this.state.showElement === true
              ? "alert alert-danger"
              : "alert alert-secondary"
          }
        >
          This changes colour when the scroll position is greater than forty
          pixels.
        </div>
        <h2>Mouse Position</h2>
        <p
          id="mousemove"
          className="alert alert-secondary"
          style={{ height: 50, cursor: "pointer" }}
          onMouseOver={this.trackCursor}
        >
          Move your cursor over this box to see the effect...
        </p>
      </React.Fragment>
    );
  }
}

export default WindowSize;
