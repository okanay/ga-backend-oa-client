import { Link } from "react-router-dom";

export const AuthBackHome = () => {
  return (
    <div className="absolute inset-0 flex h-full w-full flex-col justify-end py-12 text-center">
      <Link
        to={"/"}
        className="text-xs text-flower-500 underline underline-offset-4 transition-colors duration-300 hover:text-flower-400 sm:text-sm"
      >
        Back to home
      </Link>
    </div>
  );
};
