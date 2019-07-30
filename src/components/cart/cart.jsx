import React, { Component } from "react";
import Title from "../shop/title";
import CartColumns from "./cartcolumns";
import EmptyCart from "./emptycart";
import { ProductConsumer } from "../../context";
import CartList from "./cartlist";
import CartTotals from "./carttotals";

class Cart extends Component {
  state = {};
  render() {
    return (
      <section>
        <div className="container" style={{ marginTop: 0 }}>
          <ProductConsumer>
            {value => {
              const { cart } = value;
              if (cart.length > 0) {
                return (
                  <React.Fragment>
                    <Title name="Your" title="Cart" />
                    <CartColumns />
                    <CartList value={value} />
                    <CartTotals value={value} history={this.props.history} />
                  </React.Fragment>
                );
              } else {
                return <EmptyCart />;
              }
            }}
          </ProductConsumer>
        </div>
      </section>
    );
  }
}

export default Cart;
