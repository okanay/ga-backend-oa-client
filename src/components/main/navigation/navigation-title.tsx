import { Link } from "react-router-dom";
import { PropsWithChildren } from "react";
import { BrandLogo } from "@/components/authentication/auth-icons.tsx";

export const NavigationTitle = ({ children }: PropsWithChildren) => {
  return (
    <Link to={"/"} className={"group flex items-center justify-center gap-4"}>
      <BrandLogo className="group-hover relative size-12 flex-shrink-0 transition-all duration-300 group-hover:translate-x-[5%] group-hover:translate-y-[-5%]" />
      <span className="font-plex-serif text-3xl sm:text-4xl">{children}</span>
    </Link>
  );
};
