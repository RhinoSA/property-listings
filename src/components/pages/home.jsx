import React, { Component } from "react";

import Navbar from "../modules/navbar/navbar";
import { Link } from "react-router-dom";
import Hero from "../modules/hero";
import Banner from "../modules/banner";
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
        <Hero>
          <Banner
            title="Luxurious rooms"
            subtitle="Deluxe rooms starting at $299"
          >
            <Link to="/rooms" className="btn btn-primary">
              Our Rooms
            </Link>
          </Banner>
        </Hero>
        <Services />
        <FeaturedRooms />
        <div className="container" style={{ marginTop: 15 }}>
          {/*<h1>API Calls</h1>
        <ApiCall />
        <hr />
        <h1>Lifecycle Events</h1>
        <p>This is the lifecyle events section.</p>
        <Lifecycle />
        <hr />*/}
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
