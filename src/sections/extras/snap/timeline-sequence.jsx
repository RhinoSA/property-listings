import React, { Component } from "react";
import { TimelineLite } from "gsap/all";
import BlipSimple from "./blip-simple";

// icons will be animated using a stagger method
const iconsArray = [
  {
    src: "https://www.greensock.com/_img/codepen/icon_robust.png",
    width: "83",
    height: "59",
    alt: "Icon 01"
  },
  {
    src: "https://www.greensock.com/_img/codepen/icon_overwrite.png",
    width: "43",
    height: "59",
    alt: "Icon 02"
  },
  {
    src: "https://www.greensock.com/_img/codepen/icon_compatible.png",
    width: "73",
    height: "59",
    alt: "Icon 03"
  },
  {
    src: "https://www.greensock.com/_img/codepen/icon_support.png",
    width: "83",
    height: "59",
    alt: "Icon 04"
  },
  {
    src: "https://www.greensock.com/_img/codepen/icon_plugin.png",
    width: "76",
    height: "59",
    alt: "Icon 05"
  }
];

class TimelineSequence extends Component {
  constructor(props) {
    super(props);

    this.logoTl = new TimelineLite({ paused: true });

    this.content = null;
    this.head = null;
    this.subhead = null;
    this.feature = null;
    this.description = null;
    this.icons = [];
  }

  // add instances to the timeline
  componentDidMount() {
    this.logoTl
      .set(this.content, { autoAlpha: 1 }) // show content div
      .from(this.head, 1, { left: -200, autoAlpha: 0 })
      .from(this.subhead, 1, { left: -200, autoAlpha: 0 }, "-=0.25") // added -0.25 seconds prior to end this.of timeline
      .add("marker")
      .from(this.feature, 0.5, { scale: 0.5, autoAlpha: 0 }, "feature") // added 0.5 seconds after end of timeline
      .from(this.description, 0.5, { left: 100, autoAlpha: 0 }, "feature+=0.25")
      .staggerFrom(this.icons, 0.2, { scale: 0, autoAlpha: 0 }, 0.1); //animate all icons with 0.1 second stagger
  }

  render() {
    return (
      <React.Fragment>
        {/* DEMO WRAPPER */}
        <h2>Timeline Sequence Animation</h2>
        <div className="demo-wrapper">
          <div className="content-demo" ref={div => (this.content = div)}>
            <h1
              style={{ position: "relative", left: 0 }}
              ref={h1 => (this.head = h1)}
            >
              Freakishly Robust
            </h1>
            <h2
              style={{ position: "relative", left: 0 }}
              ref={h2 => (this.subhead = h2)}
              className="subhead"
            >
              With features that makes other engines look like cheap toys
            </h2>
            <div className="infobox-demowrapper">
              <div className="feature" ref={div => (this.feature = div)}>
                <BlipSimple />
              </div>
              <p className="descriptionbox" ref={p => (this.description = p)}>
                Animate colors, beziers, css properties, arrays, scrolls and
                lots more. Round values, smoothly reverse() on the fly, use
                relative values, employ virtually any easing equation, and
                manage conflicting tweens like a pro. GSAP does all this and
                much more with ease.
              </p>
            </div>

            <div className="navicons-wrap">
              {iconsArray.map((icon, index) => {
                const { src, width, height, alt } = icon;
                return (
                  <img
                    key={`icon-${index}`}
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    ref={img => (this.icons[index] = img)}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* BUTTONS */}
        <div className="my-3 btn-group">
          <button className="btn btn-info" onClick={() => this.logoTl.play()}>
            Play
          </button>
          <button className="btn btn-info" onClick={() => this.logoTl.pause()}>
            Pause
          </button>
          <button
            className="btn btn-info"
            onClick={() => this.logoTl.reverse()}
          >
            Reverse
          </button>
          <button
            className="btn btn-info"
            onClick={() => this.logoTl.restart()}
          >
            Restart
          </button>
          <button
            className="btn btn-info"
            onClick={() => this.logoTl.timeScale(8)}
          >
            Speedup
          </button>
          <button
            className="btn btn-info"
            onClick={() => this.logoTl.timeScale(0.5)}
          >
            Half Speed
          </button>
          <button
            className="btn btn-info"
            onClick={() => this.logoTl.timeScale(1)}
          >
            Normal Speed
          </button>
          <button
            className="btn btn-info"
            onClick={() => this.logoTl.seek("marker")}
          >
            Marker
          </button>
          <button className="btn btn-info" onClick={() => this.logoTl.seek(2)}>
            2 Seconds
          </button>
          <button
            className="btn btn-info"
            onClick={() => this.logoTl.progress(0.5)}
          >
            50%
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default TimelineSequence;
