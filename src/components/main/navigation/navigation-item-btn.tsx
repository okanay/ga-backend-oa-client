import { Link } from "react-router-dom";
import { PropsWithChildren } from "react";

interface NavigationItemBtnProps extends PropsWithChildren {
  to: string;
}

export const NavigationItemBtn = ({ to, children }: NavigationItemBtnProps) => {
  return (
    <li>
      <Link to={to}>
        <span className="rounded-lg border border-flower-950/10 bg-ebony-950 px-4 py-2 text-primary-300">
          {children}
        </span>
      </Link>
    </li>
  );
};
