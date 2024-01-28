import { PropsWithChildren } from "react";

export const FeatureItemDescription = ({ children }: PropsWithChildren) => {
  return <p className={"text-sm sm:text-lg lg:text-xl"}>{children}</p>;
};
