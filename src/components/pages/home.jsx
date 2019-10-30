import React, { Component } from "react";
import Navbar from "../modules/navbar/navbar";
import Menu from "../../sections/menu";
import FeaturedRooms from "./featuredrooms";
import Photo from "../../images/lion.jpg";
//import { TimelineMax, TweenMax } from "gsap/all";
import * as TweenMax from "gsap/umd/TweenMax";

/* ########## BLIP ########## */
import "../../sections/extras/svg/blip/blip.css";
import "../../sections/extras/springs/blipper.css";
import BlueBlip from "../../sections/extras/svg/blip/blipblue";
import BlueShadow from "../../sections/extras/svg/blip/blueshadow";
import CogBlue01 from "../../sections/extras/svg/blip/cog-blue-01";
import CogBlue02 from "../../sections/extras/svg/blip/cog-blue-02";
import CogBlue03 from "../../sections/extras/svg/blip/cog-blue-03";
import CogBlue04 from "../../sections/extras/svg/blip/cog-blue-04";
import CogBlue05 from "../../sections/extras/svg/blip/cog-blue-05";
import CogBlue06 from "../../sections/extras/svg/blip/cog-blue-06";
import CogBlue07 from "../../sections/extras/svg/blip/cog-blue-07";
import CogBlue08 from "../../sections/extras/svg/blip/cog-blue-08";
import CogBlue09 from "../../sections/extras/svg/blip/cog-blue-09";
import BlipDraw from "../../sections/extras/svg/blip/blip-draw";
import LetterB from "../../sections/extras/svg/blip/letterB";
import LetterL from "../../sections/extras/svg/blip/letterL";
import LetterI from "../../sections/extras/svg/blip/letterI";
import LetterP from "../../sections/extras/svg/blip/letterP";
import BlipMenu from "../../sections/extras/svg/blip/blip-menu";

class Home extends Component {
  constructor(props) {
    super(props);
    this.bezierBlip = new TweenMax({ paused: false });
    this.blipScale = new TimelineMax({ paused: false });
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.blipScale = new TimelineMax({
      paused: false,
      delay: 1
    })
      .set(this.blipScale, {
        scale: 0.5
      })
      .to(this.blipScale, 3, {
        scale: 1.2
      });
    this.besierBlip = new TweenMax(this.blipFly, 3, {
      delay: 1,
      bezier: {
        type: "soft",
        curviness: 1,
        values: [
          { x: -150, y: 0 },
          { x: 400, y: 120 },
          { x: 1000, y: 130 },
          { x: 1600, y: 80 }
        ],
        autoRotate: false
      },
      ease: "Power0.easeOut"
    });
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="blip-draw-stage">
                <BlipMenu />
                <div className="blip-blue-wrapper">
                  <div
                    ref={div => (this.blipFly = div)}
                    style={{
                      width: 170,
                      position: "absolute",
                      left: -150,
                      top: 0
                    }}
                  >
                    <div
                      ref={div => (this.blipScale = div)}
                      className="blip-blue-outer"
                      style={{
                        width: 170,
                        position: "absolute",
                        left: -150,
                        top: 0
                      }}
                    >
                      <BlueBlip />
                      <BlueShadow />
                    </div>
                  </div>
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
                  <CogBlue09 />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <Menu />
            </div>
            <div className="col-md-9">
              <h1>React Basics</h1>
              <h2>To Refine</h2>
              <ol>
                <li>Higher-Order Components</li>
                <li>Reordering Lists</li>
                <li>Setting State from Props</li>
                <li>Function Props</li>
                <li>Hooks</li>
                <li>React Router Tabs</li>
                <li>Reconcilliation &amp; Lifecycles</li>
                <li>Redux</li>
                <li>User Login</li>
                <li>Styled Components</li>
                <li>Deployment</li>
              </ol>
              <hr />
              <h2>Book Source Code GitHub</h2>
              <p>
                To access the files used in the book, click on the button below:
              </p>
              <p>
                <a
                  href="https://github.com/Apress/pro-react-16"
                  target="github"
                  className="btn btn-secondary mb-2"
                >
                  Pro React 16 - GitHub
                </a>
              </p>
              <h2>Importing Images</h2>
              <div
                style={{
                  margin: "15px 0px 15px 0px",
                  padding: "15px 15px 15px 15px",
                  borderRadius: 6,
                  border: "solid 1px #d8d8d8"
                }}
              >
                <img className="img-fluid" src={Photo} alt="banner" />
              </div>
              <p>
                To load images into your component, you need to use the
                following import statement:
              </p>
              <p className="alert alert-secondary">
                import Photo from "../../images/lion.jpg";
              </p>
              <p>To display the image you will use the following:</p>
              <p className="alert alert-secondary">
                &lt;img className="img-fluid" src=&#123;Photo&#125; alt="banner"
                /&gt;
              </p>
              <h2>Using Static Content</h2>
              <p>
                One can use the "src" folder for static content, but if you want
                to put your static content in the "public" folder and access it
                inside your components you can use the following code:
              </p>
              <p className="alert alert-secondary">
                &lt;link rel="stylesheet" href=&#123;process.env.PUBLIC_URL +
                "/static.css"&#125; /&gt;
                <br />
                &lt;img src=&#123; process.env.PUBLIC_URL + "logo.png" &#125;
                alt="logo" /&gt;
              </p>
              <h2>Loading React Directly</h2>
              <p>
                If you want to load React directly to your website you can use
                the following script calls:
              </p>
              <p className="alert alert-secondary">
                &lt;html&gt;
                <br />
                &lt;body&gt;
                <br />
                &lt;script
                src="https:///cdnjs.cloudflare.com/ajax/libs/react/16.7.0-alpha.2/umd/react.development.js"
                crossorigin&gt;&lt;/script&gt;
                <br />
                &lt;script
                src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.7.0-alpha.2/umd/react-dom.production.min.js"
                crossorigin&gt;&lt;/script&gt;
                <br />
                &lt;script
                src="https://unpkg.com/babel-standalone@6/babel.min.js"&gt;&lt;/script&gt;
                <br />
                &lt;script src="app.js" type="text/babel"&gt;&lt;/script&gt;
                <br />
                &lt;/body&gt;
                <br />
                &lt;/body&gt;
              </p>
              <h2>Create a Standalone React App</h2>
              <p>
                To create a standalone React app with all the modules installed
                and a basic app setup already created, run the following
                commands in terminal:
              </p>
              <p className="alert alert-secondary">
                npx create-react-app my-app
                <br />
                cd my-app
                <br />
                npm start
              </p>
              <h2>Uploading to GitHub</h2>
              <p>
                To upload the app to GitHub use the following commands in
                terminal:
              </p>
              <p className="alert alert-secondary">
                npm run build
                <br />
                git add .<br />
                git commit -m "Text to identify commit..."
                <br />
                git push -u origin master
              </p>
              <h2>Creating a Functional Component</h2>
              <p>Below is an example of a simple functional component:</p>
              <p className="alert alert-secondary">
                import React from 'react';
                <br />
                <br />
                const BlogPostExcerpt = () => &#123;
                <br />
                &nbsp;&nbsp;return (<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;Title&lt;/h1&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;Description&lt;/p&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
                <br />
                &nbsp;&nbsp;)
                <br />
                &#125;
                <br />
                <br />
                export default BlogPostExcerpt;
              </p>
              <h2>Creating a Class Component</h2>
              <p>Below is an example of a simple class component:</p>
              <p className="alert alert-secondary">
                import React, &#123; Component &#125; from 'react';
                <br />
                <br />
                class BlogPostExcerpt extends Component &#123;
                <br />
                &nbsp;&nbsp;render() &#123;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;return (<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;Title&lt;/h1&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;Description&lt;/p&gt;
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
                export default BlogPostExcerpt;
              </p>
              <h2>Mapping an Array</h2>
              <p>The example below shows how to map an array in React:</p>
              <p className="alert alert-secondary">
                const elements = ["one","two","three"];
                <br />
                <br />
                return &#123;
                <br />
                &nbsp;&nbsp;&lt;ul&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&#123;elements.map((value, index) =>
                &#123;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return &lt;li
                key=&#123;index&#125;&gt;&#123;value&#125;&lt;/li&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&#125;)&#125;
                <br />
                &nbsp;&nbsp;&lt;/ul&gt;
                <br />)
              </p>
            </div>
          </div>
          <FeaturedRooms />
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
