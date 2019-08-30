import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

// REDUX EXAMPLE
//import { Provider } from "react-redux";
//import dataStore from "../../store";
//import { Selector } from "./products/selector";
// REDUX AUTO
//import { SelectorAuto } from "./products/selectorauto";
//import { PRODUCTS, SUPPLIERS } from "../../store/datatypes";

class Exercise01 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Andrew",
      counter: 100,
      showMessage: true,
      intervalId: 0,
      showBanner: false
    };
  }

  incrementCounter = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  handleChange = () => {
    this.setState({ showMessage: !this.state.showMessage });
  };

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  handleScroll = e => {
    if (window.pageYOffset > 100) {
      console.log("scrolled");
      this.setState({
        showBanner: true
      });
    } else {
      this.setState({
        showBanner: false
      });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  render = () => {
    return (
      <div className="row" ref={elem => (this.nv = elem)}>
        <div className="col-md-12">
          {/*<Provider store={dataStore}>
            <SelectorAuto>
              <data name="Products" datatype={PRODUCTS} />
              <data name="Suppliers" datatype={SUPPLIERS} />
            </SelectorAuto>
    </Provider>*/}
          {/*<Provider store={dataStore}>
            <Selector />
    </Provider>*/}
        </div>
      </div>
    );
  };
}

export default Exercise01;
