import React, { Component } from "react";
import Menu from "../menu";
import { useSpring, animated } from "react-spring";
import "./styles.css";
import "./svg/blip/blip.css";

import Spring01 from "./springs/spring01";
import Spring02 from "./springs/spring02";
import Spring03 from "./springs/spring03";
import Spring04 from "./springs/spring04";
import Spring05 from "./springs/spring05";
import Spring08 from "./springs/spring08";
import Spring09 from "./springs/spring09";
import Spring10 from "./springs/spring10";
import Spring11 from "./springs/spring11";
import StarShape from "./svg/star";
import Spiral from "./svg/spiral";
import Synchronize from "./svg/synchronize";
import Ripple from "./svg/ripple";
import Keyframes from "./svg/keyframes";
import Bounce from "./svg/bounce";
import ControlPoints from "./svg/control-points.png";
import EaseIn from "./svg/ease-in.png";
import EaseOut from "./svg/ease-out.png";
import Accumulative from "./svg/accumulative";
import Ending from "./svg/ending";
import Intervals from "./svg/intervals";
import Morph from "./svg/morph";
import Repeating from "./svg/repeating";
import OffsetPath from "./svg/offsetpath";
import Rotating from "./svg/rotating";
import StarMorph from "./svg/starmorph";
import MotionPath from "./svg/motionpath";
import Plane from "./svg/plane";
import Icons from "./svg/icons";
import Baobab from "./svg/baobab.svg";
import StarLine from "./svg/lines/starline";

// CIRCLES
import Circles from "./svg/circles";

// WAF LOGO
import WAF from "./svg/waf/waflogo";
import WafName from "./svg/waf/waf-name";
import "./springs/blip.css";

import Spinner from "./springs/spinner";
import PostMessage from "./springs/postmessage";

/* BLIP ANIMATION */

import "./springs/blipper.css";
import Blip from "./springs/Blip";
import BlueBlip from "./svg/blip/blipblue";
import BlueShadow from "./svg/blip/blueshadow";
import CogBlue01 from "./svg/blip/cog-blue-01";
import CogBlue02 from "./svg/blip/cog-blue-02";
import CogBlue03 from "./svg/blip/cog-blue-03";
import CogBlue04 from "./svg/blip/cog-blue-04";
import CogBlue05 from "./svg/blip/cog-blue-05";
import CogBlue06 from "./svg/blip/cog-blue-06";
import CogBlue07 from "./svg/blip/cog-blue-07";
import CogBlue08 from "./svg/blip/cog-blue-08";
import BlipDraw from "./svg/blip/blip-draw";
import BlipLogo from "./springs/blip.svg";
import LetterB from "./svg/blip/letterB";
import LetterL from "./svg/blip/letterL";
import LetterI from "./svg/blip/letterI";
import LetterP from "./svg/blip/letterP";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.05
];

const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

function Card() {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 4, tension: 350, friction: 40 }
  }));
  return (
    <animated.div
      className="photospring"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
    />
  );
}

class Springs extends Component {
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
            <h1>SVG Animations</h1>
            <div className="blip-draw-stage">
              <div className="blip-blue-wrapper">
                <BlueBlip />
                <BlueShadow />
              </div>
              <div className="blip-blue-text">
                <LetterB />
                <LetterL />
                <LetterI />
                <LetterP />
              </div>
              <div className="blip-blue-wrap">
                <BlipDraw />
              </div>
              <div className="cogs">
                <CogBlue01 />
                <CogBlue02 />
                <CogBlue03 />
                <CogBlue04 />
                <CogBlue05 />
                <CogBlue06 />
                <CogBlue07 />
                <CogBlue08 />
              </div>
            </div>

            <h2>CSS Animation Options</h2>
            <p>These are the basic options available for CSS animations:</p>
            <p className="alert alert-secondary">
              &frasl;* This is the animation code. *&frasl;
              <br />
              @-webkit-keyframes example &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;from &#123; transform: scale(2.0); &#125;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;to &#123; transform: scale(1.0); &#125;
              <br />
              &#125;
              <br />
              <br />
              &frasl;* This is the element that we apply the animation to.
              *&frasl;
              <br />
              div &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;-webkit-animation-name: example;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;-webkit-animation-duration: 1s;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;-webkit-animation-timing-function: ease;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;-webkit-animation-delay: 1s; <br />
              &nbsp;&nbsp;&nbsp;&nbsp;-webkit-animation-iteration-count: 2;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;-webkit-animation-direction: alternate;
              <br />
              &#125;
            </p>
            <p>This is the shorthand for the above example:</p>
            <p className="alert alert-secondary">
              div &#123;
              <br />
              -webkit-animation: example 1s ease 1s 2 alternate;
              <br />
              &#125;
            </p>
            <h4>Animation Keyframes</h4>
            <p>This is how one creates animations with keyframes:</p>
            <p className="alert alert-secondary">
              .element &#123;
              <br />
              &nbsp;&nbsp;animation: pulse 5s infinite;
              <br />
              &#125;
              <br />
              <br />
              @keyframes pulse &#123;
              <br />
              &nbsp;&nbsp;0% &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;background-color: #001F3F;
              <br />
              &nbsp;&nbsp;&#125;
              <br />
              &nbsp;&nbsp;100% &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;background-color: #FF4136;
              <br />
              &nbsp;&nbsp;&#125;
              <br />
              &#125;
            </p>
            <h4>Multiple Animations</h4>
            <p>
              You can use more than one animation in an animation as follows:
            </p>
            <p className="alert alert-secondary">
              .element &#123;
              <br />
              animation:
              <br />
              &nbsp;&nbsp;pulse 3s ease infinite alternate,
              <br />
              &nbsp;&nbsp;nudge 5s linear infinite alternate;
              <br />
              &#125;
            </p>
            <p>
              Using multiple animations in an animation can create issues
              performance-wise, but only when using certain combinations of
              animations. These are safe to use in a combined animation:
            </p>
            <ol>
              <li>transform: translate()</li>
              <li>transform: scale()</li>
              <li>transform: rotate()</li>
              <li>opacity</li>
            </ol>
            <h2>CSS Transitions</h2>
            <p>The basic syntax used for CSS transitions:</p>
            <p className="alert alert-secondary">
              .example &#123;
              <br />
              &nbsp;&nbsp;transition: [transition-property]
              [transition-duration] [transition-timing-function]
              [transition-delay];
              <br />
              &#125;
            </p>
            <h2>Bounce</h2>
            <div className="outer">
              <div className="stage-bounce col-md-6">
                <div className="bouncer bounce-7"></div>
              </div>
              <div className="stage-bounce col-md-6">
                <div className="bouncer-02"></div>
              </div>
              <div className="stage">
                <div className="bounceacross"></div>
              </div>
            </div>
            <h2>SVG Reusable Icons</h2>
            <div className="social">
              <Icons />
            </div>
            <h4>Changing Icon Colours</h4>
            <Circles />
            <h2>Animating Lines</h2>
            <StarLine />
            <h4>Determining the Path Length</h4>
            <p>
              To achieve this effect, one has to determine the total length of
              the path that you want to animate. To do this, you need to use the
              following code:
            </p>
            <p className="alert alert-secondary">
              constructor(props) &#123;
              <br />
              &nbsp;&nbsp;super(props);
              <br />
              &nbsp;&nbsp;this.path = React.createRef();
              <br />
              &#125;
              <br />
              <br />
              componentDidMount() &#123;
              <br />
              &nbsp;&nbsp;const pathLength = this.path.current.getTotalLength();
              <br />
              &nbsp;&nbsp;console.log(pathLength);
              <br />
              &#125;
            </p>
            <p>This is the SVG path that is used:</p>
            <p className="alert alert-secondary">
              &lt;path
              <br />
              &nbsp;&nbsp;ref=&#123;this.path&#125;
              <br />
              &nbsp;&nbsp;className="pathstar"
              <br />
              &nbsp;&nbsp;d="..."
              <br />
              /&gt;
            </p>
            <p>
              The "ref" attribute is what is used by the constructor to identify
              the path. This is then used in the function inside the
              componentDidMount method to determine the path length. The path
              length value you can view by checking the concole. You will use
              this value in the css to animate the stroke. Below is the css for
              the animation:
            </p>
            <p className="alert alert-secondary">
              .pathstar &#123;
              <br />
              &nbsp;&nbsp;fill: none;
              <br />
              &nbsp;&nbsp;stroke: #000000;
              <br />
              &nbsp;&nbsp;stroke-width: 5;
              <br />
              &nbsp;&nbsp;stroke-miterlimit: 10;
              <br />
              &nbsp;&nbsp;stroke-dasharray: 1856.6005859375;
              <br />
              &nbsp;&nbsp;stroke-dashoffset: 1856.6005859375;
              <br />
              &nbsp;&nbsp;animation: dash 5s linear;
              <br />
              &nbsp;&nbsp;animation-fill-mode: forwards;
              <br />
              &nbsp;&nbsp;animation-delay: 1s;
              <br />
              &nbsp;&nbsp;animation-iteration-count: infinite;
              <br />
              &nbsp;&nbsp;animation-play-state: running;
              <br />
              &nbsp;&nbsp;animation-direction: alternate;
              <br />
              &#125;
              <br />
              <br />
              @keyframes dash &#123;
              <br />
              &nbsp;&nbsp;from &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;stroke-dashoffset: 1856.6005859375;
              <br />
              &nbsp;&nbsp;&#125;
              <br />
              &nbsp;&nbsp;to &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;stroke-dashoffset: 0;
              <br />
              &nbsp;&nbsp;&#125;
              <br />
              &#125;
            </p>
            <p>
              When you create a shape in illustrator like the star in this
              example and then save it as an SVG file, it is saved as a polygon
              and not a path. To convert the polygon shape to a path you need to
              add a point onto the path in illustrator and make it a bezier
              path. This will then turn the shape into a path instead of a
              polygon when you save it.
            </p>
            <h4>Restarting an Animation:</h4>
            <p>
              To restart an animation see&nbsp;
              <a
                href="https://css-tricks.com/restart-css-animation"
                target="css-tricks-restart"
              >
                the article
              </a>
              &nbsp; on CSS tricks.
            </p>
            <h4>Animating a Circle's Stroke</h4>
            <Spiral />
            {/* CSS FILTERS */}
            <h2>CSS Animation</h2>
            <Plane />
            <h2>CSS Filters &amp; SVGs</h2>
            <h4>Animating Filters</h4>
            <p>
              The example below shows how one can use animations on CSS filters.
              This example uses the grayscale filter which is is initially set
              at a value of 1 and then animated to a value of 2. This effect is
              triggered when you move your mouse over the image.
            </p>
            <img src={BlipLogo} alt="blip" className="blip-gray mb-3" />
            <h4>CSS Filter Types:</h4>
            <p className="mb-3">
              Below are all the available CSS filters applied to an SVG image to
              demonstrate the effect each filter produces:
            </p>
            <div className="filter-wrap">
              <p>No Filter</p>
              <img src={Baobab} alt="baobab" className="baobab" />
            </div>
            <div className="filter-wrap">
              <p>Blur</p>
              <img src={Baobab} alt="baobab" className="baobab blur" />
            </div>
            <div className="filter-wrap">
              <p>Grayscale</p>
              <img src={Baobab} alt="baobab" className="baobab grayscale" />
            </div>
            <div className="filter-wrap">
              <p>Sepia</p>
              <img src={Baobab} alt="baobab" className="baobab sepia" />
            </div>
            <div className="filter-wrap">
              <p>Saturated</p>
              <img src={Baobab} alt="baobab" className="baobab saturated" />
            </div>
            <div className="filter-wrap">
              <p>Hue</p>
              <img src={Baobab} alt="baobab" className="baobab hue" />
            </div>
            <div className="filter-wrap">
              <p>Invert</p>
              <img src={Baobab} alt="baobab" className="baobab invert" />
            </div>
            <div className="filter-wrap">
              <p>Opacity</p>
              <img src={Baobab} alt="baobab" className="baobab opacity" />
            </div>
            <div className="filter-wrap">
              <p>Brightness</p>
              <img src={Baobab} alt="baobab" className="baobab brightness" />
            </div>
            <div className="filter-wrap">
              <p>Contrast</p>
              <img src={Baobab} alt="baobab" className="baobab contrast" />
            </div>
            <div className="filter-wrap">
              <p>Shadow</p>
              <img src={Baobab} alt="baobab" className="baobab shadow" />
            </div>
            <h2>Using SVGs as Background Images</h2>
            <p>
              SVG images can be used as background images. To do this in React,
              you need to import the SVG image into react as follows:
            </p>
            <p className="alert alert-secondary">
              import Baobab from "./svg/baobab.svg";
            </p>
            <p>Then to use the image, you would use the following CSS:</p>
            <p className="alert alert-secondary">
              .demo-back &#123;
              <br />
              &nbsp;&nbsp;background-image: url("./baobab.svg");
              <br />
              &nbsp;&nbsp;background-position: center bottom;
              <br />
              &nbsp;&nbsp;background-repeat: no-repeat;
              <br />
              &nbsp;&nbsp;background-size: 100% auto;
              <br />
              &nbsp;&nbsp;background-color: #d6cfc4;
              <br />
              &#125;
            </p>
            <p>
              Using SVG files as background images can be a handy thing if you
              want to use large background images or when the background images
              are vector-styled artwork.
            </p>
            <div className="demo-back">
              <span className="demo-words">Background Image</span>
            </div>
            {/* END CSS FILTERS */}
            <h2>SVG Animation Experiments</h2>
            <h4>WAF Logo</h4>
            <div className="waf-wrap">
              <WAF />
              <WafName />
            </div>
            <h4>Blip Animation</h4>
            <Blip />
            <h4>Rotating Star</h4>
            <div style={{ margin: "15px 0px 15px 0px" }}>
              <StarShape />
            </div>
            <h2>Using SVG Animation</h2>
            <h4>Tools &amp; Links</h4>
            <ol>
              <li>
                <a
                  href="https://petercollingridge.appspot.com/svg-optimiser"
                  target="peter"
                >
                  Peter Collinger - SVG Optimizer
                </a>
              </li>
              <li>
                <a
                  href="https://www.mobilefish.com/services/base64/base64.php"
                  target="base64"
                >
                  Base64 Encoder &amp; Decoder
                </a>
              </li>
              <li>
                <a href="https://svgjs.com/docs/2.7/" target="svgJS">
                  SVG.js - Library for Manipulating &amp; Animating SVGs
                </a>
              </li>
              <li>
                <a href="http://snapsvg.io/" target="snap">
                  Snap.svg - JavaScript Library for Creating Interactive SVGs
                </a>
              </li>
              <li>
                <a href="https://jonneal.dev/svg4everybody/" target="everybody">
                  SVG for Everybody
                </a>
              </li>
            </ol>
            <h4>Inline Styling of SVGs</h4>
            <p>This is how one can put css inside an svg file:</p>
            <p className="alert alert-secondary">
              &lt;svg xmlns="http://www.w3.org/2000/svg" version="1.1"
              width="300px" height="300px" viewBox="0 0 300 300"&gt;
              <br />
              &nbsp;&nbsp;&lt;style type="text/css"&gt;
              <br />
              &nbsp;&nbsp;&lt;&lt;![CDATA[
              <br />
              &nbsp;&nbsp;&lt;selector &#123;/* styles go here... */&#125;
              <br />
              &nbsp;&nbsp;&lt;]]&gt;
              <br />
              &nbsp;&nbsp;&lt;&lt;/style&gt;
              <br />
              &nbsp;&nbsp;&lt;&lt;g id=".."&gt; ... &lt;/g&gt;
              <br />
              &lt;/svg&gt;
            </p>
            <p>
              This is how you can include a link to an external CSS file in an
              SVG:
            </p>
            <p className="alert alert-secondary">
              &lt;?xml version="1.0" standalone="no"?&gt;
              <br />
              &lt;?xml-stylesheet type="text/css" href="style.css"?&gt;
              <br />
              &lt;svg xmlns="http://www.w3.org/2000/svg" version="1.1"
              width=".." height=".." viewBox=".."&gt;
              <br />
              &nbsp;&nbsp;&lt;!-- SVG content --&gt;
              <br />
              &lt;/svg&gt;
            </p>
            <h4>Creating Text in SVG Files</h4>
            <p>To create text in an SVG you use the following syntax:</p>
            <p className="alert alert-secondary">
              &lt;text x="0" y="0"&gt;Text Goes Here&lt;/text&gt;
            </p>
            <h4>SVG &lt;use&gt;</h4>
            <p>This is a basic idea of what the use option is used for...</p>
            <h4>Animation Options</h4>
            <p>
              &lt;animate&gt; - Allows you to animate scalar attributes and
              properties over a period of time.
              <br />
              &lt;animateMotion&gt; - Moves elements along a motion path.
              <br />
              &lt;animateTransform - Allows you to animate one of the SVGs
              transformation attributes over time.
            </p>
            <h4>Specifying the Animation Target</h4>
            <p>
              This is how you specify the target of the animation. When using
              animated SVGs in React you use "xlinkHref" below instead of
              "xlink:href".
            </p>
            <p className="alert alert-secondary">
              &lt;rect&gt;
              <br />
              &nbsp;&nbsp;from="1" to="0" dur="5s" repeatCount="indefinite"
              /&gt;
              <br />
              &lt;/rect&gt;
            </p>
            <p>A basic example:</p>
            <p className="alert alert-secondary">
              &lt;circle id="my-circle" r="30" cx="50" cy="50" fill="orange"
              /&gt;
              <br />
              <br />
              &lt;animate
              <br />
              xlinkHref="#my-circle"
              <br />
              attributeName="cx"
              <br />
              from="50"
              <br />
              to="450"
              <br />
              dur="1s"
              <br />
              begin="click"
              <br />
              fill="freeze" /&gt;
            </p>
            <p>
              In the above example, we've defined a circle, and then called an
              animation on that circle. The center of the circle moves from the
              initial position of 50 units, to 450 units along the x-axis. The
              animation is set to trigger on click. This can also be set to a
              time value as well. For example, begin="5s". This will start the
              animation as soon as the page is loaded. The freeze property
              "freezes" the animation upon completion.
            </p>
            <h4>Repeating Animations</h4>
            <Repeating />
            <h4>Restarting the Animation</h4>
            <p>
              always: The animation can be restarted at any time.
              <br />
              whenNotActive: The animation can only be restarted at the end of
              the animation sycle.
              <br />
              never: The animation cannot be restarted.
            </p>
            <h4>Synchronizing Animations:</h4>
            <p>
              This example below demonstrates how one animation can be tied to
              another and triggered on conditions which are only activated based
              on another elements animation being started:
            </p>
            <Synchronize />
            <p>
              If you click on the orange circle, you will see it moves towards
              the right of the screen. The two squares remain where they are,
              but when the circle reaches a certain point along the x-axis it
              starts to also move. The othe square only starts to move when the
              blue square reaches the end of its cycle.
            </p>
            <h4>Using Keyframes</h4>
            <p>
              This is an example of an animation which is broken up into
              keyframes. This is the code for the animation:
            </p>
            <p className="alert alert-secondary">
              &lt;animate
              <br />
              &nbsp;&nbsp;xlinkHref="#orange-circle3"
              <br />
              &nbsp;&nbsp;attributeName="cx"
              <br />
              &nbsp;&nbsp;from="30"
              <br />
              &nbsp;&nbsp;to="450"
              <br />
              &nbsp;&nbsp;dur="3s"
              <br />
              &nbsp;&nbsp;begin="click"
              <br />
              &nbsp;&nbsp;values="30; 450; 50; 200; 30"
              <br />
              &nbsp;&nbsp;keyTimes="0; 0.5; 0.8; 0.9; 1"
              <br />
              &nbsp;&nbsp;fill="freeze"
              <br />
              &nbsp;&nbsp;id="circ-anim"
              <br />
              /&gt;
            </p>
            <p>
              From the above example one can see how there are 5 key values and
              tied to these are keyTimes which specify the timing of the
              animation values.
            </p>
            <Keyframes />
            <h4>Keyframes Example Two:</h4>
            <Ripple />
            <h4>Controlling the Animation Pace:</h4>
            <p>
              This is an example of how one can control the pace of an animation
              using key values, keyTimes and keySplines.
            </p>
            <div className="alert alert-secondary">
              <Bounce />
            </div>
            <p>This is the code used in the bouncing circle example above:</p>
            <p className="alert alert-secondary">
              &lt;animate
              <br />
              &nbsp;&nbsp;xlinkHref="#orange-circle33"
              <br />
              &nbsp;&nbsp;attributeName="cy"
              <br />
              &nbsp;&nbsp;from="30"
              <br />
              &nbsp;&nbsp;to="250"
              <br />
              &nbsp;&nbsp;dur="3s"
              <br />
              &nbsp;&nbsp;begin="click"
              <br />
              &nbsp;&nbsp;calcMode="spline"
              <br />
              &nbsp;&nbsp;values="35; 250; 120; 250; 170; 250; 210; 250"
              <br />
              &nbsp;&nbsp;keyTimes="0; 0.15; 0.3; 0.45; 0.6; 0.75; 0.9; 1"
              <br />
              &nbsp;&nbsp;keySplines="0.42 0 1 1;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0
              0 0.59 1;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0.42
              0 1 1;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0
              0 0.59 1;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0.42
              0 1 1;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0
              0 0.59 1;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0.42
              0 1 1"
              <br />
              &nbsp;&nbsp;fill="freeze"
              <br />
              &nbsp;&nbsp;id="circ-anim"
              <br />
              /&gt;
            </p>
            <p>
              To understand how the keySplines work, see the three images below
              to see how changing the values of the four variables used to
              control each keySpline alters the bezier curve. The bezier curve
              gives a visual idea of how the animation pace is affected with
              different values.
            </p>
            <div className="row">
              <div className="col-md-6">
                <img
                  src={ControlPoints}
                  alt="contol points"
                  className="img-fluid"
                  style={{ height: 400 }}
                />
              </div>
              <div className="col-md-6">
                <img
                  src={EaseIn}
                  alt="ease-in"
                  className="img-fluid"
                  style={{ height: 410 }}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <img
                  src={EaseOut}
                  alt="ease-out"
                  style={{ height: 400, marginBottom: 15 }}
                />
              </div>
            </div>

            <h4>Additive &amp; Accumulative Animations</h4>
            <p>
              Sometimes, it's useful to define an animation that starts from
              where the previous animation ended; or one that uses the
              accumulative sum of the previous animations as a value to proceed
              by. For that, SVG has two conveniently named attributes: additive
              and accumulate. Suppose you have an element whose width you want
              to "grow", or a line whose length you want to increase, or an
              element that you want to move step by step from one position to
              the other, over separate steps. This feature is particularly
              useful for repeated animations.
            </p>
            <Accumulative />
            <h4>Stopping an Animation</h4>
            <p>
              The example below demonstrates how one can stop an anitation. The
              orange animation of the orange circle starts when the page loads
              and the circle moves slowly from left to right along the x-axis.
              If you click on the green circle while the orange circle is still
              moving, the orange circle's animation is stopped and the animation
              for the green circle is started.
            </p>
            <p className="alert alert-warning">
              Note: To see this example work, you need to refresh the page.
            </p>
            <Ending />
            <h4>Setting Intervals for Repetitive Animations</h4>
            <p>
              An example specifying multiple beginning and ending times (i.e.
              intervals) is the following demo, where the rectangle is rotated
              based on the defined intervals, changing from active to inactive
              accordingly.
            </p>
            <p className="alert alert-warning">
              Note: To see this example work, you need to refresh the page.
            </p>
            <Intervals />
            <p>This is the code for the example above:</p>
            <p className="alert alert-secondary">
              &lt;rect
              <br />
              &nbsp;&nbsp;id="intervals"
              <br />
              &nbsp;&nbsp;width="50"
              <br />
              &nbsp;&nbsp;height="50"
              <br />
              &nbsp;&nbsp;x="10"
              <br />
              &nbsp;&nbsp;y="10"
              <br />
              &nbsp;&nbsp;fill="rgba(155, 178, 80, 1)"
              <br />
              /&gt;
              <br />
              &lt;animateTransform
              <br />
              &nbsp;&nbsp;xlinkHref="#intervals"
              <br />
              &nbsp;&nbsp;attributeName="transform"
              <br />
              &nbsp;&nbsp;attributeType="XML"
              <br />
              &nbsp;&nbsp;type="rotate"
              <br />
              &nbsp;&nbsp;from="0 35 35"
              <br />
              &nbsp;&nbsp;to="360 35 35"
              <br />
              &nbsp;&nbsp;dur="2s"
              <br />
              &nbsp;&nbsp;begin="0s; 5s; 9s; 17s;"
              <br />
              &nbsp;&nbsp;end="2s; 8s; 15s; 25s;"
              <br />
              &nbsp;&nbsp;fill="freeze"
              <br />
              &nbsp;&nbsp;restart="whenNotActive"
              <br />
              /&gt;
            </p>
            <h4>Morphing Shapes</h4>
            <p>
              This is a demonstration of how one can create a transition between
              two shapes using the morph feature of SVG animations.
            </p>
            <p>
              These are the steps to follow to create a basic morph animation.
              First create the two shapes, the first one is the shape that will
              be the starting point, and the second one the end point. The
              shapes must have the same number of points for the morphing effect
              to work.
            </p>
            <StarMorph />
            <div
              style={{
                width: 80,
                height: 100,
                overflow: "hidden",
                position: "relative",
                top: -3
              }}
            >
              <Morph />
            </div>
            <h4>Animating Along a Path</h4>
            <p>
              The example below demonstrates how one can animate movement along
              a path with SVG animation. The element that is following the path
              is also orientated so that it rotates as it goes along the path.
            </p>
            <MotionPath />
            <h4>Animating Along a Path Limitations</h4>
            <p>
              This is another example, but one that is started when the user
              clicks on the red circle. When the element that is set to follow a
              path is not movin, the default position of the element is set to
              'x="0" y="0". One cannot reposition the element before it is set
              in motion or that shift in position affects the way it follows the
              path. An easier way to do this, is to use css, that then solves
              the problem of the element not being able to be positioned. You
              will see once the red circle has gone around the path after you
              click on it, it fixes the issue with the positioning that one has
              in the beginning.
            </p>
            <OffsetPath />
            <h4>Rotating</h4>
            <p>
              Rotating SVGs can be a bit tricky to configure, mostly setting the
              origin and position that is the challenge. In the example below,
              these are the variables used:
            </p>
            <p className="alert alert-secondary">
              Square Dimensions:
              <br />
              width="40" height="40"
              <br />
              Square One:
              <br />
              x="20" y="20"
              <br />
              transform-origin: 40px 40px;
              <br />
              Square Two:
              <br />
              x="80" y="80"
              <br />
              transform-origin: 100px 100px;
              <br />
              Square Three:
              <br />
              x="150" y="20"
              <br />
              transform-origin: 170px 40px;
            </p>
            <p>
              So from the above, what one has to do is divide the width of the
              blocks by two, then if you for example want the square to be
              rotate with a center point set at x=100 and y=200, ypu must set
              the squares x and y to be x=120 and y=120. So you basically add
              half of the squares width or height to the x and y values for the
              center point of the rotation.
            </p>
            <div
              style={{
                display: "inline-block",
                marginBottom: 15,
                marginTop: 5
              }}
            >
              <Rotating />
            </div>

            <h1>Spring</h1>

            {/*<img
              src={Blip}
              alt="Blip"
              style={{ width: "300px", height: "auto" }}
            />*/}
            <Spinner />
            <Spring11 />

            <h2>Spring Hooks</h2>
            <ol>
              <li>useSpring a single spring, moves data from a -> b</li>
              <li>
                useSprings multiple springs, for lists, where each spring moves
                data from a -> b
              </li>
              <li>
                useTrail multiple springs with a single dataset, one spring
                follows or trails behind the other
              </li>
              <li>
                useTransition for mount/unmount transitions (lists where items
                are added/removed/updated)
              </li>
              <li>useChain to queue or chain multiple animations together</li>
            </ol>
            <h2>Using useSpring</h2>
            <p>
              This is an example of how one would use useSpring to fade in some
              text:
            </p>
            <p className="alert alert-secondary">
              import &#123;useSpring, animated&#125; from 'react-spring'
              <br />
              <br />
              function App() &#123;
              <br />
              &nbsp;&nbsp;const props = useSpring(&#123;opacity: 1, from:
              &#123;opacity: 0&#125;&#125;)
              <br />
              &nbsp;&nbsp;return &lt;animated.div style=&#123;props&#125;&gt;I
              will fade in&lt;/animated.div&gt;
              <br />
              &#125;
            </p>
            <h4>Animating Props</h4>
            <p className="alert alert-secondary">
              const props = useSpring(&#123; number: 1, from: &#123; number: 0
              &#125; &#125;)
              <br />
              return
              &lt;animated.span&gt;&#123;props.number&#125;&lt;/animated.span&gt;
            </p>
            <Spring09 />
            <h2>Using Interpolate</h2>
            <Spring10 />

            {/*<div
              style={{
                display: "inline-block",
                width: "100%",
                height: 400,
                overflow: "hidden !important",
                marginTop: 300
              }}
            >
              <Spring06 />
            </div>
            <Spring07 />*/}
            <Spring08 />
            <h2>Slider</h2>
            <p>
              Slide the black box either to the left or to the right to see the
              effect.
            </p>
            <Spring05 />
            <h2>Flipper</h2>
            <p>Click on the black box to see the back of the box.</p>
            <Spring04 />
            <Spring03 />
            <Card />
            <div style={{ height: 300 }}>
              <Spring01 />
            </div>
            <Spring02 items={"Lorem ipsum dolor sit".split(" ")} />
            <PostMessage />
          </div>
        </div>
      </div>
    );
  }
}

export default Springs;
