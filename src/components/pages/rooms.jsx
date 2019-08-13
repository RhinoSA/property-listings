import React, { Component } from "react";
import { Link } from "react-router-dom";
import Hero from "../modules/hero";
import Banner from "../modules/banner";
import RoomContainer from "../modules/roomcontainer";

class Rooms extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <React.Fragment>
        <Hero hero="roomsHero">
          <Banner title="Our Rooms">
            <Link to="/home" className="btn btn-primary">
              Return Home
            </Link>
          </Banner>
        </Hero>
        <RoomContainer />
      </React.Fragment>
    );
  }
}

export default Rooms;
