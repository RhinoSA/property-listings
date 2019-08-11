import React, { Component } from "react";
import { ProductTable } from "./producttable";
import { ProductEditor } from "./producteditor";
import { connect } from "react-redux";
import { EditorConnector } from "../../../store/editorconnector";
import { PRODUCTS } from "../../../store/datatypes";
import { TableConnector } from "../../../store/tableconnector";
import { startCreatingProduct } from "../../../store/stateactions";

const ConnectedEditor = EditorConnector(PRODUCTS, ProductEditor);
const ConnectedTable = TableConnector(PRODUCTS, ProductTable);

const mapStateToProps = storeData => ({
  editing: storeData.stateData.editing,
  selected:
    storeData.modelData.products.find(
      item => item.id === storeData.stateData.selectedId
    ) || {}
});

const mapDispatchToProps = {
  createProduct: startCreatingProduct
};

const connectFunction = connect(
  mapStateToProps,
  mapDispatchToProps
);

export const ProductDisplay = connectFunction(
  class extends Component {
    render() {
      if (this.props.editing) {
        return <ConnectedEditor key={this.props.selected.id || -1} />;
      } else {
        return (
          <React.Fragment>
            <ConnectedTable />
            <div className="text-center">
              <button
                className="btn btn-secondary m-1"
                onClick={this.props.createProduct}
              >
                Create Product
              </button>
            </div>
          </React.Fragment>
        );
      }
    }
  }
);
