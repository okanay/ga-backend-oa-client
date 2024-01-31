import { twMerge } from "tailwind-merge";
import { InputHTMLAttributes } from "react";

type InputProps = React.FC<InputHTMLAttributes<HTMLTextAreaElement>>;

export const ContactTextField: InputProps = ({ className, ...props }) => {
  return (
    <textarea
      className={twMerge(
        `peer w-full border-b-2 border-ebony-950 bg-flower-50 px-2 text-sm text-ebony-950 transition-colors duration-300  
        ease-out placeholder:text-transparent
        focus:border-b-ebony-950/50 
        focus:outline-none sm:text-base`,
        className
      )}
      {...props}
    />
  );
};
