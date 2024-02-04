import { Link } from "react-router-dom";
import { PropsWithChildren } from "react";

interface NavigationItemBtnProps extends PropsWithChildren {
  to: string;
}

export const NavigationItemBtn = ({ to, children }: NavigationItemBtnProps) => {
  return (
    <li>
      <Link to={to}>
        <span className="rounded-lg border border-flower-950/10 bg-ebony-950 px-2 py-2 text-sm text-primary-300 sm:px-4 sm:py-2 sm:text-base">
          {children}
        </span>
      </Link>
    </li>
  );
};
