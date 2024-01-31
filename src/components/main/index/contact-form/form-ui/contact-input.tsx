import { twMerge } from "tailwind-merge";
import { InputHTMLAttributes } from "react";

type ContactInputProps = React.FC<InputHTMLAttributes<HTMLInputElement>>;

export const ContactInput: ContactInputProps = ({ className, ...props }) => {
  return (
    <input
      className={twMerge(
        `peer w-full border-b-2 border-ebony-950 bg-flower-50 p-2 text-sm text-ebony-950 transition-colors  
        duration-300 ease-out placeholder:text-transparent 
        focus:border-b-ebony-950/50 
        focus:outline-none sm:text-base`,
        className
      )}
      {...props}
    />
  );
};
