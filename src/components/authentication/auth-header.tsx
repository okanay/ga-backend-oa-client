import { BrandLogo } from "@/components/authentication/auth-icons.tsx";

export const AuthHeader = () => {
  return (
    <div className={"flex flex-col items-center justify-center gap-4"}>
      <BrandLogo />
      <h5 className="text-xs text-secondary-950/70 sm:text-sm">
        A faster, easier way to get started.
      </h5>
      <h3 className="font-plex-serif text max-w-[440px] text-wrap text-center text-2xl font-bold base-phone:text-3xl sm:text-4xl">
        Sign in with Google for a seamless experience.
      </h3>
    </div>
  );
};
