import { PRODUCTS, SUPPLIERS } from "./datatypes";

export const initialData = {
  modelData: {
    [PRODUCTS]: [],
    [SUPPLIERS]: []
  },
  stateData: {
    editing: false,
    selectedId: -1,
    selectedType: PRODUCTS
  }
};
