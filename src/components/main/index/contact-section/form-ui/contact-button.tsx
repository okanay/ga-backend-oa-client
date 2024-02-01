import { twMerge } from "tailwind-merge";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
export const ContactButton = ({ className, ...props }: Props) => {
  return (
    <button
      className={twMerge(
        "w-full rounded-md bg-secondary-700 py-3 text-sm font-semibold text-white sm:py-4 sm:text-base",
        className
      )}
      {...props}
    >
      Send Message
    </button>
  );
};
