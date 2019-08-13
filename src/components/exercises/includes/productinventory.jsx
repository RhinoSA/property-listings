import React, { Component } from "react";

class Exercise01 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        { id: 1, name: "Kayak", price: 280.0, stock: 10 },
        { id: 2, name: "Hat", price: 25.0, stock: 10 },
        { id: 3, name: "Campmaster Tent", price: 125.0, stock: 20 },
        { id: 4, name: "Soccer Ball", price: 12.5, stock: 30 },
        { id: 5, name: "Running Shoes", price: 120.0, stock: 0 }
      ]
    };
  }

  showArray = () => {
    let products = this.state.products;
    const list = products.sort((a, b) => (a.name > b.name ? 1 : -1));
    return list
      .filter(item => item.stock > 0)
      .map(item => {
        return (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td className="text-right">${item.price.toFixed(2)}</td>
            <td className="text-right">{item.stock}</td>
            <td className="text-right">
              $
              {(item.stock * item.price)
                .toFixed(2)
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </td>
          </tr>
        );
      });
  };

  showArrayNotStocked = () => {
    let productsArray = this.state.products;
    return productsArray
      .filter(item => item.stock === 0)
      .map(item => {
        return (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td className="text-right">${item.price.toFixed(2)}</td>
            <td className="text-right">{item.stock}</td>
          </tr>
        );
      });
  };

  showArrayTotal = () => {
    let totalValue = this.state.products
      .filter(item => item.stock > 0)
      .reduce((prev, item) => prev + item.price * item.stock, 0);
    return (
      <p
        className="alert alert-secondary text-right"
        style={{ paddingRight: 10 }}
      >
        Total value of stock for{" "}
        {this.state.products.filter(item => item.stock > 0).length} products: $
        {totalValue.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      </p>
    );
  };

  render = () => {
    return (
      <React.Fragment>
        <h2>Product Stock Inventory</h2>
        <p>
          This example outputs a list of items in stock for a fictitious shop.
          The products are sorted alphabetically using the sort() function. The
          lists for the products that are in stock and not in stock both use the
          filter() function to output lists based on whether the item is in
          stock or not in stock. There is also a functions which converts the
          numbers to a format used conventionally to display numbers used to
          show financial amounts. To view the code for this file, see the file
          src/components/exercises/includes/productinventory.jsx.
        </p>
        <h4>Products in Store</h4>
        <table className="table table-striped mt-3">
          <thead className="thead-dark">
            <tr>
              <th style={{ width: "55%" }}>Product Name</th>
              <th style={{ width: "15%" }} className="text-right">
                Price
              </th>
              <th style={{ width: "15%" }} className="text-right">
                Stock
              </th>
              <th style={{ width: "15%" }} className="text-right">
                Subtotal
              </th>
            </tr>
          </thead>
          <tbody>{this.showArray()}</tbody>
        </table>
        {this.showArrayTotal()}
        <h4>Out of Stock</h4>
        <table className="table table-striped mt-3">
          <thead className="thead-dark">
            <tr>
              <th style={{ width: "55%" }}>Product Name</th>
              <th style={{ width: "15%" }} className="text-right">
                Price
              </th>
              <th style={{ width: "30%" }} className="text-right">
                Stock
              </th>
            </tr>
          </thead>
          <tbody>{this.showArrayNotStocked()}</tbody>
        </table>
      </React.Fragment>
    );
  };
}

export default Exercise01;
