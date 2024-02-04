import React, { Suspense } from "react";

import ProtectedRoute from "@/providers/router-provider/protected-route.tsx";
import { RouteObject } from "react-router-dom";
import { ErrorBoundary } from "@/pages/error.tsx";
import { DashboardLoading } from "@/pages/(dashboard)/loading.tsx";
import { DashboardLayout } from "@/pages/(dashboard)/layout.tsx";

const DashboardPage = React.lazy(() => import("@/pages/(dashboard)/page.tsx"));

const DashboardPages: RouteObject = {
  path: "/dashboard",
  element: <DashboardLayout />,
  errorElement: <ErrorBoundary />,
  children: [
    {
      index: true,
      element: (
        <ProtectedRoute>
          <Suspense fallback={<DashboardLoading />}>
            <DashboardPage />
          </Suspense>
        </ProtectedRoute>
      ),
    },
  ],
};

export default DashboardPages;
