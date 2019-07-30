import React from "react";

function CartColumns() {
  return (
    <div className="container-fluid d-none d-md-block">
      <div className="row">
        <div className="col-10 mx-auto col-lg-2 text-left">
          <p className="text-uppercase mb-0">products</p>
        </div>
        <div className="col-10 mx-auto col-lg-3 text-left">
          <p className="text-uppercase mb-0">name of product</p>
        </div>
        <div className="col-10 mx-auto col-lg-2 text-left">
          <p className="text-uppercase mb-0">price</p>
        </div>
        <div className="col-10 mx-auto col-lg-2 text-center">
          <p className="text-uppercase mb-0">quantity</p>
        </div>
        <div className="col-10 mx-auto col-lg-1 text-center">
          <p className="text-uppercase mb-0">remove</p>
        </div>
        <div className="col-10 mx-auto col-lg-2 text-right">
          <p className="text-uppercase mb-0">total</p>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default CartColumns;
