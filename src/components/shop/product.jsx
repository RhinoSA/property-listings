import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../../context";
// Check if there are no issues with the data
// See PropTypes at base of this page
import PropTypes from "prop-types";

class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;

    return (
      <div className="product-wrapper col-md-9 col-md-6 col-lg-3">
        <div className="card">
          <ProductConsumer>
            {value => (
              <div
                className="img-container"
                onClick={() => value.handleDetail(id)}
              >
                {/* BUTTON TO SHOW DETAILS */}
                <Link to="/details">
                  <img src={img} alt={title} className="card-img-top" />
                </Link>
                {/* BUTTON ADD TO CART */}
                <button
                  className={inCart ? "cart-btn purchased" : "cart-btn"}
                  disabled={inCart ? true : false}
                  onClick={() => {
                    value.addToCart(id);
                    value.openModal(id);
                  }}
                >
                  {inCart ? (
                    <p className="text-capitalize mb-0" disabled>
                      in cart
                    </p>
                  ) : (
                    <p className="text-capitalize mb-0">buy now</p>
                  )}
                </button>
              </div>
            )}
          </ProductConsumer>
        </div>

        {/* CARD FOOTER */}
        <div className="card-footer d-flex justify-content-between">
          <span className="card-title">{title}</span>
          <span className="card-price">${price.toFixed(2)}</span>
        </div>
      </div>
    );
  }
}

export default Product;

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
};
