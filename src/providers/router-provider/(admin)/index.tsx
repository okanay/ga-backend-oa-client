import React, { Suspense } from "react";

import ProtectedRoute from "@/providers/router-provider/protected-route.tsx";
import { RouteObject } from "react-router-dom";
import { ErrorBoundary } from "@/pages/error.tsx";
import { AdminLoading } from "@/pages/(admin)/loading.tsx";
import { AdminLayout } from "@/pages/(admin)/layout.tsx";

const AdminPage = React.lazy(() => import("@/pages/(admin)/page.tsx"));

const AdminPages: RouteObject = {
  path: "/admin",
  element: <AdminLayout />,
  errorElement: <ErrorBoundary />,
  children: [
    {
      index: true,
      element: (
        <ProtectedRoute>
          <Suspense fallback={<AdminLoading />}>
            <AdminPage />
          </Suspense>
        </ProtectedRoute>
      ),
    },
  ],
};

export default AdminPages;
