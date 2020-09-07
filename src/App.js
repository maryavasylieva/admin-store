import React, { Suspense } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "./stylesheet/globalStyles";
import theme from "./stylesheet/theme";
import { routes } from "./Components/routes";
// import Authentification from "./Components/Authentification/Authentification";
// import Dashboard from "./Components/Dashboard/Dashboard";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
        {routes.map((route) => (
            <Route key={route.path} path={route.path} exact={route.exact}>
              {route.Component}
            </Route>
          ))}
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
