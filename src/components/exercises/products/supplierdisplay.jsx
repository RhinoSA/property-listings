import React, { Component } from "react";
import { SupplierEditor } from "./suppliereditor";
import { SupplierTable } from "./suppliertable";
import { connect } from "react-redux";
import { startCreatingSupplier } from "../../../store/stateactions";
import { SUPPLIERS } from "../../../store/datatypes";
import { EditorConnector } from "../../../store/editorconnector";
import { TableConnector } from "../../../store/tableconnector";

const ConnectedEditor = EditorConnector(SUPPLIERS, SupplierEditor);
const ConnectedTable = TableConnector(SUPPLIERS, SupplierTable);

const mapStateToProps = storeData => ({
  editing: storeData.stateData.editing,
  selected:
    storeData.modelData.suppliers.find(
      item => item.id === storeData.stateData.selectedId
    ) || {}
});

const mapDispatchToProps = {
  createSupplier: startCreatingSupplier
};

const connectFunction = connect(
  mapStateToProps,
  mapDispatchToProps
);

export const SupplierDisplay = connectFunction(
  class extends Component {
    render() {
      if (this.props.editing) {
        return <ConnectedEditor key={this.props.selected.id || -1} />;
      } else {
        return (
          <React.Fragment>
            <ConnectedTable needSuppliers={true} />
            <div className="text-center">
              <button
                className="btn btn-primary m-1"
                onClick={this.props.createSupplier}
              >
                Create Supplier
              </button>
            </div>
          </React.Fragment>
        );
      }
    }
  }
);
