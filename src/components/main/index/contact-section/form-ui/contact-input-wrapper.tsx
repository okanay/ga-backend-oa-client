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
    <div className={twMerge("group relative w-full rounded-none", className)}>
      {children}
    </div>
  );
};
