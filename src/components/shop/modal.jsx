import React, { Component } from "react";
import { ProductConsumer } from "../../context";
import { Link } from "react-router-dom";

class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { modalOpen, closeModal } = value;
          const { img, title, price } = value.modalProduct;
          if (!modalOpen) {
            return null;
          } else {
            return (
              <div className="modal-container" onClick={() => closeModal()}>
                <div className="row">
                  <div id="modal-product" className="mx-auto text-center">
                    <h4>Add to Item to Cart</h4>
                    <img src={img} alt={title} className="img-fluid" />
                    <h5>{title}</h5>
                    <h5 className="text-muted">
                      price:&nbsp;$&nbsp;{price.toFixed(2)}
                    </h5>
                    {this.props.closeModal}
                    <p>
                      <Link
                        onClick={() => closeModal()}
                        className="btn btn-secondary"
                        to="./shop"
                      >
                        continue shopping
                      </Link>
                    </p>
                    <p>
                      <Link
                        onClick={() => closeModal()}
                        className="btn btn-warning"
                        to="./cart"
                      >
                        go to cart
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

export default Modal;
