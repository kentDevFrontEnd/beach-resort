// import React from "react";
// import RoomsFilter from "./RoomsFilter";
// import RoomsList from "./RoomsList";
// import { withRoomConsumer } from "../context";
// import Loading from "./Loading";
// function RoomsContainer({ context }) {
//   const { loading, sortedRooms, rooms } = context;
//   if (loading) {
//     return <Loading />;
//   }
//   return (
//     <>
//       <RoomsFilter rooms={rooms} />
//       <RoomsList rooms={sortedRooms} />
//     </>
//   );
// }

// export default withRoomConsumer(RoomsContainer);

import React, { Component } from "react";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
import { RoomConsumer } from "../context";
import Loading from "./Loading";

class RoomsContainer extends Component {
  render() {
    return (
      <RoomConsumer>
        {(value) => {
          const { loading, sortedRooms, rooms } = value;
          if (loading) {
            return <Loading />;
          } else {
            return (
              <>
                <RoomsFilter rooms={rooms} />
                <RoomsList rooms={sortedRooms} />
              </>
            );
          }
        }}
      </RoomConsumer>
    );
  }
}

export default RoomsContainer;
