import { RouteObject } from "react-router-dom";
import { ErrorBoundary } from "@/pages/error.tsx";
import { MainPage } from "@/pages/(main)/page.tsx";
import { MainLayout } from "@/pages/(main)/layout.tsx";

const MainPages: RouteObject = {
  path: "/",
  element: <MainLayout />,
  errorElement: <ErrorBoundary />,
  children: [
    {
      index: true,
      element: <MainPage />,
    },
  ],
};

export default MainPages;
