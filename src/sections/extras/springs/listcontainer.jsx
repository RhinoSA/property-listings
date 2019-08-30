import React from "react";
import ListCard from "./listcard";
import { useTransition, animated } from "react-spring";

const ListContainer = ({ items }) => {
  const transition = useTransition(items, items => items.id, {
    from: { opacity: 0, marginLeft: -200, marginRight: 200 },
    enter: { opacity: 1, marginLeft: 0, marginRight: 0 }
  });

  return (
    <>
      {transition.map(({ item, key, props }) => (
        <animated.div key={key} style={props} className="col-md-7">
          <ListCard item={item} />
        </animated.div>
      ))}
    </>
  );
};

export default ListContainer;
