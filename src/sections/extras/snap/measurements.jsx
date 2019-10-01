import React, { Component } from "react";
import Measure from "react-measure";
import classNames from "classnames";
import { TweenMax } from "gsap/all";
import FlyAnimation from "./fly";

class Measurements extends Component {
  constructor(props) {
    super(props);
    this.craft = null;
    this.craftShadow = null;
    this.bezierTweenCraft = new TweenMax({ paused: false });
    this.state = {
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
  }

  listenToScroll = () => {
    const scrolled = (document.documentElement.dataset.scroll = window.scrollY);
    this.setState({
      theposition: scrolled
    });
    if (scrolled > 450) {
      this.setState({ showElement: true });
    } else if (scrolled < 450) {
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
    TweenMax.set(this.craft, { x: -120 });
    this.bezierTweenCraft = new TweenMax(this.craft, 4, {
      bezier: {
        type: "soft",
        curviness: 1.3,
        values: [
          { x: 0, y: 0 },
          { x: 150, y: -30 },
          { x: 270, y: -120 },
          { x: 500, y: 110 },
          { x: 100, y: 100 },
          { x: 350, y: -60 },
          { x: 540, y: -100 },
          { x: 700, y: 100 },
          { x: 1200, y: -30 }
        ],
        autoRotate: true
      },
      ease: "Power1.easeInOut",
      repeat: -1,
      repeatDelay: 2
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
    const clientHeight = document.body.clientHeight;
    const className = classNames(width < 400 && "small-width-modifier");
    const crafty = {
      position: "absolute",
      top: 120,
      left: 0,
      width: 100
      //left: Math.round((this.state.theposition * 10000) / clientHeight)
    };
    return (
      <React.Fragment>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: 330,
            backgroundColor: "rgba(121,119,109,1)",
            overflow: "hidden",
            marginTop: 15,
            marginBottom: 15
          }}
        >
          <div style={crafty} ref={div => (this.craft = div)}>
            <FlyAnimation />
          </div>
        </div>
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
                <br />
                Scroll Percentage:&nbsp;
                {Math.round((this.state.theposition * 100) / clientHeight)}
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
          This changes colour when the scroll position is greater than 400
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

export default Measurements;
