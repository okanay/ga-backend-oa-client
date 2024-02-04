import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { NotFound } from "@/pages/not-found.tsx";
import { AppLayout } from "@/pages/layout.tsx";

import MainPages from "./(main)";
import AuthenticationPages from "./(authentication)";
import DashboardPages from "./(dashboard)";

const router = createBrowserRouter([
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { ...MainPages },
      { ...AuthenticationPages },
      { ...DashboardPages },
    ],
  },
]);

export const ReactRouter = () => {
  return <RouterProvider router={router} />;
};
