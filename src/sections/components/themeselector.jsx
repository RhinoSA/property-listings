import React, { Component } from "react";

export class ThemeSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "secondary",
      reverseChildren: false
    };
    this.themes = ["primary", "secondary", "danger", "warning", "dark"];
  }

  setTheme = event => {
    this.setState({ theme: event.target.value });
  };

  toggleReverse = () => {
    this.setState({ reverseChildren: !this.state.reverseChildren });
  };

  render() {
    let modChildren = React.Children.map(this.props.children, c =>
      React.cloneElement(c, { theme: this.state.theme })
    );

    if (this.state.reverseChildren) {
      modChildren.reverse();
    }

    return (
      <div className="bg-dark p-2 mt-3 mb-3">
        <button className="btn btn-secondary" onClick={this.toggleReverse}>
          Reverse
        </button>
        <div className="form-group text-left">
          <label className="text-white">Theme:</label>
          <select
            className="form-control"
            value={this.state.theme}
            onChange={this.setTheme}
          >
            {this.themes.map(theme => (
              <option key={theme} value={theme}>
                {theme}
              </option>
            ))}
          </select>
        </div>

        <div className="bg-white p-2">{modChildren}</div>
      </div>
    );
  }
}
