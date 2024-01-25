import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { NotFound } from "@/pages/not-found.tsx";
import { AppLayout } from "@/pages/layout.tsx";

import AdminPages from "./(admin)";
import MainPages from "./(main)";

const router = createBrowserRouter([
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/",
    element: <AppLayout />,
    children: [{ ...MainPages }, { ...AdminPages }],
  },
]);

export const ReactRouter = () => {
  return <RouterProvider router={router} />;
};
