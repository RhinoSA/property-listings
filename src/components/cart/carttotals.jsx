import React from "react";
import { Link } from "react-router-dom";
import PaypallBtn from "./paypallbtn";

function CartTotals({ value, history }) {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm8 text-capitalize text-right">
            <Link
              to="/productlist"
              onClick={() => clearCart()}
              className="btn btn-warning mb-3"
            >
              clear cart
            </Link>
            <h5>
              <span>subtotal:&nbsp;${cartSubTotal.toFixed(2)}</span>
            </h5>
            <h5>
              <span>tax:&nbsp;${cartTax.toFixed(2)}</span>
            </h5>
            <h5>
              <span>
                total:&nbsp;<strong>${cartTotal.toFixed(2)}</strong>
              </span>
            </h5>
            <PaypallBtn
              total={cartTotal}
              clearCart={clearCart}
              history={history}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CartTotals;
