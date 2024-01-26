import { Outlet } from "react-router-dom";
import { Header } from "@/components/main/header.tsx";

export const MainLayout = () => {
  return (
    <div className={"bg-secondary-700 text-primary-300"}>
      <Header />
      <Outlet />
    </div>
  );
};
