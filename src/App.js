import React, { Suspense } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import theme from "./stylesheet/theme";
import { routes } from "./Components/routes";
// import Authentification from "./Components/Authentification/Authentification";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {routes.map(route => (
            <Route key={route.path} {...route} />
          ))}
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
