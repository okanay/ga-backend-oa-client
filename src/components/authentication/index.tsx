import { AuthButton } from "@/components/authentication/auth-button.tsx";
import { AuthList } from "@/components/authentication/auth-list.tsx";
import { AuthHeader } from "@/components/authentication/auth-header.tsx";
import { AuthCreateAccount } from "@/components/authentication/auth-create-account.tsx";
import { AuthTermsPrivacy } from "@/components/authentication/auth-terms-privacy.tsx";
import { AuthBackHome } from "@/components/authentication/auth-back-home.tsx";

export const Authentication = () => {
  return (
    <main className="font-plex-mono relative flex h-screen flex-col justify-center bg-gradient-to-br from-flower-50 to-flower-100/40 text-ebony-950">
      <div className="relative z-20 mx-auto flex max-w-[560px] flex-col items-center justify-center gap-10 px-4 tracking-wide">
        <AuthHeader />
        <AuthList />
        <AuthButton />
        <div className="flex max-w-[520px] flex-col items-center justify-center gap-4 text-center text-xs text-ebony-950/70">
          <AuthCreateAccount />
          <AuthTermsPrivacy />
        </div>
      </div>
      <AuthBackHome />
    </main>
  );
};
