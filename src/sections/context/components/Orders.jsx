import React from "react";
import { useContext } from "react";
import { MammalsContext } from "../context/MammalsContext";

const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};

export default function Orders({ mammals }) {
  const capitalize = s => {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  };
  const context = useContext(MammalsContext);
  const { handleChange, order } = context;
  let orders = getUnique(context.mammals, "order");
  orders = ["all", ...orders];

  orders = orders.sort().map((item, index) => {
    return (
      <option key={index} value={item}>
        {capitalize(item)}
      </option>
    );
  });

  if (context.mammals.length === 0) {
    return (
      <div>
        <p className="alert alert-secondary">
          No mammals match your search paramaters.
        </p>
      </div>
    );
  }

  return (
    <React.Fragment>
      <h4>Orders</h4>
      <select
        name="order"
        id="order"
        value={order}
        className="form-control mt-3 mb-3"
        onChange={handleChange}
      >
        {orders}
      </select>
    </React.Fragment>
  );
}
