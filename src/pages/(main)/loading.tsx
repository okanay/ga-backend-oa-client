import { PropsWithChildren } from "react";

export const MainLoading = ({ children }: PropsWithChildren) => {
  return <div className={"h-svh bg-secondary-700"}>{children}</div>;
};
