import React from "react";

const ListCard = ({ item: { text } }) => {
  return (
    <div className="card my-2 p-2 shadow-sm text-center">
      <div className="card-body">
        <h4 className="card-title">{text}</h4>
      </div>
    </div>
  );
};

export default ListCard;
