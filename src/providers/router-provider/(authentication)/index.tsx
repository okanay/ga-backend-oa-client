import React, { Suspense } from "react";

import { RouteObject } from "react-router-dom";
import { ErrorBoundary } from "@/pages/error.tsx";
import { AuthenticationLayout } from "@/pages/(authentication)/layout.tsx";
import { AuthenticationLoading } from "@/pages/(authentication)/loading.tsx";

const AuthenticationPage = React.lazy(
  () => import("@/pages/(authentication)/page.tsx")
);

const AuthenticationPages: RouteObject = {
  path: "/authentication",
  element: <AuthenticationLayout />,
  errorElement: <ErrorBoundary />,
  children: [
    {
      index: true,
      element: (
        <Suspense fallback={<AuthenticationLoading />}>
          <AuthenticationPage />
        </Suspense>
      ),
    },
  ],
};

export default AuthenticationPages;
