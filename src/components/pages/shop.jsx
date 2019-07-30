import React, { Component } from "react";
import Product from "../shop/product";
import Title from "../shop/title";

import { ProductConsumer } from "../../context";

class Shop extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container" style={{ marginTop: 0 }}>
          <Title name="Our" title="Products" className="col-md-12" />
          <div className="row">
            <ProductConsumer>
              {value => {
                return value.products.map(product => {
                  return <Product key={product.id} product={product} />;
                });
              }}
            </ProductConsumer>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Shop;
