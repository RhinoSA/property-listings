import React from "react";
import CartItem from "./cartitem";

function CartList({ value }) {
  const { cart } = value;
  return (
    <div className="container-fluid">
      {cart.map(item => {
        return <CartItem key={item.id} item={item} value={value} />;
      })}
    </div>
  );
}

export default CartList;
