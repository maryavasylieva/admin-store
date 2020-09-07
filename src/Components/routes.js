import  React, {lazy} from "react";
// import { AsyncAuthPage, AsyncDashboardPage } from "./AsyncPages";

const AsyncAuthPage = lazy(() => import("../Pages/AuthPage") /* webpackChunkName: "authentification-page" */);
const AsyncDashboardPage = lazy(() => import('../Pages/DashboardPage') /* webpackChunkName: "dashboard-page" */);

export const routes = [
  {
    path: "/",
    exact: true,
    Component: <AsyncAuthPage />,
    name: ""
  },
  {
    path: "/main",
    exact: true,
    Component: <AsyncDashboardPage />,
    name: "Dashboard"
  }
];
