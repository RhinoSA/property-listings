import React, { Component } from "react";
import { ProductTable } from "./producttable";
import { ProductEditor } from "./producteditor";
import { EditorConnector } from "../../../store/editorconnectorauto";
import { PRODUCTS } from "../../../store/datatypes";
import { TableConnector } from "../../../store/tableconnectorauto";
import { Link } from "react-router-dom";
import { SupplierEditor } from "./suppliereditor";
import { SupplierTable } from "./suppliertable";

export const RoutedDisplay = dataType => {
  const ConnectedEditor = EditorConnector(
    dataType,
    dataType === PRODUCTS ? ProductEditor : SupplierEditor
  );
  const ConnectedTable = TableConnector(
    dataType,
    dataType === PRODUCTS ? ProductTable : SupplierTable
  );

  return class extends Component {
    render() {
      const modeParam = this.props.match.params.mode;
      if (modeParam === "edit" || modeParam === "create") {
        return <ConnectedEditor key={this.props.match.params.id || -1} />;
      } else {
        return (
          <React.Fragment>
            <ConnectedTable />
            <div className="text-center">
              <Link
                to={`/${dataType}/create`}
                className="btn btn-secondary m-1"
              >
                Create
              </Link>
            </div>
          </React.Fragment>
        );
      }
    }
  };
};
