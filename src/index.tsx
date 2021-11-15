import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App/App";
import rootStore from "./rootStore";
import { Router } from "react-router";
import { history } from "./history";

ReactDOM.render(
  <Provider store={rootStore}>
    <Router history={history}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </Provider>,
  document.getElementById("root")
);
