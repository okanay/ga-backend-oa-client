import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
    <div className={"font-plex-sans"}>
      <Outlet />
    </div>
  );
};
