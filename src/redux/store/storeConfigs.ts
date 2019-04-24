import { createStore, applyMiddleware, compose, Store, AnyAction } from "redux";
import { rootReducer, Store as StoreType } from "../reducers/rootReducer";
import thunk from "redux-thunk";
import { connect } from "react-redux";

let composeEnhancer = compose;
let store: Store<StoreType, AnyAction>;

if (process.env.NODE_ENV == "development") {
  const { createLogger } = require("redux-logger");

  const logger = (<any>createLogger)({
    level: "info",
    collapsed: true
  });

  composeEnhancer = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk, logger)));
} else {
  store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));
}

export default store;

export function mapTypedStateToProps<TLocalStore>(mapping: (store: StoreType) => TLocalStore) {
  return connect(mapping);
}
