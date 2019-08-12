import React, { Component } from "react";

import Navbar from "../modules/navbar/navbar";
import Services from "../modules/services";
import FeaturedRooms from "./featuredrooms";

class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Services />
        <FeaturedRooms />
      </React.Fragment>
    );
  }
}

export default Home;
