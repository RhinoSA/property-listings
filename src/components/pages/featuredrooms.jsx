import React, { Component } from "react";
import { RoomContext } from "../../contextrooms";
import Loading from "../modules/loading";
import Room from "../modules/room";
import TitleServices from "../modules/titleservices";

class FeaturedRooms extends Component {
  static contextType = RoomContext;

  render() {
    let { loading, featuredRooms: rooms } = this.context;
    rooms = rooms.map(room => {
      return <Room key={room.id} room={room} />;
    });

    return (
      <section className="featured-rooms">
        <TitleServices titleservices="Featured Rooms" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : rooms}
        </div>
      </section>
    );
  }
}

export default FeaturedRooms;
