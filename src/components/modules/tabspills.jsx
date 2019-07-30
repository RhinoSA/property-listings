import React, { Component } from "react";

class TabsPills extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li class="nav-item">
            <a
              className="nav-link active"
              id="pills-home-tab"
              data-toggle="pill"
              href="#pills-home"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="pills-profile-tab"
              data-toggle="pill"
              href="#pills-profile"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              Profile
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="pills-contact-tab"
              data-toggle="pill"
              href="#pills-contact"
              role="tab"
              aria-controls="pills-contact"
              aria-selected="false"
            >
              Contact
            </a>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div
            class="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <div className="col-md-12 mt-3">
              This is the content of the home tab...
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            <div className="col-md-12 mt-3">
              This is the content of the profile tab...
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-contact"
            role="tabpanel"
            aria-labelledby="pills-contact-tab"
          >
            <div className="col-md-12 mt-3">
              This is the content of the contact tab...
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default TabsPills;
