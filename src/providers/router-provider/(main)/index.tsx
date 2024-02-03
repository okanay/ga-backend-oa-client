import React, { Suspense } from "react";

import { RouteObject } from "react-router-dom";
import { ErrorBoundary } from "@/pages/error.tsx";
import { MainLayout } from "@/pages/(main)/layout.tsx";
import { MainLoading } from "@/pages/(main)/loading.tsx";

const MainPage = React.lazy(() => import("@/pages/(main)/page.tsx"));

const MainPages: RouteObject = {
  path: "/",
  element: <MainLayout />,
  errorElement: <ErrorBoundary />,
  children: [
    {
      index: true,
      element: (
        <Suspense fallback={<MainLoading />}>
          <MainPage />
        </Suspense>
      ),
    },
  ],
};

export default MainPages;
