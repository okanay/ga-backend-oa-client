import { PropsWithChildren } from "react";

export const FaqQuestion = ({ children }: PropsWithChildren) => {
  return (
    <h6 className="text-start text-sm font-semibold text-flower-50 sm:text-xl">
      {children}
    </h6>
  );
};
