import React, { Component } from "react";
import "./blip-simple.css";
import { TimelineLite } from "gsap/all";
import BlipSimple from "./blip-simple.jsx";
import TweenTransformOrigin from "./tween-transform-origin";
import TweenSVG from "./tween-svg";
import TweenReveal from "./tween-reveal";
import TweenRotation from "./tween-rotation";
import TweenSimple from "./tween-simple";
import TweenEase from "./tween-ease";
import TweenStagger from "./tween-stagger";
import TweenStaggerCycle from "./tween-stagger-cycle";
import TweenStaggerFunction from "./tween-stagger-cycle-function";
import TweenStaggerButtons from "./tween-stagger-buttons";
import TweenRepeat from "./tween-repeat";
import TweenCallback from "./tween-callback";
import TweenSlider from "./tween-slider";
import TweenHooks from "./tween-hooks";
import TweenHooksToggle from "./tween-hooks-toggle";
import TweenControlsComplex from "./tween-controls-complex";
import TweenList from "./tween-list";
import TweenDataCycle from "./tween-data-cycle";
import TweenDragStroke from "./tween-drag-stroke";
import TweenDirectionalRotation from "./tween-directional-rotation";
// import TweenCards from "./tween-cards";
import TimelineSequence from "./timeline-sequence";
import StateControl from "./state-control";
import SimpleTransition from "./simple-transition";
import GSAPModal from "./modal";
import Measurements from "./measurements";
import TweenDroppable from "./tween-droppable";
// import TweenDraggableBounds from "./tween-draggable-bounds";

import MeasureComponent from "./measure-component";

import FlyAnimation from "./fly";
// import TweenScroll from "./tween-scroll";

import Fade from "react-reveal/Fade";

import faker from "faker";

class SnapSVG extends Component {
  constructor(props) {
    super(props);
    this.logoTween = new TimelineLite({ paused: true });
    this.state = {
      clientHeight: window.clientHeight,
      clientWidth: window.clientWidth
    };
  }

  componentDidMount() {
    this.setState({
      clientHeight: window.clientHeight,
      clientWidth: window.clientWidth
    });
    this.logoTween = new TimelineLite({
      paused: true,
      delay: 0.2
    })
      .to(this.logoContainer, 1, {
        x: 200,
        y: -70,
        width: 150,
        opacity: 1,
        rotation: 360
      })
      .to(
        this.logoContainer,
        1,
        {
          x: 400,
          y: -35,
          width: 120,
          opacity: 1
        },
        "-=0.5"
      );
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>Adding GSAP</h2>
            <div style={{ width: 400, marginTop: 15, marginBottom: 15 }}>
              <FlyAnimation />
            </div>
            <p>{faker.lorem.paragraphs(Math.random() * 5)}</p>
            <p>{faker.lorem.paragraphs(Math.random() * 5)}</p>
            <p>This is how to add GSAP to an html page:</p>
            <p className="alert alert-secondary">
              &lt;script
              src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js"&gt;&lt;/script&gt;
            </p>
            {/*<TweenScroll />
            <TweenDraggableBounds />*/}
            <MeasureComponent />
            <Measurements />
            <TweenDroppable />
            <TweenDirectionalRotation />
            <TweenDragStroke />
            <TweenTransformOrigin />
            <TweenRotation />
            <TweenSVG />
            <Fade onReveal={() => this.logoTween.play()}>
              <h2>Trigger Animation on Scroll</h2>
              <p>
                This is an example of how one can use{" "}
                <a href="https://www.react-reveal.com" target="reveal">
                  React Reveal
                </a>{" "}
                to trigger an animation when the user scrolls to a specific
                section in the page.
              </p>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: 110,
                  backgroundColor: "rgba(0,0,0,0.1)",
                  marginBottom: 15,
                  marginTop: 15
                }}
              >
                <div
                  ref={div => (this.logoContainer = div)}
                  style={{
                    opacity: 0,
                    width: 100,
                    marginTop: 20,
                    position: "absolute",
                    left: 0,
                    zIndex: 200
                  }}
                >
                  <BlipSimple />
                </div>
              </div>
            </Fade>
            <TweenReveal />
            <TweenSimple />
            <TweenEase />
            <TweenStagger />
            <TweenStaggerCycle />
            <TweenStaggerFunction />
            <TweenStaggerButtons />
            <TweenRepeat />
            <TweenCallback />
            <TweenSlider />
            <TweenControlsComplex />
            <TweenHooks />
            <TweenHooksToggle />
            <TweenList />
            <TweenDataCycle />
            <h2>GSAP Short Codes</h2>
            <p>Below is a list of short codes for css values that GSAP uses.</p>
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th>GSAP</th>
                  <th>CSS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>x: 100</td>
                  <td>transform: translateX(100)</td>
                </tr>
                <tr>
                  <td>y: 100</td>
                  <td>transform: translateY(100)</td>
                </tr>
                <tr>
                  <td>rotation: 360</td>
                  <td>transform: rotate(360deg)</td>
                </tr>
                <tr>
                  <td>rotationX: 360</td>
                  <td>transform: rotateX(360deg)</td>
                </tr>
                <tr>
                  <td>rotationY: 360</td>
                  <td>transform: rotateY(360deg)</td>
                </tr>
                <tr>
                  <td>skewX: 360</td>
                  <td>transform: skewX(45deg)</td>
                </tr>
                <tr>
                  <td>skewY: 360</td>
                  <td>transform: skewY(45deg)</td>
                </tr>
                <tr>
                  <td>scale: 2</td>
                  <td>transform: scale(2,2)</td>
                </tr>
                <tr>
                  <td>scaleX: 2</td>
                  <td>transform: scaleX(2)</td>
                </tr>
                <tr>
                  <td>scaleY: 2</td>
                  <td>transform: scaleY(2)</td>
                </tr>
                <tr>
                  <td>xPercent: 50</td>
                  <td>transform: translateX(50%)</td>
                </tr>
                <tr>
                  <td>yPercent: 50</td>
                  <td>transform: translateY(50%)</td>
                </tr>
              </tbody>
            </table>
            <h2>Tween Types:</h2>
            <h4>The to Tween:</h4>
            <p>
              The "to" tween animates the image from the original position to
              the right along the x-axis.
            </p>
            <p className="alert alert-secondary">
              TweenLite.to(img, 1, &#123;x: 200&#125;);
            </p>
            <h4>The from Tween:</h4>
            <p>
              The "from" tween animates the image from a position 200px to the
              left along the x-axis to where it is.
            </p>
            <p className="alert alert-secondary">
              TweenLite.from(img, 1, &#123;x: -200&#125;);
            </p>
            <h4>The fromTo Tween:</h4>
            <p>
              The "fromTo" tween animates the image from a position -200px to
              the left along the x-axis to 200px.
            </p>
            <p className="alert alert-secondary">
              TweenLite.to(img, 1, &#123;x: -200&#125; , &#123;x: 200&#125;);
            </p>
            <h4>The set Method</h4>
            <p>
              You can specify the static state of an object using the set method
              as follows:
            </p>
            <p className="alert alert-secondary">
              TweenLite.set(img, &#123;x: 200&#125;);
            </p>
            <p>
              The set method can be used to position an element outside the view
              before an animation starts.
            </p>
            <h4>Multiple Tweens</h4>
            <p>
              If you want to animate multiple elements you can add more tweens
              like this:
            </p>
            <p className="alert alert-secondary">
              TweenLite.from(img, 1, &#123;x: -200&#125;);
              <br />
              TweenLite.from(div, 1, &#123;autoAlpha: 0, delay: 1&#125;);
            </p>
            <p>
              In the above tween, the img is animated from a position 200px to
              the left to its specified position based on its CSS values. The
              duration for the tween to complete is set to one second. A second
              tween is then also added on a div element which makes it fade from
              being opacity zero and visiblity "none" to an opacity value of one
              and full visibility. There is also a delay on the second tween of
              one second, so that it only starts once the first tween is
              completed.
            </p>
            <h4>Using a Tween Timeline</h4>
            <p>This is an example of how one would create a tween timeline:</p>
            <p className="alert alert-secondary">
              tl = new TimeLineLite();
              <br />
              <br />
              tl
              <br />
              &nbsp;&nbsp;.from(h1, 0.3, &#123;y: -15, autoAlpha: 0 &#125;)
              <br />
              &nbsp;&nbsp;.from(intro, 0.3, &#123;y: -15, autoAlpha: 0 &#125;,
              '-=0.15')
              <br />
              &nbsp;&nbsp;.from(img, 0.3, &#123;y: -15, autoAlpha: 0 &#125;,
              '-=0.15')
            </p>
            <p>
              Adding the '-=0.15' to the end of the second and third tweens
              makes them start just before the previous tween in the sequence
              ends. This creates a more fluid animation with no visible pauses.
              If one wanted a delay at a certain point in the tween timeline,
              one would use '+=2' to create a two second delay before that tween
              in the sequence started.
            </p>
            <h4>Absolute Positioning of a Tween</h4>
            <p>
              If you wanted a specific tween in your timeline to break the
              sequence and start at a specific time in the animation sequence,
              you would do the following:
            </p>
            <p className="alert alert-secondary">
              tl = new TimeLineLite();
              <br />
              <br />
              tl
              <br />
              &nbsp;&nbsp;.from(h1, 0.3, &#123;y: -15, autoAlpha: 0 &#125;)
              <br />
              &nbsp;&nbsp;.from(intro, 0.3, &#123;y: -15, autoAlpha: 0 &#125;,
              3)
              <br />
              &nbsp;&nbsp;.from(img, 0.3, &#123;y: -15, autoAlpha: 0 &#125;,
              '-=0.15')
            </p>
            <p>
              In the example above, the intro tween is set to start three
              seconds into the animation swquence and not in the order it
              appears like the other tweens.
            </p>
            <h4>Timeline Labels</h4>
            <p>
              Timeline labels are used when you want to force a tween to start
              at a specific point in the timeline, but not have it located at
              that specific point in the code. Below is an example of how one
              uses a timeline label:
            </p>
            <p className="alert alert-secondary">
              tl = new TimeLineLite();
              <br />
              <br />
              tl
              <br />
              &nbsp;&nbsp;.from(h1, 0.3, &#123;y: -15, autoAlpha: 0 &#125;)
              <br />
              &nbsp;&nbsp;.add('image-here')
              <br />
              &nbsp;&nbsp;.from(intro, 0.3, &#123;y: -15, autoAlpha: 0 &#125;,
              3)
              <br />
              &nbsp;&nbsp;.from(img, 0.3, &#123;y: -15, autoAlpha: 0 &#125;,
              'image-here')
            </p>
            <p>
              In the example above, the img tween is located at the end of the
              timeline, but by adding a label after the first tween, and then
              instruction the image tween to use that label, it will start
              directly after the first tween in the sequence. One can also add a
              delay onto the label as shown below:
            </p>
            <p className="alert alert-secondary">
              &nbsp;&nbsp;.from(img, 0.3, &#123;y: -15, autoAlpha: 0 &#125;,
              'image-here+=3')
            </p>
            <p>
              The above example adds a three second delay to the labelled tween.
            </p>
            <h4>Staggering Animations</h4>
            <p>
              Below is an example of a basic stagger tween which animates a
              series of buttons from a starting position of 200px to the
              position specified by the css. Each button is animated with a
              delay of 0.1 seconds between the individual tweens.
            </p>
            <p className="alert alert-secondary">
              .staggerFrom(buttons, 0.2, &#123;x: 200,
              ease:Power1.easeOut&#125;, 0.1);
            </p>
            <p>
              This is using the staggerTo method instead of the staggerFrom
              method:
            </p>
            <p className="alert alert-secondary">
              .staggerTo(buttons, 0.2, &#123;x: -20, ease:Power1.easeOut&#125;,
              0.1);
            </p>
            <p>This is how one would use the staggerFromTo method:</p>
            <p className="alert alert-secondary">
              .staggerFromTo(buttons, 0.2,
              <br />
              &nbsp;&nbsp;&#123;autoAlpha: 0, x: 10&#125;,
              <br />
              &nbsp;&nbsp;&#123;x: -20, autoAlpha: 1, ease:Power1.easeOut&#125;,
              <br />
              &nbsp;&nbsp;0.1);
            </p>
            <p className="alert alert-secondary">
              .staggerFrom(buttons, 0,2, &#123;cycle: &#123;
              <br />
              &nbsp;&nbsp;x: [50, -50],
              <br />
              &nbsp;&nbsp;scale: [2, 0.5]
              <br />
              &#125;, autoAlpha: 0, ease:Power1.easeOut&#125;, 0.3);
            </p>
            <GSAPModal />
            <TimelineSequence />
            <StateControl />
            <SimpleTransition />
            {/*<TweenCards />*/}
          </div>
        </div>
      </div>
    );
  }
}

export default SnapSVG;
