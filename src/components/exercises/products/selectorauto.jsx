import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { ToggleLink } from "./togglelink";
import { RoutedDisplay } from "./routeddisplay";
//import { IsolatedTable } from "../../../rest/isolatedtable";
//import { IsolatedEditor } from "../../../rest/isolatededitor";
//import { RequestError } from "../../../webservice/requesterror";

export class SelectorAuto extends Component {
  render() {
    const routes = React.Children.map(this.props.children, child => ({
      component: child,
      name: child.props.name,
      url: `/${child.props.name.toLowerCase()}`,
      datatype: child.props.datatype
    }));

    return (
      <Router getUserConfirmation={this.customGetUserConfirmation}>
        <div className="row mb-3">
          <div className="col-2">
            {/*<ToggleLink to="/isolated">Isolated</ToggleLink>*/}
            {routes.map(r => (
              <div key={r.url}>
                <ToggleLink to={r.url}>{r.name}</ToggleLink>
              </div>
            ))}
          </div>
          <div className="col">
            <Switch>
              {routes.map(r => (
                <Route
                  key={r.url}
                  path={`/:datatype(${r.datatype})/:mode?/:id?`}
                  component={RoutedDisplay(r.datatype)}
                />
              ))}
              <Redirect to={routes[0].url} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
