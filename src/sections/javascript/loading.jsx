import React from "react";
import { FaCog } from "react-icons/fa";

function Loading() {
  return (
    <div className="loader text-center">
      <FaCog style={{ fontSize: 60 }} />
    </div>
  );
}

export default Loading;
