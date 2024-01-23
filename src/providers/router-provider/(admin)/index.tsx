import { RouteObject } from "react-router-dom";
import { ErrorBoundary } from "@/pages/error.tsx";
import { AdminLayout } from "@/pages/(admin)/layout.tsx";
import { AdminPage } from "@/pages/(admin)/page.tsx";
import { AdminPanel } from "@/pages/(admin)/panel/page.tsx";

const AdminPages: RouteObject = {
  path: "/admin",
  element: <AdminLayout />,
  errorElement: <ErrorBoundary />,
  children: [
    {
      index: true,
      element: <AdminPage />,
    },
    {
      path: "/admin/panel",
      element: <AdminPanel />,
    },
  ],
};

export default AdminPages;
