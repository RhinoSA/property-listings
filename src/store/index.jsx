import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import modelReducer from "./modelreducer";
import stateReducer from "./statereducer";
import { customReducerEnhancer } from "./customreducerenhancer";
import { multiActions } from "./multiactionmiddleware";
import { asyncEnhancer } from "./asyncenhancer";
import { createRestMiddleware } from "../webservice/restmiddleware";

const restMiddleware = createRestMiddleware(
  "http://localhost:3500/api/products",
  "http://localhost:3500/api/suppliers"
);
const enhancedReducer = customReducerEnhancer(
  combineReducers({
    modelData: modelReducer,
    stateData: stateReducer
  })
);

export default createStore(
  enhancedReducer,
  compose(
    applyMiddleware(multiActions),
    applyMiddleware(restMiddleware),
    asyncEnhancer(2000)
  )
);

export {
  saveProduct,
  saveSupplier,
  deleteProduct,
  deleteSupplier
} from "./modelactioncreators";
