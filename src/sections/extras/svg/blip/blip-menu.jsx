import React, { Component } from "react";
import Portfolio from "./portfolio";
import Skills from "./skills";
import Resume from "./resume";

class BlipMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuBtnClass: "menu-btn-wrap paused",
      menuBtnText: "open",
      menuSliderClass: "menu-slider paused",
      portfolioClass: "portfolio hide",
      portfolioMenuClass: "menu-option",
      skillsClass: "skills hide",
      skillsMenuClass: "menu-option",
      resumeClass: "resume hide",
      resumeMenuClass: "menu-option"
    };
  }

  openMenu = () => {
    if (this.state.menuBtnClass === "menu-btn-wrap paused") {
      this.setState({
        menuBtnClass: "menu-btn-wrap running",
        menuBtnText: "close",
        menuSliderClass: "menu-slider running"
      });
    } else {
      this.setState({
        menuBtnClass: "menu-btn-wrap paused",
        menuBtnText: "open",
        menuSliderClass: "menu-slider paused"
      });
    }
  };

  showPortfolio = () => {
    if (this.state.portfolioClass === "portfolio hide") {
      this.setState({
        portfolioClass: "portfolio show",
        skillsClass: "skills hide",
        resumeClass: "resume hide",
        menuBtnClass: "menu-btn-wrap paused",
        menuBtnText: "open",
        menuSliderClass: "menu-slider paused",
        portfolioMenuClass: "menu-option active",
        skillsMenuClass: "menu-option",
        resumeMenuClass: "menu-option"
      });
    } else {
      this.setState({
        portfolioClass: "portfolio hide",
        menuBtnClass: "menu-btn-wrap paused",
        menuBtnText: "open",
        menuSliderClass: "menu-slider paused",
        portfolioMenuClass: "menu-option"
      });
    }
  };

  showSkills = () => {
    if (this.state.skillsClass === "skills hide") {
      this.setState({
        skillsClass: "skills show",
        resumeClass: "resume hide",
        portfolioClass: "portfolio hide",
        menuBtnClass: "menu-btn-wrap paused",
        menuBtnText: "open",
        menuSliderClass: "menu-slider paused",
        skillsMenuClass: "menu-option active",
        portfolioMenuClass: "menu-option",
        resumeMenuClass: "menu-option"
      });
    } else {
      this.setState({
        skillsClass: "skills hide",
        menuBtnClass: "menu-btn-wrap paused",
        menuBtnText: "open",
        menuSliderClass: "menu-slider paused",
        skillsMenuClass: "menu-option"
      });
    }
  };

  showResume = () => {
    if (this.state.resumeClass === "resume hide") {
      this.setState({
        resumeClass: "resume show",
        skillsClass: "skills hide",
        portfolioClass: "portfolio hide",
        menuBtnClass: "menu-btn-wrap paused",
        menuBtnText: "open",
        menuSliderClass: "menu-slider paused",
        resumeMenuClass: "menu-option active",
        skillsMenuClass: "menu-option",
        portfolioMenuClass: "menu-option"
      });
    } else {
      this.setState({
        resumeClass: "resume hide",
        menuBtnClass: "menu-btn-wrap paused",
        menuBtnText: "open",
        menuSliderClass: "menu-slider paused",
        skillsMenuClass: "menu-option"
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="menu-wrap">
          <div className={this.state.menuBtnClass} onClick={this.openMenu}>
            <div className="menu-text">{this.state.menuBtnText}</div>
            <div className="menu-btn-line-01"></div>
            <div className="menu-btn-line-02"></div>
          </div>
        </div>
        <div className={this.state.menuSliderClass}>
          <div
            className={this.state.portfolioMenuClass}
            onClick={this.showPortfolio}
          >
            <span>Portfolio</span>
          </div>
          <div className={this.state.skillsMenuClass} onClick={this.showSkills}>
            <span>Skills</span>
          </div>
          <div className={this.state.resumeMenuClass} onClick={this.showResume}>
            <span>Resume</span>
          </div>
          <div className="menu-option">
            <span>Option Four</span>
          </div>
        </div>
        <Portfolio portfolioClass={this.state.portfolioClass} />
        <Skills skillsClass={this.state.skillsClass} />
        <Resume resumeClass={this.state.resumeClass} />
      </React.Fragment>
    );
  }
}

export default BlipMenu;
