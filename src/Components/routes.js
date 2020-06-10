import { lazy } from "react";


const AsyncAuthPage = lazy(() => import("../Pages/AuthPage") /* webpackChunkName: "authentification-page" */)


export const routes = [
    {
      path: "/",
      component: AsyncAuthPage,
      name: "Login"
    }
  ];
