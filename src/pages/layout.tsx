import { Outlet } from "react-router-dom";
import { DevModeTailwindIndicator } from "@/components/ui/tailwind-indicator.tsx";

export const AppLayout = () => {
  return (
    <div className={"font-plex-sans"}>
      <Outlet />
      <DevModeTailwindIndicator />
    </div>
  );
};
