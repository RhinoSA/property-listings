import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ProductDisplay } from "./productdisplay";
import { SupplierDisplay } from "./supplierdisplay";
import { RoutingInfo } from "./routinginfo";
import { ToggleLink } from "./togglelink";

export class Selector extends Component {
  renderMessage = msg => <h4 className="bg-secondary text-white p-2">{msg}</h4>;
  render() {
    return (
      <Router>
        <div className="row mb-3">
          <div className="col-2">
            <div>
              <ToggleLink to="/javascript/products">Products</ToggleLink>
            </div>
            <div>
              <ToggleLink to="/javascript/suppliers">Suppliers</ToggleLink>
            </div>
            <div>
              <ToggleLink to="/javascript/info">All Routing Info</ToggleLink>
            </div>
            <div>
              <ToggleLink to="/javascript/info/match">Match Info</ToggleLink>
            </div>
            <div>
              <ToggleLink to="/javascript/info/location">
                Location Info
              </ToggleLink>
            </div>
          </div>
          <div className="col">
            <Switch>
              {/*<Route path="/javascript/products" component={ProductDisplay} />*/}
              <Route
                path="/javascript/products"
                render={routeProps => <ProductDisplay heading="Products" />}
              />
              {/*<Route path="/javascript/suppliers" component={SupplierDisplay} />*/}
              <Route
                path="/javascript/suppliers"
                render={routeProps => (
                  <React.Fragment>
                    <h4>Suppliers</h4>
                    <SupplierDisplay />
                  </React.Fragment>
                )}
              />
              <Route
                path="/javascript/info/:datatype"
                component={RoutingInfo}
              />
              <Route
                path="/javascript/info/:datatype?"
                component={RoutingInfo}
              />
              <Route
                render={routeProps => (
                  <React.Fragment>
                    <h4>The Default Route</h4>
                    <p className="bg-secondary text-white p-2">
                      This is the default route.
                    </p>
                  </React.Fragment>
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
