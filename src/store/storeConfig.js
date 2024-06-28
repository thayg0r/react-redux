import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import numerosReducer from "./reducers/numerosReducer";

const reducers = combineReducers({
  numeros: numerosReducer,
});

function storeConfig() {
  return configureStore({
    reducer: reducers,
  });
}

export default storeConfig;
