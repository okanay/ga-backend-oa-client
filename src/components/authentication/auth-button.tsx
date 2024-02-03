import { GoogleIcon } from "@/components/authentication/auth-icons.tsx";

export const AuthButton = () => {
  return (
    <button className="flex h-[44px] w-full max-w-[400px] items-center justify-center gap-4 rounded-lg border border-ebony-950/20 bg-flower-50 text-sm transition-colors duration-300 hover:border-flower-950/20 hover:bg-flower-100 sm:text-base">
      <GoogleIcon />
      Continue with Google
    </button>
  );
};
