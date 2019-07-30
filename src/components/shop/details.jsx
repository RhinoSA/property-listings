import React, { Component } from "react";
import { ProductConsumer } from "../../context";
import { Link } from "react-router-dom";

class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            title,
            company,
            img,
            info,
            price,
            inCart
          } = value.detailProduct;
          return (
            <React.Fragment>
              <div className="container" style={{ marginTop: 50 }}>
                <h1 className="main-head">{title}</h1>

                <div className="row mb-4">
                  {/* PRODUCT IMAGE */}
                  <div className="col-md-4 mx-auto">
                    <img src={img} className="img-fluid" alt={title} />
                  </div>
                  {/* PRODUCT NAME & MANUFACTURER */}
                  <div className="col-md-8 mx-auto text-capitalized">
                    <h2>model {title}</h2>
                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                      made by :{" "}
                      <span className="text-uppercase">{company}</span>
                    </h4>
                    {/* PRODUCT PRICE */}
                    <h4>
                      <strong>
                        price : <span>${price.toFixed(2)}</span>
                      </strong>
                    </h4>
                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                      some info about the product:
                    </p>
                    {/* BPRODUCT INFORMATION */}
                    <p className="text-muted lead">{info}</p>
                    <div>
                      {/* BUTTON BACK TO PRODUCTS */}
                      <Link className="btn btn-secondary" to="/shop">
                        back to products
                      </Link>
                      {/* BUTTON ADD TO CART */}
                      <button
                        className="btn btn-warning ml-3"
                        disabled={inCart ? true : false}
                        onClick={() => {
                          value.addToCart(id);
                          value.openModal(id);
                        }}
                      >
                        {inCart ? "in cart" : "add to cart"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default Details;
