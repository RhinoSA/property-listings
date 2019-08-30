import React, { Component } from "react";
import { SortedListContext } from "./sortedlistcontext";
import { ProModeContext } from "./promodecontext";
import { ProModeToggle } from "./promodetoggle";

//const ProList = ProFeature(SortedListContext);

class ListsProContext extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ["Zoe", "Bob", "Alice", "Dora", "Joe", "John"],
      cities: ["London", "New York", "Paris", "Milan", "Boston", "Chicago"],
      proContextData: {
        proMode: false,
        toggleProMode: this.toggleProMode
      },
      superProContextData: {
        proMode: false,
        toggleProMode: this.toggleSuperMode
      }
    };
  }

  toggleProMode = () => {
    this.setState(
      state => (state.proContextData.proMode = !state.proContextData.proMode)
    );
  };

  toggleSuperMode = () => {
    this.setState(
      state =>
        (state.superProContextData.proMode = !state.superProContextData.proMode)
    );
  };

  render() {
    return (
      <React.Fragment>
        <ProModeContext.Provider value={this.state.proContextData}>
          <div className="row">
            <div className="col-6 text-center p-2">
              <ProModeContext.Provider value={this.state.proContextData}>
                <div className="col-12 text-center p-2">
                  <ProModeToggle label="Pro Mode" />
                </div>
              </ProModeContext.Provider>
            </div>
            <div className="col-6 text-center p-2">
              <ProModeContext.Provider value={this.state.superProContextData}>
                <div className="col-12 text-center p-2">
                  <ProModeToggle label="Super Pro Mode" />
                </div>
              </ProModeContext.Provider>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <ProModeContext.Provider value={this.state.proContextData}>
                <SortedListContext list={this.state.list} />
              </ProModeContext.Provider>
            </div>
            <div className="col-6">
              <ProModeContext.Provider value={this.state.superProContextData}>
                <SortedListContext list={this.state.cities} />
              </ProModeContext.Provider>
            </div>
          </div>
        </ProModeContext.Provider>
      </React.Fragment>
    );
  }
}

export default ListsProContext;
