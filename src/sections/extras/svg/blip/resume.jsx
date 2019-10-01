import React, { Component } from "react";

class Resume extends Component {
  state = {};
  render() {
    return (
      <div className={this.props.resumeClass}>
        <div className="portfolio-inner">
          <h1 className="heading-section-skills">Resume</h1>
          <div className="info-section-skills">
            <h2>Education and Pre-work History:</h2>
            <ul className="list-unstyled">
              <li>
                1986 - Matriculation with exemption - South African College High
                School
              </li>
              <li>
                1987-1989 - Officers course in the South African National
                Defence Force
              </li>
              <li>
                1990-1993 - Foundation School of Art - Graphic Design Diploma
              </li>
              <li>
                1994-1995 - Cape Technikon - Industrial Design - A year and a
                half, had to stop due to financial issues
              </li>
              <li>2002 - FGASA Level 1 Field Guide</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
