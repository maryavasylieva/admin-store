import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import "antd/dist/antd.css";

// import "./index.css";
import Root from "./Root/Root";
import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route component={Root} />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
