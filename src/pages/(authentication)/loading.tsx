import { PropsWithChildren } from "react";

export const AuthenticationLoading = ({ children }: PropsWithChildren) => {
  return (
    <div className={"h-svh bg-gradient-to-br from-flower-50 to-flower-100/40"}>
      {children}
    </div>
  );
};
