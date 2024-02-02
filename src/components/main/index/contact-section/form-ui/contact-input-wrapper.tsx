import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

interface ContactInputWrapperProps extends PropsWithChildren {
  className?: string;
}

export const ContactInputWrapper = ({
  children,
  className,
}: ContactInputWrapperProps) => {
  return (
    <div
      className={twMerge(
        "group relative w-full rounded-none border-b-2 border-ebony-950",
        className
      )}
    >
      {children}
    </div>
  );
};
