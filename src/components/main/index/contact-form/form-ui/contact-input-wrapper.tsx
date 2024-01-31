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
    <div className={twMerge("font-plex-mono group relative w-full", className)}>
      {children}
    </div>
  );
};
