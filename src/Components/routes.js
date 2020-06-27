import { lazy } from "react";


const AsyncAuthPage = lazy(() => import("../Pages/AuthPage") /* webpackChunkName: "authentification-page" */);
const AsyncDashboardPage = lazy(() => import('../Pages/DashboardPage') /* webpackChunkName: "dashboard-page" */);


export const routes = [
    {
      path: "/",
      component: AsyncAuthPage,
      name: ""
    },
    {
      path: "/main",
      component: AsyncDashboardPage,
      name: "Dashboard"
    }
  ];
