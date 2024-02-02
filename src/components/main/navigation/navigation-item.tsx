import { handleSmoothScroll } from "@/lib/smooth-scroll.ts";
import { PropsWithChildren } from "react";

interface NavigationItemProps extends PropsWithChildren {
  targetId: string;
}

export const NavigationItem = ({ targetId, children }: NavigationItemProps) => {
  return (
    <li
      onClick={() => handleSmoothScroll(targetId)}
      className={"hidden md:block"}
    >
      <span className={"cursor-pointer"}>{children}</span>
    </li>
  );
};
