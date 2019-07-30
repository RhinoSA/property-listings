import React from "react";

function CartItem({ item, value }) {
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeItem } = value;
  return (
    <React.Fragment>
      <div className="row my-2 text-capitalize text-left">
        {/* IMAGE */}
        <div className="col-10 mx-auto col-lg-2">
          <img
            src={img}
            style={{ width: "5rem", height: "5rem" }}
            className="img-fluid"
            alt={title}
          />
        </div>
        {/* TITLE*/}
        <div className="col-10 mx-auto col-lg-3 text-left">
          <span className="d-lg-none">product: </span>
          {title}
        </div>
        {/* PRICE */}
        <div className="col-10 mx-auto col-lg-2 text-left">
          <span className="d-lg-none">price:&nbsp;</span>${price.toFixed(2)}
        </div>
        {/* INCREMENT, DECREMENT & COUNT */}
        <div className="col-10 mx-auto col-lg-2 my-1 my-lg-0">
          <div className="d-flex justify-content-center">
            <div>
              <span
                className="decrement btn btn-warning mx-1"
                onClick={() => decrement(id)}
              >
                -
              </span>
              <span className="count text-center">{count}</span>
              <span
                className="increment btn btn-warning mx-1"
                onClick={() => increment(id)}
              >
                +
              </span>
            </div>
          </div>
        </div>
        {/* REMOVE ITEM */}
        <div className="col-10 mx-auto col-lg-1">
          <div className="d-flex justify-content-center">
            <span
              className="remove-item btn btn-warning mx-1"
              onClick={() => removeItem(id)}
            >
              Delete
            </span>
          </div>
        </div>
        {/* TOTAL FOR ITEM */}
        <div className="col-10 mx-auto col-lg-2 text-right">
          ${total.toFixed(2)}
        </div>
      </div>
      <hr />
    </React.Fragment>
  );
}

export default CartItem;
