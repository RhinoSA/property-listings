import { PRODUCTS } from "./datatypes";
import { saveProduct, saveSupplier } from "./modelactioncreators";
import { endEditing } from "./stateactions";

export const saveAndEndEditing = (data, dataType) => [
  dataType === PRODUCTS ? saveProduct(data) : saveSupplier(data),
  endEditing()
];
