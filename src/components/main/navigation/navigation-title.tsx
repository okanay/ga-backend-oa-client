import { Link } from "react-router-dom";
import { PropsWithChildren } from "react";
import { BrandLogo } from "@/components/authentication/auth-icons.tsx";

export const NavigationTitle = ({ children }: PropsWithChildren) => {
  return (
    <Link to={"/"} className={"group flex items-center justify-center gap-4"}>
      <BrandLogo className="group-hover relative hidden size-8 flex-shrink-0 transition-all duration-300 group-hover:translate-x-[5%] group-hover:translate-y-[-5%] sm-phone:block sm:size-12" />
      <span className="font-plex-serif text-2xl sm:text-4xl">{children}</span>
    </Link>
  );
};
