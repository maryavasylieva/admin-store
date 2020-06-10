import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import "antd/dist/antd.css";

import "./index.css";
import Root from "./Root/Root";

ReactDOM.render(
  <BrowserRouter>
    <Route component={Root} />
  </BrowserRouter>,
  document.getElementById("root")
);
