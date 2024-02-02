import { Link } from "react-router-dom";
import { PropsWithChildren } from "react";

export const NavigationTitle = ({ children }: PropsWithChildren) => {
  return (
    <Link to={"/"}>
      <span className="font-plex-sans-serif text-3xl sm:text-4xl">
        {children}
      </span>
    </Link>
  );
};
