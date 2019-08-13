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
    <div style={{ marginBottom: 60 }}>
      <RoomFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </div>
  );
}

export default withRoomConsumer(RoomContainer);
