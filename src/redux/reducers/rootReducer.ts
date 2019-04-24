import { combineReducers } from "redux";
import exampleReducer, { exampleState } from "./exampleReducer";

export class Store {
  example: exampleState;
}

export const rootReducer = combineReducers<Store>({
  example: exampleReducer
});
