import React, { Component } from "react";
import Menu from "../menu";

import "./styles.css";

export default class CssSwitch extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  handleClick() {
    const wrapper = document.getElementById("wrapper");
    wrapper.classList.toggle("is-nav-open");
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Menu />
          </div>
          <div className="col-md-9" style={{ overflow: "hidden" }}>
            <h1>CSS Switch</h1>
            <p>
              This is an example of using basic css transitions to create an
              animated menu.
            </p>
            <div id="wrapper" className="wrapper">
              <div className="nav">
                <button
                  className="nav__icon"
                  type="menu-fold"
                  onClick={() => this.handleClick()}
                />
                <div className="nav__body">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Beatae ducimus est laudantium libero nam omnis optio repellat
                  sit unde voluptatum?
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
