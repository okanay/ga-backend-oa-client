import React from "react";

import { RouteObject } from "react-router-dom";
import { ErrorBoundary } from "@/pages/error.tsx";
import { AdminLayout } from "@/pages/(admin)/layout.tsx";
import ProtectedRoute from "@/providers/router-provider/protected-route.tsx";

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
          <AdminPage />
        </ProtectedRoute>
      ),
    },
  ],
};

export default AdminPages;
