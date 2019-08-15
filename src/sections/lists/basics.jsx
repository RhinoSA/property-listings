import React, { Component } from "react";
import Menu from "../menu";
import Table from "./table";

class ListsBasics extends Component {
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

  componentDidMount() {
    window.scrollTo(0, 0);
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
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <Menu />
            </div>
            <div className="col-md-9">
              <h1>Product Stock Inventory</h1>
              <p>
                This example outputs a list of items in stock for a fictitious
                shop. The products are sorted alphabetically using the sort()
                function. The lists for the products that are in stock and not
                in stock both use the filter() function to output lists based on
                whether the item is in stock or not in stock. There is also a
                functions which converts the numbers to a format used
                conventionally to display numbers used to show financial
                amounts. To view the code for this file, see the file
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
              {/* TABLE GENERATOR */}
              <h2>Table Generator Using Row Mapping</h2>
              <p>
                This function outputs a table with an array of names, a number
                (count) and a total number of characters (letters) in the name.
              </p>
              <p className="alert alert-secondary">
                import React from "react";
                <br />
                <br />
                export function Table(&#123; names &#125;) &#123;
                <br />
                &nbsp;&nbsp;if (names.length > 0) &#123;
                <br />
                &nbsp;&nbsp;return (<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;React.Fragment&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;table className="table
                table-striped mt-3"&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;thead
                className="thead-dark"&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;tr&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;th&gt;#&lt;/th&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;th&gt;Name&lt;/th&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;th&gt;Letters&lt;/th&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/tr&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/thead&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;tbody&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;names.map((name,
                index) => (<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;tr
                key=&#123;index&#125;&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;&#123;index
                + 1&#125;&lt;/td&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;&#123;name&#125;&lt;/td&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;&#123;name.length&#125;&lt;/td&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/tr&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;))&#125;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/tbody&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/table&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;/React.Fragment&gt;
                <br />
                &nbsp;&nbsp;);
                <br />
                &nbsp;&nbsp;&#125; else &#123;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;return &lt;p&gt;There are no names in
                the list to display.&lt;/p&gt;;
                <br />
                &nbsp;&nbsp; &#125;
                <br />
                &#125;
                <br />
                <br />
                export default Table;
              </p>
              <p>
                To create a table, use the following in the component where the
                table is going to be rendered:
              </p>
              <p className="alert alert-secondary">
                &lt;Table names=&#123;["Bob", "Alice", "Simon", "Andrew"]&#125;
                /&gt;
              </p>
              <p>
                Ensuring that you have also imported the component containing
                the function:
              </p>
              <p className="alert alert-secondary">
                import &#123; Table &#125; from "./includes/table";
              </p>
              <h4>The Rendered Table</h4>
              <Table names={["Bob", "Alice", "Simon", "Andrew"]} />
              {/* END TABLE GENERATOR */}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  };
}

export default ListsBasics;
