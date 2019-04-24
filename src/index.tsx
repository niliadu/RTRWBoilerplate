import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store/storeConfigs";

import Hello from "./components/Hello";

ReactDOM.render(
  <Provider store={store}>
    <Hello name="Rodrigo" />
  </Provider>,
  document.getElementById("app")
);
