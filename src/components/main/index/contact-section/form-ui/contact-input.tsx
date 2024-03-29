import { twMerge } from "tailwind-merge";
import React, { InputHTMLAttributes } from "react";

type ContactInputProps = React.FC<InputHTMLAttributes<HTMLInputElement>>;

export const ContactInput: ContactInputProps = React.forwardRef(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref as never}
        className={twMerge(
          `peer h-[44px] w-full bg-flower-50 px-2 text-sm text-ebony-950 transition-colors  
        duration-300 ease-out placeholder:text-transparent 
        focus:border-b-ebony-950/50 
        focus:outline-none sm:text-base`,
          className
        )}
        {...props}
      />
    );
  }
);
