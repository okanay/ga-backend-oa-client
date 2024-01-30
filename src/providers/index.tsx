import { ReactRouter } from "./router-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import { FramerProvider } from "@/providers/framer-provider";
import { JotaiProvider } from "@/providers/jotai-provider";
import { LenisProvider } from "@/providers/lenis-provider";
import { AuthProvider } from "@/providers/auth-provider/auth-provider.tsx";

export const AppProviders = () => {
  return (
    <>
      <JotaiProvider>
        <ThemeProvider>
          <FramerProvider>
            <LenisProvider>
              <AuthProvider>
                <ReactRouter />
              </AuthProvider>
            </LenisProvider>
          </FramerProvider>
        </ThemeProvider>
      </JotaiProvider>
    </>
  );
};
