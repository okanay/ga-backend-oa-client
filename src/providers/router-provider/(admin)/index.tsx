import { RouteObject } from "react-router-dom";
import { ErrorBoundary } from "@/pages/error.tsx";
import { AdminLayout } from "@/pages/(admin)/layout.tsx";
import { AdminPage } from "@/pages/(admin)/page.tsx";

const AdminPages: RouteObject = {
  path: "/admin",
  element: <AdminLayout />,
  errorElement: <ErrorBoundary />,
  children: [
    {
      index: true,
      element: <AdminPage />,
    },
  ],
};

export default AdminPages;
