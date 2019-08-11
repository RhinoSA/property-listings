import React, { Component } from "react";
import { GeneralList } from "./generallist";
import { ActionButtonContext } from "./actionbuttoncontext";
import { ErrorBoundary } from "./errorboundary";

export class SortedListContext extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sort: false
    };
  }

  getList() {
    return this.state.sort ? [...this.props.list].sort() : this.props.list;
  }

  toggleSort = () => {
    this.setState({ sort: !this.state.sort });
  };

  render() {
    return (
      <div>
        <ErrorBoundary>
          <GeneralList list={this.getList()} theme="info" />
          <div className="text-center m-2">
            <ActionButtonContext
              theme="secondary"
              text="Sort"
              proMode={this.props.proMode}
              callback={this.toggleSort}
            />
          </div>
        </ErrorBoundary>
      </div>
    );
  }
}
