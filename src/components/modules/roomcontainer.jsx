import React from "react";
import RoomFilter from "./roomfilter";
import RoomList from "./roomlist";
import { withRoomConsumer } from "../../contextrooms";
import Loading from "../modules/loading";

function RoomContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <React.Fragment>
      <RoomFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </React.Fragment>
  );
}

export default withRoomConsumer(RoomContainer);
