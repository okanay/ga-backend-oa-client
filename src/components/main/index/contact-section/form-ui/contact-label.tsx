import { LabelHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type ContactLabelProps = React.FC<LabelHTMLAttributes<HTMLLabelElement>>;

export const ContactLabel: ContactLabelProps = ({
  children,
  className,
  ...props
}) => {
  return (
    <label
      {...props}
      className={twMerge(
        `pointer-events-none absolute left-0 ml-1 -translate-y-3 bg-flower-50 px-1 text-xs text-ebony-950 
        transition-all duration-200 ease-linear 
        peer-placeholder-shown:translate-y-2 peer-placeholder-shown:text-sm peer-placeholder-shown:text-ebony-950 
        peer-focus:-translate-y-3 peer-focus:text-xs peer-focus:text-ebony-950/50 
        sm:text-sm sm:peer-placeholder-shown:text-base sm:peer-focus:text-sm`,
        className
      )}
    >
      {children}
    </label>
  );
};
