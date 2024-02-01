import { twMerge } from "tailwind-merge";
import React, { InputHTMLAttributes } from "react";

type InputProps = React.FC<InputHTMLAttributes<HTMLTextAreaElement>>;

export const ContactTextField: InputProps = React.forwardRef(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        rows={1}
        ref={ref as never}
        className={twMerge(
          `peer w-full border-b-2 border-ebony-950 bg-flower-50 px-2 py-1.5 text-sm text-ebony-950 transition-colors duration-300  
        ease-out placeholder:text-transparent
        focus:border-b-ebony-950/50 
        focus:outline-none sm:text-base`,
          className
        )}
        {...props}
      />
    );
  }
);
