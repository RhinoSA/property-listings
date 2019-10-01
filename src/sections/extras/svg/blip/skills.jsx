import React, { Component } from "react";

class Skills extends Component {
  state = {};
  render() {
    return (
      <div className={this.props.skillsClass}>
        <div className="portfolio-inner">
          <h1 className="heading-section-skills">Skills</h1>
          <div className="info-section-skills">
            <p>
              This is a list of my skills to give you an idea of what I can do.
            </p>
            <ol>
              <li>HTML - Know it well.</li>
              <li>CSS - Can do pretty much anything one can do with CSS.</li>
              <li>
                JavaScript - Not an expert, but am able to do a fair amount of
                JavaScript.
              </li>
              <li>
                React - I have been playing around with React now for a few
                months and know the basics.
              </li>
              <li>
                Responsive Design - Know how to make websites work on all screen
                sizes.
              </li>
              <li>PHP - Know the basics, but am not an expert.</li>
              <li>HTML Mailers - Have done a lot of them.</li>
              <li>Photoshop - I know it well.</li>
              <li>Illustrator - I know it well.</li>
              <li>Photography - I can take a fairly decent photo.</li>
              <li>
                3D Model Building - Not done it for a while, but would pick it
                up again if it was required.
              </li>
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
